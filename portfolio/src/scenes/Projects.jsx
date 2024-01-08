import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'

const Projects = () => {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    }

    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    // Custom Custom Component
    const Project = ({ title }) => {
        // Overlay Style
        const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 hover:cursor-pointer transition duration-500
            bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`

        const projectTitle = title.split(" ").join("-").toLowerCase()

        return (
            <motion.div
                variants={projectVariant}
                className='relative'
            >
                <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">{title}</p>
                    <p className="mt-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed cum doloremque
                        voluptatum quasi porro neque ut, ullam iure minima. Recusandae iure consequuntur
                        voluptatibus laudantium quia at obcaecati quae eum.
                    </p>
                </div>
                <img src={`../src/assets/${projectTitle}.jpeg`} alt={projectTitle} />
            </motion.div>
        )
    }

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

            {/* Projects */}
            <div className="flex justify-center">
                <motion.div
                    className='sm:grid sm:grid-cols-3'
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Row 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-red
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACE
                    </div>
                    <Project title="Project 1" />
                    <Project title="Project 2" />

                    {/* Row 2 */}
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />

                    {/* Row 3 */}
                    <Project title="Project 6" />
                    <Project title="Project 7" />
                    <div className="flex justify-center text-center items-center p-10 bg-blue
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
