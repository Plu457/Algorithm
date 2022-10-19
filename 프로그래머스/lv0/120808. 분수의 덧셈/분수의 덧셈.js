function solution(denum1, num1, denum2, num2) {
  const numerator = num1 * denum2 + num2 * denum1;
  const denominator = num1 * num2;

  let LCM = null;
  for (let i = 1; i <= numerator; i++) {
    if (numerator % i === 0 && denominator % i === 0) {
      LCM = i;
    }
  }
    
  return [numerator / LCM, denominator / LCM];
}