


const pizzas = [
  { id: 1, name: 'Cheese', price: 10 },
  { id: 2, name: 'Pepperoni', price: 20 },
  { id: 3, name: 'Hawaiian', price: 15 },
  { id: 4, name: 'Veggie', price: 12 }
]

export default function handler(req, res) {
  res.status(200).json(pizzas)
}