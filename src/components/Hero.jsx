export default function Hero() {
  return (
    <div className="md:p-12 ">
      <div className=" bg-gradient-to-b from-white via-white to-[#C7E8DB] max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-20">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#4C9580] rounded-full w-fit">
              <img src="Badge.svg" alt="" />
              <span className="text-sm font-medium text-teal-600">Nouveau sur mobile</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Tous Vos Services <br /> Du Quotidien <br /> Réunis Dans Une <br /> Seule App
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 max-w-md">
              Trouvez en quelques clics un prestataire de confiance pour vos besoins en ménage, beauté, bricolage et bien plus encore.
            </p>

            {/* CTA Button */}
             <button className="hidden sm:flex items-center gap-2 bg-[#4C9580] hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition">
              <img src="./play.png" alt="" />
              <img src="./apple.png" alt="" />
              <span>Télécharger l&apos;app</span>
            </button>
          </div>

          {/* Right Image */}
          <div className=" md:flex justify-center items-center">
            <img 
              src="/Hero.png" 
              alt="Hero" 
              className="max-w-full h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}