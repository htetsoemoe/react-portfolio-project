import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'

const Projects = () => {
    return (
        <section id='projects' className='pt-48 pb-48'>
            {/* Headings */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero illum veritatis aliquid maiores tempora.
                    Facere quidem nostrum corporis inventore magni delectus est
                    quia et rerum nihil odit natus, cumque harum!
                </p>
            </motion.div>
        </section>
    )
}

export default Projects
