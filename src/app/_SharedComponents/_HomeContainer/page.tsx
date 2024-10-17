import '../../../app/globals.css';
import backgroundImg from '../assets/background-img.svg';
import phone from '../assets/phone.svg';
import email from '../assets/email.svg';
import addIcon from '../assets/addIcon.svg';
import PersonIcon from '../assets/PersonIcon.svg';


export default function HomeContainer() {
    return (
        <main className={'imageContainer overflow-auto md:overflow-hidden'}>
            <img src={backgroundImg.src} alt='background-img' className={"backgroundImg"} />
            <h1 className={'heading'}>Premium Chauffeur Service</h1>
            <h2 className={'subHeading'}>Your exclusive and dependable chauffeur service indulgence</h2>
            <div className={'contactDetails'}>
                <p className={'question'}>Do you want to customise your booking?</p>
                <p className={'description'}>We offer customised bookings for any location, from bulk or intercity trips to monthly packages.</p>
                <div className={'contactNumber'}>
                    <span>Contact us now</span>
                    <img src={phone.src} alt='icon' />
                    <span className={'phone'}> +44 (0) 207 112 8101</span>
                    <img src={email.src} alt='icon' />
                    <span className={'email'}>booking@roldrive.com</span>
                </div>
            </div>
            <form className={'form'}>
                <div className='flex gap-3 py-5'>
                    <button className={'formButton'}>Transfer</button>
                    <button className={'formButton'} disabled>Hourly</button>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label className='text-sm' htmlFor='pickup'>Pick Up</label>
                        <div className='relative'>
                            <input id='pickup' type='text' placeholder='Enter pick up location' className={'formInput'} />
                            <img className='absolute top-4 left-4' src={PersonIcon.src} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm' htmlFor='pickup'>Drop off</label>
                        <div className='relative'>
                            <input id='pickup' type='text' placeholder='Enter Drop off location' className={'formInput'} />
                            <img className='absolute top-4 left-4' src={PersonIcon.src} />
                        </div>
                    </div>
                    <button className='flex items-center gap-1 text-sm text-amber-300'><img src={addIcon.src} />Add Stop</button>

                    <div className='flex gap-3 w-full'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor='pickup-date'>Date</label>
                            <input
                                id='pickup-date'
                                type='date'
                                className={'formInput'}
                            />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor='pickup-time'>Time</label>
                            <input
                                id='pickup-time'
                                type='time'
                                className={'formInput'}
                            />
                        </div>
                    </div>

                    <hr />
                    <button className='flex items-center gap-1 text-md text-amber-300'><img src={addIcon.src} />Add Return Journey</button>
                    <button className='bg-orange-600 p-3 rounded-lg mb-4 text-xl'>Search Ride</button>
                </div>
            </form>
        </main>
    );
}
