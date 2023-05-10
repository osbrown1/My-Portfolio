import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {

  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer
    absolute '
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x, y:y}}
    transition={{duration: 1.5}}
    viewport={{once: true}}
    >

    {name}
    </motion.div>
  )
}


const Skills = () => {
  return (
    <>
     <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
     <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>

        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
          whileHover={{scale:1.05}}>
    
          Web
        </motion.div>

        <Skill name="Unreal Engine" x="1vw" y="5vw"/>
        <Skill name="HTML" x="-22vw" y="2vw"/>
        <Skill name="CSS" x="20vw" y="1vw"/>
        <Skill name="React" x="0" y="12vw"/>
        <Skill name="Javascript" x="-12vw" y="-2vw"/>
        <Skill name="C#" x="10vw" y="-3vw"/>
        <Skill name="Unity" x="-1vw" y="-11vw"/>
        <Skill name=".Net" x="25vw" y="-10vw"/>
        <Skill name="Scrum" x="-20vw" y="18vw"/>
        <Skill name="A.I." x="-27vw" y="-10vw"/>
        <Skill name="MySQL" x="18vw" y="18vw"/>
        <Skill name="API Calls" x="2vw" y="-19vw"/>
     </div>
    </>
  )
}

export default Skills