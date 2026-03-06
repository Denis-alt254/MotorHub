# 🚗 MortoHub – Car Information Platform (MVP)

MortoHub is a web platform that helps users **research, compare, and evaluate cars** before buying or maintaining them.
The system provides centralized information about vehicles including **price estimates, fuel consumption, reliability, spare parts availability, and user ratings**.

The goal of MortoHub is to make it easier for people to **make informed decisions about vehicles** by providing essential car data in one place.

---

# 📌 Project Overview

When people want to buy a car, they often have to search across many websites to find reliable information about:

* Car specifications
* Market price
* Fuel economy
* Reliability
* Spare parts availability
* Owner experiences

**MortoHub solves this problem by aggregating key car information into a single platform.**

This repository contains the **frontend MVP version** built with **HTML, CSS, and JavaScript**.

---

# 🎯 MVP Features

### 🔎 Car Search

Users can search for cars by:

* Brand
* Model
* Year

---

### 🚘 Car Listings

Displays available vehicles using a card layout showing:

* Car image
* Brand
* Model
* Year
* Estimated price

---

### 📄 Car Details Page

Each car has a dedicated page displaying:

* Engine specifications
* Transmission type
* Fuel type
* Fuel consumption
* Reliability score
* Spare parts availability
* Estimated price range

---

### ⭐ Car Rating System

Users can rate cars using a **5-star rating system**.

Ratings categories:

* Reliability
* Fuel economy
* Maintenance cost

---

### 💬 User Reviews

Users can submit comments describing their experience with the car.

---

# 🧱 Technology Stack

Frontend:

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla)**

Tools:

* **Git**
* **GitHub**

Deployment Options:

* GitHub Pages
* Netlify
* Vercel

---

# 📁 Project Structure

```
mortoHub-frontend
│
├── index.html
├── cars.html
├── car-details.html
│
├── css
│   └── style.css
│
├── js
│   ├── main.js
│   └── cars.js
│
├── assets
│   └── images
│
└── README.md
```

---

# 📄 Pages

### Home Page

Contains:

* Navigation bar
* Search form
* Featured cars

---

### Cars Page

Displays:

* Search filters
* List of available vehicles

---

### Car Details Page

Displays detailed information about a selected car including:

* Specifications
* Fuel consumption
* Reliability rating
* Spare parts availability
* User reviews

---

# ⚙️ How It Works

1. User opens the MortoHub homepage.
2. User searches for a car by brand, model, or year.
3. Matching cars are displayed on the results page.
4. User clicks a car to view detailed information.
5. User can rate the car and leave a review.

---

# 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Denis-alt254/mortohub.git
```

---

### 2️⃣ Navigate to the Project Folder

```bash
cd mortohub
```

---

### 3️⃣ Open the Project

Open `index.html` directly in a browser or run a local server.

Example:

```bash
live-server
```

---

# 📊 Example Car Data

Example object used in the MVP:

```javascript
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2018,
  price: 19000,
  engine: "1.8L",
  transmission: "Automatic",
  fuelType: "Petrol",
  fuelConsumption: "7L/100km",
  reliability: 8.5,
  sparePartsAvailability: "Easy"
};
```

---

# 📱 Responsive Design

The platform is designed to work across devices:

* Desktop
* Tablet
* Mobile

Implemented using **CSS Flexbox and CSS Grid**.

---

# 🔮 Future Improvements

Planned features for future versions of MortoHub:

### 🚘 Car Comparison Tool

Compare multiple vehicles side-by-side.

### 🔧 Spare Parts Database

Provide spare parts pricing and availability by region.

### 📊 Advanced Filters

Filter cars by:

* Price range
* Fuel consumption
* Reliability score
* Body type

### 🤖 Smart Recommendations

Suggest cars based on user preferences.

### 🌍 Regional Car Data

Localized information for different countries.

### ⚙️ Backend Integration

Future versions will integrate:

* Node.js
* Express
* MongoDB

---

# 📈 Project Goals

The MortoHub project aims to:

* Help users make **better car buying decisions**
* Provide a **centralized car information database**
* Serve as a **portfolio full-stack development project**

---

# 👨‍💻 Author

Developed by

**Denis-alt254**
**B-Koros**

---

# 📜 License

This project is licensed under the **MIT License**.

---

# ⭐ Contributions

Contributions are welcome.

You can:

* Open issues
* Suggest improvements
* Submit pull requests

---

# 💡 Inspiration

MortoHub is inspired by car research platforms such as:

* Kelley Blue Book
* Edmunds
* AutoTrader

But focuses on **simplified vehicle research and transparency for users**.
