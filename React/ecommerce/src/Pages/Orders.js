import React, { useState } from "react";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const cancelOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.orderId === orderId
        ? { ...order, status: "Cancelled" }
        : order
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    alert("Order cancelled successfully");
  };

  return (
    <div>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="orders-container">
          {orders.map((order) => (
            <div key={order.orderId} className="order-card">
              <img src={order.product.image} alt={order.product.name} />
              <h4>{order.product.name}</h4>
              <p>Price: ₹{order.product.price}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Order Date: {order.orderDate}</p>
              <p>Status: {order.status}</p>

              {order.status === "Placed" && (
                <button
                  className="cancel-btn"
                  onClick={() => cancelOrder(order.orderId)}
                >
                  Cancel Order
                </button>
              )}

              {order.status === "Cancelled" && (
                <p className="cancelled-text">Order Cancelled</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
