
import telegramPic from '../assets/images/telegrampic.png';
import buycoin from '../assets/images/buycoin.png';
import Image from 'next/image';
const LandingPage = () => {
    return (
        <div className="landing-page flex flex-col justify-between h-full homePage mt-40 sm:mt-44 md:mt-48">
            <div className='landing-page-background'></div>
            <div className='loading-page-title-wrapper break-words'>
                <p className="landing-page-title xl:text-7xl lg:text-6xl md:text-[3.5rem] sm:text-5xl">Effortless De-Fi</p>
                <p className="landing-page-title xl:text-7xl lg:text-6xl md:text-[3.5rem] sm:text-5xl">Trade, Snipe, Get Rewards</p>
                <p className="landing-page-subtitle px-6 sm:px-0 mx-20 sm:mx-0 mt-6 text-lg sm:text-base md:text-lg lg:text-xl sm:min-w-[450px] lg:min-w-[570px] max-w-full w-full md:w-1/2 sm:w-1/4">
                    <b>Dextar</b> <span className="landing-page-span">is a Telegram bot that allows you to trade in a fast, simple, and secure way with minimal fees. Our goal is to constantly innovate to keep you one step ahead of the competition.</span>
                </p>
            </div>

            <div className="landing-page-button-wrapper flex flex-col sm:flex-row justify-between mt-28 sm:mt-20 md:mt-20 lg:mt-20 max-w-[455px]">
                <button id="landing-page-trynow" className="landing-page-button landing-page-trynow px-7 py-2 text-base w-[48%] justify-center">
                    <Image src={telegramPic} alt="Telegram" width={20} height={20} className='button-icon' />
                    <span className="items-center flex">Try Now</span>
                </button>
                <button className="landing-page-button px-7 py-2 landing-page-buycoin text-base w-[48%] justify-center">
                    <Image src={buycoin} alt="Telegram" width={20} height={20} className='button-icon' />
                    <span className="items-center flex">Buy $DEXTAR</span>
                </button>
            </div>
        </div>
    )
}

export default LandingPage;