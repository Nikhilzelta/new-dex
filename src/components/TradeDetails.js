"use client"
import Image from "next/image"
import tradeArrow from "../assets/images/tradeArrow.png"
import telegramPic from '../assets/images/telegrampic.png'
import tradeFrame1 from '../assets/images/tradeFrame1.png'
import tradeFrameImg1 from '../assets/images/tradeFrameImg1.png'
import tradeFrameImg2 from '../assets/images/tradeFrameImg2.png'
import tradeFrameImg3 from '../assets/images/tradeFrameImg3.png'
import tradeFrameImg21 from '../assets/images/tradeFrameImg21.png'
import tradeFrameImg22 from '../assets/images/tradeFrameImg22.png'
import tradeFrameImg23 from '../assets/images/tradeFrameImg23.png'
import tradeFrameImg31 from '../assets/images/tradeFrameImg31.png'
import tradeFrameImg32 from '../assets/images/tradeFrameImg32.png'
import tradeFrameImg41 from '../assets/images/tradeFrameImg41.png'
import tradeFrameImg42 from '../assets/images/tradeFrameImg42.png'
import tradeFrameImg43 from '../assets/images/tradeFrameImg43.png'
import tradeFrame2 from '../assets/images/tradeFrame2.png'
import tradeFrame3 from '../assets/images/tradeFrame3.png'
import tradeFrame4 from '../assets/images/tradeFrame4.png'
import { useEffect, useState } from "react"

function TradeDetails() {
    const [isFixed, setIsFixed] = useState(false);
    console.log(isFixed, "isFixed");

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('landing-page-trynow');
            const leftDiv = document.getElementById('trade-section-left');
            // const screenWidth = window.innerWidth
            // console.log(screenWidth, screenWidth < 640, "sd,m ckjhsdb");

            if (!section || !leftDiv) return;

            const rect = section.getBoundingClientRect();

            if (
                // screenWidth < 640 &&
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            ) {
                setIsFixed(false);
            } else {
                setIsFixed(true);
            }
        };
        handleScroll()
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="trade-section flex flex-col sm:flex-row justify-center sm:justify-between items-start my-20 sm:my-40">
            <div className="trade-start"></div>
            <div
                id="trade-section-left"
                className={`trade-section-left flex flex-col justify-center items-center sm:block sm:w-1/2 md:w-[45%] xl:w-[40%] ${isFixed ? 'trade-section-left-sticky' : ''}`}
            >
                <p className="trade-title text-4xl sm:text-5xl mt-16 sm:mt-6">Trade</p>
                <p className="trade-subtitle mt-4 text-sm sm:text-base text-center sm:text-left">
                    Users can snipe copy trade to any token of their choice. Sniper menu brings all the essential features to the user in buying and selling.
                </p>
                <div className="trade-list mt-8 flex justify-start items-center px-2 py-2 w-[90%]">
                    <Image src={tradeArrow} alt="trade" width={20} height={20} className="me-2" />
                    <p className="trade-list-text text-sm">
                        <strong>DCA on Autopilot:</strong> Build your crypto portfolio steadily with automatic buys (DCA).
                    </p>
                </div>
                <div className="trade-list mt-4 flex justify-start items-center px-2 py-2 w-[90%]">
                    <Image src={tradeArrow} alt="trade" width={20} height={20} className="me-2" />
                    <p className="trade-list-text text-sm">
                        <strong>Swap with Ease: </strong> Effortlessly exchange tokens directly within Dextar.
                    </p>
                </div>
                <div className="trade-list mt-4 flex justify-start items-center px-2 py-2 w-[90%]">
                    <Image src={tradeArrow} alt="trade" width={20} height={20} className="me-2" />
                    <p className="trade-list-text text-sm">
                        <strong>Limit Orders Perfected: </strong> Set your price and Dextar executes your trades automatically.
                    </p>
                </div>
                <button className="landing-page-button landing-page-trynow trade-page-trynow1 px-7 py-2 text-base w-[60%] md:w-[48%] justify-center mt-8">
                    <Image src={telegramPic} alt="Telegram" width={20} height={20} className='button-icon' />
                    <span className="items-center flex">Try Now</span>
                </button>
            </div>
            <div id="trade-section-right" className="trade-section-right flex flex-col justify-center items-center sm:block text-xl w-full sm:w-[45%] mt-8 sm:mt-0">
                {/* frame1  */}
                <div id="trade-carousel-frame1" className="trade-carousel-frame max-w-[365px] sm:max-w-none flex flex-col justify-center items-center pt-4 px-4 sm:px-6 pb-6 ">
                    <Image src={tradeFrame1} alt="trade" width={400} height={300} className="trade-carousel-image" />
                    <div className="trade-side-image-wrapper1 trade-side-image-wrapper px-10 py-4">
                        <p className="trade-side-image-text text-base mb-2">Limit</p>
                        <Image src={tradeFrameImg1} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <div className="trade-side-image-wrapper2 trade-side-image-wrapper px-10 py-4">
                        <p className="trade-side-image-text text-base mb-2">Swap</p>
                        <Image src={tradeFrameImg2} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <div className="trade-side-image-wrapper3 trade-side-image-wrapper px-2 py-4">
                        <p className="trade-side-image-text text-base mb-1">DCA (Dollar Value Average)</p>
                        <Image src={tradeFrameImg3} alt="trade" width={50} height={50} className="trade-carousel-side-image m-auto" />
                    </div>
                    <p className="trade-carousel-text text-3xl sm:text-xl lg:text-2xl mt-3">Effortless Buying & Selling</p>
                </div>
                {/* frame2  */}
                <div id="trade-carousel-frame2" className="trade-carousel-frame max-w-[365px] sm:max-w-none flex flex-col justify-center items-center pt-4 px-4 sm:px-6 pb-6 mt-12">
                    <Image src={tradeFrame2} alt="trade" width={400} height={300} className="trade-carousel-image" />
                    <div className="trade-side-image-wrapper4 trade-side-image-wrapper-frame2 px-6 py-4">
                        <p className="trade-side-image-text text-base mb-2">Auto Sniper</p>
                        <Image src={tradeFrameImg21} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <div className="trade-side-image-wrapper5 trade-side-image-wrapper-frame2 px-2 py-3">
                        <p className="trade-side-image-text text-base mb-2">Contract Sniper</p>
                        <Image src={tradeFrameImg22} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <div className="trade-side-image-wrapper6 trade-side-image-wrapper-frame2 px-6 pt-3 pb-6">
                        <p className="trade-side-image-text text-base mb-2">Copy Trade</p>
                        <Image src={tradeFrameImg23} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <p className="trade-carousel-text text-3xl sm:text-xl lg:text-2xl mt-3">Robust for maximizing profits
                    </p>
                </div>
                {/* frame3  */}
                <div id="trade-carousel-frame3" className="trade-carousel-frame max-w-[365px] sm:max-w-none trade-carousel-frame3 flex flex-col justify-center items-center pt-4 px-4 sm:px-6 pb-6 mt-12">
                    <Image src={tradeFrame3} alt="trade" width={400} height={300} className="trade-carousel-image" />
                    <div className="trade-side-image-wrapper-frame3 trade-side-image-wrapper7 px-3 py-2">
                        <p className="trade-side-image-text text-base mb-2">Copy Transactions</p>
                        <Image src={tradeFrameImg31} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <div className="trade-side-image-wrapper-frame3 trade-side-image-wrapper8 px-4 py-3">
                        <p className="trade-side-image-text text-base mb-2">Track upto 10 Wallets</p>
                        <Image src={tradeFrameImg32} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <p className="trade-carousel-text text-3xl sm:text-xl lg:text-2xl mt-3">Easily monitor all wallets
                    </p>
                </div>
                {/* frame4  */}
                <div id="trade-carousel-frame4" className="trade-carousel-frame max-w-[365px] sm:max-w-none trade-carousel-frame4 flex flex-col justify-center items-center pt-4 px-4 sm:px-6 pb-6 mt-12">
                    <Image src={tradeFrame4} alt="trade" width={400} height={300} className="trade-carousel-image" />
                    <div className="trade-side-image-wrapper-frame4 trade-side-image-wrapper9 px-3 py-2">
                        <p className="trade-side-image-text text-base mb-2">Secured Wallet Management</p>
                        <Image src={tradeFrameImg41} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <div className="trade-side-image-wrapper-frame4 trade-side-image-wrapper10 px-3 py-2">
                        <p className="trade-side-image-text text-base mb-2">Add upto 10 Wallets</p>
                        <Image src={tradeFrameImg42} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <div className="trade-side-image-wrapper-frame4 trade-side-image-wrapper11 px-4 py-4">
                        <p className="trade-side-image-text text-base mb-2">Support Multiple Chains</p>
                        <Image src={tradeFrameImg43} alt="trade" width={50} height={50} className="m-auto trade-carousel-side-image" />
                    </div>
                    <p className="trade-carousel-text text-3xl sm:text-xl lg:text-2xl mt-3">Effortless management</p>
                </div>
            </div>
            <div className="w-full flex justify-center sm:hidden">
                <button className="landing-page-button landing-page-trynow trade-page-trynow2 px-7 py-2 text-base w-[60%] md:w-[48%] justify-center mt-8">
                    <Image src={telegramPic} alt="Telegram" width={20} height={20} className='button-icon' />
                    <span className="items-center flex">Try Now</span>
                </button>
            </div>
        </section>
    );
}

export default TradeDetails