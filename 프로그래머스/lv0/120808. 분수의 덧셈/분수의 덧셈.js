function solution(denum1, num1, denum2, num2) {
  const denominator = num1 * denum2 + num2 * denum1;
  const numerator = num1 * num2;

  let LCM = null;
  for (let i = 1; i <= denominator; i++) {
    if (denominator % i === 0 && numerator % i === 0) {
      LCM = i;
    }
  }
    
  return [denominator / LCM, numerator / LCM];
}