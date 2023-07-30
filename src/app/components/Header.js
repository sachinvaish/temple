import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="header">
        <div className="navbar-expand-xl">
            <div className="collapse navbar-collapse" id="menubar2">
            <div className="header__top w-100">
                <div className="container">
                <div className="header__top-area">
                    <div className="header__top-left">
                    <ul>
                        <li>
                        <i className="fas fa-phone-alt" />
                        +8812 345 678 912
                        </li>
                        <li>
                        <i className="fas fa-envelope" />
                        info@yourmail.com
                        </li>
                    </ul>
                    </div>
                    <div className="header__top-center">
                    <div className="header__top-logo d-none d-md-block">
                        <a href="index.html">
                        <img src="assets/images/logo/03.png" alt="logo" />
                        </a>
                    </div>
                    </div>
                    <div className="header__top-right">
                    <div className="header__top-socialsearch">
                        <div className="header__top-social">
                        <ul>
                            <li>
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fab fa-pinterest-p" />
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="header__top-search">
                        <ul>
                            <li className="search__icon">
                            <i className="fas fa-search" />
                            </li>
                            <li className="cart__icon">
                            <i className="fas fa-shopping-bag" />
                            <span>04</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="header__bottom">
            <div className="container">
            <div className="header__mainmenu navbar navbar-expand-xl navbar-light">
                <div className="header__logo">
                <a href="index.html" className="d-none d-xl-block">
                    <img src="assets/images/logo/03-b.png" alt="logo" />
                </a>
                <a href="index.html" className="d-xl-none">
                    <img src="assets/images/logo/03.png" alt="logo" />
                </a>
                </div>
                <div className="header__bar">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menubar"
                    aria-controls="menubar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <button
                    className="navbar-toggler header__bar-info"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menubar2"
                    aria-controls="menubar2"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="fas fa-info" />
                </button>
                </div>
                <div className="header__menu navbar-expand-xl">
                <div className="collapse navbar-collapse" id="menubar">
                    <ul>
                    <li className="active">
                        <a href="#0">Home</a> 
                    </li>
                    <li>
                        <Link href="#about-section">About</Link> 
                    </li>
                    <li>
                        <a href="#0">Live</a> 
                    </li>
                    <li>
                        <a href="#0">Music Videos</a> 
                    </li>
                    <li>
                        <a href="#0">Gallery</a> 
                    </li>
                    <li>
                        <a href="#0">Bookings</a> 
                    </li>
                    {/* <li>
                        <a href="#0">Sewadaars</a>
                        <ul>
                        <li>
                            <a href="blog.html">Blog Default</a>
                        </li>
                        <li>
                            <a href="blog-2.html">Blog 2 Columns</a>
                        </li>
                        <li>
                            <a href="blog-single.html">Blog Single</a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#0">Shop</a>
                        <ul>
                        <li>
                            <a href="shop.html">Shop</a>
                        </li>
                        <li>
                            <a href="shop-single.html">Shop Single</a>
                        </li>
                        <li>
                            <a href="cart.html">Cart Page</a>
                        </li>
                        <li>
                            <a href="check-out.html">Check Out Page</a>
                        </li>
                        </ul>
                    </li> */}
                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                    </ul>
                    <a href="cause-single.html" className="default-btn">
                    <span>
                        Donate Now <i className="fas fa-heart" />
                    </span>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>

  )
}
