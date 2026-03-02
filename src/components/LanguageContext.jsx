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
    footer_rights: "Tous droits réservés.",

    // Hero Services (Wajed Services)
    hero_services_badge: "Nouveau sur mobile",
    hero_services_title_1: "Tous Vos Services",
    hero_services_title_2: "Du Quotidien",
    hero_services_title_3: "Réunis Dans",
    hero_services_title_highlight: "Une Seule App",
    hero_services_desc: "Trouvez en quelques clics un prestataire de confiance pour vos besoins en ménage, beauté, bricolage et bien plus encore.",
    
    // Features Section (Services)
    feat_header_1: "Un Service,",
    feat_header_2: "Plusieurs Possibilités",
    feat_subtitle: "Profitez de nos solutions flexibles pour tous vos besoins du quotidien. Une plateforme complète à portée de main.",
    
    feat_1_title: "Vous pouvez cherchez un",
    feat_1_bold: "prestataire adapté à vos besoins",
    feat_1_desc: "Filtrez par service, localisation, prix et disponibilités pour trouver le professionnel qui vous correspond.",
    feat_1_btn: "Réservez un prestataire dès !",

    feat_2_title: "Postez une annonce",
    feat_2_bold: "en quelques secondes",
    feat_2_desc: "Décrivez votre besoin en détaillant la tâche, le lieu et vos attentes; les prestataires vous contactent avec leurs propositions.",
    feat_2_btn: "Postez des annonces dès maintenant",

    feat_3_title: "Négociez le tarif",
    feat_3_bold: "selon votre budget",
    feat_3_desc: "Comparez les offres, contactez les tôt, échangez rapidement avec les prestataires et trouvez le bon accord pour vous.",
    feat_3_btn: "Choisissez dans l'app",

    feat_4_title: "Payez en toute sécurité",
    feat_4_bold: "par carte ou en espèces",
    feat_4_desc: "Payez par carte dès l'application ou en espèces selon le prestataire. Vos transactions sont toujours sécurisées.",
    feat_4_btn: "100% sécurisé",

    feat_5_title: "Gagnez des récompenses",
    feat_5_bold: " en invitant vos proches",
    feat_5_desc: "Invitez vos amis à rejoindre l’application. Lorsqu’ils s’inscrivent, ils reçoivent 200 DA et vous gagnez 100 DA dès leur première prestation.",
    feat_5_btn: "Disponible pour tous les utilisateurs",
    
    // Pourquoi Wajed
    why_title_1: "Pourquoi",
    why_title_2: "?",
    why_subtitle: "Une plateforme simple, rapide et sécurisée pour trouver des prestataires de confiance.",
    why_feat_1: "Des prestataires rapidement, près de chez vous.",
    why_feat_2: "Recevez les propositions, choisissez selon vous.",
    why_feat_3: "Payez par carte ou en espèces en toute sérénité.",
    why_feat_4: "Une équipe à votre écoute en cas de besoin.",
    why_feat_5: "Des prestataires vérifiés : Identité, expérience et avis.",

    // Become Agency Section (Experience)
    agency_title: "Devenez agence de voyage.",
    agency_desc: "Découvrez des expériences culturelles et sportives uniques avec des passionnés locaux.",
    agency_btn: "Wajed Agence",

    // Section Devenir Prestataire
    prestataire_title: "Devenez Prestataire",
    prestataire_subtitle: "Proposez vos services, on s'occupe du reste.",
    prestataire_desc: "Gagnez en visibilité, recevez des missions locales et gérez tout depuis l'app Wajed.",
    prestataire_btn: "Wajed Prestataire",

    // Hero Experience
    hero_exp_badge: "Nouveau sur mobile",
    hero_exp_title_1: "Vivez l'Algérie ",
    hero_exp_title_2: "autrement",
    hero_exp_desc: "Trouvez en quelques clics des activités inoubliables : sorties en bateau, randonnées, balades à cheval et bien plus encore.",

    // Features Experience (En-tête)
    feat_exp_header_1: "Bougez En Toute Confiance!",
    feat_exp_header_2: "Partagez Votre Trajet 🚗",
    feat_exp_subtitle_1: "Wajed réunit tous vos services à domicile.",
    feat_exp_subtitle_2: "Réservez, publiez, échangez, payez et recommandez.",

    // Features Experience (Liste)
    feat_exp_1_title: "Découverte",
    feat_exp_1_bold: "personnalisée",
    feat_exp_1_desc: "Trouvez des expériences qui vous correspondent : randonnées dans le Hoggar, ateliers de cuisine traditionnelle, cours de calligraphie arabe, sessions de surf à Tipaza... Filtrez par ville, catégorie et disponibilité.",
    feat_exp_1_btn: "Vivez une expérience avec des gens de confiance.",

    feat_exp_2_title: "Hôtes vérifiés",
    feat_exp_2_bold: "et passionnés",
    feat_exp_2_desc: "Chaque prestataire est vérifié par Wajed. Partagez des moments avec des guides locaux, artisans, sportifs et créateurs culturels qui connaissent leur domaine sur le bout des doigts.",
    feat_exp_2_btn: "Vivez une expérience avec des gens de confiance.",

    feat_exp_3_title: "Réservation",
    feat_exp_3_bold: "simplifiée",
    feat_exp_3_desc: "Réservez en quelques clics, communiquez directement avec votre hôte, et recevez toutes les informations pratiques. Paiement sécurisé et confirmation instantanée.",
    feat_exp_3_btn: "Réservez en quelques clics",

    feat_exp_4_title: "Avis et",
    feat_exp_4_bold: "recommandations",
    feat_exp_4_desc: "Filtrez par service, localisation, avis et disponibilités pour trouver le professionnel qui vous correspond.",
    feat_exp_4_btn: "Regardez les avis de nos agences",

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
    footer_rights: "جميع الحقوق محفوظة.",

    // Hero Services (Wajed Services)
    hero_services_badge: "جديد على الموبايل",
    hero_services_title_1: "كل خدماتك",
    hero_services_title_2: "اليومية",
    hero_services_title_3: "مجموعة في",
    hero_services_title_highlight: "تطبيق واحد",
    hero_services_desc: "اعثر في بضع نقرات على مقدم خدمة موثوق لاحتياجاتك من تنظيف، تجميل، أعمال يدوية والمزيد.",

    // Features Section (Services)
    feat_header_1: "خدمة واحدة،",
    feat_header_2: "احتمالات متعددة",
    feat_subtitle: "استفد من حلولنا المرنة لجميع احتياجاتك اليومية. منصة متكاملة في متناول يدك.",
    
    feat_1_title: "يمكنك البحث عن",
    feat_1_bold: "مقدم خدمة يناسب احتياجاتك",
    feat_1_desc: "قم بالتصفية حسب الخدمة، الموقع، السعر والتوافر للعثور على المحترف الذي يناسبك.",
    feat_1_btn: "احجز مقدم خدمة الآن!",

    feat_2_title: "انشر إعلاناً",
    feat_2_bold: "في بضع ثوانٍ",
    feat_2_desc: "صف احتياجك بالتفصيل للمهمة والمكان وتوقعاتك؛ سيتصل بك مقدمو الخدمات بعروضهم.",
    feat_2_btn: "انشر إعلانات الآن",

    feat_3_title: "تفاوض على السعر",
    feat_3_bold: "حسب ميزانيتك",
    feat_3_desc: "قارن العروض، اتصل بهم مبكراً، تواصل بسرعة مع مقدمي الخدمات واعثر على الاتفاق المناسب لك.",
    feat_3_btn: "اختر في التطبيق",

    feat_4_title: "ادفع بأمان",
    feat_4_bold: "بالبطاقة أو نقداً",
    feat_4_desc: "ادفع بالبطاقة من التطبيق أو نقداً حسب مقدم الخدمة. معاملاتك آمنة دائماً.",
    feat_4_btn: "آمن 100%",

    feat_5_title: "اربح مكافآت",
    feat_5_bold: "بدعوة أقاربك",
    feat_5_desc: "ادعُ أصدقاءك للانضمام إلى التطبيق. عند تسجيلهم، يحصلون على 200 دج وتربح أنت 100 دج عند أول خدمة لهم.",
    feat_5_btn: "متاح لجميع المستخدمين",

    // Pourquoi Wajed
    why_title_1: "لماذا",
    why_title_2: "؟",
    why_subtitle: "منصة بسيطة، سريعة وآمنة للعثور على مقدمي خدمات موثوقين.",
    why_feat_1: "مقدمو خدمات بسرعة، بالقرب منك.",
    why_feat_2: "تلقَ العروض، واختر ما يناسبك.",
    why_feat_3: "ادفع بالبطاقة أو نقداً بكل راحة بال.",
    why_feat_4: "فريق في خدمتك عند الحاجة.",
    why_feat_5: "مقدمو خدمات موثوقون (الهوية، الخبرة والتقييمات).",

    // Become Agency Section (Experience)
    agency_title: "كن وكالة سفر.",
    agency_desc: "اكتشف تجارب ثقافية ورياضية فريدة مع عشاق محليين.",
    agency_btn: "وكالة واجد",

    // Section Devenir Prestataire
    prestataire_title: "كن مقدم خدمة",
    prestataire_subtitle: "قدم خدماتك، ونحن نتكفل بالباقي.",
    prestataire_desc: "احصل على رؤية أفضل، وتلقى مهام محلية، وأدر كل شيء من تطبيق واجد.",
    prestataire_btn: "واجد لمقدمي الخدمات",
    // Hero Experience
    hero_exp_badge: "جديد على الموبايل",
    hero_exp_title_1: "عش الجزائر ",
    hero_exp_title_2: "بطريقة أخرى",
    hero_exp_desc: "اعثر في بضع نقرات على أنشطة لا تُنسى: رحلات بالقارب، مسارات مشي، جولات على ظهر الحصان، والمزيد.",

    // Features Experience (En-tête)
    feat_exp_header_1: "تنقل بكل ثقة!",
    feat_exp_header_2: "شارك رحلتك 🚗",
    feat_exp_subtitle_1: "واجد يجمع لك كل خدماتك المنزلية.",
    feat_exp_subtitle_2: "احجز، انشر، تواصل، ادفع واقترح.",

    // Features Experience (Liste)
    feat_exp_1_title: "اكتشاف",
    feat_exp_1_bold: "مخصص",
    feat_exp_1_desc: "اعثر على تجارب تناسبك: المشي في الهقار، ورش عمل الطبخ التقليدي، دروس الخط العربي، جلسات ركوب الأمواج في تيبازة... قم بالتصفية حسب المدينة والفئة والتوافر.",
    feat_exp_1_btn: "عش تجربة مع أشخاص موثوقين.",

    feat_exp_2_title: "مضيفون موثوقون",
    feat_exp_2_bold: "وشغوفون",
    feat_exp_2_desc: "يتم التحقق من كل مقدم خدمة من قبل واجد. شارك اللحظات مع المرشدين المحليين والحرفيين والرياضيين والمبدعين الثقافيين الذين يعرفون مجالهم جيداً.",
    feat_exp_2_btn: "عش تجربة مع أشخاص موثوقين.",

    feat_exp_3_title: "حجز",
    feat_exp_3_bold: "مبسط",
    feat_exp_3_desc: "احجز بنقرات قليلة، وتواصل مباشرة مع مضيفك، واحصل على جميع المعلومات العملية. دفع آمن وتأكيد فوري.",
    feat_exp_3_btn: "احجز بنقرات قليلة",

    feat_exp_4_title: "آراء",
    feat_exp_4_bold: "وتوصيات",
    feat_exp_4_desc: "قم بالتصفية حسب الخدمة والموقع والآراء والتوافر للعثور على المحترف الذي يناسبك.",
    feat_exp_4_btn: "اطلع على تقييمات وكالاتنا",
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