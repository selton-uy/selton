import { GitBranch, Linkedin, Mail } from "lucide-react";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-700 rounded-lg p-5 min-w-[500px] text-center shadow-md">
      <h2>Contact me :3</h2>
      <a
        href="https://www.linkedin.com/in/selton-uy/"
        className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 text-3xl p-2 m-top-5"
      >
        <Linkedin className="text-white size={25}" />
        LinkedIn
      </a>
      <a href="https://www.github.com/selton-uy" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 text-3xl p-2 m-top-5">
        <GitBranch className="text-white size={25}"/> GitHub
      </a>
      <a className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 text-3xl p-2 m-top-5" href="mailto:selton.uy@gmail.com">
        <Mail/>E-mail
      </a>
    </div>
  );
};
export default Card;
