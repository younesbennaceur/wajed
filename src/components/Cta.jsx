export default function DownloadCTA() {
  return (
      <div className=" my-12 bg-gradient-to-b from-white via-white to-[#C7E8DB] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl">
        <div className="flex  gap-8 items-center py-12 md:py-20">
          {/* Left Content */}
           <div className=" hidden md:flex justify-center items-center">
            <img 
              src="/left.png" 
              alt="Hero" 
              className="max-w-full h-auto drop-shadow-lg"
            />
          </div>
          <div className="space-y-6">
           
          <div className="flex flex-col text-center gap-4 justify-center">
             {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight">
              Téléchargez <span className="text-[#4C9580]">wajed</span> et
              commencez dès aujourd&apos;hui.
            </h2>

          
            {/* CTA Button */}
             <div className=" mx-auto flex md:w-2/4 justify-center  items-center gap-2 border hover:text-white border-[#4C9580] hover:bg-[#4C9580] text-[#4C9580] px-6 py-2 rounded-full font-medium transition">
              <img src="./play.png" alt="" />
              <img src="./apple.png" alt="" />
              <p>Télécharger l’app</p>
            
            </div>
          </div>

         </div>
           

          {/* Right Image */}
          <div className=" hidden md:flex justify-center items-center">
            <img 
              src="/right.png" 
              alt="Hero" 
              className="max-w-full h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
  
  );
}