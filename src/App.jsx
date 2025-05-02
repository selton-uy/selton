import Img from "./components/Img";
import ActionAreaCard from "./components/ActionAreaCard";
import Button from "./components/Button";
import Subtitles from "./components/Subtitle";
import Title from "./components/Title";
import "./index.css";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import node from "./assets/node.png";
import python from "./assets/python.png";
import selton from "./assets/selton.jpg";
import seltonCv from "./assets/seltonbatistacv.pdf";
import { Mail, Terminal, User } from "lucide-react";
import TitlebarImageList from "./components/Titlebar";
import "./index.css";

function App() {
  return (
    <div className=" bg-gradient-to-l from-[#012431] to-trasparent min-w-full">
      <nav
        className="fixed
      z-10
      top-0
      left-0
      w-screen
      h-[15%]
      text-[0.75em]
      flex
      justify-center
      items-center 
      gap-[2em] 
      bg-gradient-to-b from-[#000] to-trasparent
      sm:gap-6 
      md:gap-16
      md:text-[1em] "
      >
        <a className="row" href="#sobre">
          {" "}
          <User /> Sobre mim
        </a>
        <a className="row" href="#projetcs">
          {" "}
          <Terminal />
          Projetos
        </a>
        <a className="row" href="#contact">
          {" "}
          <Mail /> Contato
        </a>
      </nav>

      <div className="bg-[url('/img/fundo.jpg')] bg-cover bg-no-repeat bg-center h-screen w-full overflow-hidden">
        <section
          id="home"
          className="h-screen w-screen flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center h-screen">
            <Subtitles>Eu sou,</Subtitles>
            <div className=" font-bold ">
              <Title>Selton</Title>
            </div>

            <div className="text-right w-full">
              <Subtitles>Junior Software Engineer</Subtitles>
            </div>
          </div>
        </section>
      </div>
      <Title>Sobre mim</Title>
      <section
        id="sobre"
        className="min-h-screen py-20 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4"
      >
        <ActionAreaCard Img={selton} />
        <div className="flex flex-col justify-center items-center gap-[5em] py-4">
          <div className="grid grid-cols-3 gap-4 w-full max-w-[300px] ">
            <Img src={html} alt="HTML" />
            <Img src={css} alt="CSS" />
            <Img src={js} alt="JAVASCRIPT" />
            <Img src={react} alt="REACT" />
            <Img src={node} alt="NODE" />
            <Img src={python} alt="PYTHON" />
          </div>
          <a href={seltonCv} download target="_blank" rel="noreferrer noopener">
            <Button>Baixar CV</Button>
          </a>
        </div>
      </section>

      <section
        id="projetcs"
        className="w-screen flex flex-col justify-center items-center py-10"
      >
        <div className=" py-[20px]">
          <Title>Projetos</Title>
        </div>

        <TitlebarImageList />
      </section>
      {/*<div className="text-[3em] flex flex-row justify-center items-center h-screen gap-10">
          <Card />
        </div>*/}
    </div>
  );
}

export default App;
