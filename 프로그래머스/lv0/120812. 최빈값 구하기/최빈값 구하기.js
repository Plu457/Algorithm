function solution(array) {
  if (array.length === 1) return array[0];

  const obj = {};
  array.forEach(n => {
    obj[n] = ++obj[n] || 1;
  });

  const maxValue = Math.max(...Object.values(obj));
  const result = Object.keys(obj).filter(key => obj[key] === maxValue);

  return result.length === 1 ? Number(result[0]) : -1;
}