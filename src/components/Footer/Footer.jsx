import React from 'react';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-black text-neutral-content">
            <aside className="items-center grid-flow-col">
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current"
                    opacity="0.5" 
                >
                    <path d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm0 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10zm-6-4v2h-2v-2h2zm-1-4h2v2h-2v-2zm-3 0h2v2h-2v-2zm0 3h2v2h-2v-2zm3 0h2v2h-2v-2z" />
                </svg>


                <p className="text-green-400">© 2023 | All rights reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <p className="text-green-400">
                    Developed By <a href="https://protfoliosanad.web.app/" target='_blank' className='text-xl font-mono font-bold text-green-300'>Sanad Bhowmik</a>
                </p>
            </nav>
        </footer>
    );
};

export default Footer;