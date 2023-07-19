import client from "../apollo/client";
import { GetAllPages, GetContactPage, GetHomePage } from "../graphql";
import axios from "axios";

export const getAllPages = async () => {
  const pages = await client.query({
    query: GetAllPages,
  });

  await client.cache.reset();

  return await pages?.data?.pages?.nodes;
};

export const getContactPage = async () => {
  const pages = await client.query({
    query: GetContactPage,
  });

  await client.cache.reset();

  return await pages?.data?.nodeByUri.blocks;
};

export const getHomePage = async () => {
  const pages = await client.query({
    query: GetHomePage,
  });

  return await pages?.data;
};

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const formData = req.body;

    const wordpressGraphQLEndpoint = process.env.WP_GRAPHQL_URL || "";

    try {
      await axios.post(wordpressGraphQLEndpoint, {
        query: `
          mutation {
            submitContactForm(input: {
              fullname: "${formData.name}",
              email: "${formData.email}",
              contactnumber: "${formData.contactnumber}",
              message: "${formData.message}"
            }) {
              id
            }
          }
        `,
      });

      res.status(200).json({ message: "Form submission successful" });
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ message: "Form submission failed" });
    }
  } else {
    res.status(405).end();
  }
}
