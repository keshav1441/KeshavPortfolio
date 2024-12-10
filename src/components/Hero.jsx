import profilepic from "../assets/kevinRushProfile.png"
const Hero = () => {
    return <section id="Hero">
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 ml-6 ">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl  ">Keshav Sharma</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full-Stack Developer | Python & AI Expert</span>
                    <p className="my-2 max-w-xl py-6 font-light">I am a passionate Full Stack Developer with expertise in Python and AI. Over the past 3 years, I’ve developed strong skills in front-end and back-end technologies like React.js, Node.js, FastAPI, MySQL, and MongoDB, enabling me to build scalable, high-performance web applications. I focus on creating innovative solutions that drive growth and leverage AI to deliver cutting-edge features. With expertise in FastAPI, I craft efficient back-end systems that support modern web architectures and am always eager to embrace new challenges in technology.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
  <img src={profilepic} alt="Keshav Sharma" className="max-w-sm" />
</div>
</div>

        </div>
    </div>
    </section>
}

export default Hero;