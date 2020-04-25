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
	console.log(event);
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


