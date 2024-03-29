
// Inspiration from: https://www.codehim.com/vanilla-javascript/simple-grocery-list-app-in-javascript/

// add new item to shopping-list 
function addToShoppingList() {

    const inputElement = document.getElementById('input-add-item');
    const buttonElement = document.getElementById('btn-add-item');
    const resultElement = document.getElementById('shopping-list');
    const inCartElement = document.getElementById('in-cart-list');

    // when buttonElement is clicked, execute shoppingList()
    buttonElement.addEventListener('click', shoppingList);
    window.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') {
            shoppingList();
        }
    });

    // shoppingList() builds list element in shopping-list with user input, delete-button and done-button
    function shoppingList() {
        const listElement = document.createElement('li');

        // build delete button 
        const btnDeleteItemRed = document.createElement('button');
        const btnImgDeleteElementRed = document.createElement('img');        
        btnImgDeleteElementRed.setAttribute('src', './assets/icon_delete_red.svg');
        btnDeleteItemRed.appendChild(btnImgDeleteElementRed);
        btnDeleteItemRed.classList.add('btn-delete-item-red');

        // delete spesific item from shopping-list or in in-cart-list
        btnDeleteItemRed.addEventListener('click', () => {
            listElement.remove()
        });
                
        // build done-button
        const btnBuyItem = document.createElement('button');
        const btnImgBuyElement = document.createElement('img');
        btnImgBuyElement.setAttribute('src', './assets/icon_checkbox_unclicked.svg');
        btnBuyItem.appendChild(btnImgBuyElement);
        btnBuyItem.classList.add('btn-buy-item');

        btnBuyItem.addEventListener('click', () => {
            // remove list element from shopping-list
            resultElement.removeChild(listElement);
            listElement.classList.add('bought')
            // move list element to in-cart-list
            inCartElement.appendChild(listElement);
        });
        
        // build list element if input is not empty 
        if(inputElement.value !== '') {
            listElement.textContent = inputElement.value;
            listElement.appendChild(btnDeleteItemRed);
            listElement.appendChild(btnBuyItem);
            resultElement.appendChild(listElement);
        }
    };  
};
addToShoppingList();


// delete all list elements from both shopping-list and in-cart-list
// inspiration from: https://www.codecademy.com/forum_questions/4fc4e20c48eae700030456bb 
function removeAll() {
    document.getElementById("shopping-list").innerHTML = "";
    document.getElementById("in-cart-list").innerHTML = "";
}

