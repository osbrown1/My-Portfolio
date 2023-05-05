import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref}/>
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <div className="font-medium w-full">
          {info.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  
  const info1 = [
    "▪ Graduated with a major in Philosophy and a minor in Communications.",
    "▪ I spent time doing improv and stand-up-comedy around the city in between my studies."
  ];
  
  const info2 = [
    "▪ Attending full-time, 27-week program in web and open-source development.",
    "▪ Used command line in Git from day 1 of class",
    "▪ Built over 60 applications so far with C#/.NET, HTML, Javascript, and CSS, and more.",
    "▪ Developed interpersonal and communication skills through pairing and group projects, mirroring a professional development environment."
  ];

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div
          style={{scaleY: scrollYProgress}}
          className='absolute left-7 top-0 w-[4px] h-full bg-dark origin-top'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            type="Degree (BA), Major (Philosophy)" 
            time="Graduated: June, 2020" 
            place="Western Washington University" 
            info={info1}
          />
          <Details
            type="Coding Bootcamp, C#/React Track" 
            time="Graduated: 2023" 
            place="Epicodus" 
            info={info2}
          />
        </ul>
      </div>
    </div>  
  );
};

export default Education;

