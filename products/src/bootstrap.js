import faker from "faker";

function mount(el) {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div class="card-body">${name}</div>`;
  }

  if (el) {
    el.innerHTML = products;
  }
}

if (process.env.NODE_ENV === "development") {
  mount(document.querySelector("#dev-products"));
}

export { mount };
