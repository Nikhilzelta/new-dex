import Image from 'next/image';
import ethIcon from '../assets/images/ethIcon.png';
import polygonIcon from '../assets/images/polygonIcon.png';

const SupportedChainsPopUp = ({ setIsPopUpOpen, setHamburger }) => {
    return (
        <>
            <div className="pop-up-overlay" id="overlay" onClick={() => {
                setIsPopUpOpen(false)
            }}></div>

            <div className="supported-chain-popup flex flex-col justify-start align-center" id="popup">
                <p className={`popup-title text-3xl xs:text-4xl sm:text-5xl my-2 text-style `}>Supported Chains</p>
                <div className='mt-2 sm:mt-6 flex flex-col align-center h-[68%]'>
                    <button className="popup-chain-button  px-7 py-2 landing-page-buycoin w-[85%] m-auto justify-between mb-5">
                        <span className="text-style items-center flex text-base">Dextar on Ethereum </span>
                        <Image src={ethIcon} alt="Telegram" width={20} height={20} />
                    </button>
                    <button className=" text-style popup-chain-button  px-7 py-2 landing-page-buycoin text-base w-[85%] m-auto justify-between mb-5">
                        <span className="items-center flex text-base">Dextar on Polygon </span>
                        <Image src={polygonIcon} alt="Telegram" width={20} height={20} />
                    </button>
                    <button className=" text-style popup-chain-button  px-7 py-2 landing-page-buycoin text-base w-[85%] m-auto justify-between ">
                        <span className="items-center flex text-base">Dextar on Avalanche </span>
                        <Image src={polygonIcon} alt="Telegram" width={20} height={20} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default SupportedChainsPopUp;