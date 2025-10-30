export default function Pourquoi() {
  const features = [
    "Des prestataires rapidement, près de chez vous.",
    "Recevez les propositions, choisissez selon vous.",
    "Payez par carte ou en espèces en toute sérénité.",
    "Une équipe à votre écoute en cas de besoin.",
    "Des prestataires vérifiés Identité, expérience et avis"
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-black">Pourquoi </span>
            <span className="text-teal-600">Wajed</span>
            <span className="text-black"> ?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une plateforme simple, rapide et sécurisée pour <br />
            trouver des prestataires de confiance.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Checkmark Circle */}
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full border-2 border-teal-600 bg-white">
                    <svg
                      className="h-4 w-4 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {/* Text */}
                <div>
                  <p className="text-2xl  font-medium text-gray-900">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Images */}
          <div className=" md:flex justify-center items-center">
            <div className="relative w-full h-96 flex justify-center items-center">
              {/* Phones Container */}
              <div className="relative w-full max-w-sm h-full flex justify-center items-center">
              <img className="w-148 lg:h-120" src="./pourquoi.png" alt="" />

              
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}