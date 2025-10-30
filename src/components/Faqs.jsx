import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment réserver un service sur Wajed ?",
      answer: "Il vous suffit de chercher un prestataire ou de poster une annonce. Vous recevrez des propositions, et vous pourrez réserver en quelques clics."
    },
    {
      question: "Est-ce que les prestataires sont vérifiés ?",
      answer: "Oui. Chaque prestataire passe par une vérification d'identité et peut fournir des documents (certificats, équipements, etc.)."
    },
    {
      question: "Quels types de services puis-je trouver ?",
      answer: "Ménage, bricolage, jardinage, beauté, aide à domicile, informatique, cours particuliers... et bien plus !"
    },
    {
      question: "Comment fonctionne le paiement ?",
      answer: "Vous pouvez payer en toute sécurité par carte ou en espèces à la fin de la prestation."
    },
    {
      question: "Comment devenir prestataire ?",
      answer: "Téléchargez l'application Wajed Prestataire, créez votre compte, et commencez à recevoir des demandes."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-black">
            FAQ
          </h2>
          <p className="text-gray-600 text-lg">
            Vous avez des questions ? On a les réponses. Voici les plus <br />
            fréquentes.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 last:border-b-0">
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <h3 className="text-base font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <span className={`text-gray-600 flex-shrink-0 transition text-2xl ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  −
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-5 bg-gray-50">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}