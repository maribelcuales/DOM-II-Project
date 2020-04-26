// Your code goes here

/*
// Sample Code 
function clickEventHandler(event) {
	event.preventDefault(); 
	console.log(event.type + '!!!!!!!!!!!!!!!!');
	console.log(event.target);  
	console.log(event.currentTarget); 
}

window.addEventListener('click', clickEventHandler);
document.addEventListener('click', clickEventHandler);
homeLink.addEventListener('click', clickEventHandler);
// Prevent the BUBBLING PHASE 
document.querySelector('a').addEventListener('click', event => {
	// we are going to sabotage bubbling
	event.stopImmediatePropagation(); 
	console.log('hahaha, sabotaging propagation!!!')
})

document.querySelector('nav').addEventListener('click', clickEventHandler);
document.body.addEventListener('click', clickEventHandler);

// header will launch during capture phase 
document.querySelector('header').addEventListener('click', clickEventHandler, true);

// A variaton of code above (launching header during capture phase) 
document.querySelector('header').addEventListener('click', clickEventHandler, {capture: true});
*/


// mouseover: fired at an Element when a pointing device is used to move the cursor onto the element or one of its child elements.

const funBus = document.querySelector('h1');

funBus.addEventListener('mouseover', (event) => { 
	// highlights the target 
	event.target.style.color = "pink";
	console.log(event, 'pink!');
	// reset the color after a short delay 
	setTimeout(() => {
		event.target.style.color = "";
	}, 2500);
}) 

// click event 
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(element => {
	element.addEventListener('click', (event) => {
		event.target.style.color = 'orange'; 
		console.log('nav link is clicked!'); 
	})
})

// mouseenter event 
const busImg = document.querySelector('.bus-img'); 

busImg.addEventListener('mouseenter', () => {
	busImg.style.transform = "scale(1.08)";
	busImg.style.transition = "transform 1s";
	console.log(event, 'scale up!');
})

// mouseleave event
busImg.addEventListener('mouseleave', () => {
	busImg.style.transform = "scale(1)";
	console.log(event, 'scale down!'); 
})

/*
// mousedown
const textContent = document.querySelectorAll('p');

textContent.forEach(element => {
	element.addEventListener('mouseDown', (event) => {
		event.target.style.color = "green";
		console.log(event, 'text down!'); 
	})
})

// mouseUp
textContent.forEach(element => {
	element.addEventListener('mouseUp', (event) => {
		event.target.style.color = "purple";
		console.log(event, 'text up!'); 
	})
})
*/

// double click  
const textContent = document.querySelectorAll('p');

textContent.forEach(elem => {
	elem.addEventListener('dblclick', (event) => {
		event.target.style.color = "green";
		console.log(event, 'read me!')
	})
})


// event handlers for h2 
const titles = document.querySelectorAll('h2'); 

titles.forEach(elem => {
	elem.addEventListener('mouseover', (event) => { 
		event.target.style.color = "purple";
		console.log(event, 'purple text!');
		//setTimeout(() => {
		//	event.target.style.color = "";
		//}, 2500);
	})
	elem.addEventListener('mouseleave', (event) => {
		event.target.style.color = "";
		console.log(event, 'orig text!'); 
	});
})

// double click event
const welcome = document.querySelector('.welcome');

welcome.addEventListener('dblclick', (event) => {
	welcome.style.transform = "scale(1.08)"; 
	welcome.style.transition = "transform 1s"; 
	welcome.style.color = "yellow";  
	console.log(event, 'double clicked!');
})

// click and image turn event handler for text images 
const textImage = document.querySelectorAll('#text-image');

textImage.forEach(elem => {
	elem.addEventListener('click', (event) => { 
		event.target.style.transform = "rotateY(180deg)"; 
		event.target.style.transition = "transform 1s";
		console.log(event, 'image turn!'); 
	})
})
