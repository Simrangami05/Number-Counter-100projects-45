(function () {
  const buttons = document.querySelectorAll(".btn");
  let count = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("decrement")) {
        count--;
      } else if (button.classList.contains("increment")) {
        count++;
      } else {
        count = 0;
      }

      const counter = document.querySelector("#value");
      counter.textContent = count;

      if (count < 0) {
        counter.style.color = "red";
      } else if (count > 0) {
        counter.style.color = "green";
      } else {
        counter.style.color = "#333333";
      }
    });
  });
})();
