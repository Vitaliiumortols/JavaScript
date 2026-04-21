const content = document.getElementById("content");
const homeLink = document.getElementById("homeLink");
const catalogLink = document.getElementById("catalogLink");
const specialsLink = document.getElementById("specialsLink");

homeLink.addEventListener("click", showHome);
catalogLink.addEventListener("click", loadCatalog);
specialsLink.addEventListener("click", loadSpecials);

function showHome(event) {
  event.preventDefault();
  content.innerHTML = `
    <h2>Welcome</h2>
    <p>This is a one-page web application that dynamically loads catalog data using JavaScript and Ajax.</p>
  `;
}

async function loadCatalog(event) {
  event.preventDefault();

  try {
    const response = await fetch("data/categories.json");
    const categories = await response.json();

    let html = `<h2>Catalog Categories</h2><div class="category-list">`;

    for (let category of categories) {
      html += `
        <div class="card">
          <h3>${category.name}</h3>
          <p>${category.notes}</p>
          <button class="btn" onclick="loadCategory('${category.shortname}')">Open Category</button>
        </div>
      `;
    }

    html += `</div>`;
    content.innerHTML = html;
  } catch {
    content.innerHTML = `<p>Error loading catalog.</p>`;
  }
}

async function loadCategory(shortname) {
  try {
    const response = await fetch("data/" + shortname + ".json");
    const data = await response.json();

    let html = `<h2>${data.categoryName}</h2><div class="items-list">`;

    for (let item of data.items) {
      html += `
        <div class="card">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="price">${item.price}</div>
        </div>
      `;
    }

    html += `</div>`;
    content.innerHTML = html;
  } catch {
    content.innerHTML = `<p>Error loading category.</p>`;
  }
}

async function loadSpecials(event) {
  event.preventDefault();

  try {
    const response = await fetch("data/categories.json");
    const categories = await response.json();

    const index = Math.floor(Math.random() * categories.length);
    loadCategory(categories[index].shortname);
  } catch {
    content.innerHTML = `<p>Error loading specials.</p>`;
  }
}