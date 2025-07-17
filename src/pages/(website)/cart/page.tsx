import useScreenWidth from '@/common/hooks/useScreenWidth';
import { ChevronRight } from "lucide-react";
import { Outlet } from 'react-router';
import ShoppingStatus from './_components/ShoppingStatus';

const CartPage = () => {
    //Theo dõi chiều ngang của web
    const screenWidth = useScreenWidth();

    return (
        <section className='grid place-items-center'>
            <div className='max-w-[1920px] w-full defaultPadding'>
                {/* điều hướng */}
                <div className='w-full flex flex-col gap-6 mb-9'>
                    <div className='h-[1px] w-full bg-primary/10'></div>
                    <div className='flex lg:gap-3 gap-[6px]'>
                        <div className='flex gap-1 items-center font-Satoshi lg:text-base text-sm text-primary/60'>
                            <p>Home</p>
                            <ChevronRight size={18} />
                        </div>
                        <div className='flex gap-1 items-center font-Satoshi lg:text-base text-sm text-primary'>
                            <p>Cart</p>
                            {/* <ChevronRight size={18} /> */}
                        </div>
                    </div>
                </div>
            </div>
            <ShoppingStatus screenWidth={screenWidth} />
            <div className='max-w-[1920px] w-full defaultPadding flex xl:flex-row flex-col sm:gap-16 gap-8 py-10 font-Satoshi'>
                {/* YOUR CART  */}
                <Outlet />
            </div>
            {/* <div className='max-w-[1920px] w-full defaultPadding my-12'>
                <div className='w-full flex justify-between items-center *:w-full'>
                    <div className='flex justify-center'>
                        <div className='flex items-center gap-4 px-4 py-2'>
                            <Package size={48} />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-lg'>Free Shipping</p>
                                <span className='text-sm text-gray-500'>Free shipping for order above $50</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center border-l border-r'>
                        <div className='flex items-center gap-4 px-4 py-2'>
                            <Wallet size={48} />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-lg'>Flexible Payment</p>
                                <span className='text-sm text-gray-500'>Mutiple secure payment options</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center border-l'>
                        <div className='flex items-center gap-4 px-4 py-2'>
                            <Headset size={48} />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-lg'>24x7 Support</p>
                                <span className='text-sm text-gray-500'>We support online all days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section >
    )
}

export default CartPage