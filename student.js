const readlineSync = require("readline-sync");

function runCalculator() {
  try {
    let scores = [];
    let total = 0;

    // Ask the user for 5 subject scores
    for (let i = 1; i <= 5; i++) {
      let input = readlineSync.question(`Enter score for Subject ${i}: `);
      let score = Number(input);

      if (isNaN(score) || score < 0 || score > 100) {
        throw new Error("Invalid input! Please enter a number between 0 and 100.");
      }

      scores.push(score);
    }

    // Calculate total and average
    for (let s of scores) {
      total += s;
    }
    let average = total / scores.length;

    // Assign grade
    let grade = "";
    if (average >= 90) grade = "A";
    else if (average >= 80) grade = "B";
    else if (average >= 70) grade = "C";
    else if (average >= 60) grade = "D";
    else grade = "F";

    // Show results
    console.log("\n=== Results ===");
    console.log(`Scores: ${scores.join(", ")}`);
    console.log(`Total: ${total}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Grade: ${grade}\n`);
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

// Main loop
while (true) {
  runCalculator();

  let again = readlineSync.question("Do you want to calculate again? (yes/no): ").toLowerCase();
  if (again !== "yes" && again !== "y") {
    console.log("Goodbye! 👋");
    break;
  }
  console.log("\nRestarting...\n");
}
