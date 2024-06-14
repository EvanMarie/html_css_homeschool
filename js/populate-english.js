// /js/populate-index.js
document.addEventListener("DOMContentLoaded", function () {
  const daySelector = document.getElementById("daySelector");

  // Ensure the englishClasses array is defined
  if (typeof englishClasses !== "undefined") {
    // Populate the dropdown with class days
    englishClasses.forEach((classData) => {
      const option = document.createElement("option");
      option.value = classData.classDay;
      option.textContent = `Class Day ${classData.classDay}`;
      daySelector.appendChild(option);
    });

    // Event listener to load data based on selected day
    daySelector.addEventListener("change", function () {
      const selectedDay = daySelector.value;
      const classData = englishClasses.find(
        (classData) => classData.classDay === selectedDay
      );
      if (classData) {
        // Store selected day in local storage
        localStorage.setItem("selectedClassDay", selectedDay);
        // Redirect to the English class page
        window.location.href = "../english/index.html";
      }
    });

    // Load data if day is already selected
    const storedDay = localStorage.getItem("selectedClassDay");
    if (storedDay) {
      daySelector.value = storedDay;
    }
  } else {
    console.error("englishClasses is not defined.");
  }
});
