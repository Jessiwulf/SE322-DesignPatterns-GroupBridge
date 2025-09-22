import { Shape } from "./Shape";
import type { Color } from "./Color";

export class Square extends Shape {
  constructor(color: Color) {
    super(color);
  }

  draw(): string {
    return `Square filled with ${this.color.applyColor()}`;
  }
}
