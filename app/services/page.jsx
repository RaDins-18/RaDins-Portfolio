"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Dynamic responsive websites using HTML, CSS, JavaScript, and ReactJS, NodeJS, and NextJS. Ensuring smooth, fast, catchy, and interactive user experiences.',
    href: 'https://github.com/RaDins-18/Popular-Websites-Clone',
  },
  {
    num: '02',
    title: 'Wordpress Development',
    description: 'Specializing in custom themes, plugins, and responsive design. Optimizing site performance, user-friendly navigation, and implementing SEO.',
    href: 'https://wordpress.com/',
  },
  {
    num: '03',
    title: 'Python Programs',
    description: 'Building robust error free applications and automating tasks. Web development with Flask, and crafting efficient, readable code.',
    href: 'https://github.com/RaDins-18/Games-Using-Python',
  },
  {
    num: '04',
    title: 'Shopify Development',
    description: 'Specializing in custom themes, app integrations, and e-commerce optimization. Creating user-friendly online stores that enhance customer experiences.',
    href: 'https://shopify.com/',
  },
  {
    num: '05',
    title: 'Logo Design',
    description: 'Creating memorable, visually striking logos. Excel at blending creativity with brand identity to deliver unique, impactful designs that stand out.',
    href: 'https://www.bigcommerce.com/glossary/what-is-a-logo-design/',
  },
  {
    num: '06',
    title: 'UI/UX Design',
    description: 'Specializing in crafting intuitive and engaging user interfaces. Research, wireframing, and prototyping to create seamless digital experiences.',
    href: 'https://github.com/RaDins-18/Front-End-Web-Projects',
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} target="_blank" className="w-[50px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;