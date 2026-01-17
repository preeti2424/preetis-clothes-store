fetch("http://127.0.0.1:5000/products")
.then(res => res.json())
.then(data => {
    let box = document.getElementById("products");
    data.forEach(p => {
        box.innerHTML += `
        <div class="product">
          <img src="${p.image}">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
        </div>`;
    });
});
