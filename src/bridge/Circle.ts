import { Shape } from "./Shape";
import type { Color } from "./Color";

export class Circle extends Shape {
  constructor(color: Color) {
    super(color);
  }

  draw(): string {
    return `Circle filled with ${this.color.applyColor()}`;
  }
}
