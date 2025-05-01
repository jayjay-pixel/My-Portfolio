document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    alert("Thank you for reaching out! I'll get back to you soon.");
    
    form.reset(); // Clears the form fields
  });
});
