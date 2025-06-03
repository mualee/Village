import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "oq3v3hi4",
  dataset: "production",
  apiVersion: "0-0-0",
  useCdn: false,
});
