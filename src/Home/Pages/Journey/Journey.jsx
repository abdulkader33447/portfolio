import { FaBookOpen, FaHourglassStart, FaTrophy } from 'react-icons/fa6';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Journey = () => {
  return (
    <div
      id="journey"
      className="lg:mt-32 md:mt-24 mt-20 sm:w-11/12 w-11/12 mx-auto text-center lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25"
    >
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold">
        <span data-aos="fade" data-aos-duration="1000">Jo</span>
        <span data-aos="fade" data-aos-duration="1500">ur</span>
        <span data-aos="fade" data-aos-duration="2000">ney</span>
      </h1>

      <VerticalTimeline lineColor='#1e2a47'>
        <VerticalTimelineElement
          contentStyle={{
            background: 'rgba(30, 42, 71, 0.5)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(59, 76, 116, 0.5)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            // color: '#fff',
            padding: '1rem',
            borderRadius: '16px'
          }}
          contentArrowStyle={{
            borderRight: '7px solid rgba(30, 42, 71, 0.5)',
          }}
          iconStyle={{
            background: '#1e2a47',
            // color: '#fff',
            border: '2px solid #3b4c74',
          }}
          icon={<FaBookOpen />
}
        >
          <h1 className="text-lg md:text-[20px] sm:text-[22px] font-semibold text-start">Familiar With</h1>
          <p className="text-sm md:text-xs sm:text-xs mt-1 text-start">
            In 2023, I became familiar with the terms HTML, CSS, JavaScript, React, etc. Then my interest in web development gradually grew.
          </p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: 'rgba(30, 42, 71, 0.5)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(59, 76, 116, 0.5)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            // color: '#fff',
            padding: '1rem',
            borderRadius: '16px'
          }}
          contentArrowStyle={{
            borderRight: '7px solid rgba(30, 42, 71, 0.5)',
          }}
          iconStyle={{
            background: '#1e2a47',
            color: '#fff',
            border: '1px solid rgba(59, 76, 116, 0.5)',
          }}
          icon={<FaHourglassStart />
}
        >
          <h1 className="text-lg md:text-[20px] sm:text-[22px] font-semibold text-start">Result</h1>
          <p className="text-sm md:text-xs sm:text-xs mt-1 text-start">
            Let's jump into the development journey in full swing from January 2025.
          </p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: 'rgba(30, 42, 71, 0.5)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(59, 76, 116, 0.5)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            // color: '#fff',
            padding: '1rem',
            borderRadius: '16px'
          }}
          contentArrowStyle={{
            borderRight: '7px solid rgba(30, 42, 71, 0.5)',
          }}
          iconStyle={{
            background: '#1e2a47',
            color: '#fff',
            border: '1px solid rgba(59, 76, 116, 0.5)',
          }}
          icon={<FaTrophy />}
        >
          <h1 className="text-lg md:text-[20px] sm:text-[22px] font-semibold text-start">Start Explore</h1>
          <p className="text-sm md:text-xs sm:text-xs mt-1 text-start">
            After eight months of dedicated effort and intensive learning, I am proud to present myself as a Junior MERN Stack Developer.
          </p>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Journey;
