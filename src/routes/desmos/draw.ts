import { SIZE } from '.';

export function draw(c: CanvasRenderingContext2D, points: [number, number][]) {
  c.clearRect(0, 0, SIZE, SIZE);
  c.fillStyle = 'black';
  c.fillRect(SIZE / 2, 0, 1, SIZE);
  c.fillRect(0, SIZE / 2, SIZE, 1);

  c.fillStyle = getRandomColor();
  for (const [x, y] of points) {
    c?.fillRect(SIZE / 2 + x - 1, SIZE / 2 - y - 1, 2, 2);
  }
}

function getRandomColor(): string {
  const colors = ['red', 'blue', 'green', 'orange', 'purple', 'black'];

  return colors[Math.floor(Math.random() * colors.length)];
}
