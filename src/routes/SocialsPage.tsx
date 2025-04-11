import { useNavigate } from "react-router-dom";

const SocialsPage: React.FC = () => {

const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-primary">
      <div className="border border-white p-6 w-full max-w-md">

        <div className="flex flex-row justify-between items-center mb-12">
          <h1 className="text-white text-4xl mb-1">
            <span className="font-normal flicker-loop ">Redes Sociais</span>
          </h1>
          <span onClick={() => navigate("/")} className="cursor-pointer hover:underline">Voltar</span>
        </div>

        <div className="flex flex-col space-y-6">
            <div>
                <a target="_blank" href="https://github.com/arthurdeka" className="text-2xl hover:underline">GitHub</a>
                <h3 className="text-md text-gray-400">&gt; Desenvolvimento & Utilidades</h3>
            </div>
            <div>
                <a target="_blank" href="https://www.linkedin.com/in/arthur-wa-rodrigues/" className="text-2xl hover:underline">LinkedIn</a>
                <h3 className="text-md text-gray-400">&gt; Contato profissional</h3>
            </div>
            <div>
                <a target="_blank" href="https://www.youtube.com/@arthurcodes/videos" className="text-2xl hover:underline">YouTube</a>
                <h3 className="text-md text-gray-400">&gt; Projetos pessoais & tutoriais</h3>
            </div>
            <div>
                <h2 className="text-2xl hover:underline">Whatsapp</h2>
                <h3 className="text-md text-gray-400">&gt; Entre em contato via LinkedIn ou Email</h3>
            </div>

        </div>
        

      </div>
    </div>
  );
};

export default SocialsPage;
