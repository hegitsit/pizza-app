import React, { useEffect, useState } from 'react';
import axios from 'axios'


export default function Home() {

  const [pizzas, setPizzas] = useState([])
  const [orders, setOrder] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios('api/pizzas');
      setPizzas(results.data)
    }
    fetchData()
  }, [])

  const orderHandler = (e) => {
    axios.post('api/order', {
      pizzaType: e.name,
      price: e.price,
      id: e.id
    })
      .then((response) => setOrder(response.data))
      .then((error) => console.log(error));
  }

  return (
    <>

      <ul>
        {pizzas.map((item, key) => (
          <li key={key}>{item.name} <button onClick={() => orderHandler(item)}>Order</button></li>
        )
        )}
      </ul>

      {orders.map((order, key) => (
        <div key={key}> {order.pizzaType}</div>
      ))}
    </>
  )
}

