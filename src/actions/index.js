export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addFlavor = (flavor) => {
  const { name, brand, price, description, quantity, id } = flavor;    
  return {
    type: 'ADD_FLAVOR',
    name: name,
    brand: brand,
    price: price,
    description: description,
    quantity: quantity,
    id: id
  }
}