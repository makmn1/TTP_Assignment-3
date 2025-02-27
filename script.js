
//1) Select the section with an id of container without using querySelector.
const cont = document.getElementById("container")
console.log(cont)


//2) Select the section with an id of container using querySelector.
const cont2 = document.querySelector("#container")
console.log(cont2)

//3) Select all of the list items with a class of "second".
const listItemsWithClass = document.getElementsByClassName("second")
console.log(listItemsWithClass)


//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const listItemWithOl = document.querySelector('ol').querySelector(".third")
console.log(listItemWithOl)


//5) Give the section with an id of container the text "Hello!".
cont.textContent = "Hello!"

//6) Add the class main to the div with a class of footer.
const classFooter = document.querySelector(".footer")
classFooter.className = "main"
console.log(classFooter)


//7) Remove the class main on the div with a class of footer.
classFooter.removeAttribute("class")
console.log(classFooter)

//8) Create a new li element.
const newLi = document.createElement("li")


//9) Give the li the text "four".
newLi.textContent = "four"


//10) Append the li to the ul element.
const ul = document.querySelector("ul")
ul.append(newLi)


//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const ol = document.querySelector("ol")
const listItems = ol.getElementsByTagName('li')
for(let i = 0; i < listItems.length; i++){
    listItems[i].style.backgroundColor = "green"
}


// 13) Remove the div with a class of footer.
const footerDiv = document.querySelector(".footer")
footerDiv.remove()


