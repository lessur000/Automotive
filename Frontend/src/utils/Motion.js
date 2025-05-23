//Animation for the Faq sections
export const faqAnimations = {
  question: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },
  answer: {
    hidden: {
      opacity: 0,
      height: 0,
      paddingBottom: 0,
      marginTop: 0,
    },
    show: {
      opacity: 1,
      height: "auto",
      paddingBottom: 20,
      marginTop: 12,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      paddingBottom: 0,
      marginTop: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  },
  content: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.2 } },
  },
};

// Animation for the sidebar cart menu
export const sidebarNav = (direction) => ({
  hidden: {
    x: direction === "left" ? -50 : direction === "right" ? 100 : 0,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
  },
});
