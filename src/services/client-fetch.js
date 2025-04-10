import { apiConfig } from "./api-config.js";

export async function fetchClient({ id }) {
  try {
    const response = await fetch(apiConfig.baseURL + `/clients/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    alert('Por favor digite um ID válido');
    console.error(error);
  }
}