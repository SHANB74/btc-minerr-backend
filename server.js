const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/withdraw', (req, res) => {
  const { address, amount } = req.body;

  if (!address || typeof address !== 'string') {
    return res.status(400).json({ error: 'Invalid Bitcoin address.' });
  }

  if (!amount || typeof amount !== 'number' || amount < 0.001) {
    return res.status(400).json({ error: 'Amount must be at least 0.001 BTC.' });
  }

  setTimeout(() => {
    res.json({
      success: true,
      message: `Sent ${amount.toFixed(6)} BTC to ${address}`,
      txid: 'dummy-transaction-id-001',
    });
  }, 1500);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
