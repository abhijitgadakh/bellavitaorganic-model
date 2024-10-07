import React from "react";
import "./Footer.css"; // Ensure you create a CSS file for styling

const Footer = () => {
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
      </div>
      <div className="keywords">
        <h3>Keywords</h3>
        <span>Perfume</span>
        <span>Best perfume for men</span>
        <span>Perfume for men</span>
        <span>Vitamin C Face Wash</span>
        <span>Perfume for women</span>
        <span>Best perfume for women</span>
        <span>Perfume for girls</span>
        <span>Dark circles removal cream</span>
        <span>Acne face wash</span>
        <span>Under eye cream</span>
        <span>Gift sets for women</span>
        <span>Body wash for women</span>
        <span>Pocket perfume for men</span>
        <span>De tan face pack</span>
        <span>Pimple removal cream</span>
        <span>Lip scrub</span>
        <span>Tan removal face pack</span>
        <span>Face wash for acne</span>
        <span>Exfoliate scrub</span>
        <span>Gift set for men</span>
        <span>Coffee Body Scrub</span>
        <span>Best long lasting perfume for men</span>
        <span>Perfumes for men under 500</span>
        <span>Perfumes for women</span>
        <span>Perfume gift sets</span>
        <span>Oud perfume</span>
        <span>CEO perfume</span>
        <span>Under eye cream for dark circles</span>
        <span>Acne cream</span>
        <span>Vitamin C cream for face</span>
        <span>Body lotion for women</span>
        <span>Long lasting perfume for women</span>
        <span>Perfume gift pack for her</span>
        <span>Perfume gift pack for him</span>
        <span>Charcoal face wash</span>
        <span>Body wash for men</span>
        <span>Best shower gel for women</span>
        <span>Shower gel for men</span>
        <span>Body Lotion for men and Women</span>
        <span>Body lotion for dry skin</span>
        <span>Body lotion for men</span>
        <span>Body lotion for women</span>
        <span>Shower Gel and Perfume Combo</span>
      </div>
    </div>
  );
};

export default Footer;
