import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  // get url params
  const height = req.query.height;
  const weight = req.query.weight;

  // checking if one of url params missing
  if (!height || !weight) {
    res.status(400).json({ error: 'malformatted parameters' });
    // add empty return so functions ends.
    // express doesnt allow to return responses
    return;
  }

  const bmi = calculateBmi(Number(height), Number(weight));

  res.json({
    weight: Number(weight),
    height: Number(height),
    bmi,
  });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
