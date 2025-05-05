const Link = ({ href, children }) => {
  return (
    <a
      className="flex items-center gap-2 text-white hover:text-[#67ef67] transition-colors duration-300 text-2xl p-2 m-top-5"
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
