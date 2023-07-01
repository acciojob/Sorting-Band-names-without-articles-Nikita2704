

//your code here

let bandNames = ['The Beatles', 'Led Zeppelin', 'Metallica', 'Aerosmith', 'Pink Floyd'];

// Function to remove articles from band names
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names in lexicographic order without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create the ul element
let ulElement = document.createElement('ul');
ulElement.id = 'band';

// Add the band names as list items to the ul element
bandNames.forEach((name) => {
  let liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

// Append the ul element to the body of the document
document.body.appendChild(ulElement);