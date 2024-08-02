import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { certificates } from '../constants';
import Footer from './Footer';

const Certificates = () => {
  return (
    <div className='certificates bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='certificates'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>MY ACHIEVEMENTS.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Certificates.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        {certificates.map((certificate, index) => (
          <VerticalTimelineElement
            key={`certificate-${index}`}
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={certificate.duration}
            iconStyle={{ background: '#fff' }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={certificate.logo}
                  alt={certificate.issuingOrganization}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{certificate.title}</h3>
              <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                {certificate.issuingOrganization}
              </p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {certificate.points.map((point, pointIndex) => (
                <li key={`certificate-point-${pointIndex}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Footer />
    </div>
  );
}

export default Certificates;
