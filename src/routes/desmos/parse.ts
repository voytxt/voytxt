import { PRECISION, SIZE } from '.';

export function parse(equation: string): [number, number][] {
  const points: [number, number][] = [];

  for (let x = -(SIZE / 2); x < SIZE / 2; x += PRECISION) {
    const y = eval(equation) as number;
    points.push([x, y]);
  }

  const x = 1;

  console.log(points);

  return points;
}
