import Img from "./components/Img";
import ActionAreaCard from "./components/ActionAreaCard";
import Button from "./components/Button";
import Subtitles from "./components/Subtitle";
import Title from "./components/Title";
import Card from "./components/Card";
import "./index.css";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import node from "./assets/node.png";
import python from "./assets/python.png";
import selton from "./assets/selton.jpg";
import selton2 from "./assets/selton-2.jpg";
import seltonCv from "./assets/seltonbatistacv.pdf";
import { Mail, Terminal, User } from "lucide-react";
import TitlebarImageList from "./components/Titlebar";
import "./index.css";

function App() {
  return (
    <div className=" bg-gradient-to-l from-[#012431] to-trasparent min-w-full min-h-full">
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
      <section
        id="sobre"
        className="min-h-screen py-20 flex flex-col justify-center items-center gap-8 md:gap-16 px-4"
      >
        <Title>Sobre mim</Title>
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:gap-16">
          <ActionAreaCard img={selton}>
            Olá! Me chamo Selton Batista, sou estudante de Engenharia de
            Software e desenvolvedor web apaixonado por transformar ideias em
            soluções digitais. Trabalho com tecnologias como React, JavaScript,
            Tailwind CSS e Node.js, criando interfaces modernas, funcionais e
            responsivas. Estou sempre buscando aprender mais e entregar projetos
            que unam performance, design e usabilidade.
          </ActionAreaCard>
          <div className="flex flex-col justify-center items-center gap-[5em] py-4">
            <div className="grid grid-cols-3 gap-4 w-full max-w-[300px] ">
              <Img src={html} alt="HTML" />
              <Img src={css} alt="CSS" />
              <Img src={js} alt="JAVASCRIPT" />
              <Img src={react} alt="REACT" />
              <Img src={node} alt="NODE" />
              <Img src={python} alt="PYTHON" />
            </div>
            <a
              href={seltonCv}
              download
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button>Baixar CV</Button>
            </a>
          </div>
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
      <section id="contact" className="w-screen flex flex-col justify-center items-center gap-5">
        <Title>Contato</Title>
        <div className="flex justify-center ">
          <Card txt={"Vamos Criar Algo Incrível Juntos?"} img={selton2}>
          Estou sempre aberto a novas oportunidades, colaborações ou simplesmente bater um papo sobre tecnologia e projetos criativos.
          Me mande uma mensagem! Será um prazer conectar e explorar como posso contribuir com seu projeto.
          </Card>
        </div>
        
      </section>
    </div>
  );
}

export default App;
