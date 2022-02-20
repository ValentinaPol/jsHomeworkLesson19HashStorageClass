
// DRINKS_HASH_FUNC Project
let buttons = document.querySelectorAll('button');

class HashStorageClass{
    constructor(){
        this.obj = {};
    }

    addValue(key,value){
        this.obj[key] = value;
    } 
    
    getValue(key){
        return this.obj[key];
    }

    deleteValue(key){
        if(this.obj[key] !== undefined) {
            delete this.obj[key]
            return true;
        } else {
            return false;
        }
    }

    getKeys(){
        let arrKeys = [];
        for (let key in this.obj){
            arrKeys.push(key);
        }
        return arrKeys;
    } 
}

let drinkStorage = new HashStorageClass();

buttons[0].addEventListener('click', function inputDrinkData() {
    let nameDrink = prompt("введите название напитка, '' ");
    let isAlc = confirm("он алкогольный?");
    let alc = isAlc ? 'да' : 'нет';
    let structure= prompt("способ приготовления, '' ");
    let result = "напиток: " + nameDrink + " алкогольный: " + alc + " рецепт приготовления: " + structure;
    drinkStorage.addValue(nameDrink, result);
})

buttons[1].addEventListener('click', function getDrinkData() {
    let nameDrink = prompt("введите название напитка, '' ");
    let result = drinkStorage.getValue(nameDrink);
    if(result !== undefined) {
        alert(result);
    } else {
        alert ("Такой напиток отсутствует"); 
    }
})

buttons[2].addEventListener('click', function deleteDrinkData() {
    let nameDrink = prompt("введите название напитка, '' ");
    alert(drinkStorage.deleteValue(nameDrink) ? "Напиток удален" : "Такой напиток отсутствует");
})

buttons[3].addEventListener('click', function drinksList() {
    alert(drinkStorage.getKeys());
})









 
