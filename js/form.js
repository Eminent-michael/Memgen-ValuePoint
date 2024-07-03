/** @format */

// Show form

const showBtn = document.getElementById("show-form");

showBtn.addEventListener("click", () => {
  document.getElementById("Onboard-form").classList.remove("hidden");
});

// Drop Down Effect on form page

const digitalAsset = document.querySelector("#digital-asset");
const digitalAssetBody = document.querySelector("#digital-asset-body");
const dropdownIcon = document.querySelector("#digital-dropdown");

const estateAsset = document.querySelector("#estate-asset");
const estateAssetBody = document.querySelector("#estate-asset-body");
const estateDropdownIcon = document.querySelector("#estate-dropdown");

const tradingAsset = document.querySelector("#trading-asset");
const tradingAssetBody = document.querySelector("#trading-asset-body");
const tradingDropdownIcon = document.querySelector("#trading-dropdown");

digitalAsset.addEventListener("click", () => {
  digitalAssetBody.classList.toggle("addheight");
  digitalAssetBody.classList.toggle("py-8");
  dropdownIcon.classList.toggle("open");
});

estateAsset.addEventListener("click", () => {
  estateAssetBody.classList.toggle("addheight");
  estateAssetBody.classList.toggle("py-8");
  estateDropdownIcon.classList.toggle("open");
});

tradingAsset.addEventListener("click", () => {
  tradingAssetBody.classList.toggle("addheight");
  tradingAssetBody.classList.toggle("py-8");
  tradingDropdownIcon.classList.toggle("open");
});

let currentStage = 0;
const stages = document.querySelectorAll(".stage");
const nextButton = document.getElementById("nextBtn");
const nextBtnText = document.querySelector(".nextBtnText");
const nextIcon = document.querySelector(".next-icon");
const prevButton = document.getElementById("prevBtn");

function showStage(stage) {
  stages.forEach((s, index) => {
    s.style.display = index === stage ? "block" : "none";
  });
  prevButton.classList.toggle("invisible", stage === 0);

  // Update the next button text based on the stage
  if (stage === stages.length - 1) {
    nextBtnText.textContent = "Submit";
    nextIcon.classList.add("hidden");
  } else {
    nextBtnText.textContent = "Next";
    nextIcon.classList.remove("hidden");
  }
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
      checkServiceCheckbox();
      // alert("Form completed!");
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

// Check if any service has been checked

function checkServiceCheckbox() {
  const checkboxes = document.querySelectorAll(".service-checkbox");
  const consentCheckboxes = document.querySelectorAll(".consent");
  const anyChecked = Array.from(checkboxes).some(
    (checkbox) => checkbox.checked
  );

  const consentChecked = Array.from(consentCheckboxes).every(
    (consent) => consent.checked
  );

  if (anyChecked) {
    if (consentChecked) {
      collectFormData();
    } else {
      alert("Checked the consent checkboxes");
      currentStage--;
    }
  } else {
    alert("No checkboxes are checked.");
    currentStage--;
  }
}

// Function to collect user data from the form
function collectUserData() {
  const userData = {
    fullName: document.querySelector("#onBoardFullName").value,
    email: document.querySelector("#onBoardEmail").value,
    tel: document.querySelector("#onBoardTel").value,
    address: document.querySelector("#onBoardAddress").value,
    city: document.querySelector("#onBoardCity").value,
    state: document.querySelector("#onBoardState").value,
    country: document.querySelector("#onBoardCountry").value,
    contactMethod: document.querySelector("#onBoardPreCont").value,
  };

  return userData;
}

// Function to collect service interest data
function collectServiceInterest(
  serviceCheckboxId,
  expSelector,
  groupClassName
) {
  const serviceData = {};

  if (document.querySelector(serviceCheckboxId).checked) {
    const experience = document.querySelector(expSelector).value;

    serviceData.experience = experience;

    const serviceGroups = document.querySelectorAll(groupClassName);

    serviceGroups.forEach((group) => {
      const groupName = group.getAttribute("data-group");

      const checkedBoxes = group.querySelectorAll(
        `input[name=${groupName}]:checked`
      );

      const textInput = group.querySelectorAll(`input[name=${groupName}Text]`);

      serviceData[groupName] = {
        checkboxes: Array.from(checkedBoxes).map((box) => box.value),
        // textInput: textInput ? textInput.value : "",
        textInput: Array.from(textInput).map((serText) => serText.value),
      };

      console.log(
        `Service data for group ${groupName}:`,
        serviceData[groupName]
      );
    });
  } else {
    console.log(`${serviceCheckboxId} Not Selected`);
  }

  return serviceData;
}

// Main function to collect all form data
function collectFormData() {
  const formData = {};
  formData.user = collectUserData();
  console.log("User Data:", formData.user);

  formData.interest = {};

  formData.interest.digitalAssetService = collectServiceInterest(
    "#digitalAssetService",
    "#digitalExp",
    ".digital-service-group"
  );

  formData.interest.forestTradingService = collectServiceInterest(
    "#forestTradingService",
    "#forexExp",
    ".forex-trading-group"
  );

  formData.interest.realEstateService = collectServiceInterest(
    "#realEstateService",
    "#estate-exp",
    ".real-estate-group"
  );

  console.log("Form Data:", JSON.stringify(formData));

  // Send data using Fetch API
  fetch(
    "https://7b15ff2b-7670-4d1f-a482-628ab1984612-00-3sbjdy4yf0j2k.picard.replit.dev/send_email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("Form submitted successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    });
}
