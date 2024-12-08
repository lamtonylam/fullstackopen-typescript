const calculateBmi = (height: number, weight: number) => {
  let bmi: number = weight / (height / 100) ** 2;

  if (18.5 <= bmi && bmi <= 25) {
    return 'Normal range';
  } else {
    return 'Not in normal range';
  }
};

const height_arg: number = Number(process.argv[2]);
const weight_arg: number = Number(process.argv[3]);
console.log(calculateBmi(height_arg, weight_arg));
