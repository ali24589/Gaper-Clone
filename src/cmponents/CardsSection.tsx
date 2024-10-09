import CardsData from './Cards'
import androidpic from '../assets/images/androidIos.webp'
import fullstackpic from '../assets/images/full-stack-developer.webp'
import pythondevpic from '../assets/images/python-developer.webp'
import javadevpic from '../assets/images/java-dev-icon.webp'
import devopspic from '../assets/images/devops-dev-icon.webp'
import reactdevpic from '../assets/images/reactdeveloper.webp'

import React from 'react'

const  CardsSection: React.FC=()=> {
  return (
    <>
    <div className='w-[100%] flex justify-center py-[40px] bg-[#f5f7fc] mb-[60px]'>
      <div className='w-[90%]   flex flex-col items-center space-y-8 '>
        <h1 className='font-bold text-center  text-5xl md:text-7xl'>Explore remote jobs</h1>
        <p className='text-xl md:text-2xl font-semibold  text-center'>Earn up to 80 dollars an hour with Gaper remote jobs</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-8 '>
        <CardsData img={androidpic} title='Android/IOS' description='Work from the comfort of your home on revolutionary products backed by MERN'/>

        <CardsData img={reactdevpic} title='React Developer' description='Are you looking for projects built on React? Our clients are actively seeking out React developers; let us match you to the right project'/>

        <CardsData img={devopspic} title='DevOps Developer' description='Database administration is a highly sought after skill that allows businesses to develop successful solutions. If you are a Mongo developer, apply today to get matched'/>

        <CardsData img={javadevpic} title='Java Developer' description='Enjoy working from anywhere in the world on projects ranging from mobile development to machine learning. Join us today to get your dream project'/>

        <CardsData img={pythondevpic} title='Python Developer' description='Python developers enjoy one of the highest rates amongst all developers and get to work on some of the most promising solutions. Join the talent pool today!'/>

        <CardsData img={fullstackpic} title='Full-Stack Developer' description='Whether your expertise lies in the back or front-end development, we have projects to match your skills'/>

        </div>
      </div>
      </div>
     
    </>
  )
}

export default CardsSection
