import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">


      <LiIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize text-red-500"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
      Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>

      <motion.div
      style={{scaleY: scrollYProgress}}
      
      className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
        <Details
        position="Front Desk Agent" company="Strathcona Hotel" 
        companyLink="https://strathconahotel.com" 
        time="March 2021 – November 2022" address="Victoria, BC"
        work="▪ Used RoomKey Property Management Software to organize and track guests I would check in and out.
              ▪ Developed filing, data entry, and organizational practices.
              ▪ Trained new employees on systems and procedures."
        />
        </ul>
      </div>
    </div>
      
  )
}

export default Experience