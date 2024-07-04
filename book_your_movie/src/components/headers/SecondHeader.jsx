import React from 'react'

const SecondHeader = () => {
    return (
        <>
            <nav>
                <div className='flex justify-between p-4 m-2'>
                    <div className='flex gap-2 items-center'>
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" sizes={"20px"} />
                        <div className='text-4xl'>
                            <b>
                                <span className='text-orange-400 font-bold'>My</span>Mov<span className='text-orange-400 font-bold'>!</span>es
                            </b>
                        </div>
                    </div>
                    <div>
                        <ul className='flex gap-3 text-2xl'>
                            <li>Home</li>
                            <li>Movie</li>
                            <li>Single Movie</li>
                            <li>Top Rated</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SecondHeader;