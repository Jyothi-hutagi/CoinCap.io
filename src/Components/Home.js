import React from "react";
import "./Home.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../images/black.jpg";
import applelogo from "../images/apple_store.jpg";
import googleplay from "../images/google_play.jpg";

import Card from "./Card";

export const Home = () => {
  return (
    <div className="main">
      <header className="site-navbar site-navbar-target bg-white" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-3">
              <nav
                className="site-navigation text-right ml-auto "
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li className="active">
                    <a href="index.html" className="nav-link">
                      Coins
                    </a>
                  </li>
                  <li>
                    <a href="project.html" className="nav-link">
                      Exchanges
                    </a>
                  </li>
                  <li>
                    <a href="services.html" className="nav-link">
                      Swap
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 text-center">
              <div className="site-logo">
                <img src={logo} alt="logo" />
              </div>
            </div>

            <div className="col-lg-5">
              <nav
                className="site-navigation text-left mr-auto "
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <form
                    className="navbar-form navbar-left"
                    action="/action_page.php"
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        name="search"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                          <i className="glyphicon glyphicon-search"></i>
                        </button>
                        <button className="btn btn-default" type="submit">
                          <i className="glyphicon glyphicon-cog"></i>
                        </button>
                      </div>
                    </div>
                  </form>

                  <li>
                    <button className="btn">Connect Wallet</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="main-container">
        <div className="centerd-container  ">
          <div className="aligned-column">
            <div className="content">
              <div className="statistic">
                <div className="label">Market Cap </div>
                <div className="value">
                  <span className="price">$ 1.35t</span>
                </div>
              </div>
              <div className="statistic">
                <div className="label">Exchange Vol </div>
                <div className="value">
                  <span className="price">$ 52.19b</span>
                </div>
              </div>
              <div className="statistic">
                <div className="label">Assets </div>
                <div className="value">
                  <span className="price">2,295</span>
                </div>
              </div>
              <div className="statistic">
                <div className="label">Exchanges </div>
                <div className="value">
                  <span className="price">73</span>
                </div>
              </div>
              <div className="statistic">
                <div className="label">Market Cap </div>
                <div className="value">
                  <span className="price">$ 1.35t</span>
                </div>
              </div>
              <div className="statistic">
                <div className="label">Markets </div>
                <div className="value">
                  <span className="price">14,593</span>
                </div>
              </div>
              <div className="statistic">
                <div className="label">BTC DOM INDEX</div>
                <div className="value">
                  <span className="price">32.75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
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
              <a href="#" className="icon">
                <i className="faicon">
                  <FaFacebook style={{ color: "white", marginRight: "25px" }} />
                </i>
              </a>
              <a href="#" className="icon">
                <i className="faicon">
                  <FaTwitter style={{ color: "white" }} />
                </i>
              </a>
            </div>
            <div className="column">
              <div className="tinyheader">COINCAP APP AVAILABLE ON</div>
              <div role="list" className="list">
                <div role="listitem" className="item">
                  <a href="#">
                    <img src={googleplay} className="uiimage" alt="logo" />
                  </a>
                </div>
                <div role="listitem" className="item">
                  <a href="#">
                    <img src={applelogo} className="uiimage" alt="logo" />
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
