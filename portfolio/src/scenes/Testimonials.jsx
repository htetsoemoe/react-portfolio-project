import React from 'react'
import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <section id='testimonials' className='pt-32 pb-32'>
            {/* Heading */}
            <motion.div
                className='md:w-1/3 text-center md:text-left'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                    TESTIMONIALS
                </p>
                <LineGradient width='mx-auto w-1/3' />
                <p className="mt-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit corporis cum,
                    dignissimos nulla modi sint similique assumenda odio eaque cupiditate.
                </p>
            </motion.div>

            {/* Testimonials Cards with Animation*/}
            <div className="md:flex md:justify-between gap-8">
                <motion.div
                    className='relative mx-auto bg-blue max-w-[400px] max-h-[350px] rounded-md flex flex-col p-16 mt-48
                        before:content-person1 before:absolute before:top-[-130px] before:-ml-[110px] before:left-1/2'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-5xl mt-10">“</p>
                    <p className="text-center text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente autem ipsum facilis, esse vitae debitis odio reiciendis ipsam repellat dignissimos?
                    </p>
                </motion.div>

                <motion.div
                    className='relative mx-auto bg-red max-w-[400px] max-h-[350px] rounded-md flex flex-col p-16 mt-48
                        before:content-person2 before:absolute before:top-[-130px] before:-ml-[110px] before:left-1/2'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-5xl mt-10">“</p>
                    <p className="text-center text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente autem ipsum facilis, esse vitae debitis odio reiciendis ipsam repellat dignissimos?
                    </p>
                </motion.div>

                <motion.div
                    className='relative mx-auto bg-yellow max-w-[400px] max-h-[350px] rounded-md flex flex-col p-16 mt-48
                        before:content-person3 before:absolute before:top-[-130px] before:-ml-[110px] before:left-1/2'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-5xl mt-10">“</p>
                    <p className="text-center text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente autem ipsum facilis, esse vitae debitis odio reiciendis ipsam repellat dignissimos?
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
