import FaqsItems from "../../../data/FaqsData";
import styles from "../../../styles/twStyles";
import FaqsItem from "../../ui/FaqsItem";

const FAQs = () => {
  return (
    <div className={`${styles.paddings} container mx-auto`}>
      <div className="text-center space-y-5 ">
        <span className="text-white uppercase font-semibold">Faqs</span>
        <h1 className="text-white uppercase font-bold max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto text-4xl sm:text-5xl md:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="text-white font-light max-w-[450px] mx-auto">
          At vitae commodo amet libero tortor blandit risus condiment mauris.
          cras arcu tortor aenean turpis massa maurisac.
        </p>
        <div className="xl:mx-60 pb-20">
          {FaqsItems.map((item, index) => {
            return (
              <FaqsItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
