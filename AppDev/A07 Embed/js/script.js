var products = [
    {
      "category": "Nike",
      "contents": [
        {
          "isAvailable": true,
          "name": "Nike Panda",
          "code": "NPanda",
          "price": 5500,
          "image": "img/Nike1.avif"
        },
        {
          "isAvailable": true,
          "name": "Nike Cortez",
          "code": "NCortez",
          "price": 6000,
          "image": "img/Nike2.avif"
        },
        {
          "isAvailable": true,
          "name": "Nike Air Force 1 '07",
          "code": "NAF1",
          "price": 5000,
          "image": "img/Nike3.avif"
        }
      ]
    },
    {
      "category": "Adidas",
      "contents": [
        {
          "isAvailable": true,
          "name": "Samba",
          "code": "Samba",
          "price": 5000,
          "image": "img/adidas1.avif"
        },
        {
          "isAvailable": true,
          "name": "Superstar",
          "code": "sprstr",
          "price": 3600,
          "image": "img/adidas2.avif"
        },
        {
          "isAvailable": true,
          "name": "Spezial",
          "code": "Spezial",
          "price": 4000,
          "image": "img/adidas3.avif"
        }
      ]
    },
    {
      "category": "Onitsuka Tiger",
      "contents": [
        {
          "isAvailable": true,
          "name": "Onitsuka Tiger TOKUTEN",
          "code": "OT Tokuten",
          "price": 3000,
          "image": "img/onitsuka1.webp"
        },
        {
          "isAvailable": true,
          "name": "Onitsuka MEXICO 66 SD",
          "code": "OT Mexico 66 SD",
          "price": 5000,
          "image": "img/onitsuka2.webp"
        },
        {
          "isAvailable": true,
          "name": "Onitsuka Tiger GSM SD",
          "code": "OT Tiger GSM SD",
          "price": 3500,
          "image": "img/onitsuka3.webp"
        }
      ]
    },
  ];

  var total = 0;

  function loadCategories() {
    var categoriesContainer = document.getElementById("categories");
    products.forEach((product, index) => {
      categoriesContainer.innerHTML += `
        <div onclick="loadProducts('${index}')" class="card mx-1 custom-button p-3 text-center">
          <small>${product.category}</small>
        </div>
      `;
    });
  }

  function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products[categoryIndex].contents.forEach(content => {
      if (content.sizes) {
        content.sizes.forEach(size => {
          maincontainer.innerHTML += `
        <div onclick="addToReceipt('${size.price}','${content.code + size.code}')" class="card mx-1 my-2 custom-button content p-3 text-center">
          <img src="${content.image}" alt="${content.name}" class="product-img mb-2">
          <small>${content.name} ${size.code}</small>
        </div>
      `;
        });
      } else {
        maincontainer.innerHTML += `
      <div onclick="addToReceipt('${content.price}','${content.code}')" class="card mx-1 my-2 custom-button content p-3 text-center">
        <img src="${content.image}" class="product-img mb-2">
        <small>${content.name}</small><br>
        <small class="price-text">₱${content.price}</small>
      </div>
    `;
      }
    });
  }


  function addToReceipt(price, code) {
    var receiptContainer = document.getElementById("receipt");
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("totalValue").innerText = total;
    receiptContainer.innerHTML += `
      <div class="d-flex flex-row justify-content-between">
        <div><small>${code}</small></div>
        <div><small>${price}</small></div>
      </div>
    `;
  }

  function submitPurchase() {
    const receipt = document.getElementById("receipt").innerHTML;
    const total = document.getElementById("totalValue").textContent;

    if (receipt.trim() === "" || total === "0") {
      alert("No items selected for purchase.");
      return;
    }

    alert("Purchase successful!");
  }

  loadCategories();