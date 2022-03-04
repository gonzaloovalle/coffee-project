"use strict"


function renderCoffee(coffee) {
    var html = '<div class="coffee">'
    html += '<h3 class="name">' + coffee.name + '</h3>';
    html += '<p class="roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchValue.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all" && coffee.name.toLowerCase().includes(searchValue.value.toLowerCase())) {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e) {
    e.preventDefault();
    let newCoffee = {
    id : coffees.length + 1,
    name : coffeeName.value,
    roast : roastAdd.value
    }
    coffees.push(newCoffee)
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let searchValue = document.querySelector('#coffee-search');
let coffeeName = document.querySelector('#coffee-add');
let roastAdd = document.querySelector('#roast-add');

tbody.innerHTML = renderCoffees(coffees);

coffeeName.addEventListener('submit', addCoffee);
roastAdd.addEventListener('submit', addCoffee);
roastSelection.addEventListener('change', updateCoffees);
searchValue.addEventListener('keyup', updateCoffees);
submitButton.addEventListener('click', addCoffee);
submitButton.addEventListener('click', updateCoffees);
