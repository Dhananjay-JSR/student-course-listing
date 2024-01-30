import express from "express";
import asyncLock from "async-lock";
import cors from "cors";
import { mockData } from "./DataStore";
const App = express();

App.use(cors());

let DataStore = mockData.map((d) => {
  return {
    ...d,
    likes: 0,
  };
});

const lock = new asyncLock();

async function AddLike(id: number) {
  await lock.acquire("DataStore", async () => {
    DataStore = DataStore.map((d) => {
      if (d.id === id) {
        return {
          ...d,
          likes: d.likes + 1,
        };
      }
      return d;
    });
  });
}

App.get("/course", async (req, res) => {
  setTimeout(() => {
    res.send(DataStore);
  }, 2000);
});

App.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = DataStore.find((c) => c.id === id);
  setTimeout(() => {
    res.json(course);
  }, 1200);
});

App.post("/like/:id", async (req, res) => {
  AddLike(parseInt(req.params.id));
  res.sendStatus(200);
});

App.get("/", (req, res) => {
  res.sendStatus(200);
});

App.listen(4000, () => {
  console.log("Server is running on port 4000");
});
