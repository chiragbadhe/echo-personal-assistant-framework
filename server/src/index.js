const express = require("express");
const { SerialPort } = require("serialport");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/ports", async (req, res) => {
  try {
    const ports = await SerialPort.list();
    res.json(ports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

let selectedPort;

app.post("/select-port", (req, res) => {
  const { path } = req.body;
  console.log(`Selected port: ${path}`);
});


app.get("/selected-port", (req, res) => {
  res.json({ selectedPort });
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
