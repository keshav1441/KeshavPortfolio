import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About_me from "./components/About_me";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900">
       <div className="fixed top-0 -z-10 h-full w-full"></div>
       <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
       <div className="container mx-auto px-12">
       <Navbar />
       <Hero />
        <About_me />
       </div> 
      
    </div>
  );
};

export default App;