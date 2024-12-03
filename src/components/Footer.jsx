import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="footer">
            <div class="footer-top">
                <div className="footer-column-left">
                    <div class="footer-column x">
                        <img src="./LOGO 2.png" alt="" />
                        <img src="./app-store-badges-en 1.png" alt="" />
                        <p>Company #490039-445, Registered with <br /> House of companies.</p>
                    </div>
                </div>

                <div className="footer-column-right">
                    <div class="footer-column box-1">
                        <h3>Get Exclusive Deals in your Inbox</h3>
                        <form>
                            <input type="email" placeholder="youremail@gmail.com" />
                            <button type="submit">Subscribe</button>
                        </form>
                        <p>we won't spam, read our <a href="#">email policy</a></p>
                        <div class="social-links">
                            <a href="#" style={{marginLeft: '1rem'}}><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                            <a href="#"><i class="fa-brands fa-snapchat"></i></a>
                        </div>
                    </div>
                    <div class="footer-column">
                        <h3>Legal Pages</h3>
                        <ul>
                            <li><a href="#">Terms and conditions</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Modern Slavery Statement</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Important Links</h3>
                        <ul>
                            <li><a href="#">Get help</a></li>
                            <li><a href="#">Add your restaurant</a></li>
                            <li><a href="#">Sign up to deliver</a></li>
                            <li><a href="#">Create a business account</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div>Order.uk Copyright 2024, All Rights Reserved.</div>
                <div className="footer-links">
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Pricing</p>
                    <p>Do not sell or share my personal information</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer