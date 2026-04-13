const rangeInput = document.getElementById("input-range");
const PresentText = document.querySelector(".precentage");
const coverArea = document.querySelector(".coverArea");

function updateChart(value) {
  PresentText.innerHTML = value + "%";
  coverArea.style.background = `conic-gradient(rgb(28, 189, 109) ${value}%, rgb(116, 187, 210) 0)`;
}

rangeInput.addEventListener("input", (e) => {
  updateChart(e.target.value);
});

updateChart(rangeInput.value);
