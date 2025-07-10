import ProductCard from './ProductCard';


export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: '$1.00', inStock: true },
  { id: 2, name: 'Banana', category: 'Fruits', price: '$0.75', inStock: true },
  { id: 3, name: 'Milk', category: 'Dairy', price: '$2.50', inStock: true },
  { id: 4, name: 'Cheese', category: 'Dairy', price: '$3.00', inStock: true }
];

function ProductList({ selectedCategory, onAddToCart }) {
  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter(
          product => product.category === selectedCategory
        );

  if (filteredProducts.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;