"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "ToDoList For Daily Tasks - Theme Changing Website - Fully Responsive.",
    stack: [
      { name: "React"},
      { name: "Javascript"},
      { name: "Css 3"},
      { name: "Tailwind.css"},
    ],
    image: "/assets/work/thumb1.png",
    live: "https://you-can-it.netlify.app/tasks",
    github: "https://github.com/RaDins-18/ToDoList-App-Using-React-Tailwind-JavaScript",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "Personal Brand Website - Modern and Sleek Personal Branding Solutions - Fully Responsive Design with Backend Support.",
    stack: [
      { name: "Wordpress" },
      { name: "Php"},
      { name: "Css 3"},
    ],
    image: "/assets/work/thumb2.png",
    live: "https://sheikhrabia.com/",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description: "Premium Wood Work Website - Handmade Wood Word - Fully Responsive With Backend.",
    stack: [
      { name: "Node.js" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description: "Mobile Accessories Store - E-commerce Website - Fully Responsive with Modern Design for a Great User Experience.",
    stack: [
      { name: "Wordpress" },
      { name: "Php" },
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://mobile.amtkpl.com/",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    description: "Spotify Music Player Clone - Fully Responsive - Functional.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb5.png",
    live: "https://radins.freewebhostmost.com/",
    github: "https://github.com/RaDins-18/Popular-Websites-Clone/tree/main/Spotify%20Music%20Player%20Clone%20Website",
  },
  {
    num: "06",
    category: "fullstack",
    title: "project 6",
    description: "Technology Service Provider - Innovative Tech Solutions - Fully Responsive with Backend Features for Client Management.",
    stack: [
      { name: "WordPress" },
      { name: "Php" },
      { name: "Css 3" },
    ],
    image: "/assets/work/thumb6.png",
    live: "https://tiktechsolutions.com/",
    github: "",
  },
  {
    num: "07",
    category: "fullstack",
    title: "project 7",
    description: "Wordpress Gaming Website - Fully Responsive - Admin Panel With Full Control.",
    stack: [
      { name: "Wordpress" },
      { name: "Elementor"},
      { name: "Plugins" },
    ],
    image: "/assets/work/thumb7.png",
    live: "",
    github: "",
  },
  {
    num: "08",
    category: "fullstack",
    title: "project 8",
    description: "Mobile Accessories Store - E-commerce Website - Fully Responsive with Modern Design for a Great User Experience.",
    stack: [
      { name: "Wordpress" },
      { name: "Php"},
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb8.png",
    live: "https://mobileecommerce.amtkpl.com/",
    github: "",
  },
  {
    num: "09",
    category: "frontend",
    title: "project 9",
    description: "Winter Fashion Clothing Website - Ecommerce Website - Fully Responsive.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3"},
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb9.png",
    live: "",
    github: "https://github.com/RaDins-18/Front-End-Web-Projects/tree/main/Clothing%20Website%20Home%20Page",
  },
  {
    num: "10",
    category: "frontend",
    title: "project 10",
    description: "Logistics and Transportation Solutions - Seamless Cargo Management - Fully Responsive Web Application with Backend Integration.",
    stack: [
      { name: "Wordpress" },
      { name: "Html 5" },
      { name: "Css 3"},
      { name: "Javascript" },
      { name: "Php" },
    ],
    image: "/assets/work/thumb10.png",
    live: "https://www.pyramidlog.com/",
    github: "",
  },
  {
    num: "11",
    category: "frontend",
    title: "project 11",
    description: "Wireless Headphones Website - Ecommerce Website - Fully Responsive.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3"},
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb11.png",
    live: "",
    github: "https://github.com/RaDins-18/Front-End-Web-Projects/tree/main/Headphone%20Website%20Home%20Page",
  },
  {
    num: "12",
    category: "fullstack",
    title: "project 12",
    description: "Corporate Services Website - Simplified Corporate Solutions - Fully Responsive with Advanced Backend Functionality.",
    stack: [
      { name: "Wordpress" },
      { name: "Php"},
      { name: "Css 3" },
    ],
    image: "/assets/work/thumb12.png",
    live: "https://ibrahimbinsaqlainllc.ae/",
    github: "",
  },
  {
    num: "13",
    category: "fullstack",
    title: "project 13",
    description: "Hiking & Camping Agency Website - Functional - Fully Responsive With Backend.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
    ],
    image: "/assets/work/thumb13.png",
    live: "",
    github: "",
  },
  {
    num: "14",
    category: "fullstack",
    title: "project 14",
    description: "Healthcare Solutions Website - Modern Medical Supplies - Fully Responsive with Backend System for Efficient Management.",
    stack: [
      { name: "Wordpress" },
      { name: "Php" },
      { name: "Css 3" },
    ],
    image: "/assets/work/thumb14.png",
    live: "https://visorhealthcare.co.uk/",
    github: "",
  },
  {
    num: "15",
    category: "frontend",
    title: "project 15",
    description: "Love Bird Breeder's Website - Rare Love Birds - Fully Responsive.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3"},
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb15.png",
    live: "",
    github: "https://github.com/RaDins-18/Front-End-Web-Projects/tree/main/Love%20Birds%20Expert%20Portfolio%20Website",
  },
  {
    num: "16",
    category: "frontend",
    title: "project 16",
    description: "E-commerce Platform - Custom Jacket Store - Fully Responsive Frontend E-commerce Solution.",
    stack: [
      { name: "Wordpress" },
      { name: "Php" },
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb16.png",
    live: "https://jacket.amtkpl.com/",
    github: "",
  },
  {
    num: "17",
    category: "fullstack",
    title: "project 17",
    description: "Creative UI/UX Designer's Portfolio - Functional - Fully Responsive With Backend.",
    stack: [
      { name: "Node.js" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    image: "/assets/work/thumb17.png",
    live: "",
    github: "",
  },
  {
    num: "18",
    category: "fullstack",
    title: "project 18",
    description: "International Trading Platform - Dynamic Trading Solutions - Fully Responsive Website with a Powerful Backend.",
    stack: [
      { name: "Wordpress" },
      { name: "Php" },
      { name: "Css 3" },
    ],
    image: "/assets/work/thumb18.png",
    live: "https://ftradeint.com/",
    github: "",
  },
  {
    num: "19",
    category: "frontend",
    title: "project 19",
    description: "RaDin's Perfume Collection Website - Premium Fragrances - Fully Responsive.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3"},
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb19.png",
    live: "",
    github: "https://github.com/RaDins-18/Front-End-Web-Projects/tree/main/RaDins%20Perfume%20Website",
  },
  {
    num: "20",
    category: "frontend",
    title: "project 20",
    description: "Creative & Unique Ideas Website - Create Something Creative - Fully Responsive.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3"},
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb20.png",
    live: "",
    github: "https://github.com/RaDins-18/Front-End-Web-Projects/tree/main/Creative%20Studio%20Website%20Animated%20Home%20Page",
  },
  
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* project info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stock */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>  
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live?
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>:""
                }
                {/* github project button */}
                {project.github?
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>:""
                }
              </div>      
            </div>
          </div>
          {/* project picture with slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          priority
                          sizes="100%"
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;