import { fetchClient } from "../../services/client-fetch.js";
import { showClient } from "./show.js";

export async function clients({ id }) {
  const client = await fetchClient({ id });

  showClient({ client });
}