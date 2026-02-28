function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
