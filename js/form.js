/** @format */

// Variables

// const showForm = document.querySelector("#show-form")
// const onboardForm = document.querySelector("#Onboard-form")

// const onboardData = document.querySelector("#onboard-data")

// Show Form
// showForm.addEventListener("click", () => {
//     onboardForm.classList.remove("hidden")
// })

// Send Form data

// function sendData() {

// }

// Form submission

// onboardData.addEventListener("submit", (event) => {
//     event.preventDefault();

// })

let currentStage = 0;
const stages = document.querySelectorAll(".stage");
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");

function showStage(stage) {
  stages.forEach((s, index) => {
    s.style.display = index === stage ? "block" : "none";
  });
  prevButton.classList.toggle("invisible", stage === 0);
}

function validateForm() {
  const inputs = stages[currentStage].querySelectorAll(
    "input[required], select[required]"
  );
  for (let input of inputs) {
    if (!input.value) return false;
  }
  return true;
}

nextButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  if (validateForm()) {
    currentStage++;
    if (currentStage >= stages.length) {
      alert("Form completed!");
      // Optionally handle form submission here
    } else {
      showStage(currentStage);
    }
  } else {
    alert("Please complete all required fields.");
  }
});

prevButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  currentStage--;
  showStage(currentStage);
});

showStage(currentStage); // Show the first stage

