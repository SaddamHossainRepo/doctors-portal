import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            className="p-10 mt-20   text-[#3A4256]">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link t0='/' className="link link-hover">Branding</Link>
                    <Link t0='/' className="link link-hover">Design</Link>
                    <Link t0='/' className="link link-hover">Marketing</Link>
                    <Link t0='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link t0='/' className="link link-hover">About us</Link>
                    <Link t0='/' className="link link-hover">Contact</Link>
                    <Link t0='/' className="link link-hover">Jobs</Link>
                    <Link t0='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link t0='/' className="link link-hover">Terms of use</Link>
                    <Link t0='/' className="link link-hover">Privacy policy</Link>
                    <Link t0='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='mt-32 text-center'>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;