import express from "express";
import asyncLock from "async-lock";
import cors from "cors";
import { mockData } from "../src/utils/MockData";
const App = express();

App.use(cors());

let DataStore = mockData.map((d) => {
  return {
    ...d,
    likes: 0,
  };
});

const lock = new asyncLock();

App.get("/course", (req, res) => {
  res.json(DataStore);
});

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

App.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = DataStore.find((c) => c.id === id);
  res.json(course);
});

App.post("/like/:id", async (req, res) => {
  AddLike(parseInt(req.params.id));
  res.send("Liked");
});

App.listen(4000, () => {
  console.log("Server is running on port 4000");
});
