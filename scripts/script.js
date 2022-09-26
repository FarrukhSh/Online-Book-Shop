'use strict';

// initial variables



let container = document.querySelector('.container');


let headTitle = document.createElement('h1');
headTitle.textContent = 'Our best books';
headTitle.className = 'block-title';
container.appendChild(headTitle);


let productBlock = document.createElement('div');
productBlock.id = "products-block";
productBlock.className = 'products-block';
container.appendChild(productBlock);
const actionBlock = document.createElement('div');
actionBlock.id = "action-block";
actionBlock.className = "action-block";
container.appendChild(actionBlock);

let dropdown = document.createElement('select');
dropdown.id = "select-id";
dropdown.className = "product-dropdown";
dropdown.name = "select";
actionBlock.appendChild(dropdown);

let inputPlace = document.createElement('input');
inputPlace.type = 'number';
inputPlace.id = 'product-number';
inputPlace.className = 'product-number';
inputPlace.min = 1;
inputPlace.max = 50;
inputPlace.value = 1;
actionBlock.appendChild(inputPlace);


let addBtn = document.createElement('button');
addBtn.id = 'add-to-cart-button';
addBtn.className = 'add-to-cart-button';
addBtn.textContent = 'Add to Cart';
actionBlock.appendChild(addBtn);


let books = [
    {
        id: 0,
        name: '1984',
        price: 10.50,
        amount: 30
    },
    {
        id: 1,
        name: 'Beyound good and evil',
        price: 12.90,
        amount: 20
    },
    {
        id: 2,
        name: 'Crime and punishment',
        price: 21.80,
        amount: 10
    },
    {
        id: 3,
        name: 'Portraint of Dorian Gray',
        price: 22.00,
        amount: 40
    }
]

let totalCost = 0;


if (books.length > 0) {
    productBlock.style.display = 'block';
    actionBlock.style.display = 'flex';
}

for (let i = 0; i < books.length; i++) {
    // добавляет product в productBlock
    const product = document.createElement('div');
    product.className = 'product';
    product.id = "bookID-" + books[i].id;

    const productImg = document.createElement('img');

    productImg.src = `./images/${books[i].name}.jpg`;
    productImg.alt = books[i].name;
    productImg.classList.add('product-photo');

    const productName = document.createElement('span');
    productName.className = 'product-name';
    productName.textContent = books[i].name;

    const productAmount = document.createElement('span');
    productAmount.className = 'product-amount';
    productAmount.textContent = books[i].amount + ' pcs in stock';

    const productPrice = document.createElement('span');
    productPrice.className = 'product-price';
    productPrice.textContent = '$' + books[i].price.toFixed(2);


    product.appendChild(productImg);
    product.appendChild(productName);
    product.appendChild(productAmount);
    product.appendChild(productPrice);

    productBlock.appendChild(product);

    const selectOption = document.createElement('option');
    selectOption.value = books[i].id;
    selectOption.textContent = books[i].name;

    dropdown.appendChild(selectOption);
}

let myCart = document.createElement('div');
myCart.id = 'cart-block';
myCart.className = 'cart-block';
container.appendChild(myCart);

let cartList = document.createElement('ul');
cartList.id = 'cart-table';
cartList.className = 'cart-table';
myCart.appendChild(cartList);

let cartProd = document.createElement('li');
cartProd.className = 'cart-product';
cartList.appendChild(cartProd);

let cartName = document.createElement('span');
cartName.className = 'cart-product-name';
cartName.textContent = 'Book';
cartProd.appendChild(cartName);

let cartNumber = document.createElement('span');
cartNumber.className = 'cart-product-number';
cartNumber.textContent = 'Amount';
cartProd.appendChild(cartNumber);

let cartCost = document.createElement('span');
cartCost.className = 'cart-product-cost';
cartCost.textContent = 'Cost';
cartProd.appendChild(cartCost);

let cartClear = document.createElement('span');
cartClear.className = 'cart-product-clear';
cartClear.textContent = 'Remove';
cartProd.appendChild(cartClear);

let totalDelivery = document.createElement('div');
totalDelivery.className = 'delivery-and-total';
myCart.appendChild(totalDelivery);

let checkBox = document.createElement('input');
checkBox.id = 'delivery-checkbox';
checkBox.className = 'delivery-checkbox';
checkBox.type = 'checkbox';
totalDelivery.appendChild(checkBox);

let checkBoxLabel = document.createElement('label');
checkBoxLabel.for = 'delivery-checkbox';
checkBoxLabel.textContent = 'includes delivery';
totalDelivery.appendChild(checkBoxLabel);

let totalCostBlock = document.createElement('div');
totalCostBlock.className = 'total-cost';
totalCostBlock.id = 'total-cost';
totalDelivery.appendChild(totalCostBlock);

const productAmount0 = document.getElementById('bookID-0');
const amount0 = productAmount0.querySelector('.product-amount');
const productAmount1 = document.getElementById('bookID-1');
const amount1 = productAmount1.querySelector('.product-amount');
const productAmount2 = document.getElementById('bookID-2');
const amount2 = productAmount2.querySelector('.product-amount');
const productAmount3 = document.getElementById('bookID-3');
const amount3 = productAmount3.querySelector('.product-amount');

productAmount0.addEventListener('click', () => {
    dropdown.value = 0;
});

productAmount1.addEventListener('click', () => {
    dropdown.value = 1;
});

productAmount2.addEventListener('click', () => {
    dropdown.value = 2;
});
productAmount3.addEventListener('click', () => {
    dropdown.value = 3;
});

function addToCart() {

    const selectedOption = document.getElementById('select-id');
    const productNumber = document.getElementById('product-number');
    const product = books.find(b => b.id === +selectedOption.value);
    const cartTable = document.getElementById('cart-table');
    const cartProduct = document.createElement('li');
    const cartProductName = document.createElement('span');
    const cartProductNumber = document.createElement('span');
    const cartProductCost = document.createElement('span');
    const cartProductRemove = document.createElement('span');

    const totalCostBlock = document.getElementById('total-cost');


    if (product.amount == 0) {
        alert(`We are so sorry. The selected book (${product.name}) has been sold out.`);
        cartProductNumber.textContent = cartProductNumber.textContent;
        cartProductName.textContent = cartProductName.textContent;
        cartProductCost.textContent = cartProductCost.textContent;
        totalCostBlock.textContent = totalCostBlock.textContent;


        // productNumber.value = '1';
        return addToCart;
    }

    if (productNumber.value > product.amount) {

        alert(`We are so sorry. The selected book (${product.name}) left only ${product.amount} pcs.`);

        cartProductNumber.textContent = cartProductNumber.textContent;
        cartProductName.textContent = cartProductName.textContent;
        cartProductCost.textContent = cartProductCost.textContent;
        totalCostBlock.textContent = totalCostBlock.textContent;
        productNumber.value = '1';
    } else {

        const productAmount0 = document.getElementById('bookID-' + product.id);
        const amountInStock = productAmount0.querySelector('.product-amount');


        if (dropdown.value == 0) {
            books[0].amount -= productNumber.value;
            amountInStock.textContent = books[0].amount + ' pcs in stock';
            if (amountInStock.textContent == "0 pcs in stock") {
                amountInStock.style.color = 'white';
            }
        }
        if (dropdown.value == 1) {
            books[1].amount -= productNumber.value;
            amountInStock.textContent = books[1].amount + ' pcs in stock';
            if (amountInStock.textContent == "0 pcs in stock") {
                amountInStock.style.color = 'white';
            }
        }
        if (dropdown.value == 2) {
            books[2].amount -= productNumber.value;
            amountInStock.textContent = books[2].amount + ' pcs in stock';
            if (amountInStock.textContent == "0 pcs in stock") {
                amountInStock.style.color = 'white';
            }
        }
        if (dropdown.value == 3) {
            books[3].amount -= productNumber.value;
            amountInStock.textContent = books[3].amount + ' pcs in stock';
            if (amountInStock.textContent == "0 pcs in stock") {
                amountInStock.style.color = 'white';
            }
        }

        totalCost += +productNumber.value * product.price;
        cartProduct.classList.add('cart-product');
        cartProductName.classList.add('cart-product-name');
        cartProductName.textContent = product.name;
        cartProduct.appendChild(cartProductName);
        cartProductNumber.classList.add('cart-product-number');
        cartProductNumber.textContent = productNumber.value + ' pcs';
        cartProduct.appendChild(cartProductNumber);
        cartProductCost.classList.add('cart-product-cost');
        cartProductCost.textContent = '$' + (+productNumber.value * product.price).toFixed(2);
        cartProduct.appendChild(cartProductCost);
        cartProductRemove.textContent = '';
        cartProductRemove.classList.add('cart-product-remove');
        cartProduct.appendChild(cartProductRemove);

        cartTable.appendChild(cartProduct);


        totalCostBlock.textContent = 'Total Cost: $' + totalCost.toFixed(2);
        myCart.style.display = 'block';

        productNumber.value = '1';



    }


    cartProductRemove.addEventListener('click', () => {
        const productAmount0 = document.getElementById('bookID-0');
        const amount0 = productAmount0.querySelector('.product-amount');
        const productAmount1 = document.getElementById('bookID-1');
        const amount1 = productAmount1.querySelector('.product-amount');
        const productAmount2 = document.getElementById('bookID-2');
        const amount2 = productAmount2.querySelector('.product-amount');
        const productAmount3 = document.getElementById('bookID-3');
        const amount3 = productAmount3.querySelector('.product-amount');

        if (cartProductName.textContent == books[0].name) {
            let costNum0 = cartProductNumber.textContent;
            let num0 = costNum0.match(/\d+/g);
            books[0].amount += +num0[0];
            amount0.textContent = books[0].amount + ' pcs in stock';
            let costNum1 = cartProductCost.textContent;
            let num1 = costNum1.match(/\d+\.\d+/g);
            totalCost -= num1[0];
            totalCostBlock.textContent = 'Total Cost: $' + totalCost.toFixed(2);
            amount0.style.color = 'rgb(0, 255, 8)';
        }

        if (cartProductName.textContent == books[1].name) {
            let costNum0 = cartProductNumber.textContent;
            let num0 = costNum0.match(/\d+/g);
            books[1].amount += +num0[0];
            amount1.textContent = books[1].amount + ' pcs in stock';
            let costNum1 = cartProductCost.textContent;
            let num1 = costNum1.match(/\d+\.\d+/g);
            totalCost -= num1[0];
            totalCostBlock.textContent = 'Total Cost: $' + totalCost.toFixed(2);
            amount1.style.color = 'rgb(0, 255, 8)';
        }

        if (cartProductName.textContent == books[2].name) {
            let costNum0 = cartProductNumber.textContent;
            let num0 = costNum0.match(/\d+/g);
            books[2].amount += +num0[0];
            amount2.textContent = books[2].amount + ' pcs in stock';
            let costNum1 = cartProductCost.textContent;
            let num1 = costNum1.match(/\d+\.\d+/g);
            totalCost -= num1[0];
            totalCostBlock.textContent = 'Total Cost: $' + totalCost.toFixed(2);
            amount2.style.color = 'rgb(0, 255, 8)';
        }

        if (cartProductName.textContent == books[3].name) {
            let costNum0 = cartProductNumber.textContent;
            let num0 = costNum0.match(/\d+/g);
            books[3].amount += +num0[0];
            amount3.textContent = books[3].amount + ' pcs in stock';
            let costNum1 = cartProductCost.textContent;
            let num1 = costNum1.match(/\d+\.\d+/g);
            totalCost -= num1[0];
            totalCostBlock.textContent = 'Total Cost: $' + totalCost.toFixed(2);
            amount3.style.color = 'rgb(0, 255, 8)';
        }

        cartTable.removeChild(cartProduct);

        if (totalCost.toFixed(2) == 0) {
            myCart.style.display = 'none';
        }

    });

}



inputPlace.addEventListener('input', function () {
    let num = this.value.match(/^\d+$/);
    if (num === null || num === '') {
        this.value = "1";
    }
});


addBtn.addEventListener('click', addToCart);

inputPlace.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        addToCart();
    }
});
const deliveryCheckBox = document.getElementById('delivery-checkbox');

deliveryCheckBox.addEventListener('click', () => {
    if (deliveryCheckBox.checked) {
        totalCost += 10.00;
        document.getElementById('total-cost').textContent = 'Total Cost: $' + totalCost.toFixed(2);
    } else {
        totalCost -= 10.00;
        document.getElementById('total-cost').textContent = 'Total Cost: $' + totalCost.toFixed(2);
    }
    if (totalCost.toFixed(2) == 0) {
        myCart.style.display = 'none';
    }
});

