import { useGetProductsQuery } from './productApi';
import './App.css'

function App() {
  const { data, isLoading, error } = useGetProductsQuery();
  if (isLoading) return <h2>Loading product</h2>
  if (error) return <h2>Error in fetching data</h2>

  return (
    <>
      <div className="container">
        <h1>Product list</h1>
        {data.map((product) => (

          <div className="card" key={product.id}>
            <p >{product.name}</p>
            <p>{product.description}</p>
            <h5>Rs.{product.price}</h5>

          </div>
        ))}
      </div>
    </>
  )
}

export default App
