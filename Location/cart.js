const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    console.log(product, quantity)

    // display Product on ui
    addProductsToDisplay(product, quantity);


    // set to local storage
    // simple way
    // localStorage.setItem(product, quantity)
    saveItemToLocalStorage(product, quantity);

}

const getShoppingCartFromLocalStorage = () => {
    let saveCart = localStorage.getItem('cart');
    let cart = {};
    if(saveCart){
        cart = JSON.parse(saveCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringfied = JSON.stringify(cart);

    // save to local stroge
    localStorage.setItem('cart', cartStringfied);

}


const addProductsToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`

    productContainer.appendChild(li)
}

const displayStroedProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    for(const product in cart){
        const quantity = cart[product];
        console.log(product, quantity);
        addProductsToDisplay(product, quantity);
    }
}

displayStroedProducts();