# 🏎️ Formula One - API 🏎️

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-^4.15.0-blue?style=flat&logo=fastify&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat)


## 📖 About
This project is a **Minimal API** created using **Fastify** and **TypeScript**. Its purpose is to provide basic data as a mockup for front-end applications, offering a fresh alternative to conventional mock APIs.

> Based on the "DIO" NodeJs course, by Felipão, with improvements implemented for a more automated dynamic system

## Technologies 💻

- 🟢 **Node.js** 
- 🔴 **Fastify**
- 🔵 **TypeScript**
- ⚫ **CORS**



## 🚀 Features

- Provides endpoints to retrieve basic data about Formula 1 teams and drivers.
- Simulate a real API environment for front-end development.
- Includes mock data for easy testing and integration.



## Installation & Setup ⚙️

1. Clone the repository:
    ```bash
    git clone https://github.com/Luixs/NodeJS-FormulaOneFastify.git
    ```

2. Navigate to the project folder:
    ```bash
    cd formula-one
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm run start:watch  #to listen your changes
    ```

By default, the server runs on **http://localhost:3333**.


## API Endpoints 📡

### Base URL: `http://localhost:3333`

### **1. Get All Teams**
**Endpoint:** `/api/teams`  
**Method:** `GET`

**Response:**
```json
{
  "dummyTeams": [
    { "id": 1, "name": "McLaren", "base": "United Kingdom" },
    { "id": 2, "name": "Mercedes", "base": "United Kingdom" },
    { "id": 3, "name": "Red Bull Racing", "base": "United Kingdom" }
  ]
}
```

---

### **2. Get All Drivers**
**Endpoint:** `/api/drivers`  
**Method:** `GET`

**Response:**
```json
{
  "dummyDrivers": [
    { "id": 1, "name": "Max Verstappen", "team": "Red bull Racing" },
    { "id": 2, "name": "Lewis Hamilton", "team": "Ferrari" },
    { "id": 3, "name": "Lando Norris", "team": "McLaren" }
  ]
}
```

---

### **3. Get Driver by ID**
**Endpoint:** `/api/drivers/:id`  
**Method:** `GET`

**Parameters:**
- `id` (number): ID of the driver to retrieve.

**Responses:**
- **Success (200):**
  ```json
  {
    "driver": { "id": 1, "name": "Max Verstappen", "team": "Red bull Racing" }
  }
  ```
- **Not Found (204):**
  ```json
  {
    "message": "Driver not found!"
  }
  ```
