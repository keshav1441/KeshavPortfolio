import aboutImg from "../assets/about.png"; // Ensure the image is in the correct path

// The data string split into two paragraphs for readability
const data1 = `I'm pursuing my Bachelor's in Computer Science Engineering at the Indian Institute of Information Technology, Pune. As a passionate Full Stack Developer with expertise in Python and AI, I’ve developed strong skills in front-end and back-end technologies such as React.js, Node.js, FastAPI, MySQL, and MongoDB. Over the past 3 years, I’ve focused on building scalable, high-performance web applications and leveraging AI to deliver cutting-edge features. I specialize in creating efficient back-end systems with FastAPI and am eager to embrace new challenges in technology. Alongside my web development experience, I’m deeply involved in machine learning, having worked with Python frameworks like TensorFlow and PyTorch to implement data-driven solutions.`;
const data2 = `I continually explore new tools and technologies to stay ahead in the field, such as cloud computing, Docker, and Kubernetes. My interest in AI extends to deep learning and neural networks, enhancing my ability to develop intelligent, scalable applications. I’m passionate about experimenting with algorithms and architectures to optimize performance and drive innovation. My goal is to combine my full-stack development and AI skills to create impactful solutions that push the boundaries of what's possible.`;

// The About component
const About = () => {
  return (
    <section id="About_me">
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="flex flex-wrap">
          {/* Left section - Image */}
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img
  className="rounded-2xl max-w-xs"
  src={aboutImg}
  alt="about"
/>
            </div>
          </div>

          {/* Right section - Description */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start text-zinc-200">
              <div className=" max-w-xl py-6 font-light">
              <p className="text-justify mb-4">{data1}</p>
<p className="text-justify">{data2}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
