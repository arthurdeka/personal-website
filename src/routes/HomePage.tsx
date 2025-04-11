import { useNavigate } from "react-router-dom";


const HomePage: React.FC = () => {

    const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-primary">
      <div className="border border-white p-6 w-full max-w-md">
        <h1 className="text-white text-4xl mb-1">
          <span className="font-normal flicker-loop">Arthur Rodrigues</span>
        </h1>
        <p className="text-gray-400 text-sm ml-4 menu-flicker-alt">
          Engenheiro de Software
        </p>
        <p className="text-gray-400 text-sm mb-6 ml-4 menu-flicker-alt">
          Cursando Ensino Superior - Sistemas de Informação
        </p>
        
        <br />
        <div className="flex flex-col space-y-4 text-2xl">
          <a onClick={() => navigate("/about")} href="#about" className="text-white hover:underline inline-block menu-flicker">
            &gt; sobre mim
          </a>
          <a href="#projects" className="text-white hover:underline inline-block menu-flicker">
            &gt; projetos
          </a>
          <a href="#socials" className="text-white hover:underline menu-flicker">
            &gt; experiência profissional
          </a>
          <a href="#socials" className="text-white hover:underline menu-flicker">
            &gt; educação
          </a>
          <a href="#hardware" className="text-white hover:underline menu-flicker">
            &gt; redes sociais
          </a>
        </div>
        
        <br /><br /><br /><br /><br />

        <p className="text-white text-sm mt-8 menu-flicker-alt">
          meu email: ~{" "}
          <span className="hover:underline">
            arthurdk01@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
