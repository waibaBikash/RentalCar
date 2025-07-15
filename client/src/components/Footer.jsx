import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
     <div className='px-6 md:px-16 lg:px-32 mt-60 text-sm text-gray-500'>
            <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                <div>
                    <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                     Premium car rental service offering a wide range of vehicles for
                     all your travel needs. Experience luxury and comfort with our top-notch fleet.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#"><img className='w-5 h-5' src={assets.facebook_logo} alt="" /></a>
                        <a href="#"><img className='w-5 h-5' src={assets.instagram_logo} alt="" /></a>
                        <a href="#"><img className='w-5 h-5' src={assets.twitter_logo} alt="" /></a>
                        <a href="#"><img className='w-5 h-5' src={assets.gmail_logo} alt="" /></a>
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-sm'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List Your Car</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources
                    </h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Sercices</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact
                    </h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-sm'>
                       <li>123 Luxury Drive</li>
                       <li>San Francisco, CA 4367</li>
                       <li>+1 236 789898</li>
                       <li>info@quickcarrental.com</li>
                    </ul>
                </div>

            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li> | </li>
                    <li><a href="#">Terms</a></li>
                    <li> | </li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer;