//your code here
//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
touristSpots.sort((a, b)=>{
	const func = str => str.replace(/^(a|an|the)\s+/i, '');
	const modA = func(a);
	const modB = func(b);
	return modA.localeCompare(modB);
});

const ul = document.getElementById('bands');
for(const spot of touristSpots){
	const li = document.createElement('li');
	li.innerHTML = spot;
	ul.appendChild(li);
}