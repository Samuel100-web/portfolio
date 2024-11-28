import React from 'react';
import { FaFacebook, FaTwitter,FaInstagram,FaLinkedin,FaWhatsapp} from 'react-icons/fa6';

function Footer() {
  return <>
  <hr />
    <footer>
        <div className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md-px-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4'>
                        <FaFacebook size={24}/>
                        <FaTwitter size={24}/>
                        <FaInstagram size={24}/>
                        <a href="https://www.linkedin.com/feed/" target="_blank">
                        < FaLinkedin className="text-2xl cursor-pointer" />
                        </a>
                        <a href="https://wa.me/+923075941955?text=Hello%20There" target="_blank">
                        < FaWhatsapp className="text-2xl cursor-pointer" />
                        </a>
                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                        <p className='text-sm'>
                            &copy; 2024 Your Company. All rights reserved.
                        </p>
                        <p className='text-sm'>This is my personal Protfolio</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </>
}

export default Footer
