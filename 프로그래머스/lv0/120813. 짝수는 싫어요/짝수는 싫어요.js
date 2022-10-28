function solution(n) {
  const result = new Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter(elem => elem % 2 === 1);

  return result;
}