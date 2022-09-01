const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push ({
    name: 'Bicicletas',
    price: 120,
    image: 'https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push ({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push ({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push ({
    name: 'Pantalones',
    price: 200,
    image: 'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push ({
    name: 'Audifonos',
    price: 90,
    image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push ({
    name: 'Controles',
    price: 130,
    image: 'https://images.pexels.com/photos/4523025/pexels-photo-4523025.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push ({
    name: 'Consola',
    price: 500,
    image: 'https://images.pexels.com/photos/12339571/pexels-photo-12339571.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push ({
    name: 'Carros',
    price: 1000,
    image: 'https://images.pexels.com/photos/7660165/pexels-photo-7660165.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push ({
    name: 'Cama',
    price: 800,
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push ({
    name: 'Closets',
    price: 650,
    image: 'https://images.pexels.com/photos/6782465/pexels-photo-6782465.jpeg?auto=compress&cs=tinysrgb&w=600',
});

function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetailAside);
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
  }
  
  renderProducts(productList);