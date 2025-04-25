import Card from "./components/Card";

import Subtitles from "./components/Subtitle";
import Title from "./components/Title";
import './index.css';

function App() {
  return (
    <div>
      <section className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-screen">
          <Subtitles>Eu sou,</Subtitles>
          <div className="text-[10em] font-bold text-[#4cbd49]">
            <Title>Selton</Title>
          </div>

          <div className="text-right w-full">
            <Subtitles>Junior Software Engineer</Subtitles>
          </div>
        </div>
      </section>
      {/*  <section className="h-screen">
        <div className="text-[5em] flex justify-center items-center">
          <Title>Projetos</Title>
        </div>
      </section>  */}

      <section>
        <div className="text-[3em] flex flex-row justify-center items-center h-screen gap-10">
          <Card/>
          <Card/>
        </div>
      </section>
    </div>
  );
}

export default App;
