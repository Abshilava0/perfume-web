'use client';

import { useState } from "react";
import perfumes from "../data";
import Image from "next/image";
import ShinyText from "../components/ShinyText";
import '@/app/components/ShinyText.css'
import classes from "./page.module.css";

export default function Fragrance() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // Add item or increase count
  const handleAddToCart = (perfume) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === perfume.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === perfume.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...perfume, count: 1 }];
    });
  };

  // Increase count
  const handleIncrease = (id) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Decrease count or remove
  const handleDecrease = (id) => {
    setCart((cart) =>
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  // Cart icon (you can use an SVG or emoji)
  const CartIcon = (
    <span
      className={classes.cart}
      onClick={() => setCartOpen(!cartOpen)}
    >
      🛒
      {cart.length > 0 && (
        <span
          style={{
            position: "absolute",
            top: 0,
            right: -10,
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "0 6px",
            fontSize: "0.7em",
          }}
        >
          {cart.reduce((sum, item) => sum + item.count, 0)}
        </span>
      )}
    </span>
  );

  return (
    <div className={classes.container}>
      <div style={{ position: "fixed", top: 30, right: 40, zIndex: 1000 }}>
        {CartIcon}
      </div>
      {cartOpen && (
        <div
          style={{
            position: "fixed",
            top: 70,
            right: 40,
            background: "#222",
            color: "white",
            padding: "2em",
            borderRadius: "12px",
            minWidth: "320px",
            zIndex: 1001,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      marginBottom: "1em",
                      display: "flex",
                      alignItems: "center",
                      gap: "1em",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.perfumeNumber}
                      width={40}
                      height={60}
                    />
                    <div style={{ flex: 1 }}>
                      <div>{item.perfumeNumber}</div>
                      <div>${item.price}</div>
                    </div>
                    <button
                      onClick={() => handleDecrease(item.id)}
                      style={{ fontSize: "1.2em", width: 32 }}
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      style={{ fontSize: "1.2em", width: 32 }}
                    >
                      +
                    </button>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  borderTop: "1px solid #444",
                  marginTop: "1em",
                  paddingTop: "1em",
                  textAlign: "right",
                  fontWeight: "bold",
                }}
              >
                Total: ${totalPrice.toFixed(2)}
              </div>
            </>
          )}
          <button
            onClick={() => setCartOpen(false)}
            style={{
              marginTop: "1em",
              width: "100%",
              padding: "0.4em 0",
              fontSize: "1.1em",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-fraunces), serif",

            }}
          >
            Close
          </button>
        </div>
      )}
      <div className={classes.card}>
        <ul>
          {perfumes.map((perfume) => (
            <li key={perfume.id}>
              <Image
                src={perfume.image}
                alt={perfume.perfumeNumber}
                width={210}
                height={300}
              />
              <ShinyText
                text={perfume.perfumeNumber}
                disabled={false}
                speed={3}
                className="custom-class-card-h1"
              />
              <ShinyText
                text={perfume.description}
                disabled={false}
                speed={3}
                className="custom-class-card-desc"
              />
              <ShinyText
                text={`$${perfume.price}`}
                disabled={false}
                speed={3}
                className="custom-class-card-price"
              />
              <button onClick={() => handleAddToCart(perfume)}>
                <ShinyText
                  text="Add To Cart"
                  disabled={false}
                  speed={3}
                  className="custom-class-card-button"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}