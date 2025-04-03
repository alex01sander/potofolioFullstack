import { FaReact, FaNodeJs, FaDocker, FaGit } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
  SiStyledcomponents,
} from "react-icons/si";
import { motion } from "framer-motion";

const Stacks = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center my-20">
      <h2 className="text-4xl font-bold text-purple-400">Minhas Stacks</h2>
      <div className="mt-16 grid grid-cols-4 gap-12 justify-items-center">
        {/* Ícones com efeito preto e branco */}
        <motion.div
          className="text-blue-500 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaReact />
        </motion.div>

        <motion.div
          className="text-white text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SiNextdotjs />
        </motion.div>

        <motion.div
          className="text-green-500 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaNodeJs />
        </motion.div>

        <motion.div
          className="text-gray-400 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SiExpress />
        </motion.div>

        <motion.div
          className="text-green-400 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SiMongodb />
        </motion.div>

        <motion.div
          className="text-blue-400 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SiPostgresql />
        </motion.div>

        <motion.div
          className="text-indigo-500 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SiPrisma />
        </motion.div>

        <motion.div
          className="text-teal-400 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <SiTailwindcss />
        </motion.div>

        <motion.div
          className="text-blue-600 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FaDocker />
        </motion.div>

        <motion.div
          className="text-orange-500 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <FaGit />
        </motion.div>

        <motion.div
          className="text-blue-500 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SiTypescript />
        </motion.div>

        <motion.div
          className="text-pink-400 text-5xl filter grayscale hover:grayscale-0 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <SiStyledcomponents />
        </motion.div>
      </div>
    </div>
  );
};

export default Stacks;
