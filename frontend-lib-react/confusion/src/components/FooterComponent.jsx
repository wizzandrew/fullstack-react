import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
            <div class="container">
                <div class="row">
                    <div class="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="./aboutus.html">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="./contactus.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address class="address">
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i class="fa fa-phone"></i>: +852 1234 5678<br />
                            <i class="fa fa-fax"></i>: +852 8765 4321<br />
                            <i class="fa fa-envelope"></i>:
                            <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div class="col-12 col-sm-4 align-self-center">
                        <div class="text-center">
                            <a
                                class="btn btn-social-icon btn-google"
                                href="http://google.com/+"
                            ><i class="fa fa-google-plus"></i
                            ></a>
                            <a
                                class="btn btn-social-icon btn-facebook"
                                href="http://www.facebook.com/profile.php?id="
                            ><i class="fa fa-facebook"></i
                            ></a>
                            <a
                                class="btn btn-social-icon btn-linkedin"
                                href="http://www.linkedin.com/in/"
                            ><i class="fa fa-linkedin"></i
                            ></a>
                            <a
                                class="btn btn-social-icon btn-twitter"
                                href="http://twitter.com/"
                            ><i class="fa fa-twitter"></i
                            ></a>
                            <a
                                class="btn btn-social-icon btn-google"
                                href="http://youtube.com/"
                            ><i class="fa fa-youtube"></i
                            ></a>
                            <a class="btn btn-social-icon btn-linkedin" href="mailto:"
                            ><i class="fa fa-envelope"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <p>© Copyright 2022 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
