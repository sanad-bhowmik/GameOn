import React from 'react';
import './Tabone.css';
import cow from '../../../../assets/images/logo/cow.png'
import tiger from '../../../../assets/images/logo/tiger.png'
import gorilla from '../../../../assets/images/logo/gorilla.png'
import pig from '../../../../assets/images/logo/pig.png'
import rabbit from '../../../../assets/images/logo/rabbit.png'
import skull from '../../../../assets/images/logo/skull.png'
import strategy from '../../../../assets/images/logo/strategy.png'
import wolf from '../../../../assets/images/logo/wolf.png'
const Tabone = () => {
    return (
        <div className='pb-14'>
            <div className='flex gap-44 mt-10 border border-gray-600 p-12'>
                <div className="w-1/2">
                    <div className='flex gap-8 ml-14'>
                        <h1 className='border border-gray-600 text-lg p-4 text-gray-600'>26 PARTICIPANTS</h1>
                        <h1 className='border border-gray-600 text-lg p-4 text-gray-600'>UPCOMING MATCHES</h1>
                    </div>
                    <div className='check mt-14 ml-14'>
                        <h1 className="text-[#0b8ee6] text-2xl ">CHECK OUR ALL</h1>
                        <h1 className="text-4xl mt-4 font-bold text-white font-sans"> NEED FOR SPEED MATCH PART 2</h1>
                        <p className='text-lg border-gray-600 mt-6'>30TH MAY 2019, 11:00 PM</p>
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div className="flex minicard justify-center items-center w-48 h-44 border border-gray-300">
                        <p className="text-white"><img className='h-32' src={tiger} alt="" /></p>
                    </div>
                    <button className="flex justify-center items-center w-16 h-16 bg-gray-950 mt-16 text-white rounded-md transition-colors hover:bg-blue-500 ">
                        <span>VS</span>
                    </button>
                    <div className="flex minicard justify-center items-center w-48 h-44 border border-gray-300">
                        <p className="text-white"><img className='h-32' src={wolf} alt="" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabone;
