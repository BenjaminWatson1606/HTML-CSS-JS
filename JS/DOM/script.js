// Create div and append it to body
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// Create button with attributes and then append it to body
const newButton = document.createElement("INPUT");
newButton.setAttribute("type", "button");
newButton.setAttribute("value", "Click Me");
newDiv.appendChild(newButton);

// Event listener for button click, on click call function increment()
newButton.addEventListener("click", increment);

// Create text andd append to div
const counter = document.createElement("p");
const node = document.createTextNode("Counter");
counter.appendChild(node);
newDiv.appendChild(counter);

// Function to increment number, shows the result in console
let number = 0;
function increment() {
    number++;
  if (number % 3 == 0 && number % 5 != 0) {
    console.log("FIZZ");
    counter.innerHTML = "FIZZ";
  } else if (number % 5 == 0 && number % 3 != 0) {
    console.log("BUZZ");
    counter.innerHTML = "BUZZ";
  } else if (number % 5 == 0 && number % 3 == 0) {
    console.log("FIZZBUZZ");
    counter.innerHTML = "FIZZBUZZ";
  } else {
    console.log(number);
    counter.innerHTML = number;
  }
  
}
