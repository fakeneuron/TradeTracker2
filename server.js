import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const tradesFilePath = join(__dirname, 'trades.json');

// Ensure trades.json exists
const initializeTradesFile = async () => {
  try {
    await fs.access(tradesFilePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(tradesFilePath, JSON.stringify([], null, 2));
      console.log('trades.json file created');
    } else {
      throw error;
    }
  }
};

// Save trade data
app.post('/api/trades', async (req, res) => {
  const trade = req.body;
  try {
    const tradesData = await fs.readFile(tradesFilePath, 'utf8');
    const trades = JSON.parse(tradesData);
    trades.push(trade);
    await fs.writeFile(tradesFilePath, JSON.stringify(trades, null, 2));
    res.status(201).json({ message: 'Trade saved successfully' });
  } catch (error) {
    console.error('Error saving trade:', error);
    res.status(500).json({ message: 'Error saving trade' });
  }
});

// Get all trades
app.get('/api/trades', async (req, res) => {
  try {
    const tradesData = await fs.readFile(tradesFilePath, 'utf8');
    const trades = JSON.parse(tradesData);
    console.log('Sending trades:', trades); // Log the trades being sent
    res.json(trades);
  } catch (error) {
    console.error('Error reading trades:', error);
    res.status(500).json({ message: 'Error reading trades' });
  }
});

// Initialize trades file and start server
initializeTradesFile()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize trades file:', error);
    process.exit(1);
  });