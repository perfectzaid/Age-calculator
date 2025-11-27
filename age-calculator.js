const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageresult = document.querySelector(".age-result");

calculatebtn.addEventListener("click", () => {
  if (inputbtn.value === "") {
    alert("Please enter your date of birth");
  } else {
    console.log("input", inputbtn.value);
    const dob = new Date(inputbtn.value);
    console.log("dob", dob);
    const dob_year = dob.getFullYear();
    console.log("dob year", dob_year);

    const now = new Date();
    const now_year = now.getFullYear();
    const age = now_year - dob_year;

    ageresult.innerHTML = `your age is ${age}`;
  }
});
