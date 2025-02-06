import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export interface Details {
  id: string;
  title: string;
  products: number;
  imageUrl: string;
  price: number;
  description: string;
}

const useProductDetails = (id: string) => {
  const [details, setDetails] = useState<Details | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = ` 
          *[_type == "products" && _id == $id]{
            "id": _id,
            title,
            price,
            products,
            description,
            "imageUrl": image.asset->url
          }[0]
        `;

        const details: Details | null = await client.fetch(query, { id: id });
        console.log("Fetched details: ", details); // Log the fetched details
        setDetails(details);
      } catch (err) {
        console.error('Error fetching product details:', err); // Log the error
        setError('Failed to fetch product details');
      }
    };

    fetchData();
  }, [id]);

  return { details, error };
};

export default useProductDetails;