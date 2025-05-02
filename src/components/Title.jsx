const Title = ({ children }) => {
  return (
    <h1
      className="text-[#f2f2f2] font-bold uppercase
      text-7xl
      sm:text-7xl 
      md:text-8xl 
      lg:text-9xl 
      xl:text-9xl 
      2xl:text-[10em] 
      transition-all duration-300
      py-[0.25em]
      text-center
    "
    >
      {children}
    </h1>
  );
};

export default Title;
