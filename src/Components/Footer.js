import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="segment">
          <div className="columngrid">
            <div className="column">
              <div className="tinyheader">COINCAP.IO</div>
              <div role="list" className="list">
                <div role="listitem" className="item">
                  <a href="/methodology">Methodology</a>
                </div>
                <div role="listitem" className="item">
                  <a href="#">Support</a>
                </div>
                <div role="listitem" className="item">
                  <a href="//docs.coincap.io">Our API</a>
                </div>
                <div role="listitem" className="item">
                  <a href="/rate-compare">Rate Comparison</a>
                </div>
                <div role="listitem" className="item">
                  <a href="#">Careers</a>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="tinyheader">LEGALS</div>
              <div role="list" className="list">
                <div role="listitem" className="item">
                  <a href="#">Terms of Service</a>
                </div>
                <div role="listitem" className="item">
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
              <div className="tinyheader">DISCLAIMER</div>
              <div role="list" className="list">
                <div role="listitem" className="item">
                  <span className="data">
                    Neither ShapeShift AG nor CoinCap are in any way associated
                    with CoinMarketCap, LLC or any of its goods and services.
                  </span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="tinyheader">FOLLOW US</div>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className=" fa-brands fa-square-facebook"></i>
              </a>
            </div>
            <div className="column">
              <div className="tinyheader">COINCAP APP AVAILABLE ON</div>
              <div role="list" className="list">
                <div role="listitem" className="item">
                  <a href="#">
                    <img
                      src="/src/images/google_play.jpg"
                      className="ui image"
                      alt="logo"
                    />
                  </a>
                </div>
                <div role="listitem" className="item">
                  <a href="#">
                    <img
                      src="/src/images/apple_store.jpg"
                      className="ui image"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
