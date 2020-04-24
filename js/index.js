// Your code goes here

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
/*
document.querySelector('header').addEventListener('click', clickEventHandler, {capture: true});
*/

// mouseover
const funBus = document.querySelector('h1');

funBus.addEventListener('mouseover', (event) => { 
	event.target.style.color = "pink";
	// reset the color after a short delay 
	setTimeout(() => {
		event.target.style.color = "";
	}, 2500);
}) 



