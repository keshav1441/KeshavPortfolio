const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 border-t border-slate-800 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text">
              Keshav Sharma
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Full-Stack Developer | Python & AI Expert
            </p>
          </div>
          
          {/* Social icons section removed */}
        </div>
        
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>© {currentYear} Keshav Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 