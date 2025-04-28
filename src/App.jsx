import Img from "./components/Img";
import ActionAreaCard from "./components/ActionAreaCard";
import Card from "./components/Card";
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

function App() {
  return (
    <div>
      <section className="h-screen w-screen flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center h-screen">
          <Subtitles>Eu sou,</Subtitles>
          <div className="text-[10em] font-bold ">
            <Title>Selton</Title>
          </div>

          <div className="text-right w-full">
            <Subtitles>Junior Software Engineer</Subtitles>
          </div>
        </div>
      </section>
      <section className="h-screen flex flev-row justify-center items-center gap-[10em]">
        <ActionAreaCard />
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-row w-[300px] h-[300px] flex-wrap">
            <Img src={html} alt="HTML" />
            <Img src={css} alt="CSS" />
            <Img src={js} alt="JAVASCRIPT" />
            <Img src={react} alt="REACT" />
            <Img src={node} alt="NODE" />
            <Img src={python} alt="PYTHON" />
          </div>
          <a href="/public/seltonbatistacv.pdf" download>
            <Button>Baixar CV</Button>
          </a>
        </div>
      </section>

      <section>
        <div className="text-[3em] flex flex-row justify-center items-center h-screen gap-10">
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
