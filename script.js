// declare vars

let correct = 0;
let rank;

const main = document.querySelector("main");

// create questions

const ans1 = prompt("What colour is the sun?");
if (ans1.toUpperCase() === "YELLOW") {
  correct += 1;
}

// remove elseif statement
const ans2 = prompt("What colour is grass?");
if (ans2.toUpperCase() === "GREEN") {
  correct += 1;
} else if (ans2.toUpperCase() !== "GREEN") {
  alert("INCORRECT");
}

const ans3 = prompt("What sound does a cat make?");
if (ans3.toUpperCase() === "MEOW") {
  correct += 1;
}

// ranking system
if (correct === 3) {
  rank = "Gold";
} else if (correct <= 2) {
  rank = "Silver";
} else {
  rank = "No Rank :(";
}

// user results
main.innerHTML = `
    <h1>Well Done!</h1>
    <p>You scored ${correct} out of 3 answers!</p>
    <p>Award: <strong>${rank}</strong></p>
`;
