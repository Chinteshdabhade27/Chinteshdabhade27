import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div class='container-fluid py-5 mt-5 ' id="footer">
                <div class='row'>
                    <div class='col-md-4 mt-3 footer_11'>
                        <h3>Be Future Ready</h3>
                        <p class="grey">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. At, nemo.</p>
                        <div class="input-group text-center">
                            <input type="email" placeholder="Enter your Email" class="" />
                            <button type="submit" class="btn btn-success"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class='col-md-2 mt-3  footer_11'>
                        <h5 class="">Contact With us </h5>
                        <ul type="none">
                            <li class="py-md-2 grey">Facebook</li>
                            <li class="py-md-2 grey">Instagram</li>
                            <li class="py-md-2 grey">Twitter</li>


                        </ul>
                    </div>
                    <div class='col-md-2 mt-3 footer_11'>
                        <h5 class="">Get to Know Us</h5>
                        <ul type="none">
                            <li>
                                <Link to="/about" class="nav-link active" aria-current="page">
                                    <p className="text-color Foot_i">About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" class="nav-link active" aria-current="page">
                                    <p className="text-color Foot_i ">Contact Us</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class='col-md-4 mt-3 footer_11' id="footer-contact">
                        <h5 class="">Contact Us</h5>
                        <ul type="none" class="">
                            <li class="py-md-2 grey"><i class="fa-solid fa-phone"></i>+91 9140452502</li>
                            <li class="py-md-2 grey"><i class="fa-solid fa-envelope"></i> rutuja@gmail.com </li>
                            <li class="py-md-2 grey"><i class="fa-solid fa-location-dot"></i>At.post. Nagpur , Maharashtra</li>
                        </ul>
                    </div>
                </div>
                <div class='row'>
                    <div class='col  py-3 text-center ' id='copyright'>
                        <p>copyright @ 2022 |Design with the trendzone </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;

