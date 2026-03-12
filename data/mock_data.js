export const carData = [
    {
        engine: "2.0L Petrol Engine",
        fuelConsumption: "6.5L / 100km",
        model: "Ford",
        brand: "Mazda",
        year: 2025,
        transmission: "Automatic",
        reliability: "4.5",
        topSpeed: "180km/h",
        sparePartsAvailability: "Easily Available"
    },
    {
        engine: "2.0L Petrol Engine",
        fuelConsumption: "6.5L / 100km",
        model: "Brado",
        brand: "Toyota",
        year: 2025,
        transmission: "Automatic",
        reliability: "4.5",
        topSpeed: "180km/h",
        sparePartsAvailability: "Easily Available"
    },
    {
        engine: "2.0L Petrol Engine",
        fuelConsumption: "6.5L / 100km",
        model: "V8",
        brand: "Macendese",
        year: 2025,
        transmission: "Automatic",
        reliability: "4.5",
        topSpeed: "180km/h",
        sparePartsAvailability: "Easily Available"
    }
]

export const searchCar = (car) => {
    //check for !car
    if(!car) return []

    //handle case-sensitive in search
    const lowerCaseCar = car.toLowerCase()

    return carData.filter(item => {
        item.model.toLocaleLowerCase().includes(lowerCaseCar)
        item.brand.toLocaleLowerCase().includes(lowerCaseCar)
    })
}