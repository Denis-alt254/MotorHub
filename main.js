import { searchCar, carData } from "./data/mock_data.js";

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
},{threshold: 0.2});

const hiddenElements = document.querySelectorAll('.articleContainer');
const hiddenContainers = document.querySelectorAll('.grid-container')
const hiddenElementsfooter = document.querySelectorAll("footer")
hiddenElements.forEach((el) => observer.observe(el))
hiddenContainers.forEach((el) => observer.observe(el))
hiddenElementsfooter.forEach((el) => observer.observe(el))

const getStars = (rating) => {
    const rounded = Math.round(rating);

    return "⭐".repeat(rounded) + "☆".repeat(5-rounded);
};


const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('button');
const searchResult = document.querySelector('#search-result');

const handleSearch = () => {
    const query = searchInput.value;
    const filteredData = searchCar(query);

    if (filteredData.length === 0) {
        searchResult.innerHTML = query ? `<p style="color: white;">No results found for "${query}"</p>` : "";
        return;
    }

    // Using ${} for template literals
    searchResult.innerHTML = filteredData.map(car => `
        <div class="result-card">
            <span>Brand: ${car.brand}</span>
            <span>Model: ${car.model}</span>
            <span>Year: ${car.year}</span>
            <div class="rating">
                ${getStars(car.reliability)}
                <small>(${car.reliability})</small>
            </div>
            <a href="details.html">more details...</a>
        </div>
    `).join('');
};

// Listen to both the button and the live typing
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('input', handleSearch);       

const displayResult = document.querySelector('.grid-container')

const displayCars = (carData) => {
    displayResult.innerHTML = carData.map((car) => `
        <div class="container">
            <div><img src=${car.image}></img></div>
            <span>Brand: ${car.brand}</span>
            <span>Model: ${car.model}</span>
            <span>Year: ${car.year}</span>
            <span>Engine: ${car.engine}</span>
            <span>FuelConsumption: ${car.fuelConsumption}</span>
            <span>Transmission: ${car.transmission}</span>
            <span>TopSpeed: ${car.topSpeed}</span>
            <span>SparePartsAvailability: ${car.sparePartsAvailability}</span>
            <div class="rating">
                ${getStars(car.reliability)}
                <small>(${car.reliability})</small>
            </div>
            </div>
        `).join('')
};

displayCars(carData)