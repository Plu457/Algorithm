function solution(person) {
  let pizzaCount = 1;
  const pizzaSlice = 6;

  while (true) {
    if ((pizzaCount * pizzaSlice) % person === 0) {
      return pizzaCount;
    }
    pizzaCount++;
  }
}