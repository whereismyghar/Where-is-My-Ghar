(() => {
  let savedLanguages = [];
  try {
    savedLanguages = [
      localStorage.getItem("userLanguage"),
      localStorage.getItem("wimg_app_language"),
    ];
  } catch (error) {
    console.warn("Could not read the saved app language for the legal page.", error);
  }
  const requestedLocale = new URLSearchParams(window.location.search).get("lang");
  const locale = [requestedLocale, ...savedLanguages].find((language) =>
    ["en", "hi", "hinglish"].includes(language),
  ) || "en";
  const page = document.body.dataset.legalPage;
  const email = '<a href="mailto:supportwhereismyghar@gmail.com">supportwhereismyghar@gmail.com</a>';
  const deletionEmail =
    '<a href="mailto:supportwhereismyghar@gmail.com?subject=Where%20Is%20My%20Ghar%20account%20deletion%20request">supportwhereismyghar@gmail.com</a>';

  const translations = {
    en: {
      common: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        delete: "Delete Account",
        home: "Where Is My Ghar home",
        legal: "Legal pages",
        whatsapp: "WhatsApp support (+91 9304493065)",
      },
      privacy: {
        title: "Privacy Policy | Where Is My Ghar",
        description: "How Where Is My Ghar handles information on its website and supported apps.",
        effective: "<strong>Effective date:</strong> November 23, 2026",
        intro:
          "This policy covers the Where Is My Ghar website and supported apps, including Android and iOS. It explains what information is used to help you find or list a home, how device permissions and storage work, which outside services are involved, and how to request account deletion.",
        headings: [
          "Publisher and contact",
          "Information we use and why",
          "Permissions and your choices",
          "Services that process information",
          "Retention and account deletion",
          "Security",
          "Policy updates",
          "Need help?",
        ],
        paragraphs: [
          "Where Is My Ghar is the publisher of the website and apps on supported platforms, including Android and iOS. For privacy questions, support, or account-deletion requests, contact us by email",
          email,
          "Some information is handled by the outside services listed below. They process it under their own privacy notices and retention practices. Where Is My Ghar does not control information they retain independently.",
          "While your account is active, we keep the profile and listing information needed to run your account and show your listings. After you confirm in-app deletion, we permanently delete your account and login identity, profile, listings, uploaded listing photos, saved-property records, and account-owned reports, then sign you out. Account-specific address history and listing drafts on this device are also cleared. If you return later, sign up with the same phone number to create a new account. Deleted data cannot be restored.",
          "If you cannot access the app, you can send an account-deletion request with your registered name and phone number by email",
          deletionEmail,
          "The support team manually reviews and processes email requests within 7 to 10 business days.",
          'Account deletion removes account data from Where Is My Ghar\'s Supabase backend. Independent data processed by third-party services is handled under their own privacy notices and retention practices. See the <a href="/delete-account">Account Deletion page</a> for instructions.',
          "General device preferences, such as language and theme, may remain after account deletion. Account-specific address history and unfinished listing drafts are cleared by a successful in-app deletion. You can clear other saved website or app data through your browser or device settings.",
          "The publisher confirms that data is transmitted over HTTPS/TLS and backend data access is controlled using Supabase Row Level Security (RLS) policies. No additional security guarantees are made.",
          "This policy may be updated from time to time. When it changes, the effective date at the top of this page will be revised. Please review this page periodically.",
          "For privacy, support, or account-deletion requests, contact us by email",
          email,
        ],
        items: [
          "<strong>Account and profile:</strong> you sign in with your mobile number and password. Your name and phone number support your account and, when included in a listing, help people contact you. Supabase manages your sign-in session, which is kept on your device so you can stay signed in.",
          "<strong>Owners—property listings and photos:</strong> owners can submit property type and options, rent and deposit, address and location, facilities, availability, contact details, and photos. These details are stored with the listing in Supabase. Photo uploads are optional.<br><br><strong>Tenants browsing while signed out:</strong> you can see public listing details such as city/locality, rent, facilities, and photos, but the app withholds the exact street address, landmark, pincode, owner name, phone number, and saved map coordinates. Sign in to view those details, open the listing map or directions, or contact the owner. City and locality remain visible.",
          "<strong>Contact and sharing:</strong> calling or WhatsApping an owner requires sign-in. After you choose one of those actions, the owner's listed phone number and a prefilled message are handed to the selected phone app or WhatsApp. If you share a listing, its link and selected listing details are passed to your device's share option or copied to your clipboard.",
          "<strong>Saved properties:</strong> saved-property and bookmark records support your saved listings feature.",
          "<strong>Owner addresses:</strong> owners manually enter street/house details, landmark, locality, city, state, and pincode. An existing listing may retain previously saved map coordinates while its address remains unchanged; changing the address clears them. Retained coordinates may be used to display a listing on a map.",
          "<strong>Address search:</strong> text search matches listing locality, city, and landmark. State, city, and locality filters match the corresponding listing address details.",
          "<strong>Listing maps and directions:</strong> opening a listing's map or directions may send its address or saved map coordinates to Google Maps.",
          "<strong>Voice search:</strong> if you choose voice search, your browser or device converts speech to search text. Microphone access is requested only when you start the feature. Depending on your browser and device, audio may be processed by its speech-recognition provider. Where Is My Ghar does not store voice audio on its backend; the provider's privacy practices apply.",
          "<strong>Preferences:</strong> language, theme, selected user mode, onboarding status, and app version may be saved on your device. Some preferences, such as language and user mode, may also be linked to your account.",
          "<strong>Browser and app storage:</strong> local storage can keep your sign-in session, preferences, up to 30 previously used owner addresses, and an unfinished listing form with selected photo previews; the app treats that draft as expired after 10 minutes. Session storage can keep your search text, filters, sort order, saved-only choice, view choice, and scroll position for the current browser session. The browser does not show a separate permission prompt for this storage. Successful in-app account deletion clears account-specific address history and listing drafts from this device. Language, theme, and other general device preferences may remain. Signing out clears your sign-in session.",
          "<strong>Property reports:</strong> when you report a listing, we store the listing and account identifiers, selected reason, date, and—only for \"Other\"—the description you enter (up to 500 characters). Reports help prevent repeat submissions and apply listing moderation. One account can report a listing once. Five reports from different signed-in accounts hide the listing from public feeds; the listing is not automatically deleted. Report details are not displayed publicly, and the owner sees only a status notice in the dashboard.",
          "Opening a listing's map or directions may send its address or saved map coordinates to Google Maps.",
          "Voice search is optional and uses microphone permission. Depending on your app, browser, and device, speech audio may be processed by its speech-recognition service under that provider's privacy practices. You can use text search instead and manage microphone access through your app, browser, or device settings.",
          "Property photo uploads are optional. Photos you choose to upload are stored in Supabase with the listing for guest property previews.",
          "Calling or messaging an owner is optional. If you choose a call or WhatsApp action, the selected phone app or service handles that interaction under its own privacy practices.",
          'You can remove saved properties in the app or request deletion of your account and associated data using the process on our <a href="/delete-account">Account Deletion page</a>.',
          "<strong>Supabase</strong> provides account authentication, session handling, and backend database/storage services for profiles, listings, saved properties, reports, and uploaded photos.",
          "The current owner listing flow does not use a geocoding provider to fill address fields. <strong>Google Maps</strong> may receive a listing address or previously saved coordinates when you open its map or directions.",
          "<strong>Unsplash</strong> provides fallback image assets used by the app.",
          "<strong>Google Fonts</strong> supplies font assets requested by the app or website when it loads.",
          "<strong>Your browser/device speech-recognition service</strong> may receive and process voice-search audio as described above; its privacy practices depend on the provider.",
          "<strong>WhatsApp, your phone app, and your device's share feature</strong> are involved only when you choose to contact support or an owner, or share a listing. The selected app or service handles what you send under its own privacy practices.",
        ],
        location: "<strong>Property maps and navigation:</strong>",
        whatsappMessage:
          "Hi Where Is My Ghar Support, I have a privacy question.",
      },
      "terms-of-use": {
        title: "Terms of Use | Where Is My Ghar",
        description: "Terms for using the Where Is My Ghar website and supported apps.",
        eyebrow: "User agreement",
        effective: "<strong>Effective date:</strong> November 23, 2026",
        intro:
          "These terms apply when you use the Where Is My Ghar website or supported apps, including Android and iOS. By using the service, you agree to these terms. If you do not agree, do not use the service.",
        headings: [
          "1. Accepting these terms",
          "2. What the service does",
          "3. Accounts and acceptable use",
          "4. Owner listing responsibilities",
          "5. Tenant and guest responsibilities",
          "6. Search and location",
          "7. External services and permissions",
          "8. Reports and listing moderation",
          "9. Your content and our service",
          "10. Availability and liability",
          "11. Account closure, changes, and contact",
        ],
        paragraphs: [
          "Use the service only in a lawful manner and only if you are legally able to agree to these terms. If you use it for another person or organization, you confirm that you are authorized to accept these terms for them.",
          "<strong>For tenants:</strong> browse owner-posted flats, rooms, and PG/hostel listings; search by text and filters; sort by latest or rent; switch between map and grid views; use optional voice search; save or share listings; and contact owners. Room options, including multiple options of the same type at different rents, are displayed separately. While signed out, you can see public details such as city/locality, rent, facilities, and photos, but the exact street address, landmark, pincode, owner name, phone number, and map pin are withheld. Sign in to view those details, use map/directions, or contact the owner.<br><br><strong>For owners:</strong> create and manage listings, manually enter address details, add multiple Room options of the same type at different rents, update availability, and delete listings. We are a listing and discovery platform, not a real-estate broker, agent, property manager, or party to any rental transaction. We do not inspect or verify a property, negotiate terms, or process bookings, rent, deposits, or other transaction payments through the app.",
          "Keep your account information accurate and protect your sign-in details. You are responsible for activity through your account. Do not misuse the service or interfere with other users.",
          "If you post a listing, you confirm that you own the property or are authorized to advertise it. You are responsible for accurate, current details, including availability, rent or price, deposit, location, facilities, and photos. For a listing with multiple options, keep each option's rent and availability accurate. Update or remove a listing when it is no longer available. You must have the rights and permissions needed to share its content and must follow applicable laws. We do not guarantee that a listing will remain published or be shown to every user.",
          "Listing information is supplied by users and may be incomplete or out of date. Before making a decision or paying anyone, independently verify the owner's identity and authority, the property, availability, price, deposit, and proposed agreement. Contact and transaction discussions take place directly between users, outside the app. Do not rely on a listing or on our platform as a guarantee of safety, ownership, suitability, or a successful transaction.",
          "<strong>Tenants browsing while signed out:</strong> you can see city/locality, rent, facilities, and photos. Text search matches locality, city, and landmark; cascading filters use state, city, and locality. The exact address, landmark, pincode, owner name, phone number, and map pin are withheld. Sign in to view them, open listing maps/directions, or contact the owner by call or WhatsApp.<br><br><strong>Owners:</strong> manually enter street/house details, landmark, locality, city, state, and pincode. Previously saved map coordinates on an existing listing may remain while its address is unchanged; changing the address clears them.",
          "The current owner listing form does not use a geocoding provider to fill address fields. Microphone permission is requested only when you start voice search. When you open a listing map or directions, Google Maps may receive the listing address or previously saved coordinates. Calling or WhatsApping an owner requires sign-in and passes the owner's contact details to the selected app. Voice-search audio may be processed by your browser/device speech-recognition service. Third-party terms and privacy practices apply; see our <a href=\"/privacy-policy\">Privacy Policy</a>.",
          "Signed-in users may report a listing once per account for a stated reason, such as a suspected scam, incorrect details, a duplicate, a wrong phone number, or fake photos. An \"Other\" report requires a short description. Reports must be genuine and submitted in good faith. Five reports from distinct accounts automatically hide the listing from public feeds; this threshold alone does not prove a violation and does not delete the listing. The owner can still see and delete it from their dashboard. We may restrict or remove content or access when reasonably needed to protect users or comply with law.",
          "You retain your rights to content you submit. You allow us to host, display, and use that content as needed to operate and maintain the service and its listings. You confirm that you have permission to grant this limited right. The app, its software, branding, and other materials belong to Where Is My Ghar or their respective owners; these terms do not transfer ownership to you.",
          "We work to keep the service available but do not promise uninterrupted operation, error-free results, or the accuracy of user-submitted information. To the extent permitted by law, the service is provided without warranties beyond those that cannot legally be excluded. We are not responsible for disputes, losses, or arrangements between users. Nothing in these terms limits liability or rights that applicable law does not allow to be limited.",
          "You can permanently delete your account through Profile &gt; Delete Account. After you confirm, we delete your account and login identity, profile, and related app data, clear account-specific local address history and listing drafts, and sign you out. To return later, sign up with the same phone number to create a new account; deleted data cannot be restored. We may suspend access for serious misuse or to meet legal requirements. We may update these terms by revising the effective date above. Continued use after an update means you accept the revised terms. For questions, email " + email + '. See the <a href="/delete-account">Account Deletion page</a> for deletion details.',
        ],
        items: [
          "Do not post or send false, misleading, unlawful, abusive, or infringing material.",
          "Do not impersonate another person, submit deceptive reports, or harass users.",
          "Do not scrape, disrupt, probe, or attempt to bypass the service's access controls.",
          "Do not use the service to send spam or for an unlawful purpose.",
        ],
        whatsappMessage:
          "Hi Where Is My Ghar Support, I have a question about the Terms of Use.",
      },
      delete: {
        title: "Delete Account | Where Is My Ghar",
        description: "How to request deletion of your Where Is My Ghar account and what happens to its data.",
        eyebrow: "Account and data controls",
        effective: "<strong>Updated:</strong> November 23, 2026 · Website, app, and email options",
        intro:
          "You can permanently delete your account data from the app. If you cannot access the app, email us and the support team will review your request.",
        headings: [
          "1. Request deletion in the app",
          "2. Request deletion by email",
          "What is deleted and when",
          "Need help?",
        ],
        paragraphs: [
          "After confirmation, the app permanently deletes your account and login identity, profile, property listings, saved properties, reports, and uploaded listing photos, then signs you out. Account-specific address history and listing drafts on this device are also cleared. If you return later, sign up with the same phone number to create a new account. Deleted data cannot be restored.",
          "If you cannot access the app, email your account-deletion request to",
          deletionEmail,
          "Include your registered name and phone number so the support team can review the request. The support team manually reviews and processes email deletion requests within 7 to 10 business days.",
          "<strong>Do not email your password or a one-time password (OTP).</strong>",
          "A successful in-app deletion permanently removes the account login identity, profile, property listings, uploaded listing photos, saved-property records, and account-owned reports. You are signed out. To return later, sign up with the same phone number to create a new account.",
          "Account deletion removes account data from Where Is My Ghar's Supabase backend. Independent data processed by third-party services is handled under their own privacy notices and retention practices.",
          "Account-specific address history and unfinished listing drafts are cleared from this device. General device preferences, such as language and theme, may remain. You can clear other saved website or app data through your browser or device settings.",
          "For support or questions about a deletion request, contact us by email",
          email,
          'See our <a href="/privacy-policy">Privacy Policy</a> for information about data use, permissions, and third-party services.',
        ],
        items: [
          "Go to <strong>Profile &gt; Delete Account</strong>.",
          "Review and confirm the deletion request.",
        ],
        buttons: [
          "Email a deletion request",
        ],
        whatsappMessage:
          "Hi Where Is My Ghar Support, I have a question about account deletion.",
      },
    },
    hi: {
      common: {
        privacy: "गोपनीयता नीति",
        terms: "उपयोग की शर्तें",
        delete: "खाता हटाएँ",
        home: "Where Is My Ghar होम",
        legal: "कानूनी पेज",
        whatsapp: "WhatsApp सहायता (+91 9304493065)",
      },
      privacy: {
        title: "गोपनीयता नीति | Where Is My Ghar",
        description: "Where Is My Ghar आपकी जानकारी का इस्तेमाल कैसे करता है और आप उसे कैसे संभाल सकते हैं।",
        effective: "<strong>प्रभावी तिथि:</strong> 20 नवंबर, 2026",
        intro:
          "Where Is My Ghar पर घर ढूँढना या अपनी प्रॉपर्टी की जानकारी साझा करना आसान बने—इसीलिए यह नीति साफ़-साफ़ बताती है कि आपकी कौन-सी जानकारी इस्तेमाल होती है, वह कहाँ रखी जाती है, और आप उसे कैसे संभाल सकते हैं। यह वेबसाइट और Android व iOS ऐप पर लागू होती है।",
        headings: [
          "प्रकाशक और संपर्क",
          "आपकी जानकारी और उसका इस्तेमाल",
          "अनुमतियाँ और आपके विकल्प",
          "हम किन सेवाओं का इस्तेमाल करते हैं",
          "जानकारी कितने समय तक रहती है और खाता कैसे हटाएँ",
          "सुरक्षा",
          "नीति में बदलाव",
          "हमसे बात करनी है?",
        ],
        paragraphs: [
          "Where Is My Ghar वेबसाइट और Android व iOS ऐप का प्रकाशक है। आपकी गोपनीयता, सहायता या खाता हटाने से जुड़ी कोई बात हो, तो हमें ईमेल करें",
          email,
          "कुछ जानकारी उन बाहरी सेवाओं तक भी जाती है जिनका ज़िक्र नीचे है। वे उसे अपनी गोपनीयता नीति और डेटा रखने के नियमों के मुताबिक संभालती हैं। उन सेवाओं के पास अलग से रखी जानकारी पर हमारा नियंत्रण नहीं होता।",
          "खाता चालू रहने तक हम आपकी प्रोफ़ाइल और लिस्टिंग की जानकारी संभालकर रखते हैं। ऐप में हटाने की पुष्टि के बाद हम आपका खाता और लॉगिन पहचान, प्रोफ़ाइल, लिस्टिंग, अपलोड की गई तस्वीरें, सेव की गई प्रॉपर्टी और खाते की रिपोर्टें स्थायी रूप से हटाकर आपको साइन आउट करते हैं। इस डिवाइस से खाते के पते और अधूरी लिस्टिंग के ड्राफ़्ट भी हटते हैं। बाद में लौटने पर इसी नंबर से नया खाता बनाने के लिए साइन अप करें। हटाया गया डेटा वापस नहीं आएगा।",
          "अगर आप ऐप नहीं खोल पा रहे हैं, तो अपने रजिस्टर्ड नाम और फोन नंबर के साथ ईमेल से खाता हटाने का अनुरोध भेज सकते हैं",
          deletionEmail,
          "हमारी सहायता टीम ईमेल अनुरोध को देखकर आम तौर पर 7 से 10 कामकाजी दिनों में प्रोसेस करती है।",
          'खाता हटाने पर Where Is My Ghar के Supabase बैकएंड से खाते का डेटा हटा दिया जाता है। बाहरी सेवाओं के पास अलग से मौजूद जानकारी उनके अपने नियमों के अनुसार रहती है। पूरी प्रक्रिया <a href="/delete-account">खाता हटाने वाले पेज</a> पर देखें।',
          "भाषा और थीम जैसी सामान्य डिवाइस पसंद खाता हटाने के बाद रह सकती हैं। सफल in-app deletion इस डिवाइस से खाते के पते और अधूरी लिस्टिंग के ड्राफ़्ट साफ़ करता है। अन्य वेबसाइट या ऐप डेटा ब्राउज़र या डिवाइस की सेटिंग से हटाया जा सकता है।",
          "हमारा ऐप HTTPS/TLS के ज़रिए जानकारी भेजता है और Supabase के Row Level Security (RLS) नियम बैकएंड डेटा तक पहुँच को नियंत्रित करते हैं। इसके अलावा किसी खास स्तर की सुरक्षा की गारंटी नहीं दी जाती।",
          "ज़रूरत पड़ने पर हम इस नीति को अपडेट कर सकते हैं। बदलाव होने पर ऊपर दी गई प्रभावी तिथि भी बदलेंगे। नई जानकारी के लिए कभी-कभी यह पेज देख लें।",
          "गोपनीयता, सहायता या खाता हटाने को लेकर हमसे बात करनी हो, तो ईमेल करें",
          email,
        ],
        items: [
          "<strong>खाता और प्रोफ़ाइल:</strong> आप मोबाइल नंबर और पासवर्ड से साइन इन करते हैं। आपका नाम और फोन नंबर खाता चलाने और लिस्टिंग में संपर्क की सुविधा देने के लिए इस्तेमाल होते हैं। Supabase साइन-इन सेशन संभालता है और आपको साइन-इन बनाए रखने के लिए उसे डिवाइस पर रखता है।",
          "<strong>मकान-मालिक—लिस्टिंग और तस्वीरें:</strong> मकान-मालिक घर का प्रकार, किराया व जमा राशि, पता व लोकेशन, सुविधाएँ, उपलब्धता, संपर्क जानकारी और तस्वीरें दे सकते हैं। यह जानकारी Supabase में लिस्टिंग के साथ सहेजी जाती है। तस्वीरें अपलोड करना उनकी पसंद है।<br><br><strong>बिना साइन-इन वाले किरायेदार:</strong> उन्हें शहर/इलाके, किराया, सुविधाएँ और तस्वीरों जैसी सार्वजनिक जानकारी दिखती है; लेकिन पूरा सड़क-पता, लैंडमार्क, पिनकोड, मालिक का नाम व फोन नंबर और पहले से सहेजे मैप निर्देशांक नहीं दिखते। ये विवरण, लिस्टिंग का नक्शा/रास्ता देखने या मालिक से संपर्क करने के लिए साइन-इन करना होगा। शहर और इलाका दिखाई देते हैं।",
          "<strong>संपर्क और शेयर करना:</strong> मालिक को कॉल या WhatsApp करने के लिए साइन-इन ज़रूरी है। यह विकल्प चुनने के बाद मालिक का लिस्टिंग वाला फोन नंबर और पहले से भरा संदेश चुने हुए फोन ऐप या WhatsApp को दिया जाता है। लिस्टिंग शेयर करने पर उसका लिंक और चुनी हुई जानकारी आपके डिवाइस के शेयर विकल्प या क्लिपबोर्ड को दी जा सकती है।",
          "<strong>सेव की गई प्रॉपर्टी:</strong> सेव की गई लिस्टिंग का रिकॉर्ड आपके खाते से जुड़ा रहता है, ताकि आप उन्हें बाद में फिर देख सकें।",
          "<strong>मालिक के पते:</strong> मालिक सड़क/घर का विवरण, लैंडमार्क, इलाका, शहर, राज्य और पिनकोड खुद भरते हैं। किसी पुरानी लिस्टिंग के पहले से सहेजे मैप निर्देशांक पता न बदलने तक रह सकते हैं; पता बदलने पर वे हट जाते हैं। बचे हुए निर्देशांक मैप दिखाने के काम आ सकते हैं।",
          "<strong>पते से खोज:</strong> टेक्स्ट खोज लिस्टिंग के इलाके, शहर और लैंडमार्क से मेल खाती है। राज्य, शहर और इलाके के फ़िल्टर लिस्टिंग के संबंधित पते के विवरण से मेल खाते हैं।",
          "<strong>लिस्टिंग के मैप और रास्ते:</strong> लिस्टिंग का मैप या रास्ता खोलने पर उसका पता या पहले से सहेजे मैप निर्देशांक Google Maps को भेजे जा सकते हैं।",
          "<strong>आवाज़ से खोज:</strong> आप यह सुविधा शुरू करते हैं, तभी माइक्रोफ़ोन की अनुमति माँगी जाती है। ब्राउज़र या डिवाइस आपकी आवाज़ को खोज के टेक्स्ट में बदलता है। कुछ डिवाइस में ऑडियो उनकी speech-recognition सेवा तक जा सकता है। Where Is My Ghar आवाज़ का ऑडियो अपने बैकएंड पर नहीं रखता; सेवा प्रदाता की गोपनीयता नीति लागू होती है।",
          "<strong>आपकी पसंद:</strong> भाषा, थीम, चुना हुआ मोड, ऐप शुरू करने की स्थिति और ऐप का वर्ज़न आपके डिवाइस पर सहेजे जा सकते हैं। भाषा और मोड जैसी कुछ पसंद आपके खाते से भी जुड़ सकती हैं।",
          "<strong>ब्राउज़र और ऐप का स्टोरेज:</strong> localStorage में साइन-इन सेशन, आपकी पसंद, पहले इस्तेमाल किए गए अधिकतम 30 पते और अधूरी लिस्टिंग की जानकारी व चुनी हुई तस्वीरों के प्रीव्यू रखे जा सकते हैं। ऐप इस ड्राफ़्ट को 10 मिनट बाद पुराना मानता है। sessionStorage में मौजूदा टैब/ब्राउज़र सेशन के लिए खोज, फ़िल्टर, क्रम, सिर्फ़ सेव की गई लिस्टिंग देखने की पसंद, देखने का तरीका और स्क्रॉल की जगह सहेजी जा सकती है। सफल in-app account deletion इस डिवाइस से खाते के पते और अधूरी लिस्टिंग के ड्राफ़्ट साफ़ करता है। भाषा, थीम और सामान्य डिवाइस पसंद रह सकती हैं। साइन आउट करने पर साइन-इन सेशन हट जाता है।",
          "<strong>प्रॉपर्टी की रिपोर्ट:</strong> रिपोर्ट भेजने पर लिस्टिंग और खाते की पहचान, चुनी हुई वजह और तारीख सहेजी जाती है। \"अन्य\" चुनने पर आपका लिखा विवरण भी (अधिकतम 500 अक्षर) रखा जाता है। इससे दोबारा रिपोर्ट रोकने और लिस्टिंग की स्थिति तय करने में मदद मिलती है। एक खाता किसी लिस्टिंग को एक बार रिपोर्ट कर सकता है। अलग-अलग साइन-इन खातों से पाँच रिपोर्ट आने पर लिस्टिंग सार्वजनिक फ़ीड से छिप जाती है, लेकिन अपने-आप डिलीट नहीं होती। रिपोर्ट की वजह या रिपोर्ट करने वाले की पहचान सार्वजनिक नहीं होती; मालिक को डैशबोर्ड में सिर्फ़ स्थिति की सूचना दिखती है।",
          "लिस्टिंग का मैप या रास्ता खोलने पर उसका पता या पहले से सहेजे मैप निर्देशांक Google Maps को भेजे जा सकते हैं।",
          "आवाज़ से खोज वैकल्पिक है। इसमें माइक्रोफ़ोन की अनुमति लगती है। आप चाहें तो सामान्य टेक्स्ट से खोज सकते हैं और डिवाइस या ब्राउज़र की सेटिंग से माइक्रोफ़ोन की अनुमति नियंत्रित कर सकते हैं।",
          "तस्वीरें अपलोड करना वैकल्पिक है। आपकी चुनी हुई तस्वीरें मेहमानों को लिस्टिंग दिखाने के लिए Supabase में रखी जाती हैं।",
          "कॉल या संदेश करना भी आपकी पसंद है। आप विकल्प चुनेंगे, तभी फोन ऐप या WhatsApp खुलेगा; आगे की बातचीत उस सेवा की अपनी गोपनीयता नीति के अनुसार होगी।",
          'आप सेव की गई प्रॉपर्टी ऐप में हटा सकते हैं। पूरा खाता और उससे जुड़ी जानकारी हटाने के लिए <a href="/delete-account">खाता हटाने वाले पेज</a> के तरीके अपनाएँ।',
          "<strong>Supabase</strong> साइन-इन, सेशन, प्रोफ़ाइल, लिस्टिंग, सेव की गई प्रॉपर्टी, रिपोर्ट और अपलोड की गई तस्वीरों के लिए बैकएंड डेटाबेस व स्टोरेज देता है।",
          "मौजूदा मालिक लिस्टिंग फ़ॉर्म पते के फ़ील्ड भरने के लिए geocoding सेवा का इस्तेमाल नहीं करता। <strong>Google Maps</strong> का मैप या रास्ता खोलने पर उसे लिस्टिंग का पता या पहले से सहेजे निर्देशांक मिल सकते हैं।",
          "<strong>Unsplash</strong> ऐप में कुछ वैकल्पिक तस्वीरें उपलब्ध कराता है।",
          "<strong>Google Fonts</strong> ऐप या वेबसाइट खुलने पर फ़ॉन्ट उपलब्ध कराता है।",
          "<strong>आपके ब्राउज़र या डिवाइस की speech-recognition सेवा</strong> आवाज़ से खोज के दौरान ऑडियो ले सकती है और उसे प्रोसेस कर सकती है। यह सेवा किस प्रदाता की है, उसके अनुसार उसकी गोपनीयता नीति लागू होगी।",
          "<strong>WhatsApp, फोन ऐप और डिवाइस का शेयर विकल्प</strong> तभी इस्तेमाल होते हैं जब आप किसी से संपर्क या लिस्टिंग शेयर करना चुनते हैं। आप जो जानकारी भेजते हैं, उसे चुनी हुई सेवा अपनी गोपनीयता नीति के अनुसार संभालती है।",
        ],
        location: "<strong>प्रॉपर्टी के मैप और नेविगेशन:</strong>",
        whatsappMessage:
          "नमस्ते Where Is My Ghar सपोर्ट, मुझे गोपनीयता के बारे में सवाल पूछना है।",
      },
      "terms-of-use": {
        title: "उपयोग की शर्तें | Where Is My Ghar",
        description: "Where Is My Ghar की वेबसाइट और ऐप इस्तेमाल करने के नियम।",
        eyebrow: "सेवा इस्तेमाल करने की शर्तें",
        effective: "<strong>प्रभावी तिथि:</strong> 20 नवंबर, 2026",
        intro:
          "Where Is My Ghar की वेबसाइट या Android और iOS ऐप इस्तेमाल करने पर ये शर्तें लागू होती हैं। सेवा इस्तेमाल करके आप इन्हें स्वीकार करते हैं। अगर आप सहमत नहीं हैं, तो कृपया सेवा का इस्तेमाल न करें।",
        headings: [
          "1. इन शर्तों से सहमति",
          "2. यह ऐप आपकी कैसे मदद करता है",
          "3. खाता और सही इस्तेमाल",
          "4. मकान-मालिक की ज़िम्मेदारियाँ",
          "5. किराये पर घर ढूँढने वालों की ज़िम्मेदारियाँ",
          "6. खोज और लोकेशन",
          "7. बाहरी सेवाएँ और अनुमतियाँ",
          "8. रिपोर्ट और लिस्टिंग की समीक्षा",
          "9. आपकी साझा की हुई जानकारी और हमारा ऐप",
          "10. सेवा की उपलब्धता और हमारी ज़िम्मेदारी",
          "11. खाता हटाना, शर्तों में बदलाव और संपर्क",
        ],
        paragraphs: [
          "सेवा का इस्तेमाल कानून के अनुसार करें। इसे तभी इस्तेमाल करें जब आप इन शर्तों को समझकर स्वीकार कर सकते हों। किसी और व्यक्ति या संस्था की ओर से इस्तेमाल कर रहे हैं, तो पहले सुनिश्चित करें कि आपको उनकी ओर से सहमति देने का अधिकार है।",
          "<strong>किरायेदारों के लिए:</strong> फ्लैट, कमरे और PG/हॉस्टल खोजें; टेक्स्ट या फ़िल्टर लगाएँ; नई या कम किराये वाली लिस्टिंग देखें। एक ही प्रकार के कई Room विकल्प अलग-अलग किराये पर अलग दिखते हैं। मैप/ग्रिड चुनें, आवाज़ से खोजें, लिस्टिंग सेव या शेयर करें। बिना साइन-इन के शहर/इलाका, किराया, सुविधाएँ और तस्वीरें दिखती हैं, लेकिन पूरा पता, लैंडमार्क, पिनकोड, मालिक का नाम, फोन नंबर और मैप पिन छिपे रहते हैं। इन्हें देखने, रास्ता खोलने या मालिक से संपर्क करने के लिए साइन-इन करें।<br><br><strong>मकान-मालिकों के लिए:</strong> लिस्टिंग बनाएँ/बदलें, पता खुद भरें, एक ही प्रकार के कई Room विकल्प अलग-अलग किराये पर जोड़ें, उपलब्धता अपडेट करें या लिस्टिंग हटाएँ। हमारा ऐप घर ढूँढने और मालिकों से जुड़ने का मंच है; हम ब्रोकर, एजेंट या प्रॉपर्टी मैनेजर नहीं हैं और किराये के समझौते का हिस्सा नहीं बनते। हम घर की जाँच, मालिकाना हक की पुष्टि, शर्तों पर बातचीत, बुकिंग या भुगतान नहीं कराते। किराया और जमा राशि ऐप के ज़रिए नहीं ली जाती।",
          "अपने खाते की जानकारी सही रखें और साइन-इन की जानकारी सुरक्षित रखें। आपके खाते से जो भी गतिविधि होगी, उसकी ज़िम्मेदारी आपकी होगी। कृपया ऐप का ऐसा इस्तेमाल न करें जिससे दूसरों को परेशानी हो या उनकी सेवा में बाधा आए।",
          "अगर आप कोई लिस्टिंग डालते हैं, तो वह प्रॉपर्टी आपकी होनी चाहिए या आपके पास मालिक की अनुमति होनी चाहिए। किराया, जमा राशि, जगह, सुविधाएँ, तस्वीरें और उपलब्धता की जानकारी सही और ताज़ा रखें। कई विकल्प वाली लिस्टिंग में हर विकल्प का किराया और उपलब्धता सही रखें। प्रॉपर्टी किराये के लिए उपलब्ध न रहे, तो उसकी लिस्टिंग अपडेट करें या हटा दें। तस्वीरें और दूसरी जानकारी साझा करने का अधिकार आपके पास होना चाहिए, और आपको लागू कानूनों का पालन करना होगा। हम यह वादा नहीं कर सकते कि कोई लिस्टिंग हमेशा दिखाई देगी या हर व्यक्ति तक पहुँचेगी।",
          "लिस्टिंग की जानकारी मकान-मालिक साझा करते हैं; वह कभी अधूरी या पुरानी हो सकती है। आगे बढ़ने या किसी को पैसे देने से पहले मालिक की पहचान और प्रॉपर्टी पर उनके अधिकार, उपलब्धता, किराया, जमा राशि और समझौते की जानकारी खुद जाँच लें। बातचीत और लेन-देन आप और मालिक सीधे, ऐप के बाहर करते हैं। लिस्टिंग को घर की सुरक्षा, मालिकाना हक या किसी सफल समझौते की गारंटी न मानें।",
          "<strong>बिना साइन-इन वाले किरायेदार:</strong> शहर/इलाका, किराया, सुविधाएँ और तस्वीरें देख सकते हैं; पूरा पता, लैंडमार्क, पिनकोड, मालिक का नाम, फोन नंबर और मैप पिन छिपे रहते हैं। टेक्स्ट खोज इलाके, शहर और लैंडमार्क से मेल खाती है; फ़िल्टर राज्य, शहर और इलाके से मेल खाते हैं। इन्हें देखने, मैप/रास्ता खोलने या कॉल/WhatsApp से संपर्क करने के लिए साइन-इन करें।<br><br><strong>मकान-मालिक:</strong> सड़क/घर का विवरण, लैंडमार्क, इलाका, शहर, राज्य और पिनकोड खुद भरते हैं। पुरानी लिस्टिंग के पहले से सहेजे मैप निर्देशांक पता न बदलने तक रह सकते हैं; पता बदलने पर हट जाते हैं।",
          "मौजूदा मालिक लिस्टिंग फ़ॉर्म पते के फ़ील्ड भरने के लिए geocoding सेवा का इस्तेमाल नहीं करता। आवाज़ से खोज शुरू करने पर माइक्रोफ़ोन की अनुमति माँगी जाती है। लिस्टिंग का मैप या रास्ता खोलने पर Google Maps को उसका पता या पहले से सहेजे निर्देशांक मिल सकते हैं। मालिक को कॉल या WhatsApp करने के लिए साइन-इन करना होगा; चुने हुए ऐप को मालिक की संपर्क जानकारी दी जाती है। आवाज़ से खोज का ऑडियो ब्राउज़र/डिवाइस की speech-recognition सेवा पर प्रोसेस हो सकता है। बाहरी सेवाओं की अपनी शर्तें और गोपनीयता नीतियाँ लागू होती हैं। ज़्यादा जानकारी <a href=\"/privacy-policy\">गोपनीयता नीति</a> में पढ़ें।",
          "अगर कोई लिस्टिंग गलत या संदिग्ध लगे, तो उसे रिपोर्ट करें—एक खाते से एक बार। वजह में धोखाधड़ी का शक, गलत जानकारी, दोहराई गई लिस्टिंग, गलत फोन नंबर या नकली तस्वीरें चुन सकते हैं। \"अन्य\" चुनने पर छोटी-सी वजह लिखनी होगी। कृपया रिपोर्ट सही जानकारी और नेक इरादे से करें। पाँच अलग-अलग साइन-इन खातों से रिपोर्ट आने पर लिस्टिंग सबकी सार्वजनिक फ़ीड से छिप जाती है। सिर्फ़ रिपोर्टों की संख्या से गलती साबित नहीं होती और लिस्टिंग अपने-आप डिलीट नहीं होती। मालिक उसे अपने डैशबोर्ड में देख और हटा सकता है। उपयोगकर्ताओं की सुरक्षा या कानून के पालन के लिए हम लिस्टिंग या खाते पर ज़रूरी रोक लगा सकते हैं।",
          "आप जो जानकारी, विवरण या तस्वीरें साझा करते हैं, उन पर आपका अधिकार बना रहता है। लिस्टिंग को ऐप पर दिखाने और सेवा चलाने के लिए आप हमें उस जानकारी को सुरक्षित रखने, दिखाने और ज़रूरत के मुताबिक इस्तेमाल करने की अनुमति देते हैं। कृपया वही जानकारी या तस्वीरें साझा करें जिन्हें पोस्ट करने की आपको अनुमति है। ऐप, उसका सॉफ़्टवेयर, नाम और लोगो Where Is My Ghar या उनके संबंधित मालिकों के हैं; इन शर्तों से उनका मालिकाना हक आपको नहीं मिलता।",
          "हम चाहते हैं कि ऐप आपके काम आए और भरोसेमंद तरीके से चले। फिर भी, कभी तकनीकी दिक्कत या रखरखाव के कारण सेवा रुक सकती है। हम हर समय बिना रुकावट चलने, गलती-मुक्त नतीजों या उपयोगकर्ताओं की दी हुई जानकारी के सही होने की गारंटी नहीं दे सकते। आपके और किसी दूसरे उपयोगकर्ता के बीच हुए समझौते या विवाद के लिए हम ज़िम्मेदार नहीं हैं। कानून जिन अधिकारों या ज़िम्मेदारियों को सीमित करने की अनुमति नहीं देता, वे इन शर्तों से सीमित नहीं होंगे।",
          "प्रोफ़ाइल में <strong>Delete Account</strong> चुनकर अपने खाते का डेटा स्थायी रूप से हटा सकते हैं। पुष्टि के बाद ऐप आपकी प्रोफ़ाइल और उससे जुड़ा डेटा हटाने की प्रक्रिया शुरू करता है। सफ़ाई पूरी होने पर ऐप आपको साइन आउट कर देगा। अगर आप बाद में लौटना चाहें, तो उसी फोन नंबर से नई प्रोफ़ाइल बना सकते हैं; हटाई गई पुरानी प्रोफ़ाइल और उससे जुड़ा ऐप डेटा वापस नहीं आएगा। गंभीर दुरुपयोग या कानूनी ज़रूरत पड़ने पर हम खाते का ऐक्सेस रोक सकते हैं। इन शर्तों में बदलाव होने पर हम ऊपर दी गई प्रभावी तिथि अपडेट करेंगे। बदलाव के बाद भी ऐप इस्तेमाल करते रहने का मतलब है कि आप नई शर्तों से सहमत हैं। कोई सवाल हो, तो हमें ईमेल करें: " + email + '. खाता हटाने की पूरी जानकारी <a href="/delete-account">खाता हटाने वाले पेज</a> पर है।',
        ],
        items: [
          "झूठी या भ्रामक जानकारी, गैरकानूनी या अपमानजनक सामग्री, या किसी और के अधिकारों का उल्लंघन करने वाली चीज़ पोस्ट या न भेजें।",
          "किसी और की पहचान बनकर पेश न आएँ, जानबूझकर गलत रिपोर्ट न करें और किसी उपयोगकर्ता को परेशान न करें।",
          "ऐप से बिना अनुमति जानकारी इकट्ठा न करें, सेवा में रुकावट न डालें और सुरक्षा नियमों को तोड़ने की कोशिश न करें।",
          "ऐप का इस्तेमाल स्पैम या गैरकानूनी काम के लिए न करें।",
        ],
        whatsappMessage:
          "नमस्ते Where Is My Ghar सपोर्ट, मुझे उपयोग की शर्तों के बारे में एक सवाल पूछना है।",
      },
      delete: {
        title: "खाता हटाएँ | Where Is My Ghar",
        description: "Where Is My Ghar का खाता हटाने का तरीका और उसके बाद आपके डेटा का क्या होता है।",
        eyebrow: "आपके खाते और जानकारी पर आपका नियंत्रण",
        effective: "<strong>अपडेट तिथि:</strong> 20 नवंबर, 2026 · वेबसाइट, ऐप और ईमेल",
        intro:
          "ऐप में अपने खाते का डेटा स्थायी रूप से हटाने का अनुरोध कर सकते हैं। अगर ऐप तक पहुँच नहीं है, तो हमें ईमेल भेजें और हमारी सहायता टीम अनुरोध की समीक्षा करेगी।",
        headings: [
          "1. ऐप से खाता हटाने का अनुरोध",
          "2. ईमेल से अनुरोध भेजें",
          "आपकी कौन-सी जानकारी हटेगी",
          "कोई सवाल हो?",
        ],
        paragraphs: [
          "पुष्टि के बाद ऐप आपका खाता और लॉगिन पहचान, प्रोफ़ाइल, प्रॉपर्टी लिस्टिंग, सेव की गई प्रॉपर्टी, रिपोर्ट और अपलोड की गई तस्वीरें स्थायी रूप से हटा देता है और आपको साइन आउट करता है। इस डिवाइस से खाते के पते और अधूरी लिस्टिंग के ड्राफ़्ट भी हटते हैं। बाद में लौटने पर इसी नंबर से नया खाता बनाने के लिए साइन अप करें। हटाया गया डेटा वापस नहीं आएगा।",
          "अगर आप ऐप तक नहीं पहुँच पा रहे हैं, तो खाता हटाने का अनुरोध इस ईमेल पर भेजें",
          deletionEmail,
          "ताकि हम अनुरोध पहचान सकें, ईमेल में अपना रजिस्टर्ड नाम और फोन नंबर लिखें। हमारी सहायता टीम इसे देखकर आम तौर पर 7 से 10 कामकाजी दिनों में प्रोसेस करती है।",
          "<strong>कृपया ईमेल में अपना पासवर्ड या वन-टाइम पासवर्ड (OTP) कभी न भेजें।</strong>",
          "ऐप से सफलतापूर्वक खाता हटाने पर लॉगिन पहचान, प्रोफ़ाइल, लिस्टिंग, अपलोड की गई तस्वीरें, सेव की गई प्रॉपर्टी और खाते की रिपोर्टें Where Is My Ghar के बैकएंड से स्थायी रूप से हटा दी जाती हैं। आपको साइन आउट कर दिया जाता है। बाद में लौटने के लिए इसी नंबर से नया खाता बनाने हेतु साइन अप करें।",
          "हमारे Supabase बैकएंड से जुड़ा डेटा हटाया जाता है। बाहरी सेवाओं के पास अलग से मौजूद जानकारी उनके अपने गोपनीयता नियमों और डेटा रखने की अवधि के अनुसार रहती है।",
          "खाते के पहले इस्तेमाल किए पते और अधूरी लिस्टिंग के ड्राफ़्ट इस डिवाइस से हटा दिए जाते हैं। भाषा और थीम जैसी सामान्य डिवाइस पसंद बनी रह सकती हैं। अन्य वेबसाइट या ऐप डेटा ब्राउज़र या डिवाइस की सेटिंग से साफ़ किया जा सकता है।",
          "अनुरोध या प्रक्रिया को लेकर कोई सवाल हो, तो हमें ईमेल करें",
          email,
          'डेटा, अनुमतियों और बाहरी सेवाओं के बारे में और जानने के लिए हमारी <a href="/privacy-policy">गोपनीयता नीति</a> पढ़ें।',
        ],
        items: [
          "<strong>प्रोफ़ाइल &gt; खाता हटाएँ</strong> पर जाएँ।",
          "अनुरोध की जानकारी पढ़ें और पुष्टि करें।",
        ],
        buttons: [
          "ईमेल से खाता हटाने का अनुरोध भेजें",
        ],
        whatsappMessage:
          "नमस्ते Where Is My Ghar सपोर्ट, मुझे खाता हटाने की प्रक्रिया के बारे में एक सवाल पूछना है।",
      },
    },
    hinglish: {
      common: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        delete: "Delete Account",
        home: "Where Is My Ghar home",
        legal: "Legal pages",
        whatsapp: "WhatsApp Support (+91 9304493065)",
      },
      privacy: {
        title: "Privacy Policy | Where Is My Ghar",
        description: "Where Is My Ghar aapki information ka use kaise karta hai aur aap use kaise manage kar sakte hain.",
        effective: "<strong>Effective date:</strong> 23 November, 2026",
        intro:
          "Where Is My Ghar par ghar dhoondhna ya apni property ki details share karna aasaan rahe—isliye yeh policy simple words mein batati hai ki aapki kaunsi information use hoti hai, woh kahan rehti hai, aur aap use kaise manage kar sakte hain. Yeh website aur Android/iOS apps par apply hoti hai.",
        headings: [
          "Publisher aur contact",
          "Aapki information aur uska use",
          "Permissions aur aapke options",
          "Hum kin services ka use karte hain",
          "Information kitne samay tak rehti hai aur account kaise delete karein",
          "Security",
          "Policy updates",
          "Humse baat karni hai?",
        ],
        paragraphs: [
          "Where Is My Ghar website aur Android/iOS apps ka publisher hai. Privacy, support ya account deletion se judi koi baat ho, to humein email karein",
          email,
          "Kuch information neeche batayi gayi external services tak bhi ja sakti hai. Woh use apni privacy notices aur data-retention rules ke mutabik handle karti hain. Un services ke paas alag se rakhe data par hamara control nahi hota.",
          "Account active rehne tak hum profile aur listing details rakhte hain. App mein deletion confirm karne ke baad hum account aur login identity, profile, listings, uploaded photos, saved properties aur account-owned reports permanently delete karke aapko sign out karte hain. Is device se account-specific address history aur listing drafts bhi clear hote hain. Baad mein lautne ke liye isi number se naya account banane ko sign up karein. Deleted data wapas nahi aayega.",
          "Agar aap app open nahi kar pa rahe hain, to apne registered name aur phone number ke saath email se account deletion request bhej sakte hain",
          deletionEmail,
          "Hamari support team email request ko dekhkar aam taur par 7 se 10 business days mein process karti hai.",
          'Account delete hone par Where Is My Ghar ke Supabase backend se account data remove hota hai. External services ke paas alag se rakhi information unke apne rules ke mutabik rehti hai. Puri process ke liye <a href="/delete-account">Account Deletion page</a> dekhein.',
          "Language aur theme jaisi general device preferences account deletion ke baad reh sakti hain. Successful in-app deletion is device se account-specific address history aur incomplete listing drafts clear karta hai. Baaki website ya app data browser ya device settings se clear kar sakte hain.",
          "App information HTTPS/TLS se bhejta hai aur Supabase ke Row Level Security (RLS) rules backend data access ko control karte hain. Iske alawa kisi specific security level ki guarantee nahi di jati.",
          "Zaroorat padne par hum is policy ko update kar sakte hain. Change hone par upar effective date bhi update hogi. Nayi information ke liye kabhi-kabhi yeh page dekh lein.",
          "Privacy, support ya account deletion se judi baat ho, to humein email karein",
          email,
        ],
        items: [
          "<strong>Account aur profile:</strong> aap mobile number aur password se sign in karte hain. Aapka naam aur phone number account chalane aur listing ke through contact karne ke kaam aate hain. Supabase sign-in session manage karta hai aur aapko signed in rakhne ke liye device par save karta hai.",
          "<strong>Owners—listings aur photos:</strong> owner ghar ka type/options, rent aur deposit, address/location, facilities, availability, contact details aur photos de sakte hain. Yeh details Supabase mein listing ke saath save hoti hain. Photos upload karna unki choice hai.<br><br><strong>Signed-out tenants:</strong> unhe city/locality, rent, facilities aur photos jaisi public details dikhti hain; exact street address, landmark, pincode, owner name, phone number aur pehle se saved map coordinates nahi dikhte. In details, listing map/directions aur owner se contact ke liye sign in karna hota hai. City aur locality visible rehte hain.",
          "<strong>Contact aur sharing:</strong> owner ko call ya WhatsApp karne ke liye sign in zaroori hai. Yeh action choose karne par owner ka listed phone number aur prefilled message selected phone app ya WhatsApp ko diya jata hai. Listing share karne par uska link aur selected details aapke device ke share option ya clipboard ko diye ja sakte hain.",
          "<strong>Saved properties:</strong> saved listings ka record aapke account se linked rehta hai, taaki aap unhe baad mein phir dekh sakein.",
          '<strong>Owner addresses:</strong> owner street/house details, landmark, locality, city, state aur pincode manually enter karte hain. Existing listing ke pehle se saved map coordinates address same rehne tak ho sakte hain; address change karne par clear ho jate hain. Retained coordinates map dikhane ke kaam aa sakte hain.',
          '<strong>Address search:</strong> text search listing ki locality, city aur landmark match karti hai. State, city aur locality filters listing address ke corresponding details match karte hain.',
          '<strong>Listing maps aur directions:</strong> listing ka map ya directions kholne par uska address ya pehle se saved map coordinates Google Maps ko bheje ja sakte hain.',
          "<strong>Voice search:</strong> microphone permission tabhi maangi jati hai jab aap feature start karte hain. Browser ya device aapki speech ko search text mein badalta hai. Kuch devices par audio unki speech-recognition service tak ja sakta hai. Where Is My Ghar audio ko backend par save nahi karta; provider ki privacy policy apply hoti hai.",
          "<strong>Aapki preferences:</strong> language, theme, selected mode, onboarding status aur app version device par save ho sakte hain. Language aur mode jaisi kuch preferences account se bhi linked ho sakti hain.",
          "<strong>Browser aur app storage:</strong> localStorage mein sign-in session, preferences, pehle use kiye gaye maximum 30 addresses aur incomplete listing form ke saath selected photos ke previews save ho sakte hain. App draft ko 10 minute baad expired maanta hai. sessionStorage current tab/browser session ke liye search, filters, sort order, sirf saved listings dekhne ki choice, view choice aur scroll position save kar sakta hai. Successful in-app account deletion is device se account-specific address history aur listing drafts clear karta hai. Language, theme aur general device preferences reh sakti hain. Sign out karne par sign-in session clear ho jata hai.",
          "<strong>Property reports:</strong> report bhejne par listing aur account IDs, selected reason aur date save hote hain. \"Other\" choose karne par aapka likha description bhi (maximum 500 characters) save hota hai. Isse repeat reports rokne aur listing status decide karne mein madad milti hai. Ek account ek listing ko ek baar report kar sakta hai. Alag signed-in accounts se five reports aane par listing public feeds se hide ho jati hai, lekin automatically delete nahi hoti. Report details public nahi hote; owner dashboard mein sirf status notice dekhta hai.",
          "Listing ka map ya directions kholne par uska address ya pehle se saved map coordinates Google Maps ko bheje ja sakte hain.",
          "Voice search optional hai. Iske liye microphone permission chahiye. Aap chahein to text se search karein aur device/browser settings se microphone access control karein.",
          "Photos upload karna optional hai. Aapki selected photos guests ko listing dikhane ke liye Supabase mein save hoti hain.",
          "Call ya message karna bhi aapki choice hai. Aap option choose karenge tabhi phone app ya WhatsApp khulega; aage ki conversation us service ki privacy policy ke mutabik hoti hai.",
          'Saved properties aap app mein remove kar sakte hain. Account aur usse judi information delete karne ke liye <a href="/delete-account">Account Deletion page</a> ke steps follow karein.',
          "<strong>Supabase</strong> sign-in, session, profile, listings, saved properties, reports aur uploaded photos ke liye backend database/storage provide karta hai.",
          "Current owner listing flow address fields fill karne ke liye geocoding provider use nahi karta. <strong>Google Maps</strong> map ya directions kholne par listing ka address ya pehle se saved coordinates receive kar sakta hai.",
          "<strong>Unsplash</strong> app mein kuch optional images provide karta hai.",
          "<strong>Google Fonts</strong> app ya website load hone par fonts provide karta hai.",
          "<strong>Aapke browser/device ki speech-recognition service</strong> voice search ke waqt audio receive aur process kar sakti hai. Provider ke hisaab se uski privacy policy apply hogi.",
          "<strong>WhatsApp, phone app aur device ka share option</strong> tabhi use hote hain jab aap kisi se contact ya listing share karna choose karte hain. Aap jo information bhejte hain, selected service use apni privacy policy ke mutabik handle karti hai.",
        ],
        location: "<strong>Property maps aur navigation:</strong>",
        whatsappMessage:
          "Hi Where Is My Ghar Support, privacy ke baare mein ek question hai.",
      },
      "terms-of-use": {
        title: "Terms of Use | Where Is My Ghar",
        description: "Where Is My Ghar website aur supported apps use karne ki terms.",
        eyebrow: "User agreement",
        effective: "<strong>Effective date:</strong> 23 November, 2026",
        intro:
          "Yeh terms Where Is My Ghar website aur Android aur iOS samet supported apps use karne par apply hoti hain. Service use karke aap in terms se agree karte hain. Agree nahi hain to service use na karein.",
        headings: [
          "1. Terms se agreement",
          "2. Service kya karti hai",
          "3. Account aur acceptable use",
          "4. Owner ki listing responsibilities",
          "5. Tenant aur guest ki responsibilities",
          "6. Search aur location",
          "7. External services aur permissions",
          "8. Reports aur listing moderation",
          "9. Aapka content aur hamari service",
          "10. Availability aur liability",
          "11. Account closure, changes aur contact",
        ],
        paragraphs: [
          "Service ko sirf lawful tareeke se aur tabhi use karein jab aap legally in terms se agree kar sakte hain. Kisi aur person ya organization ke liye use karne par aap confirm karte hain ki unki taraf se agree karne ke liye authorized hain.",
          "<strong>Tenants ke liye:</strong> flats, rooms aur PG/hostel listings dekhein; text ya filters se search karein; latest/rent ke hisaab se sort karein; map/grid choose karein; voice search, save aur share use karein. Same type ke multiple Room options alag rent ke saath separately dikhte hain. Sign out hone par city/locality, rent, facilities aur photos jaisi public details dikhengi, lekin exact address, landmark, pincode, owner name, phone number aur map pin hidden rahenge. In details, map/directions aur owner contact ke liye sign in karein.<br><br><strong>Owners ke liye:</strong> listing create/edit karein, address manually enter karein, same type ke multiple Room options alag rent par add karein, availability update karein, ya listing delete karein. Hum listing aur discovery platform hain, real-estate broker, agent, property manager ya rental agreement ka party nahi. Hum property inspect ya ownership verify, terms negotiate, booking ya payment process nahi karte. Rent aur deposit app ke through collect nahi hote.",
          "Apne account ki information accurate rakhein aur sign-in details secure rakhein. Aapke account se hone wali activity ke liye aap responsible hain. Service ka misuse ya doosre users ko disturb na karein.",
          "Listing post karne par aap confirm karte hain ki property aapki hai ya aapko advertise karne ki permission hai. Availability, rent/price, deposit, location, facilities aur photos samet accurate aur updated details dena aapki responsibility hai. Multiple options wali listing mein har option ka rent aur availability sahi rakhein. Property available na ho to listing update ya remove karein. Content share karne ke required rights/permissions aapke paas hone chahiye aur applicable laws follow karein. Hum guarantee nahi karte ki listing hamesha publish rahegi ya har user ko dikhai jayegi.",
          "Listing details users submit karte hain aur incomplete ya outdated ho sakti hain. Decision lene ya kisi ko payment karne se pehle owner ki identity/authority, property, availability, price, deposit aur proposed agreement independently verify karein. Contact aur transaction discussions app ke bahar users ke beech directly hoti hain. Listing ya platform ko safety, ownership, suitability ya successful transaction ki guarantee na samjhein.",
          "<strong>Signed-out tenants:</strong> you can see city/locality, rent, facilities, and photos. Text search matches locality, city, and landmark; filters cascade through state, city, and locality. The exact address, landmark, pincode, owner name, phone number, and map pin stay hidden. Sign in to view them, open maps/directions, or contact the owner by call or WhatsApp.<br><br><strong>Owners:</strong> manually enter street/house details, landmark, locality, city, state, and pincode. Previously saved map coordinates on an existing listing may remain while its address is unchanged; changing the address clears them.",
          "The current owner listing flow does not use a geocoding provider to fill address fields. Microphone permission is requested only when voice search starts. Google Maps may receive the listing address or previously saved coordinates when you open its map/directions. Calling or WhatsApping an owner requires sign-in and sends contact details to the selected app. Voice-search audio may be processed by your browser/device speech service. Each external service has its own terms and privacy practices; see our <a href=\"/privacy-policy\">Privacy Policy</a>.",
          "Signed-in users ek account se listing ko ek baar report kar sakte hain—for example suspected scam, wrong details, duplicate listing, wrong phone number ya fake photos. \"Other\" select karne par short description dena hoga. Reports genuine aur good faith mein honi chahiye. Alag signed-in accounts se five reports aane par listing public feeds se hide ho jati hai; sirf reports ki count se violation prove nahi hota aur listing automatically delete nahi hoti. Owner use dashboard par dekh aur delete kar sakta hai. Users ko protect karne ya law follow karne ke liye hum listing ya account par zaroori restrictions laga sakte hain.",
          "Aapke submit kiye content ke rights aapke paas rehte hain. Service aur listings operate, maintain aur show karne ke liye aap humein content host/display aur zaroori use karne ki permission dete hain. Aap confirm karte hain ki yeh limited permission dene ka right aapke paas hai. App, software, branding aur doosre materials Where Is My Ghar ya unke respective owners ke hain; in terms se unka ownership aapko transfer nahi hota.",
          "Hum service available rakhne ki koshish karte hain, lekin uninterrupted operation, error-free results ya user-submitted information ki accuracy promise nahi karte. Law jitni permission deta hai, service un warranties ke bina provide ki jati hai jinhe legally exclude nahi kiya ja sakta. Users ke beech disputes, losses ya arrangements ke liye hum responsible nahi hain. Applicable law jin liabilities ya rights ko limit karne ki permission nahi deta, ye terms unhe limit nahi karti.",
          "Aap Profile mein Delete Account se apna account permanently delete kar sakte hain. Confirmation ke baad account aur login identity, profile aur related app data delete hote hain; account-specific local address history aur listing drafts clear hote hain; phir aap sign out ho jayenge. Baad mein lautne ke liye isi number se naya account banane ko sign up karein. Deleted data wapas nahi aayega. Serious misuse ya legal requirements ke liye hum access suspend kar sakte hain. Upar effective date update karke hum terms revise kar sakte hain; update ke baad service continue karne ka matlab revised terms accept karna hai. Questions ke liye email karein: " + email + '. Deletion details ke liye <a href="/delete-account">Account Deletion page</a> dekhein.',
        ],
        items: [
          "False, misleading, unlawful, abusive ya doosron ke rights violate karne wala content post/send na karein.",
          "Kisi aur ko impersonate, misleading report ya users ko harass na karein.",
          "Service scrape/disrupt/probe na karein aur access controls bypass karne ki koshish na karein.",
          "Spam ya unlawful purpose ke liye service use na karein.",
        ],
        whatsappMessage:
          "Hi Where Is My Ghar Support, Terms of Use ke baare mein ek question hai.",
      },
      delete: {
        title: "Delete Account | Where Is My Ghar",
        description: "Where Is My Ghar account delete karne ka tareeka aur uske baad data ke saath kya hota hai.",
        eyebrow: "Aapke account aur information par aapka control",
        effective: "<strong>Updated:</strong> 23 November, 2026 · Website, app aur email",
        intro:
          "App se account data permanently delete kar sakte hain. App access na ho to humein email bhejein; support team aapki request review karegi.",
        headings: [
          "1. App se account delete karne ki request",
          "2. Email se request bhejein",
          "Kaunsi information delete hogi",
          "Koi sawaal hai?",
        ],
        paragraphs: [
          "Confirmation ke baad app aapka account aur login identity, profile, property listings, saved properties, reports aur uploaded photos permanently delete karta hai, phir aapko sign out karta hai. Is device se account-specific address history aur listing drafts bhi clear hote hain. Baad mein lautne ke liye isi number se naya account banane ko sign up karein. Deleted data wapas nahi aa sakta.",
          "Agar aap app access nahi kar pa rahe hain, to account deletion request is email par bhejein",
          deletionEmail,
          "Request identify karne ke liye email mein apna registered name aur phone number likhein. Hamari support team request dekhkar aam taur par 7 se 10 business days mein process karti hai.",
          "<strong>Please apna password ya one-time password (OTP) email mein kabhi na bhejein.</strong>",
          "Successful in-app deletion par account login identity, profile, listings, uploaded photos, saved properties aur account-owned reports Where Is My Ghar backend se permanently remove ho jate hain. Aap sign out ho jate hain. Baad mein lautne ke liye isi number se naya account banane ko sign up karein.",
          "Hamara Supabase backend data remove hota hai. External services ke paas alag se rakhi information unke apne privacy rules aur retention period ke mutabik rehti hai.",
          "Account-specific address history aur incomplete listing drafts is device se clear hote hain. Language aur theme jaisi general device preferences reh sakti hain. Baaki website ya app data browser/device settings se clear kar sakte hain.",
          "Request ya process ke baare mein koi sawaal ho, to humein email karein",
          email,
          'Data, permissions aur external services ke baare mein aur jaanne ke liye <a href="/privacy-policy">Privacy Policy</a> padhein.',
        ],
        items: [
          "<strong>Profile &gt; Delete Account</strong> par jayein.",
          "Request details padhkar confirm karein.",
        ],
        buttons: [
          "Email se account deletion request bhejein",
        ],
        whatsappMessage:
          "Hi Where Is My Ghar Support, account deletion process ke baare mein ek question hai.",
      },
    },
  };

  const content = translations[locale][page === "delete-account" ? "delete" : page];
  if (!content) return;

  const setText = (selector, values, html = false) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length !== values.length) {
      console.error(`Legal page localization mismatch for ${selector}.`);
      return;
    }
    elements.forEach((element, index) => {
      if (html) element.innerHTML = values[index];
      else element.textContent = values[index];
    });
  };

  const common = translations[locale].common;
  const labels = [common.privacy, common.terms, common.delete];
  setText(".legal-nav a, .legal-footer nav a", [...labels, ...labels]);
  document.querySelector(".legal-brand")?.setAttribute("aria-label", common.home);
  document.querySelector(".legal-nav")?.setAttribute("aria-label", common.legal);
  document.querySelector(".legal-footer nav")?.setAttribute("aria-label", common.legal);

  document.documentElement.lang =
    locale === "hi" ? "hi" : locale === "hinglish" ? "hi-Latn" : "en";
  document.title = content.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", content.description);
  setText(".legal-card h1", [
    page === "privacy" ? common.privacy : page === "terms-of-use" ? common.terms : common.delete,
  ]);
  setText(".legal-card h2", content.headings);
  setText(".legal-card p:not(.legal-whatsapp-paragraph)", page === "privacy"
    ? [
        "Where Is My Ghar",
        content.effective,
        content.intro,
        ...content.paragraphs,
      ]
    : [
        content.eyebrow,
        content.effective,
        content.intro,
        ...content.paragraphs,
      ], true);

  if (page === "privacy") {
    setText(".legal-card li:not(:has(ul))", content.items, true);
    setText(".legal-card li:has(ul) > strong", [content.location], true);
  } else {
    setText(".legal-card li", content.items, true);
  }
  if (page === "delete-account") setText(".legal-button", content.buttons);
  setText(".legal-whatsapp-link", [common.whatsapp]);
  document.querySelectorAll(".legal-whatsapp-link[target='_blank']").forEach((link) => {
    link.setAttribute("aria-label", common.whatsapp);
    const url = new URL(link.href);
    url.searchParams.set("text", content.whatsappMessage);
    link.href = url.toString();
  });
  document.querySelectorAll(
    'a[href="/privacy-policy"], a[href="/terms-of-use"], a[href="/delete-account"]',
  ).forEach((link) => {
    const url = new URL(link.href);
    url.searchParams.set("lang", locale);
    link.href = `${url.pathname}${url.search}${url.hash}`;
  });
})();
