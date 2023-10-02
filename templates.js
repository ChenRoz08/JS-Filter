export function getProductTemplate(data) {
  data.forEach((data) => {
    const div = document.createElement("div");

    div.innerHTML = `<div class="card">
    <div class="title">Title:${data.title}</div>
    <div class="category">Category:${
      data.category === undefined ? "none" : data.category
    }</div>
    <div class="price">Price:${
      data.price === undefined ? "none" : data.price
    }</div>
    <div class="rating">Rating:${
      data.rating === undefined ? "none" : data.rating.rate
    }</div>
    `;
    display.appendChild(div);
  });
}
