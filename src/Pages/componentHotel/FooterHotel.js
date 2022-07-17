import React from 'react'
import { useNavigate } from 'react-router-dom'

const FooterHotel = () => {
    const Navigate = useNavigate()
    const GOtoHome = () => {
        Navigate('/')
    }
    const GOtoAbout = () => {
        Navigate('/about')
    }
    const GOtoServices = () => {
        Navigate('/services')
    }

    return (
        <>
            <footer class="footer">
                <div class="footer_top">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-md-6 col-lg-3">
                                <div class="footer_widget">
                                    <h3 class="footer_title">
                                        address
                                    </h3>
                                    <p class="footer_text"> Maripur Hawksbay Road, <br />
                                        Karachi City Pk</p>
                                    <a href="https://www.google.com/maps/dir/24.8647476,66.9154065/HBL+Hawks+Bay+Road+Branch,+VXC5%2B6M9%D8%8C+HBL+Hawks+Bay+Road+Branch,+New+Quaid-e-Azam+Truck+Stand,+Hawks+Bay+Road,+Maripur,+Karachi%D8%8C+Mauripur%E2%80%AD/@24.8677106,66.919871,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3eb315b1c7b938cd:0x7bed97648a8d1a89!2m2!1d66.9592504!2d24.8705089!3e0" class="line-button">Get Direction</a>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-lg-3">
                                <div class="footer_widget">
                                    <h3 class="footer_title">
                                        Reservation
                                    </h3>
                                    <p class="footer_text">+92 367 267 2678 <br />
                                        malikibrarnaem0987654@gmail.com</p>
                                </div>
                            </div>
                            <div class="col-xl-2 col-md-6 col-lg-2">
                                <div class="footer_widget">
                                    <h3 class="footer_title">
                                        Navigation
                                    </h3>
                                    <ul>
                                        <li onClick={GOtoHome}><a href="#">Home</a></li>
                                        <li onClick={GOtoAbout}><a href="">About</a></li>
                                        <li onClick={GOtoServices}><a href="">Services</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-lg-4">
                                <div class="footer_widget">
                                    <h3 class="footer_title">
                                        Newsletter
                                    </h3>
                                    <form action="#" class="newsletter_form">
                                        <input type="text" placeholder="Enter your mail" />
                                        <button type="submit">Sign Up</button>
                                    </form>
                                    <p class="newsletter_text">Subscribe newsletter to get updates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>

    )
}

export default FooterHotel