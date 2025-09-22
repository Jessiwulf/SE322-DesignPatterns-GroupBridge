import { describe, it, expect } from "bun:test";
import { Circle } from "../src/bridge/Circle";
import { Square } from "../src/bridge/Square";
import { Red } from "../src/bridge/Red";
import { Blue } from "../src/bridge/Blue";

describe("Bridge Pattern Example", () => {
  it("creates a red circle", () => {
    const redCircle = new Circle(new Red());
    expect(redCircle.draw()).toBe("Circle filled with red");
  });

  it("creates a blue square", () => {
    const blueSquare = new Square(new Blue());
    expect(blueSquare.draw()).toBe("Square filled with blue");
  });

  it("supports swapping colors dynamically", () => {
    const shape = new Circle(new Red());
    expect(shape.draw()).toBe("Circle filled with red");

    // swap to blue
    const blueCircle = new Circle(new Blue());
    expect(blueCircle.draw()).toBe("Circle filled with blue");
  });
});
