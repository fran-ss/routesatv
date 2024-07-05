import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Link
          to={`datail/${product.id}`}
          style={{
            display: "flex",
            gap: 10,
            textDecoration: "none",
            background: "pink",
            marginBottom: 10,
          }}
        >
          <h2>{product.id}</h2>
          <h2>{product.name}</h2>
        </Link>
      ))}
    </div>
  );
}
