
export const rollDice = (sides) => {
  sides = parseInt(sides.slice(1));
  return Math.floor(Math.random() * sides) + 1;
}
