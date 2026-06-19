import React from 'react';
import Navbar from '../components/Navbar';
import VideoBackground from '../components/VideoBackground';
import videoSrc from '../assets/home.mp4';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.jpeg';
import person3 from '../assets/person3.png';
import ExpertInfo from '../components/ExpertInfo';
import hydrodynamic_flow2 from '../assets/hydrodynamic_flow_2.mp4';
import Footer from '../components/Footer';

const ExpertiseSection = () => {
  return (
    <div className='w-full'>
      {/* Header Section */}
      <div className='w-full lg:w-full h-[72px] px-6 lg:px-[116px] mt-20 bg-[#d1b48c] flex justify-start items-center'>
        <div className="text-[#043f66] text-2xl lg:text-5xl font-semibold font-['Poppins']">
          Our Expertise Includes:
        </div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col lg:flex-row w-full gap-10 lg:gap-[70px] px-6 lg:px-[120px] mt-10'>
        {/* List Section */}
        <div className='w-full lg:w-1/2'>
          <ul className="list-disc pl-5 text-black text-lg lg:text-2xl font-normal font-['Montserrat'] space-y-6 leading-relaxed">
            <li>Dam Break Analysis (DBA)</li>
            <li>Emergency Action Plans (EAPs)</li>
            <li>Design Flood Review</li>
            <li>Glacier and Glacial Lake Outburst Flood (GLOF) Studies</li>
            <li>Operation & Maintenance (O&M) Manual Preparation</li>
          </ul>
        </div>

        {/* Video Section */}
        <div className='w-full lg:w-1/2'>
          <VideoBackground
            videoSrc={hydrodynamic_flow2}
            className='h-[250px] lg:h-[400px] w-full rounded-lg shadow-lg'
            overlayColor='black'
            overlayOpacity={0.4}
          >
            <div></div>
          </VideoBackground>
        </div>
      </div>

      {/* Footer Text */}
      <div className='text-center mt-10 text-[#043f66] text-lg lg:text-2xl font-medium leading-snug mb-20'>
        Discover how our services can safeguard your infrastructure and the
        communities <br />
        you serve.
      </div>
    </div>
  );
};

const Home = () => {
  const Experts = [
    {
      name: 'Jitendra Yadav',
      image: person2,
      desc: `Jitendra Yadav, M.Tech, is a 2020 Graduate from MANIT Bhopal. With extensive experience in Hydrology at the National Institute of Hydrology (NIH) in Roorkee, he holds a Master's degree in Technology. His professional background encompasses comprehensive expertise in the field of Hydrology, gained through his work at NIH, Roorkee.
`,
    },
    {
      name: 'Waseem Ahmad',
      image: person3,
      desc: `Waseem Ahmad is a seasoned Dam Construction engineer with over 17 years
        of experience in the water resources and infrastructure sectors. He
        specializes in dam rehabilitation projects under World Bank-funded DRIP
        initiatives, with expertise in construction management, environmental
        compliance, and stakeholder coordination. His notable contributions
        include rehabilitation works at Kuttiyadi Dam, Ichari Dam, and Joshiyara
        Barrage. Waseem is adapt at delivering projects adhering to dam safety
        regulations and international standards.`,
    },
  ];
  return (
    <div className='flex flex-col justify-center align-center items-center w-full'>
      <VideoBackground
        videoSrc={videoSrc}
        className='h-screen w-full'
        overlayColor='black'
        overlayOpacity={0.6}
        fixed={false}
      >
        <Navbar />
        <div className='h-full flex flex-col justify-center items-center text-center px-4 text-white'>
          <h1
            className='text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold font-poppins leading-tight 
      max-w-full md:max-w-4xl mx-auto mt-[100px] sm:mt-[150px] lg:mt-[200px]'
          >
            BAANDHTECH
          </h1>
          <p
            className='text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-poppins leading-normal 
      max-w-full md:max-w-3xl mx-auto mb-6 sm:mb-8 px-4'
          >
            Helping India Achieve Its Dam Safety Goals
          </p>
        </div>
      </VideoBackground>
      <div className='bg-[#044065] py-[80px] px-[60px] '>
        <div className=" text-center text-white/80 text-[24px] font-normal font-['Montserrat'] ">
          We specialize in delivering in-time and innovative solutions for dam
          safety and operational efficiency. With a focus on precision,
          compliance, and sustainability, we help ensure the safety of dams and
          appurtenant structures.
        </div>
      </div>
      <ExpertiseSection />

      {/* Terms of Experts */}
      <div className='w-full bg-[#D1B48C] px-4 sm:px-8 lg:px-[116px] py-4 sm:py-5 flex items-center'>
        <div className='text-[#043F66] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-["Poppins"]'>
          Team of Experts
        </div>
      </div>
      <div className='mb-20'>
        {Experts.map((expert) => (
          <ExpertInfo
            image={expert.image}
            name={expert.name}
            desc={expert.desc}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
