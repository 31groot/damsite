import React from 'react';

const ExpertInfo = ({ image, name, desc }) => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-10 mt-20 mx-5 lg:w-[1233px] lg:h-[450px] lg:mx-[100px] lg:gap-[87px]'>
      {/* Image Section */}
      <div className='flex flex-col justify-between items-center'>
        <img
          className='w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full'
          src={image}
          alt='Expert'
        />
        <div className="text-black text-[20px] lg:text-[32px] font-semibold font-['Montserrat'] mt-4">
          {name}
        </div>
      </div>

      {/* Description Section */}
      <div
        className="w-full lg:w-[746px] text-justify text-[#043f66] text-[16px] lg:text-[24px] font-normal font-['Montserrat']"
        dangerouslySetInnerHTML={{ __html: desc }}
      >
     
      </div>
    </div>
  );
};

export default ExpertInfo;
