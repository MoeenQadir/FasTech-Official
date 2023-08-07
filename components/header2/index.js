import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '/public/images/logo/fastech-white.png'
import HeaderTopbar from '../HeaderTopbar';
import Image from 'next/image';


const Header2 = (props) => {
	const [searchActive, setSearchState] = useState(false);
	const [rightBarActive, setrightBarState] = useState(false);
	const [cartActive, setcartState] = useState(false);

	const SubmitHandler = (e) => {
		e.preventDefault()
	}

	const ClickHandler = () => {
		window.scrollTo(10, 0);
	}

	const { carts } = props;

	return (
		<header className="main-header header-style-two">
			<HeaderTopbar />
			<div className="header-upper">
				<div className="auto-container clearfix">

					<div className="pull-left logo-box">
						<div className="logo"><Link href="/"><Image src={Logo} alt="" title="" /></Link></div>
					</div>

					<div className="nav-outer clearfix">
						<MobileMenu />
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
                                    <li className="dropdown"><Link onClick={ClickHandler} href="/">Projects</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/projects">Projects</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-left-sidebar">Projects Left Sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} href="/projects-right-sidebar">Project Right Sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} href="/project-single/Movie-Recommendation">Projects Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link onClick={ClickHandler} href="/">Blogs</Link>
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
								<Link href="/contact" className="theme-btn btn-style-one"><span className="txt">Login</span></Link>
							</div>

							<div onClick={() => setrightBarState(!rightBarActive)} className="nav-btn navSidebar-button"><span className="icon flaticon-menu"></span></div>

						</div>
					</div>

				</div>
			</div>


			<div className={`search-popup ${searchActive ? "search-active" : ""}`}>
				<button className="close-search style-two" onClick={() => setSearchState(!searchActive)}><span className="flaticon-multiply"></span></button>
				<button className="close-search" onClick={() => setSearchState(!searchActive)}><span className="fa fa-arrow-up"></span></button>
				<form method="post" onClick={SubmitHandler}>
					<div className="form-group">
						<input type="search" name="search-field" value="" placeholder="Search Here" required="" />
						<button type="submit"><i className="fa fa-search"></i></button>
					</div>
				</form>
			</div>

			<div className={`xs-sidebar-group info-group ${rightBarActive ? "isActive" : ""}`}>
				<div className="xs-overlay xs-bg-black" onClick={() => setrightBarState(!rightBarActive)}></div>
				<div className="xs-sidebar-widget">
					<div className="sidebar-widget-container">
						<div className="widget-heading">
							<span onClick={() => setrightBarState(!rightBarActive)} className="close-side-widget">
								X
							</span>
						</div>
						<div className="sidebar-textwidget">

							<div className="sidebar-info-contents">
								<div className="content-inner">
									<div className="logo">
										<Link href="/"><img src={Logo} alt="" /></Link>
									</div>
									<div className="content-box">
										<h2>About Us</h2>
										<p className="text">Over the years, we have worked with Fortune 500s and brand-new startups. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</p>
										<Link href="/contact" className="theme-btn btn-style-two"><span className="txt">Contact Now</span></Link>
									</div>
									<div className="contact-info">
										<h2>Contact Info</h2>
										<ul className="list-style-one">
											<li><span className="icon fa fa-location-arrow"></span>New York 24, Melborne City, USA</li>
											<li><span className="icon fa fa-phone"></span><a href="tel:+000-000-000-0000">(000) 000-000-0000</a></li>
											<li><span className="icon fa fa-envelope"></span><a href="mailto:Merix@gmail.com">Merix@gmail.com</a></li>
											<li><span className="icon fa fa-clock-o"></span>Week Days: 09.00 to 18.00 Sunday: Closed</li>
										</ul>
									</div>
									<ul className="social-box">
										<li className="facebook"><Link href="/" className="fa fa-facebook-f"></Link></li>
										<li className="twitter"><Link href="/" className="fa fa-twitter"></Link></li>
										<li className="linkedin"><Link href="/" className="fa fa-linkedin"></Link></li>
										<li className="instagram"><Link href="/" className="fa fa-instagram"></Link></li>
										<li className="youtube"><Link href="/" className="fa fa-youtube"></Link></li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		carts: state.cartList.cart,
	};
};
export default connect(mapStateToProps, { removeFromCart })(Header2);