import faker from "faker";

function mount(el) {
  const cartText = `<div> you have ${faker.datatype.number(
    5
  )} products in the cart</div>`;
  if (el) {
    el.innerHTML = cartText;
  }
}

if (process.env.NODE_ENV === "development") {
  mount(document.querySelector("#dev-cart"));
}

export { mount };
