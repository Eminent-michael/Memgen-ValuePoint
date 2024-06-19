// Variables

const showForm = document.querySelector("#show-form")
const onboardForm = document.querySelector("#Onboard-form")

const onboardData = document.querySelector("#onboard-data")


// Show Form
showForm.addEventListener("click", () => {
    onboardForm.classList.remove("hidden")
})

// Send Form data

function sendData() {

}


// Form submission

onboardData.addEventListener("submit", (event) => {
    event.preventDefault();
    
})