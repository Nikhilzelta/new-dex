"use client"
import Image from "next/image";
import DextarBotIcon from '../assets/images/DextarBotIcon.png';
import TelegramIcon from '../assets/images/telegram.png';
import TwitterIcon from '../assets/images/twitter.png';
import { useEffect, useState } from "react";
import SupportedChainsPopUp from "./SupportedChainsPopUp";
import MobileNavbarDropDown from "./MobileNavbarDropDown";
const NavBar = () => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    //useEffect to close hamburger on the screen size change
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 640px)');
        const handleScreenSizeChange = (event) => {
            if (event.matches) {
                setHamburger(false); // Reset the state
            }
        };
        mediaQuery.addEventListener('change', handleScreenSizeChange);
        return () => {
            mediaQuery.removeEventListener('change', handleScreenSizeChange);
        };
    }, []);

    return (
        <>
            <div className={`fixed left-1/2 transform -translate-x-1/2 navbar flex justify-between items-center mt-8 mb-12 px-3 py-3 w-[92%] md:w-[86%] lg:w-3/4 m-auto ${hamburger ? "mobile-nav-border-none" : ""}`}>
                <div className="navbar-sec1 flex items-center text-base h-[43px]">
                    <p className="navbar-sec2-text pe-4">Docs</p>
                    <p className="navbar-sec2-text " onClick={() => setIsPopUpOpen(true)}>Bots</p>
                </div>
                <div className="navbar-sec2 flex justify-center items-center text-xl h-[43px]">
                    <Image src={DextarBotIcon} alt="logo" width={60} className="navbar-sec1-image" />
                    <p className="navbar-sec1-text">Dextar Bot</p>
                </div>
                <div className="navbar-sec3 flex justify-between items-center w-1/4 text-xl">
                    <Image src={TelegramIcon} alt="logo" width={40} className="navbar-sec1-image" />
                    <Image src={TwitterIcon} alt="logo" width={40} className="navbar-sec1-image" />
                </div>
                <div className="navbar-sec4 flex justify-end me-3 items-center text-xl w-[30px] h-[20px]">
                    <input
                        id="toggle"
                        type="checkbox"
                        checked={hamburger}
                        onChange={() => setHamburger(!hamburger)}
                    />
                    <label htmlFor="toggle" className="hamburger">
                        <div className="top-bun"></div>
                        <div className="meat"></div>
                        <div className="bottom-bun"></div>
                    </label>
                </div>
            </div>
            {isPopUpOpen && <SupportedChainsPopUp setIsPopUpOpen={setIsPopUpOpen} setHamburger={setHamburger} />}
            {hamburger && <MobileNavbarDropDown setIsPopUpOpen={setIsPopUpOpen} setHamburger={setHamburger} />}
        </>

    )
}

export default NavBar;