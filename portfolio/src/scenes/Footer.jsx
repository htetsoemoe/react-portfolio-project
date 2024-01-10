import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'

const Footer = () => {
    return (
        <footer className='h-64 bg-red pt-10 mt-56'>
            <div className="w-10/12 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-playfair font-semibold text-2xl text-yellow">
                        JANE ESPER
                    </p>
                    <div className="text-sm font-playfair mt-3">
                        &copy; {" "}
                        {new Date().getFullYear().toString()}. {" "}
                        All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
