import type { Color } from "./Color";

export class Red implements Color {
  applyColor(): string {
    return "red";
  }
}
