import type { Color } from "./Color";

export abstract class Shape {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract draw(): string;
}
