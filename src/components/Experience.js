import React from 'react'

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
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
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
      Experience
      </h2>

      <div className='w-[75%] mx-auto relative'>
        <ol className="list-disc my-2"> 
          <Details
            position="Front Desk Agent" company="Strathcona Hotel" 
            companyLink="https://strathconahotel.com" 
            time="March 2021 – November 2022" address="Victoria, BC"
            work={<>
              <li className="my-2">Used RoomKey Property Management Software to organize and track guests I would check in and out.</li> 
              <li className="my-2">Developed filing, data entry, and organizational practices.</li> 
              <li className="my-2">Trained new employees on systems and procedures.</li> 
            </>}
          />
        </ol>
      </div>
    </div>
  );
};



export default Experience