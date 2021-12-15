var products = [
  {
    id: 1,
    urlImg: './assets/images/items/bun-dau.jpg',
    name: 'Bún Đậu Nhà Cuội',
    price: 30000,
  },
  {
    id: 2,
    urlImg: './assets/images/items/mi-quang.jpg',
    name: 'Mỳ Quảng My Ny',
    price: 35000,
  },
  {
    id: 3,
    urlImg: './assets/images/items/phuc-long.jpg',
    name: 'Phúc Long',
    price: 40000,
  },
  {
    id: 4,
    urlImg: './assets/images/items/tra-sua.jpeg',
    name: 'Trà Sữa Bobapop',
    price: 45000,
  },
  {
    id: 5,
    urlImg: './assets/images/items/com-xoi.jpg',
    name: 'Cơm Gà Xối Mỡ',
    price: 50000,
  },
  {
    id: 6,
    urlImg: './assets/images/items/com-tho.jpg',
    name: 'Cơm Thố Tuấn Lộc',
    price: 55000,
  }
];


let items = products.map((product) => {
  return `<div class="item-restaurant" id ="${product.id}">
            <i class="fas fa-circle stocking"></i>
            <img src="${product.urlImg}" alt="item">
            <div class="name-and-address">
                <h5 title="${product.name}">${product.name}</h5>
                <h4>
                <span class="text-line-through">${product.price.toLocaleString()} ₫
                </span> <span class="text-danger mx-2">${(product.price - product.price * 10 / 100).toLocaleString()} ₫ </span>
                </h4>
            </div>
            <div class="discount text-blue fw-bold d-flex justify-content-between">
              <div>
                <i class="fas fa-tag icon-discount"></i>Giảm 10%
              </div>
              <div>
                <i class="fas fa-cart-plus mx-2"></i>
              </div>
            </div>
          </div>`
});

document.getElementById("root").innerHTML = items.join(" ");