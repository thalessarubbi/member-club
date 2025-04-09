import { fetchClient } from "../../services/client-fetch.js";
import { showClient } from "./show.js";

export async function clients() {
  const client = await fetchClient({ id: 4 });

  showClient({ client });
}