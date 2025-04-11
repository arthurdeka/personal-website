import { useNavigate } from "react-router-dom";

const ProjectsPage: React.FC = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-primary">
      <div className="border border-white p-6 w-full max-w-md">

        <div className="flex flex-row justify-between items-center mb-12">
          <h1 className="text-white text-4xl mb-1">
            <span className="font-normal flicker-loop ">Projetos</span>
          </h1>
          <span onClick={() => navigate("/")} className="cursor-pointer hover:underline">Voltar</span>
        </div>

        <div className="flex flex-col space-y-6">
            <div>
                <a target="_blank" href="https://theopensourcerepository.vercel.app" className="text-2xl hover:underline">The Open Source Repository</a>
                <h3 className="text-sm text-gray-400">&gt; Vue, TypeScript, Spring Boot, MariaDB, hospedado em EC2 AWS e redirecionado por DuckDNS</h3>
                <h3 className="text-sm text-gray-400">&gt; Projeto-portfolio de repositório de aplicaçoes open-source.</h3>
                <h3 className="text-sm text-gray-400">&gt; 2025</h3>
            </div>
            <div>
                <a target="_blank" href="https://www.mcpservershub.tech" className="text-2xl hover:underline">MCP Servers Hub</a>
                <h3 className="text-sm text-gray-400">&gt; React, TypeScript (responsável somente pelo front)</h3>
                <h3 className="text-sm text-gray-400">&gt; Em construção...</h3>
                <h3 className="text-sm text-gray-400">&gt; 2025</h3>
            </div>
            <div>
                <a target="_blank" href="https://customtkbuilder.com" className="text-2xl hover:underline">CustomTkBuilder</a>
                <h3 className="text-sm text-gray-400">&gt; React, TypeScript</h3>
                <h3 className="text-sm text-gray-400">&gt; Website de construtor de interfaces com 1.000 usuários mensais de 80 países diferentes.</h3>
                <h3 className="text-sm text-gray-400">&gt; 2024</h3>
            </div>
            <div>
                <a target="_blank" href="https://chromewebstore.google.com/detail/colorfulgpt/gllpahblfeolhjjdpiljniklgdpkhdne" className="text-2xl hover:underline">ColorfulGPT</a>
                <h3 className="text-sm text-gray-400">&gt; JavaScript</h3>
                <h3 className="text-sm text-gray-400">&gt; Extensão de navegador publicada na Chrome Web Store</h3>
                <h3 className="text-sm text-gray-400">&gt; 2024</h3>
            </div>
            <div>
                <a target="_blank" href="https://congresso2023.unimontes.br/anais/391b6341-3b7a-4622-a377-ab88e5380f67" className="text-2xl hover:underline">Toolkit do Pesquisador</a>
                <h3 className="text-sm text-gray-400">&gt; React, JavaScript, Python Flask</h3>
                <h3 className="text-sm text-gray-400">&gt; ♛ Prêmio de segundo melhor trabalho da área de exatas no Congresso Internacional da Unimontes</h3>
                <h3 className="text-sm text-gray-400">&gt; 2023</h3>
            </div>
            <div>
                <a target="_blank" href="https://github.com/arthurdeka/CustomTkinter-Templates" className="text-2xl hover:underline">CustomTkInter Templates</a>
                <h3 className="text-sm text-gray-400">&gt; Python, CustomTkinter, UV Package Manager</h3>
                <h3 className="text-sm text-gray-400">&gt; ☆ 100 estrelas no GitHub</h3>
                <h3 className="text-sm text-gray-400">&gt; 2022</h3>
            </div>
        </div>
        

      </div>
    </div>
  );
};

export default ProjectsPage;
