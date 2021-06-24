// Setting document.body to a variable
var body = document.body;

// Creating the element of type h1, h2, img, p, ol
var h1Elem = document.createElement("h1");
var h2Elem = document.createElement("h2");
var imgElem = document.createElement("img");
var imgDescrElem = document.createElement("p");
var listTitleElem = document.createElement("p");
var olElem = document.createElement("ol");

//create an array with lists of car favorties
carArray = ["Honda NSX", "Toyota Tacoma", "Subaru WRX STI", "Porsche 911 Turbo"];

// link to img src
imgElem.src = "img/Dog.jpg";

// Giving h1Elem its text content. 
// h1Elem.innerHTML would work as well - and is more useful for non-string-based HTML elements
h1Elem.textContent = "Welcome to my page";

//give the h2 subheader, img, img description, 
h2Elem.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";
imgElem.innerHTML = (imgElem);
imgDescrElem.textContent = "This is my golden doodle his name is Auggie";
listTitleElem.textContent = "My favorite cars are:"

// Adding the element to the document.body which is referred to now simply as body.
body.appendChild(h1Elem);
body.appendChild(h2Elem);
body.appendChild(imgElem);
body.appendChild(imgDescrElem);
body.appendChild(listTitleElem);

//function to create the list, using the inline LI and looping through the carList array
for(var i = 0; i < carArray.length; i++)
{
    olElem.innerHTML +=  "<li>" + carArray[i] + "</li>";
}

//after loop is finished, append it to body for display
body.appendChild(olElem);

//body styling
body.style.textAlign = "center";

//listTitleElem Styling
listTitleElem.style.textAlign = "left";
listTitleElem.style.margin="0";

//imgElem Styling
imgElem.style.width="15%";

//olElem Styling
olElem.style.textAlign = "left";
olElem.style.background="black";
olElem.style.color="white";
olElem.style.borderColor="black";

/* Now it's your turn! Keep in mind, not all elements will follow this exact process.
For example, <ul> and its child <li> elements will need an extra step or two to render properly.
Images too, will need an href added... etc.
*/