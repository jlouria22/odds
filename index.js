let bank = [];
let odds = [];
let evens = [];

function addNumber(n) {
  if (!isNaN(n)) {
    bank.push(n);
    render();
  }
}

function sortOne() {
  if (bank.length > 0) {
    const num = bank.shift();
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
    render();
  }
}

function sortAll() {
  while (bank.length > 0) {
    const num = bank.shift();
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }
  render();
}

// === Components ===

function NumberForm() {
  const $form = document.createElement("div");
  $form.innerHTML = `
    <p>Add a number to the bank</p>
    <input type="number" id="num-input">
    <button id="add-btn">Add number</button>
    <button id="sort1-btn">Sort 1</button>
    <button id="sortall-btn">Sort All</button>
  `;

  $form.querySelector("#add-btn").addEventListener("click", () => {
    const val = Number($form.querySelector("#num-input").value);
    addNumber(val);
    $form.querySelector("#num-input").value = "";
  });

  $form.querySelector("#sort1-btn").addEventListener("click", sortOne);
  $form.querySelector("#sortall-btn").addEventListener("click", sortAll);

  return $form;
}

function CategoryDisplay(title, nums) {
  const $section = document.createElement("section");
  $section.innerHTML = `
    <h3>${title}</h3>
    <div class="display-box">${nums.join(" ")}</div>
  `;
  return $section;
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h2>Odds and Events</h2>
    <NumberForm></NumberForm>
    <CategoryDisplay id="bank"></CategoryDisplay>
    <CategoryDisplay id="odds"></CategoryDisplay>
    <CategoryDisplay id="evens"></CategoryDisplay>
  `;

  $app.querySelector("NumberForm").replaceWith(NumberForm());
  $app.querySelector("#bank").replaceWith(CategoryDisplay("Bank", bank));
  $app.querySelector("#odds").replaceWith(CategoryDisplay("Odds", odds));
  $app.querySelector("#evens").replaceWith(CategoryDisplay("Events", evens));
}

render();
