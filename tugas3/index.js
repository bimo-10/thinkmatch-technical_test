const express = require("express");
const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts";

const app = express();
const port = 3000;

app.use(express.json());

// GET API/POSTS
app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios(url);
    const data = response.data;

    const currPage = 1;
    const postPerPage = 5;
    const lastIndex = postPerPage * currPage;
    const firstIndex = lastIndex - postPerPage;
    const records = data.slice(firstIndex, lastIndex);
    res.send(records);
  } catch (error) {
    console.log(error);
  }
});

// POST API/LOGIN
app.post("/api/login", (req, res) => {
  if (
    req.body.email === "admin@example.com" &&
    req.body.password === "password123"
  ) {
    return res.send("Login Berhasil");
  } else {
    return res.send("Login Gagal");
  }
});

app.listen(port, console.log(`Running on port ${port} `));
