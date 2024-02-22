import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TextAnimate = ({ text, className, once, Wrapper }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const defaultAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split(" ").map((word, i) => (
          <span key={word + "-" + i} className="inline-block">
            {word.split("").map((char, index) => (
              <motion.span
                key={char + "-" + index}
                className="inline-block"
                variants={defaultAnimation}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default TextAnimate;
