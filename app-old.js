
/*

SMØRBRØDLISTE FOR HVA JEG TRENGER AV JS-FUNKSJONALITET:

Funksjonalitet 
X 1) Skriv i inputfelt 'input-add-item' og trykk på 'btn-add-item' for å legge til en ny vare i 'shopping-list'
X 2) Trykk på 'btn-delete-lists' for å slette alle listeelementene (resette hele applikasjonen)
/ 3) Trykk på 'btn-buy-item' for å flytte en vare fra 'shopping-list' til 'in-cart-list' (avhenger av ikoner i <li> for å fungere)
/ 4) Trykk på 'btn-unbuy-item' for å flytte varen fra 'in-cart-list' til 'shopping-list' (avhenger av ikoner i <li> for å fungere)
- 5) Trykk på 'btn-delete-item' for å slette en vare fra 'shopping-list'
- 6) Trykk på 'btn-delete-item2' for å slette en vare fra 'in-cart-list'

*/

/* 1) Skriv i inputfelt 'input-add-item' og trykk på 'btn-add-item' for å legge til en ny vare i 'shopping-list' */
/* Hvordan få med ikonene fra <li> når det opprettes et nytt listeelement?? */
function addToShoppingList() {

    const inputElement = document.getElementById('input-add-item');
    const buttonElement = document.getElementById('btn-add-item');
    const resultElement = document.getElementById('shopping-list');

    buttonElement.addEventListener('click', addItem);

    window.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') {
            addItem();
        }
    });

    function addItem() {
        const liElement = document.createElement('li');

        const btnDeleteItem = document.createElement('button');
        const btnImgDeleteElement = document.createElement('img');
        
        btnImgDeleteElement.setAttribute('src', './assets/icon_delete_red.svg');
        btnDeleteItem.appendChild(btnImgDeleteElement);
        btnDeleteItem.classList.add('btn-delete-item');

        if(inputElement.value !== '') {
            liElement.textContent = inputElement.value;
            liElement.appendChild(btnDeleteItem);

            resultElement.appendChild(liElement);
        }
    }

        const btnBuyItem = document.createElement('button');
        const btnImgBuyElement = document.createElement('img');
        btnImgBuyElement.setAttribute('src', './assets/icon_checkbox_unclicked.svg');
        btnBuyItem.appendChild(btnImgBuyElement);
        btnBuyItem.classList.add('btn-buy-item');

        if(inputElement.value !== '') {
            liElement.textContent = inputElement.value;
            liElement.appendChild(btnBuyItem);
            resultElement.appendChild(liElement);
        }
};

addToShoppingList();



/* 2) Trykk på 'btn-delete-lists' for å slette alle listeelementene (resette hele applikasjonen) */
/* https://www.codecademy.com/forum_questions/4fc4e20c48eae700030456bb */

function removeAll() {
    document.getElementById("shopping-list").innerHTML = "";
    document.getElementById("in-cart-list").innerHTML = "";
}


/* 3) Trykk på 'btn-buy-item' for å flytte en vare fra 'shopping-list' til 'in-cart-list' */
/* Her må jeg få listelementer med knapper til å fungere, før denne kan fungere */
/* https://stackoverflow.com/questions/40290096/moving-items-between-two-lists-in-javascript */

document.addEventListener("DOMContentLoaded", function() {
    let buyButton = document.getElementById('.btn-buy-item');
    let shoppingList = document.getElementById('shopping-list'); 
    let cartList = document.getElementById('in-cart-list'); 

    function moveToCartList(e) {
        let moveTo = this.parentElement.parentElement == shoppingList ? cartList : shoppingList;
        moveTo.appendChild(this.parentElement);
    }

    for (let i = 0; i < buyButton.length; i++) {
        buyButton[i].addEventListener("click", moveToCartList);
    }
});



/* 4) Trykk på 'btn-unbuy-item' for å flytte varen fra 'in-cart-list' til 'shopping-list' */
/* Her må jeg få listelementer med knapper til å fungere, før denne kan fungere */
/* https://stackoverflow.com/questions/40290096/moving-items-between-two-lists-in-javascript */

document.addEventListener("DOMContentLoaded", function() {
    let unBuyButton = document.getElementById('.btn-unbuy-item');
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











/* * * * * * * IKKE FÅTT TIL Å FUNGERE ENNÅ * * * * * * * /


/* 5) Trykk på 'btn-delete-item' for å slette en vare fra 'shopping-list' */

/*
function deleteFromShoppingList() {
    button.addEventListener('click', function() {
        this.parentNode.remove();
        });
        
        document.getElementById('shopping-list').appendChild(parent);
} */


function deleteFromShoppingList() {
    let listElement = document.getElementById('shopping-list li');
    button.addEventListener('click', function() {
        listElement.parentNode.removeChild(listElement);
    });
}


/* https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
let node = document.getElementById('shopping-list');
if (node.parentNode) {
  node.parentNode.removeChild(node);
} */


/* 6) Trykk på 'btn-delete-item2' for å slette en vare fra 'in-cart-list' */
/* https://forum.freecodecamp.org/t/removechild-only-removing-one-li-element/314232/2 */
/* http://jsfiddle.net/krasimir/UhhuX/ */













