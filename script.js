function render() {
  let q = document.getElementById("q").value.toLowerCase();
  let d = document.getElementById("products");

  d.innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(q))
    .forEach(p => {
      d.innerHTML += `
      <div class="card">
        <img src="${p.image}" class="img" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.code}</p>
        <h4>${p.price}</h4>
        <a href="https://wa.me/62XXXXXXXXXX?text=Saya%20ingin%20pesan%20${encodeURIComponent(p.name)}" target="_blank">
          <button>Pesan WhatsApp</button>
        </a>
      </div>
      `;
    });
}

render();
