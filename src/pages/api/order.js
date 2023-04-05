let order = [];


export default function handler(req, res) {
  console.log('req.body', req.body)
  if (req.method === 'POST') {
    let pizza = req.body;
    order.push(pizza)
    res.status(200).json(order)
  }
}