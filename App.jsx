import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, error, loading ] = customReactQuery('/api/products')
  if (error) {
    return <h1>Something went wrong </h1>
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>API handling</h1>
      <h2>Number of products are: {products.length}</h2>
    </>
  );
}

export default App;

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false)
      }
    })();
  }, []);

  return [products, error, loading]
}