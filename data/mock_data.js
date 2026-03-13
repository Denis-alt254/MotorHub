export const carData = [
    {
        engine: "2.0L Petrol Engine",
        fuelConsumption: "6.5L / 100km",
        model: "Ford",
        brand: "Mazda",
        year: 2025,
        transmission: "Automatic",
        reliability: "4.3",
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
        reliability: "4.4",
        topSpeed: "180km/h",
        sparePartsAvailability: "Easily Available"
    },
    {
        engine: "2.0L Petrol Engine",
        fuelConsumption: "6.5L / 100km",
        model: "Corolla",
        brand: "Macendese",
        year: 2025,
        transmission: "Automatic",
        reliability: "4.5",
        topSpeed: "180km/h",
        sparePartsAvailability: "Easily Available"
    },
    {
        engine: "2.0L Petrol Engine",
        fuelConsumption: "6.5L / 100km",
        model: "Corolla",
        brand: "Toyota",
        year: 2025,
        transmission: "Automatic",
        reliability: "4.6",
        topSpeed: "180km/h",
        sparePartsAvailability: "Easily Available"
    },
    {
        engine: "2.0L Petrol Engine",
        fuelConsumption: "6.5L / 100km",
        model: "V8",
        brand: "Toyota",
        year: 2025,
        transmission: "Automatic",
        reliability: "4.8",
        topSpeed: "180km/h",
        sparePartsAvailability: "Easily Available"
    },
    {
        engine: "2.0L Petrol Engine",
        fuelConsumption: "6.5L / 100km",
        model: "V8",
        brand: "Ford",
        year: 2025,
        transmission: "Automatic",
        reliability: "3.2",
        topSpeed: "180km/h",
        sparePartsAvailability: "Easily Available"
    }
]

export const searchCar = (car) => {
    //handle case-sensitive in search
    const lowerCaseCar = car.toLowerCase().trim()

    //check for !car
    if(!lowerCaseCar) return []

    return carData.filter(item => {
        const modelMatch = item.model.toLocaleLowerCase().includes(lowerCaseCar)
        const brandMatch = item.brand.toLocaleLowerCase().includes(lowerCaseCar)
        return modelMatch || brandMatch
    })
}