import { useEffect, useState } from "react";
import { getProducts } from "../services/products";

export const useProductList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      getProducts()
        .then((resp) => resp.json())
        .then((data) => setProduct(data))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);
  return { product, loading };
};
