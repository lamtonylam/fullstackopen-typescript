interface Result {
  periodLength: number;
  trainingDays: number;
  success: Boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  hours: Array<number>,
  targetHours: number,
): Result => {
  // number of days
  let periodLength: number = hours.length;

  // number of training days
  let trainingDays: number = 0;

  for (let i = 0; i < hours.length; i++) {
    if (hours[i] != 0) {
      trainingDays += 1;
    }
  }

  // average per day training
  let average: number =
    hours.reduce((a, b) => a + b, 0) / hours.length;

  // if it was target was met
  let success: Boolean = average >= targetHours;

  // rating and the text description
  let rating: number;
  let ratingDescription: string;

  if (average >= targetHours) {
    rating = 3;
    ratingDescription = 'Great job, you met your target!';
  } else if (average >= targetHours * 0.9) {
    rating = 2;
    ratingDescription = 'Not too bad, but could be better.';
  } else {
    rating = 1;
    ratingDescription = 'You need to work harder.';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target: targetHours,
    average,
  };
};

const targetArg: number = Number(process.argv[2]);
// slicing the arguments from after the target number, then mapping it as number
const hoursArg: Array<number> = process.argv.slice(3).map(Number);

console.log(calculateExercises(hoursArg, targetArg));
