function CalculateGCD(denominator, numerator) {
  return denominator % numerator
    ? CalculateGCD(numerator, denominator % numerator)
    : numerator;
}

function solution(denum1, num1, denum2, num2) {
  const denominator = num1 * denum2 + num2 * denum1;
  const numerator = num1 * num2;
  const GCD = CalculateGCD(denominator, numerator);

  return [denominator / GCD, numerator / GCD];
}