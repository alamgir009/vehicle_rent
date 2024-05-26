import axios from "axios";

const API_URL = "http://localhost:8080";

export const getVehicleTypes = async () => {
  const response = await axios.get(`${API_URL}/vehicle-types`);
  return response.data;
};

export const bookVehicle = async (bookingData) => {
  const response = await axios.post(`${API_URL}/book`, bookingData);
  return response.data;
};
