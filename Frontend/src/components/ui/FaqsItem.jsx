import { useState } from "react";
import { MdOutlineArrowRight, MdArrowDropDown } from "../ui/icons";
import { motion as Motion } from "framer-motion";
import { faqAnimations } from "../../utils/Motion";

const FaqsItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Motion.div
      className="border-b border-gray-700 py-4"
      initial="hidden"
      animate="show"
      variants={faqAnimations.question}
    >
      <Motion.button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {question}
        </h3>
        <Motion.span
          className="text-2xl text-blue-500"
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <MdArrowDropDown size={30}/> : <MdOutlineArrowRight size={30}/>}
        </Motion.span>
      </Motion.button>

      {isOpen && (
        <Motion.div
          variants={faqAnimations.answer}
          initial="hidden"
          animate="show"
          exit="exit"
          className="overflow-hidden"
        >
          <Motion.p
            className="text-white text-left"
            variants={faqAnimations.content}
          >
            {answer}
          </Motion.p>
        </Motion.div>
      )}
    </Motion.div>
  );
};

export default FaqsItem;
