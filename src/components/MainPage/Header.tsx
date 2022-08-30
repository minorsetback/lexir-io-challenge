import logo from '../../assets/logo.svg';
import userImg from '../../assets/user-avatar.svg'
import Cart from "../../assets/cart.svg"
const Header = () => {
    return (
        <header className="shadow-header min-w-[1280px] pt-px">
            <section className=' flex justify-between h-28 w-wrapper mx-auto'>
                <img className='mt-9 ml-10 w-6 h-logo w-logo cursor-pointer' src={logo.src} />
                <section className='table border-spacing-10	border-collapse'>
                    <span className='table-cell align-middle pr-10 text-normal'>
                        <span className='cursor-pointer text-[#2D2D2D] font-medium'>PRODUCTS</span>
                    </span>
                    <span className='table-cell align-middle pr-10 text-normal'>
                        <span className='cursor-pointer  text-[#2D2D2D] font-medium'>BRANDS</span>
                    </span>
                    <span className='table-cell align-middle pr-14 text-normal'>
                        <span className='flex cursor-pointer  text-[#2D2D2D] font-medium'>
                            <img src={userImg.src} className='flex mr-2.5' />
                            HELLO, LEANDRO
                        </span>
                    </span>
                    <span className='table-cell align-middle pr-8 text-normal'>
                        <span className='flex cursor-pointer  text-[#2D2D2D] font-medium'>
                            <img src={Cart.src} className='flex mr-2.5' />
                            CART
                        </span>
                    </span>
                </section>
            </section>
        </header>
    )
}

export default Header