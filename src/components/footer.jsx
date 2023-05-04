import React from "react";


function Footer(){
    return(
     <>
   
    <div className="footer-top text-white  ptb-120">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                    <div className="footer-single-col">
                        <div className="footer-single-col mb-4">

                            <img src="	https://quiety.themetags.com/assets/img/logo-color.png" alt="logo"
                                className="img-fluid logo-color" />
                        </div>
                        <p className="text-secondary">Our latest news, articles, and resources, we will sent to
                            your inbox weekly.</p>

                        <form className="newsletter-form position-relative d-block d-lg-flex d-md-flex">
                            <input type="text" className="input-newsletter form-control me-2"
                                placeholder="Enter your email" name="email" required="" autocomplete="off" />
                            <input type="submit" value="Subscribe" data-wait="Please wait..."
                                className="btn btn-primary mt-3 mt-lg-0 mt-md-0" />
                        </form>
                        <div className="ratting-wrap mt-4">
                            <h6 className="mb-1 text-secondary">10/10 Overall rating</h6>

                            <ul className="list-unstyled rating-list list-inline mb-0 small ">
                                <li className="list-inline-item"><i className="fas fa-star text-warning fx-1 "></i></li>
                                <li className="list-inline-item"><i className="fas fa-star text-warning fx-1"></i></li>
                                <li className="list-inline-item"><i className="fas fa-star text-warning fx-1"></i></li>
                                <li className="list-inline-item"><i className="fas fa-star text-warning fx-1"></i></li>
                                <li className="list-inline-item"><i className="fas fa-star text-warning fx-1"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                            <div className="footer-single-col text-black">
                                <h3 className="fs-5 mb-4">Primary Pages</h3>
                                <ul className="list-unstyled footer-nav-list mb-lg-0 text-secondary">
                                    <li className="my-1 "><a href="index.html"
                                            className="text-decoration-none text-secondary">Home</a></li>
                                    <li className="my-1 "><a href="about-us.html"
                                            className="text-decoration-none text-secondary ">About Us</a></li>
                                    <li className="my-1 "><a href="services.html"
                                            className="text-decoration-none text-secondary ">Services</a></li>
                                    <li className="my-1 "><a href="career.html"
                                            className="text-decoration-none text-secondary">Career</a></li>
                                    <li className="my-1 "><a href="integrations.html"
                                            className="text-decoration-none text-secondary">Integrations</a>
                                    </li>
                                    <li className="my-1 "><a href="integration-single.html"
                                            className="text-decoration-none text-secondary my-3">Integration Single</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                            <div className="footer-single-col text-black">
                                <h3 className="fs-5 mb-4">Pages</h3>
                                <ul className="list-unstyled footer-nav-list mb-lg-0">

                                    <li className="my-1 "><a href="pricing.html"
                                            className="text-secondary text-decoration-none">Pricing</a></li>
                                    <li className="my-1 "><a href="blog.html"
                                            className="text-decoration-none text-secondary">Blog</a></li>
                                    <li className="my-1 "><a href="blog-single.html"
                                            className="text-decoration-none text-secondary">Blog Details</a></li>
                                    <li className="my-1 "><a href="contact-us.html"
                                            className="text-decoration-none text-secondary">Contact</a></li>
                                    <li className="my-1 "><a href="career-single.html"
                                            className="text-decoration-none text-secondary">Career Single</a>
                                    </li>
                                    <li className="my-1 "><a href="service-single.html"
                                            className="text-decoration-none text-secondary">Services
                                            Single</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                            <div className="footer-single-col text-black">
                                <h3 className="fs-5 mb-4">Template</h3>
                                <ul className="list-unstyled footer-nav-list mb-lg-0">
                                    <li className="my-1 "><a href="contact-us.html"
                                            className="text-decoration-none text-secondary">Contact</a></li>
                                    <li className="my-1 "><a href="support.html"
                                            className="text-decoration-none text-secondary">Support</a></li>
                                    <li className="my-1 "><a href="support-single.html"
                                            className="text-decoration-none text-secondary">Support Single</a></li>
                                    <li className="my-1 "><a href="team.html"
                                            className="text-decoration-none text-secondary">Our Team</a></li>
                                    <li className="my-1 "><a href="client-review.html"
                                            className="text-decoration-none text-secondary">Customer Review</a></li>
                                    <li className="my-1 "><a href="career-single.html"
                                            className="text-decoration-none text-secondary">Career Single</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  
    <div className="footer-bottom text-white mb-4">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-7 col-lg-7">
                    <div className="copyright-text">
                        <p className="mb-lg-0 mb-md-0 text-secondary">© 2021 Quiety Rights Reserved. Designed By <a
                                href="https://themetags.com/"
                                className="text-decoration-none text-secondary">ThemeTags</a></p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="footer-single-col text-start text-lg-end text-md-end">
                        <ul className="list-unstyled list-inline footer-social-list mb-0">
                            <li className="list-inline-item"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="/"><i className="fab fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="/"><i className="fab fa-dribbble"></i></a></li>
                            <li className="list-inline-item"><a href="/"><i className="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
 

     </>
    )}
    export default Footer;