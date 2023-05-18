import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/ZombieFPS.jpg";
import project2 from "../../public/images/projects/IceCream.jpg";
import project3 from "../../public/images/projects/Oil.jpg";
import project4 from "../../public/images/projects/Sweets.jpg";
import { motion } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2x1 p-12 dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
      <div className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
        <span href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
        </span>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10 hover:scale-110 transition-transform'>
            <motion.div whileHover={{ scale: 1.1 }}>
              <GithubIcon />
            </motion.div>
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Owen Brown | Projects Page</title>
        <meta name='description' content="any description" />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Take a Look at my Projects!" className='mb-16' />

          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedProject
                title="FPS Zombie Survival"
                img={project1}
                summary="This is a thrilling full-fledged first-person shooter developed in Unreal Engine, utilizing Blueprints for gameplay mechanics and incorporating various features such as AI, a vast landscape, smooth animations, and more. The game is designed around wave-based enemies that relentlessly chase and attack you, providing an intense and immersive gaming experience."
                link="/"
                github="https://github.com/osbrown1/FPSGame"
                type="Featured Project"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="Ice Cream Review Tracker"
                img={project2}
                summary="This site allows the user to add reviews to the ice cream they've tried. They can fill out a form that lets them enter in the flavor and the brand, and then leave a review and edit everything later."
                link="/"
                github="https://github.com/osbrown1/LocalBusinessInventoryTracker"
                type="Featured Project"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="Burning Oil"
                img={project3}
                summary="Explore a small but unique pixelated world with vast verticality and a boss fight."
                link="https://play.unity.com/mg/other/webgl-builds-338664"
                github="https://github.com/osbrown1/BurningOilV2"
                type="Featured Project"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="Pierre's Treats"
                img={project4}
                summary="A website with user authorization that lets a patron browse treats and their flavors, and lets those authorized edit available products. Keeps track of passwords and login information"
                link="/"
                github="https://github.com/osbrown1/PierreTreats"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;   
      
      

    // const Project = ({title, type, img, link, github}) => {
    
//   return(
//       <article className='w-full flex-flex-col item-center justify-center rounded-2xl
//       border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
//       '> 
//       <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
//        rounded-br-3xl dark:bg-light
//        ' />
//       <Link href={link} target="_blank"
//       className='w-full cursor-pointer overflow-hidden rounded-lg'
//       >
//         <FramerImage src={img} alt={title} className="w-full h-auto" 
//         whileHover={{scale:1.05}}
//         transition={{duration:0.2}}
//         />
//       </Link>
      
//       <div className='w-full flex flex-col items-start justify-between mt-4'>
//         <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
//         <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
//         <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
//       </Link>
      
//       <div className='w-full mt-2 flex items-center justify-between'>
//       <Link href={link} target='_blank'
//         className='text-lg font-semibold underline'
//         >Visit</Link>
//         <Link href={github} target='_blank' className='w-8'> <GithubIcon /> </Link>
        
//       </div>

//       </div>
//       </article>
//   )
// }