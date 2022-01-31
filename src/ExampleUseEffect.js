import React, { useEffect, useState } from 'react';

const ExampleUseEffect = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(
        'https://tiendavirtualmern.herokuapp.com/api/products?keyword=&pageNumber=1'
      );
      const data = await res.json();
      setProducts(data.products);
    };
    dataFetch();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li>{product.description}</li>
      ))}
    </ul>
  );
};

export default ExampleUseEffect;
