const test = document.getElementById('test');

test.innerHTML = "my name is Constance"


//Creating new element

const newItem = document.createElement("h1");

const headingTitle = document.createTextNode("This is the new element");

newItem.appendChild(headingTitle);

const printToDom = document.getElementById("newElement");

printToDom.appendChild(newItem);

//FAVORITE DISH

const newDish = document.createElement('h1');

const headingDish = document.createTextNode("My favourite dish is Biriani rice");

newDish.appendChild(headingDish);

const printToDish = document.getElementById("favDish");

printToDish.appendChild(newDish);

//FAVORITE PET

const newPets = document.createElement('h1');

const headingPets = document.createTextNode("My favourite pet is Puppy");

newPets.appendChild(headingPets);

const printToPet = document.getElementById("favPets");

printToDish.appendChild(newPets);

//FAVORITE COLOR

const newColors = document.createElement('h1');

const headingColors = document.createTextNode("My favourite color is Blue");

newColors.appendChild(headingColors);

const printToColors = document.getElementById("favColors");

printToColors.appendChild(newColors);
