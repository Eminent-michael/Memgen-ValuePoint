/** @format */

// Quick Form

const form = document.getElementById("quickForm");
const submitButton = document.getElementById("quickBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting the default way

  // Collect form data
  const quickFormData = {
    fullName: document.getElementById("quickFullName").value,
    email: document.getElementById("quickEmail").value,
    tel: document.getElementById("quickTel").value,
    interest: document.getElementById("quickInterest").value,
  };

  // Format the message for WhatsApp
  const message = `Full Name: ${quickFormData.fullName}%0AEmail: ${quickFormData.email}%0APhone No: ${quickFormData.tel}%0AService Interest: ${quickFormData.interest}`;

  // WhatsApp number in international format without '+' (e.g., 2348024488521)
  const whatsappNumber = "+2349038130876";

  // WhatsApp API link
  const whatsappApiLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Redirect to WhatsApp
  window.open(whatsappApiLink, "_blank");

  // Optionally reset the form fields
  form.reset();

  // Display form data in console (for demonstration)
  console.log("Form Data:", quickFormData);
});
