/* SMØRBRØDLISTE

Funksjonalitet 
X Skriv i inputfelt 'input-add-item' og trykk på 'btn-add-item' for å legge til en ny vare i 'shopping-list'
X Trykk på 'btn-delete-lists' for å slette alle listeelementene fra begge lister
- Trykk på 'btn-buy-item' for å flytte en vare fra 'shopping-list' til 'in-cart-list' (avhenger av ikoner i <li> for å fungere)
- Trykk på 'btn-unbuy-item' for å flytte varen fra 'in-cart-list' til 'shopping-list' (avhenger av ikoner i <li> for å fungere)
X Trykk på 'btn-delete-item' for å slette en vare fra 'shopping-list'
- Trykk på 'btn-delete-item2' for å slette en vare fra 'in-cart-list' */






/* SPØRRE CARLO OM HJELP TIL:

- Struktur av alle funksjoner, hva skal hvor? Mye rot per nå.
- Flytte en vare fra shopping-list til in-cart-list og tilbKE
- Få aktivert alle knappene i begge lister (slett, kjøp, un-buy)

- Skjule example item m/ ikoner

*/



// Skriv i inputfelt 'input-add-item' og trykk på 'btn-add-item' for å legge til en ny vare i 'shopping-list'
function addToShoppingList() {

    const inputElement = document.getElementById('input-add-item');
    const buttonElement = document.getElementById('btn-add-item');
    const resultElement = document.getElementById('shopping-list');


    // Når buttonElement blir clicked, kjøres funksjonen shoppingList()
    buttonElement.addEventListener('click', shoppingList);
    window.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') {
            shoppingList();
        }
    });


    // Funksjonen shoppingList legger til vare fra inputfeltet
    function shoppingList() {
        const listElement = document.createElement('li');

        // Legger til slett-knapp
        const btnDeleteItemRed = document.createElement('button');
        const btnImgDeleteElementRed = document.createElement('img');        
        btnImgDeleteElementRed.setAttribute('src', './assets/icon_delete_red.svg');
        btnDeleteItemRed.appendChild(btnImgDeleteElementRed);
        btnDeleteItemRed.classList.add('btn-delete-item-red');

        // Trykk på 'btn-delete-item-red' for å slette en vare fra 'shopping-list'
        btnDeleteItemRed.addEventListener('click', () => {
            listElement.remove() 
        });
                

        // Legger til kjøp-knapp
        const btnBuyItem = document.createElement('button');
        const btnImgBuyElement = document.createElement('img');
        btnImgBuyElement.setAttribute('src', './assets/icon_checkbox_unclicked.svg');
        btnBuyItem.appendChild(btnImgBuyElement);
        btnBuyItem.classList.add('btn-buy-item');
    
        if(inputElement.value !== '') {
            listElement.textContent = inputElement.value;
            listElement.appendChild(btnDeleteItemRed);
            listElement.appendChild(btnBuyItem);
            resultElement.appendChild(listElement);
        }

        /* Når kjøp-knapp trykkes på, kjøres funksjonen cartList()
        btnBuyItem.addEventListener('click', cartList);
        window.addEventListener('keyup', (event) => {
            if(event.key === 'Enter') {
                cartList();
            }
        }); */
        
    }  

 
    function cartList() {

        // Legger til grå slett-knapp
        const btnDeleteItemGrey = document.createElement('button');
        const btnImgDeleteElementGrey = document.createElement('img');  
        btnImgDeleteElementGrey.setAttribute('src', './assets/icon_delete_grey.svg');
        btnDeleteItemGrey.appendChild(btnImgDeleteElementGrey);
        btnDeleteItemGrey.classList.add('btn-delete-item-grey');


        // Når grå slettknapp trykkes, slettes listeelementet fra in-cart-list
        btnDeleteItemGrey.addEventListener('click', () => {
            listElement.remove() 
        });

        // Legger til unbuy-knapp
        const btnUnBuyItem = document.createElement('button');
        const btnImgUnBuyElement = document.createElement('img');
        btnImgUnBuyElement.setAttribute('src', './assets/icon_bought_clicked.svg');
        btnUnBuyItem.appendChild(btnImgUnBuyElement);
        btnUnBuyItem.classList.add('btn-unbuy-item');

    }
};

addToShoppingList();



function moveItem() {
    
    // Marker vare som kjøpt (flytt vare til in-cart-list)
    document.addEventListener("DOMContentLoaded", function() {
        let unBuyButton = document.getElementById('.btn-unbuy-item');
        let shoppingList = document.getElementById('shopping-list'); 
        let cartList = document.getElementById('in-cart-list'); 

        function moveToCartList(e) {
            let moveTo = this.parentElement.parentElement == cartList ? shoppingList : cartList;
            moveTo.appendChild(this.parentElement);
        }

        for (let i = 0; i < unBuyButton.length; i++) {
            unBuyButton[i].addEventListener('click', moveToCartList);
        }
    });


    // Flytt vare fra cart-list til shopping-list
    document.addEventListener("DOMContentLoaded", function() {
        let unBuyButton = document.getElementById('btn-unbuy-item');
        let shoppingList = document.getElementById('shopping-list'); 
        let cartList = document.getElementById('in-cart-list'); 

        function moveToShoppingList(e) {
            let moveTo = this.parentElement.parentElement == cartList ? shoppingList : cartList;
            moveTo.appendChild(this.parentElement);
        }

        for (let i = 0; i < unBuyButton.length; i++) {
            unBuyButton[i].addEventListener('click', moveToShoppingList);
        }
    });

}

moveItem();


/*

// Slett vare fra in-cart-list (plasseres inne i en funksjon som også definerer in-cart-list)
const btnDeleteFromCartList = document.getElementsByClassName('#btn-delete-item-grey');
let item2 = document.getElementById('shopping-list');  // Hvordan velge den spesifikke varen og ikke alle?

btnDeleteFromCartList.addEventListener('click', () => {
    item2.remove() 
});

*/






// Trykk på 'btn-delete-lists' for å slette alle listeelementene fra begge lister
function removeAll() {
    document.getElementById("shopping-list").innerHTML = "";
    document.getElementById("in-cart-list").innerHTML = "";
}
// Alternativ til koden over, som jeg ikke helt får til å fungere: 
/* function deleteAllButton() {

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

deleteAllButton(); */

