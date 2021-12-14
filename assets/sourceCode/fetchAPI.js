var products = [
  {
    id: '1',
    urlImg: './assets/images/items/bun-dau.jpg',
    name: 'Bún Đậu Nhà Cuội',
    price: 30000,
  },
  {
    id: '2',
    urlImg: '../assets/images/items/mi-quang.jpg',
    name: 'Mỳ Quảng My Ny',
    price: 30000,
  },
  {
    id: '3',
    urlImg: '../assets/images/items/phuc-long.jpg',
    name: 'Phúc Long',
    price: 30000,
  },
  {
    id: '4',
    urlImg: '../assets/images/items/tra-sua.jpeg',
    name: 'Trà Sữa Bobapop',
    price: 30000,
  },
  {
    id: '5',
    urlImg: '../assets/images/items/com-xoi.jpg',
    name: 'Cơm Gà Xối Mỡ',
    price: 30000,
  },
  {
    id: '6',
    urlImg: '../assets/images/items/com-tho.jpg',
    name: 'Cơm Thố Tuấn Lộc',
    price: 30000,
  }
];

let htmls = products.map((product) => {
  return `<div class="item-restaurant" id ="${product.id}">
            <i class="fas fa-circle stocking"></i>
            <img src="${product.urlImg}" alt="item">
            <div class="name-and-address">
                <h5 title="Bún Đậu Nhà Cuội 2 - Hoà Cường 38 Huy Cận">${product.name}</h5>
                <h6 title="38 Huy Cận, P. Hoà Cường Nam, Quận Hải Châu, Đà Nẵng">${product.price} VND
                </h6>
            </div>
            <div class="discount text-blue fw-bold"> <i class="fas fa-tag icon-discount"></i>Giảm món <i class="fas fa-cart-plus mx-2"></i></div>
          </div>`
});

console.log(htmls);
document.getElementById('root').innerHTML = htmls;