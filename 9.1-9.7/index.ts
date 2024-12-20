import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

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

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  // checking if one of url params missing
  if (!daily_exercises || !target) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  }

  // checking array is array, target is number and array contains only numbers
  if (
    !Array.isArray(daily_exercises) ||
    isNaN(Number(target)) ||
    !daily_exercises.every(exercise => typeof exercise === 'number')
  ) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  }

  const result = calculateExercises(daily_exercises, Number(target));

  res.json(result);
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
