let ageInYears, ageInMonths, ageInDays;

function calculateAge() {
  const birthDate = new Date(document.getElementById("birthDate").value);
  const currentDate = new Date();

  if (!birthDate || birthDate >= currentDate) {
    alert("Please enter a valid birthdate.");
    return;
  }

  const diffInTime = currentDate - birthDate;
  const diffInDays = diffInTime / (1000 * 3600 * 24);

  ageInYears = Math.floor(diffInDays / 365.25);
  ageInMonths = Math.floor(diffInDays / 30);
  ageInDays = Math.floor(diffInDays);

  document.getElementById("yearValue").innerText = ageInYears;
  document.getElementById("monthValue").innerText = ageInMonths;
  document.getElementById("dayValue").innerText = ageInDays;
}
