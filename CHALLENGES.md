🔹 Challenges Faced During the Assignment

- Understanding the Assignment Brief
The provided README focused on the Strategy Pattern (for 7 Wonders scoring). Since my group’s assigned pattern is Bridge, I needed to separate the baseline exercise (Strategy) from my group deliverable (Bridge). The main challenge was realizing that the baseline tests must stay intact while I add a new, independent Bridge example.

- Separating Abstraction and Implementation
It was tricky at first to decide what should be the Abstraction (Shape) and what should be the Implementation (Color). Once the structure was clear, it became easier to organize the code into two hierarchies.

- Avoiding Class Explosion
Without Bridge, we would need many redundant classes (e.g., CircleRed, CircleBlue, SquareRed, etc.). Implementing Bridge required careful design to ensure that shapes and colors can be combined flexibly without multiplying classes.

- Maintaining Project Structure
I had to create a new src/bridge/ folder and tests/bridge.spec.ts without interfering with the baseline files (score_v0.ts, score_v0.test.ts). This separation ensures all original tests still pass.

- Testing Both Baseline and Bridge
Writing unit tests for the Bridge module while keeping the original tests unchanged was important to prove correctness. It required setting up simple but clear test cases (e.g., “Circle filled with red”) to demonstrate the pattern works as intended.