/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from 'react';

const translations = {
  FR: {
    // Noms propres
    brand_name: "Wajed",
    service_1_name: "Home Services",
    service_2_name: "Experience",
    service_3_name: "Go",
    service_4_name: "Club",

    // Navbar
    nav_home: "Accueil",
    nav_features: "Fonctionnalités",
    nav_faq: "FAQ",
    nav_contact: "Contactez-nous",
    nav_download: "Télécharger l'app",
    nav_download_short: "Télécharger",
    nav_superapp: "Super App",
    
    // Hero
    hero_badge: "Nouveau sur mobile",
    hero_title: "La Super App Du Service",
    hero_title_br: "En Algérie!",
    hero_subtitle: "Trouvez en quelques clics un prestataire de confiance pour vos besoins ou loisirs.",
    
    // SuperFonct
    sf_title_1: "Une App Qui En Cache",
    sf_title_2: "Des Autres 🙈",
    sf_desc_1: "réunit tous vos services à domicile.",
    sf_desc_2: "Réservez, publiez, échangez, payez et recommandez.",
    
    sf_service_1_tagline: "Trouvez un prestataire",
    sf_service_1_heading: "Laissez les pro s'en occuper 🛠️",
    sf_service_1_desc: "Postez une annonce ou trouvez un prestataire qualifié!",
    sf_service_1_btn: "Découvrez les fonctionnalités de",

    sf_service_2_tagline: "Toutes les activités en un clic.",
    sf_service_2_heading: "Amusez vous! 🏄",
    sf_service_2_desc: "Réservez une sortie en bateau, une balade a cheval le long de la plage ou une excursion en jetski? Trouvez encore plus d'activités!",
    sf_service_2_btn: "Découvrez les fonctionnalités de",

    sf_service_3_tagline: "Bougez en toute confiance!",
    sf_service_3_heading: "Partagez votre trajet 🚗",
    sf_service_3_desc: "La route solo c'est ennuyant 🥺 Faites des économies, partagez la route!",
    sf_service_3_btn: "Découvrez les fonctionnalités de",

    sf_service_4_tagline: "Entrez dans le CLUB !",
    sf_service_4_heading: "Des avantages exclusifs 💎",
    sf_service_4_desc: "Profitez de frais de réservation gratuits, -10% sur tous les services Wajed, du Cashback, des Workshops exclusifs et bien plus encore !",
    sf_service_4_btn: "Rejoindre le",

    // FAQ
    faq_title: "FAQ",
    faq_subtitle: "Vous avez des questions ? On a les réponses. Voici les plus fréquentes.",
    faq_q1: "Comment réserver un service sur Wajed ?",
    faq_a1: "Il vous suffit de chercher un prestataire ou de poster une annonce. Vous recevrez des propositions, et vous pourrez réserver en quelques clics.",
    faq_q2: "Est-ce que les prestataires sont vérifiés ?",
    faq_a2: "Oui. Chaque prestataire passe par une vérification d'identité et peut fournir des documents (certificats, équipements, etc.).",
    faq_q3: "Quels types de services puis-je trouver ?",
    faq_a3: "Ménage, bricolage, jardinage, beauté, aide à domicile, informatique, cours particuliers... et bien plus !",
    faq_q4: "Comment fonctionne le paiement ?",
    faq_a4: "Vous pouvez payer en toute sécurité par carte ou en espèces à la fin de la prestation.",
    faq_q5: "Comment devenir prestataire ?",
    faq_a5: "Téléchargez l'application Wajed Prestataire, créez votre compte, et commencez à recevoir des demandes.",

    // Contact
    contact_title_1: "Une Question ?",
    contact_title_2: "Contactez-Nous",
    contact_desc: "Que ce soit pour une question, un souci technique ou un retour, notre équipe vous répondra dans les plus brefs délais.",
    contact_label_name: "Nom et prénom",
    contact_ph_name: "ex: Mohamed Amine",
    contact_label_email: "Email",
    contact_ph_email: "ex: Mohamed.Amine@example.com",
    contact_label_subject: "Sujet",
    contact_ph_subject: "ex: Question sur une réservation",
    contact_label_message: "Message",
    contact_ph_message: "Décrivez votre besoin ici...",
    contact_btn: "Envoyer le message",

    // Footer
    footer_rights: "Tous droits réservés."
  },
  DZ: {
    // Noms propres
    brand_name: "واجد",
    service_1_name: "للخدمات المنزلية",
    service_2_name: "للتجارب",
    service_3_name: "جو",
    service_4_name: "كلوب",

    // Navbar
    nav_home: "الرئيسية",
    nav_features: "المميزات",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "اتصل بنا",
    nav_download: "حمل التطبيق",
    nav_download_short: "تحميل",
    nav_superapp: "تطبيق شامل",
    
    // Hero
    hero_badge: "جديد على الموبايل",
    hero_title: "التطبيق الشامل للخدمات",
    hero_title_br: "في الجزائر!",
    hero_subtitle: "اعثر على مقدم خدمة موثوق لاحتياجاتك أو ترفيهك في بضع نقرات.",
    
    // SuperFonct
    sf_title_1: "تطبيق يغنيك",
    sf_title_2: "عن باقي التطبيقات 🙈",
    sf_desc_1: "يجمع لك كل الخدمات المنزلية.",
    sf_desc_2: "احجز، انشر، تواصل، ادفع واقترح.",
    
    sf_service_1_tagline: "ابحث عن مقدم خدمة",
    sf_service_1_heading: "دع المحترفين يتكفلون بالأمر ",
    sf_service_1_desc: "انشر إعلاناً أو ابحث عن مقدم خدمة مؤهل!",
    sf_service_1_btn: "اكتشف ميزات",

    sf_service_2_tagline: "كل الأنشطة بنقرة واحدة.",
    sf_service_2_heading: "استمتع بوقتك! ",
    sf_service_2_desc: "هل تريد حجز رحلة بالقارب، أو جولة بالحصان على الشاطئ أو رحلة بالجت سكي؟ اكتشف المزيد من الأنشطة!",
    sf_service_2_btn: "اكتشف ميزات",

    sf_service_3_tagline: "تنقل بثقة!",
    sf_service_3_heading: "شارك رحلتك ",
    sf_service_3_desc: "السفر بمفردك ممل 🥺 وفر أموالك، وشارك الطريق!",
    sf_service_3_btn: "اكتشف ميزات",

    sf_service_4_tagline: "انضم إلى النادي!",
    sf_service_4_heading: "مزايا حصرية 💎",
    sf_service_4_desc: "استمتع بحجوزات مجانية، خصم 10% على جميع خدمات واجد، استرداد نقدي، ورشات حصرية والكثير!",
    sf_service_4_btn: "انضم إلى",

    // FAQ
    faq_title: "الأسئلة الشائعة",
    faq_subtitle: "هل لديك أسئلة؟ لدينا الإجابات. إليك الأسئلة الأكثر شيوعاً.",
    faq_q1: "كيف يمكنني حجز خدمة على واجد؟",
    faq_a1: "كل ما عليك فعله هو البحث عن مقدم خدمة أو نشر إعلان. ستتلقى عروضاً ويمكنك الحجز بنقرات قليلة.",
    faq_q2: "هل مقدمو الخدمات موثقون؟",
    faq_a2: "نعم. يمر كل مقدم خدمة بالتحقق من الهوية ويمكنه تقديم مستندات (شهادات، معدات، إلخ).",
    faq_q3: "ما أنواع الخدمات التي يمكنني العثور عليها؟",
    faq_a3: "التنظيف، الأعمال اليدوية، البستنة، التجميل، المساعدة المنزلية، تكنولوجيا المعلومات، الدروس الخصوصية... والمزيد!",
    faq_q4: "كيف يتم الدفع؟",
    faq_a4: "يمكنك الدفع بأمان عن طريق البطاقة أو نقداً في نهاية الخدمة.",
    faq_q5: "كيف أصبح مقدم خدمة؟",
    faq_a5: "قم بتنزيل تطبيق واجد لمقدمي الخدمات، أنشئ حسابك، وابدأ في تلقي الطلبات.",

    // Contact
    contact_title_1: "لديك سؤال؟",
    contact_title_2: "اتصل بنا",
    contact_desc: "سواء كان لديك سؤال، مشكلة فنية أو ملاحظة، سيرد فريقنا عليك في أقرب وقت ممكن.",
    contact_label_name: "الاسم واللقب",
    contact_ph_name: "مثال: محمد أمين",
    contact_label_email: "البريد الإلكتروني",
    contact_ph_email: "مثال: Mohamed.Amine@example.com",
    contact_label_subject: "الموضوع",
    contact_ph_subject: "مثال: سؤال حول حجز",
    contact_label_message: "الرسالة",
    contact_ph_message: "صف طلبك هنا...",
    contact_btn: "إرسال الرسالة",

    // Footer
    footer_rights: "جميع الحقوق محفوظة."
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('FR');

  useEffect(() => {
    document.documentElement.dir = currentLang === 'DZ' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang === 'DZ' ? 'ar' : 'fr';
  }, [currentLang]);

  const t = (key) => translations[currentLang][key] || key;

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);