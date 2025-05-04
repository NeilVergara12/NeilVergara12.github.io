var products = [
    {
      "category": "Air Spencer Can",
      "contents": [
        {
          "isAvailable": true,
          "name": "Marine Squash",
          "code": "Marine Squash",
          "price": 334,
          "image": "img/MS.webp"
        },
        {
          "isAvailable": true,
          "name": "Pink Shower",
          "code": "Pink Shower",
          "price": 334,
          "image": "img/PS.webp"
        },
        {
          "isAvailable": true,
          "name": "Aqua Shower",
          "code": "Aqua Shower",
          "price": 334,
          "image": "img/AS.webp"
        },
        {
          "isAvailable": true,
          "name": "Green Breeze",
          "code": "Green Breeze",
          "price": 395,
          "image": "img/GB.jpg"
        },
        {
          "isAvailable": true,
          "name": "Lemon Squash",
          "code": "Lemon Squash",
          "price": 334,
          "image": "img/LS.webp"
        },
        {
          "isAvailable": true,
          "name": "Blue Mask",
          "code": "Blue Mask",
          "price": 349,
          "image": "img/BM.webp"
        },
        {
          "isAvailable": true,
          "name": "R90 Squash",
          "code": "R90 Squash",
          "price": 395,
          "image": "img/RS.png"
        },
        {
          "isAvailable": true,
          "name": "R90 Pink Shower",
          "code": "R90 Pink Shower",
          "price": 395,
          "image": "img/RPS.png"
        }
      ]
    },
    {
      "category": "Cantule Holder",
      "contents": [
        {
          "isAvailable": true,
          "name": "Cantule Holder",
          "code": "Cantule",
          "price": 219,
          "image": "img/Cantule.png"
        }
      ]
    },
    {
      "category": "Bundle",
      "contents": [
        {
          "isAvailable": true,
          "name": "Cantule + Can",
          "code": "Cantule + Can",
          "price": 550,
          "image": "img/can scent.jfif"
        },
        {
          "isAvailable": true,
          "name": "Box Order",
          "code": "Box Order (10cans)",
          "price": 2995,
          "image": "img/Box.png"
        }
      ]
    },
    {
      "category": "Air Spencer Giga Clipia and Refill",
      "contents": [
        {
          "isAvailable": true,
          "name": "Giga Clipia",
          "code": "Giga Clip",
          "price": 615,
          "image": "img/Giga Clip.png"
        },
        {
          "isAvailable": true,
          "name": "Giga Refill",
          "code": "Giga Refill",
          "price": 284,
          "image": "img/Giga Refill.png"
        }
      ]
    },
    {
      "category": "Soft99 Wax",
      "contents": [
        {
          "isAvailable": true,
          "name": "Water Block Wax",
          "code": "WB Wax",
          "price": 875,
          "image": "img/Water Block Wax.png"
        },
        {
          "isAvailable": true,
          "name": "Mirror Finish Wax",
          "code": "MF Wax",
          "price": 975,
          "image": "img/Mirror Finish Wax.png"
        },
        {
          "isAvailable": true,
          "name": "Mirror Shine x Water Block",
          "code": "MSxWB Wax",
          "price": 1800,
          "image": "img/Mirror Shine x Water Block.png"
        }
      ]
    },
    {
      "category": "Headlight Lens",
      "contents": [
        {
          "isAvailable": true,
          "name": "Premium Headlight Lens for Honda Jazz/Fit GE pre MMC (2009-11)",
          "code": "Headlight Lens Honda Jazz/Fit GE (2009-11)",
          "price": 2900,
          "image": "img/Jazz lens.webp"
        },
        {
          "isAvailable": true,
          "name": "Premium Headlight Lens for Jazz GK pre MMC & MMC (2014-2021)",
          "code": "Headlight Lens Honda Jazz GK (2014-21)",
          "price": 3095,
          "image": "img/Jazz GK.png"
        },
        {
          "isAvailable": true,
          "name": "Toyota Vios Gen 3 Headlight Lens pair fits (2014-2018)",
          "code": "Headlight Lens Toyota Vios Gen 3 (2014-18)",
          "price": 2995,
          "image": "img/Vios.png"
        },
        {
          "isAvailable": true,
          "name": "Premium Headlight Lens for Hyundai Tucson Gen 2 (2010-2015)",
          "code": "Headlight Lens Hyundai Tucson Gen 2 (2010-15)",
          "price": 2995,
          "image": "img/Hyundai.png"
        }
      ]
    },
    {
      "category": "Parklights and Interior Lights",
      "contents": [
        {
          "isAvailable": true,
          "name": "T10 (2 pcs) quality automotive park lights AMBER, BLUE, WHITE",
          "code": "T10 Park Light",
          "price": 259,
          "image": "img/Park Light.png"
        },
        {
          "isAvailable": true,
          "name": "T10 LED light (pair) low cost but high quality Amber and White",
          "code": "T10 LED Light",
          "price": 182,
          "image": "img/T10 LED.png"
        }
      ]
    }
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

  loadCategories();