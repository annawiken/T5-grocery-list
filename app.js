/* 

SMØRBRØDLISTE

Funksjonalitet 
X 1) Skriv i inputfelt 'input-add-item' og trykk på 'btn-add-item' for å legge til en ny vare i 'shopping-list'
- 2) Trykk på 'btn-delete-lists' for å slette alle listeelementene (resette hele applikasjonen)
- 3) Trykk på 'btn-buy-item' for å flytte en vare fra 'shopping-list' til 'in-cart-list' (avhenger av ikoner i <li> for å fungere)
- 4) Trykk på 'btn-unbuy-item' for å flytte varen fra 'in-cart-list' til 'shopping-list' (avhenger av ikoner i <li> for å fungere)
- 5) Trykk på 'btn-delete-item' for å slette en vare fra 'shopping-list'
- 6) Trykk på 'btn-delete-item2' for å slette en vare fra 'in-cart-list'

*/


// 1) Skriv i inputfelt 'input-add-item' og trykk på 'btn-add-item' for å legge til en ny vare i 'shopping-list'
// Legg til ny vare i shopping-list
function addToShoppingList() {

    const inputElement = document.getElementById('input-add-item');
    const buttonElement = document.getElementById('btn-add-item');
    const resultElement = document.getElementById('shopping-list');


    // Når buttonElement blir clicked, kjøres funksjonen addItem
    buttonElement.addEventListener('click', addItem);
    window.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') {
            addItem();
        }
    });


    // Funksjonen addItem legger til vare fra inputfeltet
    function addItem() {
        const listElement = document.createElement('li');

        // Legger til slett-knapp
        const btnDeleteItem = document.createElement('button');
        const btnImgDeleteElement = document.createElement('img');        
        btnImgDeleteElement.setAttribute('src', './assets/icon_delete_red.svg');
        btnDeleteItem.appendChild(btnImgDeleteElement);
        btnDeleteItem.classList.add('btn-delete-item-red');

        // Legger til kjøp-knapp
        const btnBuyItem = document.createElement('button');
        const btnImgBuyElement = document.createElement('img');
        btnImgBuyElement.setAttribute('src', './assets/icon_checkbox_unclicked.svg');
        btnBuyItem.appendChild(btnImgBuyElement);
        btnBuyItem.classList.add('btn-buy-item');
    
        if(inputElement.value !== '') {
            listElement.textContent = inputElement.value;
            listElement.appendChild(btnDeleteItem);
            listElement.appendChild(btnBuyItem);
            resultElement.appendChild(listElement);
        }
    }  
};

addToShoppingList();

































/*

// Marker vare som kjøpt (flytt vare til in-cart-list)
function moveToCartList()


// Flytt vare tilbare til shopping-list
function moveToShoppingList()


// Slett vare fra shopping-list
function deleteFromShoppingList()


// Slett vare fra in-cart-list 
function deleteFromCartList()


*/














/* * * * FERDIG OG FUNGERENDE  KODE: * * * */ 



// Slett alle varer fra begge lister
// Inspiration from: https://www.codecademy.com/forum_questions/4fc4e20c48eae700030456bb

/*
function deleteAllButton() {

    const deleteAllButton = document.createElement('button');
    const shoppingList = document.getElementById('shopping-list');
    const inCartList = document.getElementById('in-cart-list');

    deleteAllButton.classList.add('btn-delete-all-items');

    deleteAllButton.addEventListener('click', deleteAllItems);
    window.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') {
            deleteAllItems();
        }
    });

    function deleteAllItems() {
        shoppingList.innerHTML = '';
        inCartList.innerHTML = '';
    }; 
};

deleteAllButton();
*/

function removeAll() {
    document.getElementById("shopping-list").innerHTML = "";
    document.getElementById("in-cart-list").innerHTML = "";
}

