let array = [];
let resultObj = {};
let finalObj;

function createObj(key, value) {
    let obj = {
        [key]: value,
    };

    return obj;
}

function addObj(){
    let emptyObj = {};

    for(let i = 0; i < array.length; i++){
        resultObj = Object.assign(emptyObj, array[i]);
    }

    return resultObj;
}

function addProperty() {
    let inputKey = document.getElementById('key');
    let inputKeyValue = inputKey.value;
    let inputValue = document.getElementById('value');
    let inputValueValue = inputValue.value;
    let newObj;

    newObj = createObj(inputKeyValue, inputValueValue); ////suzdavame obekt
    array.push(newObj);

    finalObj = addObj();                                ////dobavqme kum stariq obekt noviq
    let textarea = document.getElementById('result');
    textarea.textContent += "New property added!\n";
    inputKey.value = '';
    inputValue.value = '';
    console.log(finalObj);
}

function getProperty() {
    let inputKey = document.getElementById('key');
    let inputKeyValue = inputKey.value;
    let textarea = document.getElementById('result');
    
    textarea.textContent += `Value of key: "${inputKeyValue}" is ${finalObj[`${inputKeyValue}`]}.\n`;
    inputKey.value = '';

 }

 function getObject() {
    let textarea = document.getElementById('result');
    textarea.textContent += `The final object is: ${JSON.stringify(finalObj)}.\n`
}
