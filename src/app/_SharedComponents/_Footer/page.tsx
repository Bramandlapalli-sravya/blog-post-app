import GooglePlay from '../assets/GooglePay.svg';
import AppStore from '../assets/AppStore.svg';
import Scanner from '../assets/Scanner.svg';
import '../../../app/globals.css';


export default function Footer() {
    return (
        <footer className={'footer'}>
            <h4>Download the App</h4>
            <img src={GooglePlay.src} alt='Google-play' />
            <img src={AppStore.src} alt='App-store' />
            <div className={'flex flex-col items-center'}>
                <hr className="w-[0.5px] h-10 border-l border-gray-500 border-dashed" />
                <span className='text-gray-500'>or</span>
                <hr className="w-[0.5px] h-10 border-l border-gray-500 border-dashed" />
            </div>
            <img src={Scanner.src} alt='scanner' />
        </footer>
    );
}
