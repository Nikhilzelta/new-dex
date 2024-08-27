import Image from 'next/image';
import telegramPic from '../assets/images/telegrampic.png';
import buycoin from '../assets/images/buycoin.png';

const MobileNavbarDropDown = ({ setIsPopUpOpen, setHamburger }) => {
    return (
        <>
            <div className="mobile-nav-wrapper flex flex-col justify-center items-center" id="popup">
                <div className='w-full h-1/2'>
                    <div className='flex flex-col justify-center items-center mt-36'>
                        <button className='text-4xl my-3'>Docs</button>
                        <button className='text-4xl mobile-nav-buttons' onClick={() => setIsPopUpOpen(true)}>Bots</button>
                    </div>
                </div>
                <div className="landing-page-button-wrapper flex flex-col sm:flex-row justify-between mt-20 sm:mt-20 md:mt-20 lg:mt-20 max-w-[455px]">
                    <button className="landing-page-button landing-page-trynow px-7 py-2 text-base w-[48%] justify-center">
                        <Image src={telegramPic} alt="Telegram" width={20} height={20} className='button-icon' />
                        <span className="items-center flex">Try Now</span>
                    </button>
                    <button className="landing-page-button px-7 py-2 landing-page-buycoin text-base w-[48%] justify-center">
                        <Image src={buycoin} alt="Telegram" width={20} height={20} className='button-icon' />
                        <span className="items-center flex">Buy $DEXTAR</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MobileNavbarDropDown;