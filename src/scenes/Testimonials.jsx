import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[250px] xl:h-[350px]
    flex flex-col justify-end p-16 mt-32 xl:mt-48
    before:absolute before:top-[-120px] before:-ml-[110px]
    before:left-1/2 before:scale-75 xl:before:scale-100`;

  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="xl:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 tet-red">
          TESTIMONIALS
        </p>
        <div className="flex justify-center md:justify-start">
          <LineGradient width="w-2/5" />
        </div>
        <p className="mt-5 xl:mt-10">
          Here's what people are saying about my work. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Morbi a laoreet eros. Nullam
          tincidunt magna libero.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${testimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl text-center">“</p>
          <p className="text-center text-xl">
            Morbi a laoreet eros. Nullam tincidunt magna libero.
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl text-center">“</p>
          <p className="text-center text-xl">
            Morbi a laoreet eros. Nullam tincidunt magna libero.
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl text-center">“</p>
          <p className="text-center text-xl">
            Morbi a laoreet eros. Nullam tincidunt magna libero.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
