import React from "react";
import "./Footer.css"; // Ensure you create a CSS file for styling

const Footer = () => {
  const keywords = [
    "Perfume",
    "Best perfume for men",
    "Perfume for men",
    "Vitamin C Face Wash",
    "Perfume for women",
    "Best perfume for women",
    "Perfume for girls",
    "Dark circles removal cream",
    "Acne face wash",
    "Under eye cream",
    "Gift sets for women",
    "Body wash for women",
    "Pocket perfume for men",
    "De tan face pack",
    "Pimple removal cream",
    "Lip scrub",
    "Tan removal face pack",
    "Face wash for acne",
    "Exfoliate scrub",
    "Gift set for men",
    "Coffee Body Scrub",
    "Best long lasting perfume for men",
    "Perfumes for men under 500",
    "Perfumes for women",
    "Perfume gift sets",
    "Oud perfume",
    "CEO perfume",
    "Under eye cream for dark circles",
    "Acne cream",
    "Vitamin C cream for face",
    "Body lotion for women",
    "Long lasting perfume for women",
    "Perfume gift pack for her",
    "Perfume gift pack for him",
    "Charcoal face wash",
    "Body wash for men",
    "Best shower gel for women",
    "Shower gel for men",
    "Body Lotion for men and Women",
    "Body lotion for dry skin",
    "Body lotion for men",
    "Body lotion for women",
    "Shower Gel and Perfume Combo",
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>BESTSELLERS</h3>
          <a href="#">Ultimate Perfume Box</a>
          <br />
          <a href="#">Perfume Gift Set For Men</a>
          <br />
          <a href="#">Perfume Gift Set For Women</a>
          <br />
          <a href="#">Under Eye Cream for Dark Circles</a>
          <br />
          <a href="#">Perfume For Men</a>
          <br />
          <a href="#">Perfume For Women</a>
          <br />
          <a href="#">Unisex Perfume</a>
        </div>
        <div className="footer-column">
          <h3>INFORMATION</h3>
          <a href="#">Blogs</a>
          <br />
          <a href="#">Newsroom</a>
          <br />
          <a href="#">Terms & Conditions</a>
          <br />
          <a href="#">Privacy Policy</a>
          <br />
          <a href="#">Refund and Return</a>
          <br />
          <a href="#">Shipping Policy</a>
          <br />
          <a href="#">Bulk Order - GST Invoice</a>
        </div>
        <div className="footer-column">
          <h3>SUPPORT</h3>
          <a href="#">About Us</a>
          <br />
          <a href="#">Contact Us</a>
          <br />
          <a href="#">Order Tracking</a>
          <br />
          <a href="#">All Products</a>
          <br />
          <a href="#">FAQ</a>
          <br />
          <a href="#">Sitemap</a>
        </div>
        <div className="footer-column contact-info">
          <h3>CONTACT US</h3>
          <p>
            Office Location: Plot no. 417, Udyog Vihar Phase III, Gurgaon,
            Haryana, India
          </p>
          <p>
            Email:{" "}
            <a href="mailto:shop@bellavitaorganic.com">
              shop@bellavitaorganic.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+919311732440">+91-9311732440</a>
          </p>
          <p>Timing: 10:00 AM to 7:00 PM, Monday to Sunday</p>
        </div>
        <div className="footer-column exclusive">
          <h3>EXCLUSIVE</h3>
          <form>
            <input type="email" placeholder="Enter email here" required />
            <input type="submit" value="→" />
          </form>
          <p>
            Sign up here to get the latest news, updates, and special offers
            delivered to your inbox.
          </p>
          <p>Plus, you'll be the first to know about our discounts!</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="keywords">
          {keywords.map((keyword, index) => (
            <span className="bes-line-1" key={index}>
              <a className="keyword-link" href="#">
                {keyword}
              </a>
              {index < keywords.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
