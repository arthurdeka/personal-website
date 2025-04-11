import { useNavigate } from "react-router-dom";

const ProfessionalExperience: React.FC = () => {

const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-primary">
      <div className="border border-white p-6 w-full max-w-md">

        <div className="flex flex-row justify-between items-center mb-12">
          <h1 className="text-white text-4xl mb-1">
            <span className="font-normal flicker-loop ">Experiência e Educação</span>
          </h1>
          <span onClick={() => navigate("/")} className="cursor-pointer hover:underline">Voltar</span>
        </div>

        <div className="flex flex-col space-y-6">
            <div>
                <h2 className="text-2xl hover:underline">Análise Informática</h2>
                <h3 className="text-md text-gray-400">&gt; Desenvolvimento de aplicação LLM de ChatBot e aplicações CRUD para a empresa.</h3>
                <h3 className="text-md text-gray-400">&gt; 2024 - presente</h3>
            </div>
            <div>
                <h2 className="text-2xl hover:underline">VOX Internet</h2>
                <h3 className="text-md text-gray-400">&gt; Suporte Computacional</h3>
                <h3 className="text-md text-gray-400">&gt; 2023 - 2024</h3>
            </div>
            <div>
                <h2 className="text-2xl hover:underline">Iniciação Científica</h2>
                <h3 className="text-md text-gray-400">&gt; Bolsa paga com contrato de 1 ano</h3>
                <h3 className="text-md text-gray-400">&gt; Desenvolvimento de aplicação com Python Flask e React</h3>
                <h3 className="text-md text-gray-400">&gt; 2022 - 2023</h3>
            </div>
            <div>
                <h2 className="text-2xl hover:underline">Bacharelado em Sistemas de Informação</h2>
                <h3 className="text-md text-gray-400">&gt; Universidade Estadual de Montes Claros</h3>
                <h3 className="text-md text-gray-400">&gt; 2021 - presente</h3>
            </div>

        </div>
        

      </div>
    </div>
  );
};

export default ProfessionalExperience;
