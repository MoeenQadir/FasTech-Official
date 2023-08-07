import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '/public/images/logo/fastech-white.png'
import Image from 'next/image';


const Header = (props) => {
    const [searchActive, setSearchState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header className="main-header header-style-one">
            <div className="header-upper">
                <div className="auto-container clearfix">
                    <div className="pull-left logo-box">
                        <div className="logo"><Link onClick={ClickHandler} href="/"><Image src={Logo} alt="" title="" /></Link></div>
                    </div>
                    <div className="nav-outer clearfix">
                        <MobileMenu/>
                        <nav className="main-menu navbar-expand-md">
                            <div className="navbar-header">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li className="dropdown"><Link onClick={ClickHandler} href="/">Products Catalog</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/callsense">CallSense</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-left-sidebar">Invoice Generator</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link onClick={ClickHandler} href="/">Opportunities</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/projects">Job Opportunities</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-left-sidebar">Internship Opportunities</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-right-sidebar">Investment Opportunities</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link onClick={ClickHandler} href="/">Offering</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/projects">Projects</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-left-sidebar">Services</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-right-sidebar">Products</Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">Solutions</Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">Consulting</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link onClick={ClickHandler} href="/">Impact</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/projects-left-sidebar">CSR Activities</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-right-sidebar">Certification and Awards</Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">Our Centers </Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">Partnership</Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">CMS SASS App Community</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link onClick={ClickHandler} href="/">Tools</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/projects-left-sidebar">Full Stack Web Development</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-right-sidebar">FasTech Bot Community</Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">Web3Makr Community </Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">FasTech Marketplace Community  </Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">CMS SASS App Community</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link onClick={ClickHandler} href="/">About</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact us</Link></li>
                                </ul>
                            </div>
                        </nav>

                        <div className="outer-box clearfix">
                            <div className="btn-box">
                                <Link onClick={ClickHandler} href="/contact" className="theme-btn btn-style-one"><span className="txt">Login</span></Link>
                            </div>
                            <div onClick={() => setSearchState(!searchActive)} className="search-box-btn search-box-outer"><span className="icon fa fa-search"></span></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`search-popup ${searchActive ? "search-active" : ""}`}>
                <button className="close-search style-two" onClick={() => setSearchState(!searchActive)}><span className="flaticon-multiply"></span></button>
                <button className="close-search" onClick={() => setSearchState(!searchActive)}><span className="fa fa-arrow-up"></span></button>
                <form method="post" onClick={SubmitHandler}>
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search Here" required="" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);