import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/ProductsData";
import "./Products.css";

function Products() {
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter((p) => p.category === category);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  };

  const buyNow = (product) => {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      orderId: Date.now(),
      product,
      quantity: 1,
      orderDate: new Date().toLocaleString(),
      status: "Placed",
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    navigate("/orders");
  };

  return (
    <div>
      <h2>Product Categories</h2>
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Mobiles")}>Mobiles</button>
      <button onClick={() => setCategory("Electronics")}>Electronics</button>
      <button onClick={() => setCategory("Fashion")}>Fashion</button>
      <button onClick={() => setCategory("Sports")}>Sports</button>
      <button onClick={() => setCategory("Home Appliances")}>
        Home Appliances
      </button>

      <hr />

      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="buy-btn" onClick={() => buyNow(product)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
