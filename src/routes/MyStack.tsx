import { useNavigate } from "react-router-dom";

const MyStack: React.FC = () => {

const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-primary">
      <div className="border border-white p-6 w-full max-w-md">

        <div className="flex flex-row justify-between items-center mb-12">
          <h1 className="text-white text-4xl mb-1">
            <span className="font-normal flicker-loop ">Meu Stack</span>
          </h1>
          <span onClick={() => navigate("/")} className="cursor-pointer hover:underline">Voltar</span>
        </div>

        <div className="flex flex-col space-y-6">
            <div>
                <h2 className="text-2xl hover:underline">Front-end</h2>
                <h3 className="text-md text-gray-400">&gt; JavaScript, TypeScript, JSX, TSX</h3>
                <h3 className="text-md text-gray-400">&gt; Vue, React</h3>
                <h3 className="text-md text-gray-400">&gt; Bootstrap, Tailwind</h3>
            </div>
            <div>
                <h2 className="text-2xl hover:underline">Back-end</h2>
                <h3 className="text-md text-gray-400">&gt; Java 17 Spring Boot, Python Flask, NodeJS</h3>
                <h3 className="text-md text-gray-400">&gt; Java Lombok, ExpressJS, </h3>
            </div>
            <div>
                <h2 className="text-2xl hover:underline">Banco de dados</h2>
                <h3 className="text-md text-gray-400">&gt; MySQL, MariaDB, PostgresSQL, SQLite</h3>
                <h3 className="text-md text-gray-400">&gt; MongoDB</h3>
            </div>
            <div>
                <h2 className="text-2xl hover:underline">Ferramentas e DevOps</h2>
                <h3 className="text-md text-gray-400">&gt; Vercel, Render (Front)</h3>
                <h3 className="text-md text-gray-400">&gt; Lambda AWS, EC2 AWS (Back)</h3>
                <h3 className="text-md text-gray-400">&gt; Neon, EC2 AWS (DB)</h3>
                <h3 className="text-md text-gray-400">&gt; DuckDNS (DNS)</h3>
                <h3 className="text-md text-gray-400">&gt; Modelos de LLM (Langchain, OpenAI API)</h3>
            </div>
        </div>
        

      </div>
    </div>
  );
};

export default MyStack;
