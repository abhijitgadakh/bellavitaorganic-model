import React, { useState } from "react";

const TopThreeProducts = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const products = [
    {
      id: 1,
      brandName: "Bellavita",
      productName: "Hot Mess! Woman",
      rating: 4.5,
      reviews: 120,
      price: 39.99,
      img: "/products/1.png", // Replace with your actual image paths
    },
    {
      id: 2,
      brandName: "Bellavita",
      productName: "Ocean Man",
      rating: 4.2,
      reviews: 95,
      price: 49.99,
      img: "/products/2.png", // Replace with your actual image paths
    },
    {
      id: 3,
      brandName: "Bellavita",
      productName: "B.L.U. Man",
      rating: 4.7,
      reviews: 150,
      price: 45.99,
      img: "/products/3.png", // Replace with your actual image paths
    },
  ];

  const handleIndicatorClick = (index) => {
    setSelectedProductIndex(index);
  };

  // Styles encapsulated to avoid conflicts
  const styles = {
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "20px",
      margin: "20px", // Space around the container
    },
    imageContainer: {
      marginLeft: "-250px",
      position: "relative",
      textAlign: "center",
      width: "50%",
    },
    mainImage: {
      width: "450px",
      height: "auto",
    },
    dotIndicator: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
    },
    dot: {
      display: "inline-block",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: "lightgray",
      margin: "0 5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    dotActive: {
      backgroundColor: "black",
    },
    productDisplay: {
      width: "400px",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      alignItems: "center",
    },
    productImage: {
      width: "400px",
      height: "auto",
    },
    dashIndicator: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
    },
    dash: {
      display: "inline-block",
      width: "40px",
      height: "4px",
      backgroundColor: "lightgray",
      margin: "0 5px",
      transition: "background-color 0.3s ease, height 0.3s ease",
    },
    dashActive: {
      backgroundColor: "black",
      height: "8px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="/HomePage/TopThreeProducts.png" // Replace with the actual image path for the left side image
          alt="Top Products"
          style={styles.mainImage}
        />
        <div style={styles.dotIndicator}>
          {products.map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.dot,
                ...(selectedProductIndex === index ? styles.dotActive : {}),
              }}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>

      <div style={styles.productDisplay}>
        <img
          src={products[selectedProductIndex].img}
          alt={products[selectedProductIndex].productName}
          style={styles.productImage}
        />
        <div className="product-details">
          <p className="product-brandName mb-10">
            {products[selectedProductIndex].brandName}
          </p>
          <p className="product-productName mb-10">
            {products[selectedProductIndex].productName}
          </p>
          <p className="product-rating mb-20">
            ⭐ {products[selectedProductIndex].rating} | (
            {products[selectedProductIndex].reviews} reviews)
          </p>
          <p className="product-price mb-10">
            ${products[selectedProductIndex].price}
          </p>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
        <div style={styles.dashIndicator}>
          {products.map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.dash,
                ...(selectedProductIndex === index ? styles.dashActive : {}),
              }}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopThreeProducts;
