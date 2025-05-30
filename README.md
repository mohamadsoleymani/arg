
# Cement Commodity Exchange

## 📌 Project Description
This project is a frontend application that displays supply and physical trading data for cement in the commodity exchange. Users can view information by brokerage, including production date and price, through both tables and bar charts.

## 🎯 Purpose
The aim of the project is to provide access to physical market data related to cement from different brokerage firms. It allows filtering by date range and displays the results in a user-friendly and visual way.

## 🧾 Data Source and Filtering

This project uses JSON files obtained from the Cement Commodity Exchange. Two primary data types are defined:

- **Supply Information**
- **Physical Trading Information**

Each of these contains three filtering fields:

- **Main Group:** Includes "All" and "Industrial"
- **Group:** Includes "All" and "Cement"
- **Suppliers:** Refers to brokerage firms that have offered commodities in the cement exchange

There are also two date fields: **From Date** and **To Date**, which allow users to filter and view offers made during the last 1 months (Ordibehesht 1st to Khordad 1st). These dates affect:

- The supply information table
- The physical trading data chart and table

In the **Physical Trading Chart**:
- The **horizontal axis** represents the date
- The **vertical axis** shows the offered price

Once the user selects a date range , the table instantly updates to reflect all the offered commodities, their names, and their prices within the selected time range.

If no data exists for the selected dates, a message will appear:
> *"No data found in the selected time range."*

## 📊 Features
- Display cement supply and physical trading data by broker
- View data in tables and bar charts
- Filter by date range (using Jalali date picker)
- Responsive and modern UI
- Real-time search, pagination, and column filtering

## 🛠️ Technologies Used
- **React.js + vite** – Main frontend framework
- **Tailwind CSS** – For responsive design and styling
- **MUI (Material UI)** – Component library for UI elements for example date picker , select ,......
- **Jalali Moment** – For Persian calendar and date filtering
- **Mantine React Table** – Powerful table library with search and pagination
- **Recharts** – For rendering interactive bar charts
- **Redux Toolkit** – For state management
- **IconSax** – Icon set used in UI

## Run Locally

Clone the project

```bash
  git clone https://github.com/mohamadsoleymani/arg.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## ⏳ Timeline
The project is commissioned by **Espandar Civil Industries Co.** and is expected to be completed within **30 to 40 days**. The final delivery is scheduled for the end of **Ordibehesht** (May).

## 👥 Stakeholders
- General public (for viewing cement supply)
- Company managers (for market evaluation)
- Stock market analysts (for market research)
- Other related professionals

## 👨‍💻 Author
- **Name:** Mohammad Soleymani Asl  
- **Student ID:** 4001574105496  
- **Github Link:** https://github.com/mohamadsoleymani
- **Instructor:** Dr. Iman Khosrowjerdi