import { fetchClient } from "../../services/client-fetch.js";

export async function clients() {
  const clients = await fetchClient({ id: 1 });
  console.log(clients);
}