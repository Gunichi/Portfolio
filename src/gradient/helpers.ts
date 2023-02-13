import { IGradient, GradientType } from "./types";
/// HELPER FUNCTIONS

// Get random number in range. Used to get random index from array.
export const randNumInRange = (max: number) =>
  Math.floor(Math.random() * (max - 1));

// Create range of colors for gradient
export const generateGradientRangeArray = (data: IGradient): GradientType => {
  const { colors, direction, name, positions } = data;
  const rangeColorsArray: string[] = [];

  for (const clr in colors) {
    for (const pos in positions) {
      if (clr === pos) {
        rangeColorsArray.push(`${colors[clr]} ${positions[pos]},`);
      }
    }
  }
  const createGradientString = rangeColorsArray.join(" ").slice(0, -1);

  return { name, direction, range: createGradientString };
};
