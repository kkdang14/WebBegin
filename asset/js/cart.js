// Người viết: Kim Khánh Đăng-B2113306
// Tham khảo: Youtube, w3school.com 

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'FLower 001',
        tag: 'item-wedding-1',
        price: 400,
        inCart: 0
    }, {
        name: 'FLower 002',
        tag: 'item-wedding-2',
        price: 600,
        inCart: 0
    }, {
        name: 'FLower 003',
        tag: 'item-wedding-3',
        price: 750,
        inCart: 0
    }, {
        name: 'FLower 004',
        tag: 'item-wedding-4',
        price: 350,
        inCart: 0
    }, {
        name: 'FLower 005',
        tag: 'item-wedding-5',
        price: 500,
        inCart: 0
    }, {
        name: 'FLower 006',
        tag: 'item-wedding-6',
        price: 650,
        inCart: 0
    }, {
        name: 'FLower 007',
        tag: 'item-wedding-7',
        price: 810,
        inCart: 0
    }, {
        name: 'FLower 008',
        tag: 'item-wedding-8',
        price: 400,
        inCart: 0
    }, {
        name: 'FLower 009',
        tag: 'item-1',
        price: 400,
        inCart: 0
    }, {
        name: 'FLower 010',
        tag: 'item-2',
        price: 600,
        inCart: 0
    }, {
        name: 'FLower 011',
        tag: 'item-3',
        price: 750,
        inCart: 0
    }, {
        name: 'FLower 012',
        tag: 'item-4',
        price: 350,
        inCart: 0
    }, {
        name: 'FLower 013',
        tag: 'item-5',
        price: 500,
        inCart: 0
    }, {
        name: 'FLower 014',
        tag: 'item-6',
        price: 650,
        inCart: 0
    }, {
        name: 'FLower 015',
        tag: 'item-7',
        price: 810,
        inCart: 0
    }, {
        name: 'FLower 016',
        tag: 'item-8',
        price: 400,
        inCart: 0
    }, {
        name: 'FLower 017',
        tag: 'item-birthday-1',
        price: 400,
        inCart: 0
    }, {
        name: 'FLower 018',
        tag: 'item-birthday-2',
        price: 600,
        inCart: 0
    }, {
        name: 'FLower 019',
        tag: 'item-birthday-3',
        price: 750,
        inCart: 0
    }, {
        name: 'FLower 020',
        tag: 'item-birthday-4',
        price: 350,
        inCart: 0
    }, {
        name: 'FLower 021',
        tag: 'item-birthday-5',
        price: 500,
        inCart: 0
    }, {
        name: 'FLower 022',
        tag: 'item-birthday-6',
        price: 650,
        inCart: 0
    }, {
        name: 'FLower 023',
        tag: 'item-birthday-7',
        price: 810,
        inCart: 0
    }, {
        name: 'FLower 024',
        tag: 'item-birthday-8',
        price: 400,
        inCart: 0
    }, {
        name: 'FLower 025',
        tag: 'item-decor-1',
        price: 400,
        inCart: 0
    }, {
        name: 'FLower 026',
        tag: 'item-decor-2',
        price: 600,
        inCart: 0
    }, {
        name: 'FLower 027',
        tag: 'item-decor-3',
        price: 750,
        inCart: 0
    }, {
        name: 'FLower 028',
        tag: 'item-decor-4',
        price: 350,
        inCart: 0
    }, {
        name: 'FLower 029',
        tag: 'item-decor-5',
        price: 500,
        inCart: 0
    }, {
        name: 'FLower 030',
        tag: 'item-decor-6',
        price: 600,
        inCart: 0
    }, {
        name: 'FLower 032',
        tag: 'item-decor-7',
        price: 810,
        inCart: 0
    }, {
        name: 'FLower 032',
        tag: 'item-decor-8',
        price: 400,
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
        displayCart();
    })
}

function onLoadCartNumber() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems) {
        let productNumbers = Object.keys(cartItems).length;
        document.querySelector('.count-item span').textContent = productNumbers;
    } else {
        document.querySelector('.count-item span').textContent = 0;
    }
}


function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.count-item span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.count-item span').textContent = 1;
    }

    setItems(product);

    alert(`Item ${product.name} has been added to cart`, 3000);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    onLoadCartNumber();
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    console.log(typeof cartCost);
    if (cartCost !== null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", (cartCost + product.price).toString());
    } else {
        localStorage.setItem("totalCost", product.price.toString());
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-cart");
    let cartCost = localStorage.getItem("totalCost");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class="fa-solid fa-circle-xmark delete-item" data-tag="${item.tag}"></i>
                <img src="./asset/img/${item.tag}.jpg">
                <span class="name">${item.name}</span>
                <div class="price">${item.price}$</div>   
                <div class="quantity">
                    <i class="fa-solid fa-caret-left"></i>
                    <span class="amount">${item.inCart}</span>
                    <i class="fa-solid fa-caret-right"></i>
                </div>
                <div class="cart-total">
                    ${item.inCart * item.price}$
                </div>
            </div>  
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}
                </h4>
            </div>        
        `;


    } else {
        productContainer.innerHTML = `
        <h3 class="inform">
            CART IS EMPTY
        </h3>
        `;
    }

    productContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('delete-item')) {
            const tag = target.dataset.tag;
            removeItem(tag);
        } 

        const updatedCartItems = localStorage.getItem("productsInCart");
        if (!updatedCartItems || Object.keys(JSON.parse(updatedCartItems)).length === 0) {
            productContainer.innerHTML = `
                <h3 class="inform">
                    CART IS EMPTY
                </h3>
            `;
        }
    });
}


function updateCartCount() {
    let productNumbers = 0;
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems) {
        Object.values(cartItems).forEach(item => {
            productNumbers += item.inCart;
        });
    }

    localStorage.setItem('cartNumbers', productNumbers.toString());
    document.querySelector('.count-item span').textContent = productNumbers.toString();
}

function changeQuantity(tag, amount) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems && cartItems[tag]) {
        const item = cartItems[tag];
        item.inCart += amount;
        if (item.inCart < 1) {
            removeItem(tag);
        } else {
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            updateCartCount();
            displayCart();
        }
    }
}

function removeItem(tag) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems && cartItems[tag]) {
        const removedItem = cartItems[tag];
        const itemQuantity = removedItem.inCart;

        // Update cart items
        delete cartItems[tag];
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));

        // Update cart count
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);

        if (productNumbers >= itemQuantity) {
            localStorage.setItem('cartNumbers', productNumbers - itemQuantity);
            document.querySelector('.count-item span').textContent = productNumbers - itemQuantity;
        }

        // Update cart cost
        let cartCost = localStorage.getItem('totalCost');
        cartCost = parseInt(cartCost);
        const itemTotalCost = removedItem.price * itemQuantity;
        if (cartCost >= itemTotalCost) {
            localStorage.setItem('totalCost', (cartCost - itemTotalCost).toString());
        }

        onLoadCartNumber();
        displayCart();
    }
}

onLoadCartNumber();
displayCart();