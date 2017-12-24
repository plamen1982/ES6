function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((sum, item) => {
            return  sum + item.price }, 0)
        },
        findPriceForTitle: function(title) {
            return this.inventory.find( book => book.title === title).price;

        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.findPriceForTitle('Harry Potter'));


//Enhanced object literal

function createBookShopEnhanced(inventory) {
    return {
        //when key and a value are identical, use only single word
        inventory,
        //in ES6 we can remove keyword function and :
        inventoryValue() {
            return this.inventory.reduce((sum, item) => {
            return  sum + item.price }, 0)
        },
        findPriceForTitle(title) {
            return this.inventory.find( book => book.title === title).price;

        }
    };
}

const bookShopEnhanced = createBookShopEnhanced(inventory);

console.log(bookShopEnhanced.inventoryValue());
console.log(bookShopEnhanced.findPriceForTitle('Harry Potter'));


