import linkedin from '../assets/linkedin.svg';
import insta from '../assets/insta.svg';
import x from '../assets/x.svg';

const Footer = () => {
  return (
    <div className='w-full bg-[#043f66] py-8 px-4 sm:px-6 lg:px-[190px]'>
      <div className='flex flex-col items-center space-y-6'>
        {/* Address Section */}
        <div className='text-center'>
          <div className="text-[#cee2eb] text-sm sm:text-lg md:text-xl font-medium font-['Montserrat'] px-2">
            A 53 SHIVA ENCLAVE, VIKAS NAGAR UTTAM NAGAR, NEW DELHI 110059
          </div>
        </div>

        {/* Contact Information */}
        <div className='text-center'>
          <div className="text-[#cee2eb] text-base sm:text-xl font-medium font-['Montserrat']">
            baandhtechindia@gmail.com ceo@baandhtech.com | +91 7428381187
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex justify-center items-center space-x-6 sm:space-x-12'>
          <a
            href='https://www.linkedin.com/company/baandhtech/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-75 transition-opacity'
          >
            <img
              src={linkedin}
              alt='LinkedIn'
              className='w-8 h-8 sm:w-10 sm:h-10'
            />
          </a>
          <a
            href='https://www.instagram.com/baandhtech/profilecard/?igsh=OWp6ZWRyM21kNWZo'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-75 transition-opacity'
          >
            <img
              src={insta}
              alt='Instagram'
              className='w-8 h-8 sm:w-10 sm:h-10'
            />
          </a>
          <a
            href='https://www.x.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-75 transition-opacity'
          >
            <img
              src={x}
              alt='X (Twitter)'
              className='w-8 h-8 sm:w-10 sm:h-10'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
