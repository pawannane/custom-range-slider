const range = document.querySelector(".range");
const label = document.querySelector("label");

range.addEventListener("input", (e) => handleRange(e))

const handleRange = e => {
  label.style.left = `${-24 + (+e.target.value * 2.6)}px`;
  label.innerText = e.target.value;
}