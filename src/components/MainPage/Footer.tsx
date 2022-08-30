import LogoWhite from '../../assets/logo-white.svg'
import Instagram from '../../assets/instagram.svg'
import Facebook from '../../assets/facebook.svg'
import Medium from '../../assets/medium.svg'
import Linkedin from '../../assets/linkedin.svg'

const Footer = () => {
    return (
        <footer className="bg-[#2D2D2D] mx-auto min-w-[1280px] pl-10 pr-10 mt-10">
            <section className='grid grid-cols-6 gap-5 w-[1213px] mx-auto'>
                <section>
                    <img className='mt-10 cursor-pointer' src={LogoWhite.src} />
                </section>
                <section>
                    <p className='mt-10 text-[#8F8F8F] font-medium'>COMMUNITY</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium' >Lexir for Brands</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium' >Business Buyers</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium' >Sales Affiliates</p>
                </section>
                <section>
                    <p className='mt-10 text-[#8F8F8F] font-medium'>PLATFORM</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>Resources</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>Pricing</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>Get Started</p>
                </section>
                <section>
                    <p className='mt-10 text-[#8F8F8F] font-medium'>COMPANY</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>About</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>Contact</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>Legal</p>
                </section>
                <section>
                    <p className='mt-10 text-[#8F8F8F] font-medium'>LEXIR SHOP</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>Brands</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>Spirits</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>Wine</p>
                    <p className='text-slate-200 mt-5 cursor-pointer font-medium'>Blog</p>
                </section>
                <section className='flex flex-wrap flex-start items-start mt-10 ml-20'>
                    <img className='cursor-pointer' src={Medium.src} />
                    <img className='cursor-pointer' src={Facebook.src} />
                    <img className='cursor-pointer' src={Instagram.src} />
                    <img className='cursor-pointer' src={Linkedin.src} />
                </section>
                <section className='ml-line col-span-6 pt-10  border-b border-zinc-500 mb-6 mt-2 w-full mx-auto'></section>
                <section className='col-span-6  flex justify-between pb-8 w-[100%] mx-auto'>
                    <section>
                        <p className='text-gray-400'>© 2022 Lexir Inc.</p>
                    </section>
                    <section>
                        <span className='mr-10 text-[#8F8F8F] cursor-pointer'>Privacy</span>
                        <span className='text-slate-200 cursor-pointer'>Terms of service</span>
                    </section>
                </section>
            </section>
        </footer >
    )
}

export default Footer