import { CgProfile } from "react-icons/cg";

const FirstHeader = () => {
    return (
        <div className='flex justify-around bg-black text-white p-3'>
            <h3 className="text-stone-400 font-bold">
                <span className='bg-[#a855f7] p-3 font-bold text-white'>
                    VIP SWEEPSTAKES
                </span>
                <span className='text-orange-500 font-bold ml-4'> $5000 SHOPPING SPREE  </span>
                Join Movies VIP for a chance to win. Don't forget to join during checkout</h3>
            <h3 className="text-stone-400 font-bold flex gap-1 hover:text-orange-500 hover:font-bold">
                <span className="mt-1"> <CgProfile /> </span>
                login </h3>
        </div>
    )
}

export default FirstHeader;