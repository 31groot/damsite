import VideoBackground from '../components/VideoBackground';
import about from '../assets/about.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import video2 from '../assets/hydrodynamic_flow.mp4';
import video1 from '../assets/hydrodynamic_flow_2.mp4';
import video3 from '../assets/hydrodynamic_flow_3.mp4';

const About = () => {
  return (
    <>
      <div
        className='relative w-full h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${about})` }}
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
              About            </span>
          </div>

          <div className='px-0 sm:px-16 lg:px-50 space-y-4'>
            <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Poppins']">
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>
            Who are we <span className='text-[#f8f9fb]'>?</span>
          </h1>
            </div>
            <div className="text-[#B6B6B6] text-base sm:text-lg lg:text-2xl font-normal font-['Montserrat'] max-w-xl">
            At Baandhtech we are committed to enhancing dam safety through
            specialized services. Combining advanced engineering techniques with
            regulatory expertise, we ensure your infrastructure meets the
            highest safety standards.
            </div>
          </div>
        </div>
      
      </div>

      <div className='w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-0 mt-12 px-4 lg:px-0'>
        <div className='w-full lg:w-1/2 h-[250px] lg:h-[538px] overflow-hidden'>
          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-between items-center w-full lg:w-1/2'>
          <div className='w-full bg-[#d1b48c] py-4 text-center'>
            <div className='text-[#043f66] text-2xl md:text-5xl font-medium font-[Poppins]'>
              Our Mission
            </div>
          </div>
          <div className=' p-4 lg:p-8'>
            <div className='text-[#003655] text-lg md:text-2xl lg:text-[32px] font-normal font-[Montserrat] leading-relaxed'>
              <ul className='list-disc list-inside text-left text-[32px]'>
                <li>Risk Reduction</li>
                <li>Rehabilitation</li>
                <li>Restoration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-0 px-4 lg:px-0'>
        <div className='flex flex-col justify-between items-start w-full lg:w-1/2'>
          <div className='w-full bg-[#d1b48c] py-4 text-center'>
            <div className='text-[#043f66] text-2xl md:text-5xl font-medium font-[Poppins]'>
              Our Vision
            </div>
          </div>
          <div className='p-4 lg:p-8'>
            <div className='text-[#003655] text-lg md:text-2xl lg:text-[32px] font-normal font-[Montserrat] text-center'>
              One stop solution that mitigates risks, optimizes performance, and
              promotes sustainable development.
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 h-[250px] lg:h-[479px] overflow-hidden'>
          <video
            src={video2}
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      <div className='w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-0 px-4 lg:px-0 mb-12'>
        <div className='w-full lg:w-1/2 h-[250px] lg:h-[482px] overflow-hidden'>
          <video
            src={video3}
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
          />
        </div>

        <div className='flex flex-col justify-start items-center w-full lg:w-1/2'>
          <div className='w-full bg-[#d1b48c] py-4 text-center'>
            <div className='text-[#043f66] text-2xl md:text-5xl font-medium font-[Poppins]'>
              Why Choose Us?
            </div>
          </div>
          <div className='p-4 lg:p-8'>
            <div className='text-[#003655] text-lg md:text-2xl lg:text-[32px] font-normal font-[Montserrat] leading-relaxed'>
              <ul className='list-disc list-inside text-left space-y-4'>
                <li className='flex items-start'>
                  <span className='mr-4'>•</span>
                  <span>Expertise in dam safety and operational planning</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-4'>•</span>
                  <span>Deliver in time and innovative solutions</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-4'>•</span>
                  <span>Comprehensive solutions tailored to your needs</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-4'>•</span>
                  <span>Commitment to compliance with national standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
