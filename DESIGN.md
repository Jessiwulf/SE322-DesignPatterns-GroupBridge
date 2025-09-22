DESIGN.md — Bridge Pattern
📌 Intent

The Bridge Pattern decouples an abstraction from its implementation so that the two can vary independently.
In this homework, we demonstrate Bridge with Shapes (abstractions) and Colors (implementations).

📐 UML Diagram

        Shape (Abstraction)
              ^
              |
   -------------------------
   |                       |
Circle (Refined)     Square (Refined)


    Color (Implementor)
              ^
              |
   -------------------------
   |                       |
 Red (Concrete)     Blue (Concrete)


Abstraction: Shape

Refined Abstractions: Circle, Square

Implementor: Color

Concrete Implementors: Red, Blue

⚙️ Implementation in Code

🔹 Abstraction
export abstract class Shape {
  constructor(protected color: Color) {}
  abstract draw(): string;
}

🔹 Refined Abstraction
export class Circle extends Shape {
  draw(): string {
    return `Circle filled with ${this.color.applyColor()}`;
  }
}

🔹 Implementor
export interface Color {
  applyColor(): string;
}

🔹 Concrete Implementor
export class Red implements Color {
  applyColor(): string {
    return "red";
  }
}

✅ Benefits

- Avoids class explosion: Without Bridge, we’d need CircleRed, CircleBlue, SquareRed, SquareBlue, etc.

- Open/Closed Principle: Adding a new shape or color means adding a new class, not modifying existing ones.

- Flexibility: Shapes and colors can be combined dynamically at runtime.

🧪 Testing

bridge.spec.ts ensures:

1. A red circle renders as "Circle filled with red".

2. A blue square renders as "Square filled with blue".

3. Colors can be swapped without modifying shape code.