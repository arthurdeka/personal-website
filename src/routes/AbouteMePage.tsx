import { useNavigate } from "react-router-dom";

const AboutMePage: React.FC = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-primary">
      <div className="border border-white p-6 w-full max-w-md">

        <div className="flex flex-row justify-between items-center mb-12">
          <h1 className="text-white text-4xl mb-1">
            <span className="font-normal flicker-loop ">Sobre mim</span>
          </h1>
          <span onClick={() => navigate("/")} className="cursor-pointer hover:underline">Voltar</span>
        </div>

        <div className="">
            <span className="text-sm">Montes Claros, Minas Gerais - /BR</span>
            <br /><br />    
            <h2 className="text-xl font-semibold">* Quem sou</h2>
            <p className="text-normal">
                Arthur Rodrigues, 21 anos. Engenheiro de software atualmente cursando Sistemas de Informação pela Universidade Estadual de Montes Claros. 
            </p>
            <br /><br />
            <h2 className="text-xl font-semibold">* Objetivo</h2>
            <p className="text-normal">
                Formar uma carreira sólida centrada em Java Spring Boot e tecnologias adjacentes. 
            </p>
            <br /><br />
            <div className="border-b-1 border-white"></div>
            <p className="text-sm mt-5">
                Vejo programação como a arte usada para construir ideias e objetivos. 
            </p>
        </div>

      </div>
    </div>
  );
};

export default AboutMePage;
