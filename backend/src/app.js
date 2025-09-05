import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

const RIOT_API_KEY = process.env.RIOT_API_KEY;

// Example route: get summoner puuid by name and tag
app.get("/summoner/:name/:tag", async (req, res) => {
  try {
    const { name, tag } = req.params;
    const response = await axios.get(
      `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}`,
      { headers: { "X-Riot-Token": RIOT_API_KEY } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),       // seconds since server started
    timestamp: Date.now()           // current server time
  });
});

export default app;
