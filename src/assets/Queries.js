// Queries.js
import flightData from "./Data"; // Ensure the data is imported correctly

// Query 1: Select all flight details
export const getAllFlightDetails = () => {
  return flightData;
};

// Query 2: Select airline name, arrival, and departure airports
export const getAirlineAndAirports = () => {
  return flightData.map(
    ({ airline_name, departure_airport, arrival_airport }) => ({
      airline_name,
      departure_airport,
      arrival_airport,
    })
  );
};

// Query 3: Select airline name and flight number
export const getAirlineNamesAndNumbers = () => {
  return flightData.map(({ airline_name, flight_number }) => ({
    airline_name,
    flight_number,
  }));
};
