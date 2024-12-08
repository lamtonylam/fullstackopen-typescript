const calculateBmi = (height: number, weight: number) => {
  let bmi: number = weight / (height / 100) ** 2;

  if (18.5 <= bmi && bmi <= 25) {
    return 'Normal range';
  } else {
    return 'Not in normal range';
  }
};

console.log(calculateBmi(180, 74));
