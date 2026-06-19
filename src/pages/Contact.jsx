import contact from '../assets/contact.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import person4 from '../assets/person4.png';
import person5 from '../assets/person5.png';
import mail from '../assets/mail.png';
import phone from '../assets/phone.svg';
const Contact = () => {
  return (
    <div className='w-full'>
      {/* Background Section */}
      <div
        className='relative w-full h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${contact}) ` }}
      >
        <Navbar />

        <div
          className='relative z-10 flex flex-col justify-start items-start 
         
          mt-24 sm:mt-32 lg:mt-[120px]
          space-y-4 sm:space-y-6'
        >
          <div className='mt-2 flex items-center'>
            <div className='w-20 h-[2px] bg-white '></div>
            <span className='text-white text-sm font-light font-poppins ml-2'>
              Contact
            </span>
          </div>

          <div className='px-0 sm:px-16 lg:px-50 space-y-4'>
            <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Poppins']">
              Contact Us
            </div>
            <div className="text-[#B6B6B6] text-base sm:text-lg lg:text-2xl font-normal font-['Montserrat'] max-w-xl">
              Get in Touch with Us
              <br />
              <br />
              We're here to help you navigate the complexities of dam safety and
              operational planning. Contact our team for more information or to
              discuss your project needs.
            </div>
          </div>
        </div>
      </div>

      {/* Contact Person Section */}
      <div className='w-full bg-[#d1b48c] px-4 py-4 sm:px-6 lg:px-[116px] sm:py-5 mt-12'>
        <div className="text-[#043f66] text-2xl sm:text-3xl lg:text-5xl font-medium font-['Poppins']">
          Contact Person
        </div>
      </div>

      {/* Contact Cards */}
      <div className='container mx-auto py-8'>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0  md:space-x-[120px] sm:space-x-16'>
          {/* First Contact Card */}
          <div className='flex flex-col items-center text-center'>
            <img
              className='w-64 h-64 md:w-[400px] md:h-[400px] rounded-full object-cover mb-6'
              src={person4}
              alt='CEO Prakshi Jha'
            />
            <div className='space-y-4 text-left flex items-start flex-col'>
              <div className="text-black text-2xl md:text-[32px] font-normal font-['Montserrat']">
                CEO: Prakshi Jha
              </div>
              <div className='flex items-center justify-center space-x-4'>
                <div className='w-8 h-8 '>
                  <img src={mail}></img>
                </div>
                <div className="text-black text-[18px] md:text-[24px] font-['Montserrat']">
                  : prakshijha@gmail.com
                </div>
              </div>
              <div className='flex items-center justify-center space-x-4'>
                <div className='w-8 h-8'>
                  {' '}
                  <img src={phone}></img>
                </div>
                <div className="text-black text-[18px] md:text-[24px] font-['Montserrat']">
                  : +91 9821247060
                </div>
              </div>
            </div>
          </div>
</div>
          {/* Second Contact Card */}
          
        {/* Partnership Message */}
        <div className="text-center text-[#043f66] text-xl md:text-[32px] font-normal font-['Montserrat'] mt-8 px-4">
          Let us partner with you to ensure dam safety and operational
          excellence.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
