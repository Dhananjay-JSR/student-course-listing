import express from "express";
import asyncLock from "async-lock";
import { mockData } from "../src/utils/MockData";
const App = express();

let DataStore = mockData.map((d) => {
  return {
    ...d,
    likes: 0,
  };
});

const lock = new asyncLock();

App.get("/", (req, res) => {
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

App.post("/like/:id", async (req, res) => {
  AddLike(parseInt(req.params.id));
  res.send("Liked");
});

App.listen(4000, () => {
  console.log("Server is running on port 4000");
});
