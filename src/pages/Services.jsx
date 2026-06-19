import React from 'react';
import services from '../assets/services.mp4';
import Navbar from '../components/Navbar';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <>
      {/* Video Background */}
      <VideoBackground
        videoSrc={services}
        className="w-full h-full"
        overlayColor="black"
        overlayOpacity={0.6}
        fixed={true}
      />

      {/* Content */}
      <div className="relative z-10 text-white pr-6 md:pr-20 lg:pr-32">
        <Navbar />

        {/* Two-Column Layout */}
        <div className="flex flex-col md:flex-row mt-24 sm:mt-32 lg:mt-[120px]">
          {/* Left Column */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <div className="mt-2 flex items-center">
              <div className="w-20 h-[2px] bg-white mr-2"></div>
              <span className="text-gray-400 text-sm font-light font-poppins">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins pl-6 md:pl-20">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg mt-6 leading-relaxed pl-6 md:pl-20">
              We offer specialized services focused on critical aspects of dam safety.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 space-y-8 mb-20 px-4">
            {/* Service 1 */}
            <div>
              <h3 className="text-2xl font-semibold font-poppins">
                Dam Break Analysis (DBA)
              </h3>
              <p className="text-gray-400 mt-2 text-lg">
                Assess potential downstream impacts of dam failures, enabling effective risk management and planning.
              </p>
            </div>

            {/* Service 2 */}
            <div>
              <h3 className="text-2xl font-semibold font-poppins">
                Emergency Action Plans (EAPs)
              </h3>
              <p className="text-gray-400 mt-2 text-lg">
                Develop actionable plans to minimize risks during emergencies, ensuring the safety of downstream areas.
              </p>
            </div>

            {/* Service 3 */}
            <div>
              <h3 className="text-2xl font-semibold font-poppins">
                Design Flood Review
              </h3>
              <p className="text-gray-400 mt-2 text-lg">
                Evaluate and validate flood design criteria to ensure dam safety and compliance with regulatory requirements.
              </p>
            </div>

            {/* Service 4 */}
            <div>
              <h3 className="text-2xl font-semibold font-poppins">
                Glacier and Glacial Lake Outburst Flood (GLOF) Studies
              </h3>
              <p className="text-gray-400 mt-2 text-lg">
                Conduct assessments of glacial lakes and potential flood risks to mitigate hazards and prepare for climate impacts.
              </p>
            </div>

            {/* Service 5 */}
            <div className='mb-10'>
              <h3 className="text-2xl font-semibold font-poppins">
                Operation & Maintenance (O&M) Manual Preparation
              </h3>
              <p className="text-gray-400 mt-2 text-lg">
                Prepare comprehensive manuals for effective dam operations and routine maintenance to ensure long-term functionality and safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    <div className='relative z-10'><Footer/></div>
    </>
  );
};

export default Services;
