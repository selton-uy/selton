import { GitBranch, Linkedin, Mail } from "lucide-react";
import Link from "./Link";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-transparent rounded-lg p-5 min-w-[500px] text-center border-2 border-[#1DCD9F] shadow-lg">
      <h2>Contact me :3</h2>
      <Link href={"https://www.linkedin.com/in/selton-uy"}>
        <Linkedin />
        LinkedIn
      </Link>
      <Link href={"https://www.github.com/selton-uy"}>
        <GitBranch />
        GitHub
      </Link>
      <Link href={"mailto:selton.uy@gmail.com"}>
        <Mail />
        E-mail
      </Link>
    </div>
  );
};
export default Card;
