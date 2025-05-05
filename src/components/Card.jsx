import { ChevronsDown, ChevronsRight, GitBranch, Linkedin, Mail } from "lucide-react";
import Link from "./Link";
import ActionAreaCard from "./ActionAreaCard";

const Card = ({img, children , txt}) => {
  return (
    <div className="flex flex-col-reverse w-[90vw] h-[100%] gap-5 items-center justify-center md:gap-20 md:flex-row md:w-[60vw] md:h-auto py-10">
      <ActionAreaCard img={img} txt={txt}>
        {children}
      
      </ActionAreaCard>
      <div className="hidden md:block">
        <ChevronsRight/>
      </div>
      <div className="block md:hidden">
        <ChevronsDown/>
      </div>
      
      <div className="flex flex-col justify-center items-center bg-trasparent rounded-[18px] p-5 max-w-[450px] min-w-[300px] text-center border-l-[3px] border-[#1DCD9F] shadow-lg">
        <ul className="flex flex-col justify-center items-center text-center gap-4 text-[#F2F2F2] w-full h-full">
          <li >
            <Link href={"https://www.linkedin.com/in/selton-uy"}>
              <Linkedin />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href={"https://www.github.com/selton-uy"}>
              <GitBranch />
              GitHub
            </Link>
          </li>
          <li>
            <Link href={"mailto:selton.uy@gmail.com"}>
              <Mail />
              E-mail
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
