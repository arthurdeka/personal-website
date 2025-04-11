const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-primary">
      <div className="border border-white p-6 w-full max-w-md">
        <h1 className="text-white text-4xl mb-1">
          <span className="font-normal">Arthur Rodrigues</span>
        </h1>
        <p className="text-gray-400 text-sm ml-4">
          Engenheiro de Software
        </p>
        <p className="text-gray-400 text-sm mb-6 ml-4">
          Cursando Ensino Superior - Sistemas de Informação
        </p>
        
        <br />
        <div className="flex flex-col space-y-4 text-2xl">
          <a href="#about" className="text-white hover:underline inline-block">
            &gt; sobre mim
          </a>
          <a href="#projects" className="text-white hover:underline inline-block">
            &gt; projetos
          </a>
          <a href="#socials" className="text-white hover:underline">
            &gt; experiência profissional
          </a>
          <a href="#socials" className="text-white hover:underline">
            &gt; educação
          </a>
          <a href="#hardware" className="text-white hover:underline">
            &gt; redes sociais
          </a>
        </div>
        
        <br /><br /><br /><br /><br />

        <p className="text-white text-sm mt-8">
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
