/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */

function greet(givenTime) {
  if (parseInt(givenTime.split(':'))<12)
  return "Good Morning"
  if (parseInt(givenTime.split(':'))<17)
  return "Good Afternoon"
  if (parseInt(givenTime.split(':'))>16)
  return "Good Evening"
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const greeting = string
  greeting

}
