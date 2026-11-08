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
  const locale = savedLanguages.find((language) =>
    ["en", "hi", "hinglish"].includes(language),
  ) || "hinglish";
  const page = document.body.dataset.legalPage;
  const email = '<a href="mailto:supportwhereismyghar@gmail.com">supportwhereismyghar@gmail.com</a>';
  const deletionEmail =
    '<a href="mailto:supportwhereismyghar@gmail.com?subject=Where%20Is%20My%20Ghar%20account%20deletion%20request">supportwhereismyghar@gmail.com</a>';

  const translations = {
    en: {
      common: {
        privacy: "Privacy Policy",
        delete: "Delete Account",
        home: "Where Is My Ghar home",
        legal: "Legal pages",
        whatsapp: "WhatsApp support (+91 9304493065)",
      },
      privacy: {
        title: "Privacy Policy | Where Is My Ghar",
        description: "Privacy Policy for the Where Is My Ghar website and apps on supported platforms.",
        effective: "<strong>Effective date:</strong> November 8, 2026",
        intro:
          "This policy applies to the Where Is My Ghar website and apps on supported platforms, including Android and iOS. It explains what information is processed, why it is used, which services handle it, and how you can request account deletion.",
        headings: [
          "Publisher and contact",
          "Information we process and why",
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
          "These services process information under their own privacy notices and retention practices. Account deletion removes account data from Where Is My Ghar's Supabase backend; independent data processed by third-party services is handled under those services' own notices and retention practices, regardless of whether you use the website or a supported mobile app.",
          "Active user profile and property listing data is retained while your account is active. For in-app deletion requests, the account enters an automated 30-day grace period. Signing back in during that period automatically cancels the request. When the 30 days expire, user profile data, property listings, uploaded photos, and saved bookmarks are automatically and permanently deleted from the backend.",
          "If you cannot access the app, you can send an account-deletion request with your registered name and phone number by email",
          deletionEmail,
          "The support team manually reviews and processes email requests within 7 to 10 business days. This email process is separate from the in-app 30-day grace period.",
          'Account deletion removes account data from Where Is My Ghar\'s Supabase backend. Independent data processed by third-party services is handled under their own privacy notices and retention practices. See the <a href="/delete-account">Account Deletion page</a> for instructions.',
          "The publisher confirms that data is transmitted over HTTPS/TLS and backend data access is controlled using Supabase Row Level Security (RLS) policies. No additional security guarantees are made.",
          "This policy may be updated from time to time. When it changes, the effective date at the top of this page will be revised. Please review this page periodically.",
          "For privacy, support, or account-deletion requests, contact us by email",
          email,
        ],
        items: [
          "<strong>Account and profile information:</strong> sign-in primarily uses your mobile number, which maps to authentication credentials in the backend. Your name, mobile number, and other account details are processed for account access and account features.",
          "<strong>Property listings and photos:</strong> listing details you submit are used to create owner listings and show them to people using the app. Uploading property photos is optional. If you upload photos, they are stored with the listing in Supabase to display property previews to guests.",
          "<strong>Owner contact details:</strong> the owner name and phone number included in a listing support its contact options. If you tap a listing's call or WhatsApp button, the phone number is passed to your dialer; WhatsApp also receives a prefilled listing message.",
          "<strong>Saved properties:</strong> saved-property and bookmark records support your saved listings feature.",
          "<strong>Owner View:</strong> when an owner chooses \"Use my current location\" while creating a listing, the app uses the device location to pin the property's precise location so guests can see it on the map. Location permission is requested only after the owner taps this option.",
          "<strong>Guest View:</strong> device location permission is requested only when you choose the \"Nearby First\" property listing view. Viewing a property's map or opening Google Maps directions does not require the app to access your device location.",
          "<strong>Voice search:</strong> if you choose voice search, the browser/device Web Speech API converts speech to text for the search. Microphone permission is requested only when you tap voice search and is separate from location permission. Depending on your browser and device, speech audio may be sent to and processed by its speech-recognition service. Where Is My Ghar does not store voice audio on its backend; the service provider handles audio under its own privacy practices.",
          "<strong>Device preferences:</strong> the app and website store preferences such as language and user role in storage on your device or browser.",
          "You can deny or later revoke location permission in your app, browser, or device settings. Location permission is requested when you choose a feature that needs it, such as \"Nearby First\" or \"Use my current location.\" Those features may be unavailable if permission is denied.",
          "Voice search is optional and uses microphone permission, not location permission. Depending on your app, browser, and device, speech audio may be processed by its speech-recognition service under that provider's privacy practices. You can use text search instead and manage microphone access through your app, browser, or device settings.",
          "Property photo uploads are optional. Photos you choose to upload are stored in Supabase with the listing for guest property previews.",
          "Calling or messaging an owner is optional. If you choose a call or WhatsApp action, the selected phone app or service handles that interaction under its own privacy practices.",
          'You can remove saved properties in the app or request deletion of your account and associated data using the process on our <a href="/delete-account">Account Deletion page</a>.',
          "<strong>Supabase</strong> provides account authentication and backend database/storage services for account profiles, property listings, saved properties, and uploaded listing photos.",
          "<strong>OpenStreetMap Nominatim</strong> receives location coordinates for location-based city suggestions.",
          "<strong>Google Maps</strong> receives location data when a map or navigation display is shown.",
          "<strong>Unsplash</strong> provides fallback image assets used by the app.",
          "<strong>Google Fonts</strong> supplies font assets requested by the app or website when it loads.",
          "<strong>Your browser/device speech-recognition service</strong> may receive and process voice-search audio as described above; its privacy practices depend on the provider.",
          "<strong>WhatsApp and your device's phone app</strong> are opened only when you choose a support or listing call/WhatsApp action. For a listing contact, the owner's number is passed to the dialer for a call; WhatsApp receives the owner's number and a prefilled listing message. A support WhatsApp link opens with a prefilled support message.",
        ],
        location: "<strong>Location services and navigation:</strong>",
        whatsappMessage:
          "Hi Where Is My Ghar Support, I have a privacy question.",
      },
      delete: {
        title: "Delete Account | Where Is My Ghar",
        description: "How to request deletion of your Where Is My Ghar account and associated data from the website or supported apps.",
        eyebrow: "Account and data controls",
        effective: "<strong>Where Is My Ghar</strong> · Website, app, and email options",
        intro:
          "This process applies to accounts used on the website and supported apps, including Android and iOS. Choose the in-app process or, if you cannot access the app, request deletion by email. These methods have separate processing timelines.",
        headings: [
          "1. Delete from the app (In-App Deletion)",
          "2. Request deletion by email",
          "What is deleted and when",
          "Need help?",
        ],
        paragraphs: [
          "The account enters an automated 30-day grace period. Signing back in during this period automatically cancels the deletion request.",
          "Once the 30 days expire, all user profile data, property listings, uploaded photos, and saved bookmarks are automatically and permanently deleted from the backend.",
          "If you cannot access the app, email your account-deletion request to",
          deletionEmail,
          "Include your registered name and phone number so the support team can review the request. The support team manually reviews and processes email deletion requests within 7 to 10 business days. This is separate from the in-app 30-day grace period.",
          "<strong>Do not email your password or a one-time password (OTP).</strong>",
          "For in-app requests, after the 30-day grace period all user profile data, property listings, uploaded photos, and saved bookmarks are automatically and permanently deleted from the Where Is My Ghar backend.",
          "Account deletion removes account data from Where Is My Ghar's Supabase backend. Independent data processed by third-party services is handled under their own privacy notices and retention practices.",
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
        delete: "खाता हटाएँ",
        home: "Where Is My Ghar होम",
        legal: "कानूनी पेज",
        whatsapp: "WhatsApp सहायता (+91 9304493065)",
      },
      privacy: {
        title: "गोपनीयता नीति | Where Is My Ghar",
        description: "Where Is My Ghar वेबसाइट और समर्थित प्लेटफ़ॉर्म के ऐप्स की गोपनीयता नीति।",
        effective: "<strong>प्रभावी तिथि:</strong> 8 नवंबर, 2026",
        intro:
          "यह नीति Where Is My Ghar की वेबसाइट और Android व iOS सहित समर्थित प्लेटफ़ॉर्म के ऐप्स पर लागू होती है। इसमें बताया गया है कि कौन-सी जानकारी प्रोसेस होती है, उसका उपयोग क्यों होता है, कौन-सी सेवाएँ उसे संभालती हैं और आप खाता हटाने का अनुरोध कैसे कर सकते हैं।",
        headings: [
          "प्रकाशक और संपर्क",
          "हम कौन-सी जानकारी प्रोसेस करते हैं और क्यों",
          "अनुमतियाँ और आपके विकल्प",
          "जानकारी प्रोसेस करने वाली सेवाएँ",
          "जानकारी कितने समय तक रखी जाती है और खाता हटाना",
          "सुरक्षा",
          "नीति में बदलाव",
          "मदद चाहिए?",
        ],
        paragraphs: [
          "Where Is My Ghar वेबसाइट और Android व iOS सहित समर्थित प्लेटफ़ॉर्म के ऐप्स का प्रकाशक है। गोपनीयता से जुड़े सवाल, सहायता या खाता हटाने के अनुरोध के लिए हमें ईमेल करें",
          email,
          "ये सेवाएँ जानकारी को अपनी गोपनीयता सूचनाओं और डेटा रखने की नीतियों के अनुसार प्रोसेस करती हैं। खाता हटाने पर Where Is My Ghar के Supabase बैकएंड से खाते का डेटा हट जाता है; तीसरी-पक्ष सेवाओं द्वारा प्रोसेस किया गया अलग डेटा उनकी अपनी नीतियों के अनुसार संभाला जाता है।",
          "आपकी प्रोफ़ाइल और प्रॉपर्टी लिस्टिंग का सक्रिय डेटा खाता चालू रहने तक रखा जाता है। ऐप से हटाने का अनुरोध करने पर 30 दिनों की स्वचालित प्रतीक्षा अवधि शुरू होती है। इस दौरान दोबारा साइन इन करने पर अनुरोध रद्द हो जाता है। 30 दिन बाद प्रोफ़ाइल, लिस्टिंग, अपलोड की गई तस्वीरें और सेव किए गए बुकमार्क बैकएंड से अपने-आप और स्थायी रूप से हटा दिए जाते हैं।",
          "अगर आप ऐप इस्तेमाल नहीं कर पा रहे हैं, तो अपने रजिस्टर्ड नाम और फोन नंबर के साथ ईमेल से खाता हटाने का अनुरोध भेजें",
          deletionEmail,
          "सपोर्ट टीम ईमेल अनुरोध की मैन्युअल समीक्षा करके 7 से 10 कार्यदिवसों में उसे प्रोसेस करती है। ईमेल से अनुरोध करने की यह प्रक्रिया ऐप की 30-दिन की प्रतीक्षा अवधि से अलग है।",
          'खाता हटाने पर Where Is My Ghar के Supabase बैकएंड से खाते का डेटा हट जाता है। तीसरी-पक्ष सेवाओं द्वारा प्रोसेस किया गया अलग डेटा उनकी अपनी गोपनीयता सूचनाओं और डेटा रखने की नीतियों के अनुसार संभाला जाता है। निर्देशों के लिए <a href="/delete-account">खाता हटाने वाला पेज</a> देखें।',
          "प्रकाशक के अनुसार डेटा HTTPS/TLS के ज़रिए भेजा जाता है और बैकएंड डेटा का ऐक्सेस Supabase Row Level Security (RLS) नीतियों से नियंत्रित होता है। इससे अधिक सुरक्षा की कोई गारंटी नहीं दी जाती।",
          "इस नीति में समय-समय पर बदलाव हो सकते हैं। बदलाव होने पर इस पेज के ऊपर प्रभावी तिथि अपडेट की जाएगी। कृपया समय-समय पर यह पेज देखें।",
          "गोपनीयता, सहायता या खाता हटाने के अनुरोध के लिए हमें ईमेल करें",
          email,
        ],
        items: [
          "<strong>खाता और प्रोफ़ाइल की जानकारी:</strong> साइन इन के लिए मुख्य रूप से आपका मोबाइल नंबर उपयोग होता है, जो बैकएंड में प्रमाणीकरण विवरण से जुड़ता है। आपका नाम, मोबाइल नंबर और खाते की अन्य जानकारी ऐक्सेस और सुविधाएँ देने के लिए प्रोसेस की जाती है।",
          "<strong>प्रॉपर्टी लिस्टिंग और तस्वीरें:</strong> आपके दिए गए लिस्टिंग विवरण से मालिक की लिस्टिंग बनाई जाती है और ऐप इस्तेमाल करने वाले लोगों को दिखाई जाती है। तस्वीरें अपलोड करना वैकल्पिक है। अपलोड की गई तस्वीरें मेहमानों को प्रॉपर्टी का प्रीव्यू दिखाने के लिए Supabase में लिस्टिंग के साथ रखी जाती हैं।",
          "<strong>मालिक की संपर्क जानकारी:</strong> लिस्टिंग में मालिक का नाम और फोन नंबर संपर्क विकल्पों के लिए उपयोग होते हैं। कॉल या WhatsApp बटन दबाने पर फोन नंबर आपके डायलर को दिया जाता है; WhatsApp को पहले से भरा हुआ लिस्टिंग संदेश भी मिलता है।",
          "<strong>सेव की गई प्रॉपर्टी:</strong> सेव की गई प्रॉपर्टी और बुकमार्क का रिकॉर्ड आपकी सेव की गई लिस्टिंग सुविधा चलाता है।",
          "<strong>मालिक का दृश्य:</strong> लिस्टिंग बनाते समय मालिक \"मेरा मौजूदा लोकेशन इस्तेमाल करें\" चुनता है, तो ऐप डिवाइस की लोकेशन से प्रॉपर्टी का सटीक स्थान मैप पर दिखाने के लिए पिन करता है। लोकेशन की अनुमति तभी माँगी जाती है जब मालिक इस विकल्प पर टैप करता है।",
          "<strong>मेहमान का दृश्य:</strong> डिवाइस लोकेशन की अनुमति तभी माँगी जाती है जब आप \"पहले आस-पास की प्रॉपर्टी\" चुनते हैं। प्रॉपर्टी का मैप देखने या Google Maps में दिशा खोलने के लिए ऐप को आपकी डिवाइस लोकेशन ऐक्सेस करने की ज़रूरत नहीं होती।",
          "<strong>आवाज़ से खोज:</strong> आवाज़ से खोज चुनने पर ब्राउज़र/डिवाइस का Web Speech API आवाज़ को खोज के लिए टेक्स्ट में बदलता है। माइक्रोफ़ोन की अनुमति तभी माँगी जाती है जब आप आवाज़ से खोज पर टैप करते हैं; यह लोकेशन की अनुमति से अलग है। आपके ब्राउज़र और डिवाइस के अनुसार आवाज़ की रिकॉर्डिंग उसके speech-recognition service को भेजी और वहाँ प्रोसेस की जा सकती है। Where Is My Ghar आवाज़ का ऑडियो अपने बैकएंड पर स्टोर नहीं करता; सेवा प्रदाता इसे अपनी गोपनीयता नीति के अनुसार संभालता है।",
          "<strong>डिवाइस की प्राथमिकताएँ:</strong> ऐप और वेबसाइट भाषा और उपयोगकर्ता की भूमिका जैसी प्राथमिकताएँ आपके डिवाइस या ब्राउज़र के स्टोरेज में रखते हैं।",
          "आप ऐप, ब्राउज़र या डिवाइस सेटिंग में लोकेशन की अनुमति अस्वीकार या बाद में रद्द कर सकते हैं। \"Nearby First\" या \"Use my current location\" जैसी लोकेशन सुविधा चुनने पर ही अनुमति माँगी जाती है। अनुमति न देने पर वे सुविधाएँ उपलब्ध नहीं होंगी।",
          "आवाज़ से खोज वैकल्पिक है और इसमें लोकेशन नहीं, माइक्रोफ़ोन की अनुमति उपयोग होती है। ऐप, ब्राउज़र और डिवाइस के अनुसार आवाज़ का ऑडियो उनकी speech-recognition service पर प्रोसेस हो सकता है और उस प्रदाता की गोपनीयता नीति लागू होती है। आप टेक्स्ट से खोज सकते हैं और ऐप, ब्राउज़र या डिवाइस सेटिंग में माइक्रोफ़ोन का ऐक्सेस नियंत्रित कर सकते हैं।",
          "प्रॉपर्टी की तस्वीरें अपलोड करना वैकल्पिक है। आपके द्वारा चुनी गई तस्वीरें मेहमानों को प्रीव्यू दिखाने के लिए Supabase में लिस्टिंग के साथ रखी जाती हैं।",
          "मालिक को कॉल या संदेश करना वैकल्पिक है। कॉल या WhatsApp चुनने पर चुना गया फोन ऐप या सेवा उस बातचीत को अपनी गोपनीयता नीतियों के अनुसार संभालती है।",
          'आप ऐप में सेव की गई प्रॉपर्टी हटा सकते हैं या <a href="/delete-account">खाता हटाने वाले पेज</a> की प्रक्रिया से खाता और उससे जुड़ा डेटा हटाने का अनुरोध कर सकते हैं।',
          "<strong>Supabase</strong> खाता प्रमाणीकरण और प्रोफ़ाइल, लिस्टिंग, सेव की गई प्रॉपर्टी तथा अपलोड की गई तस्वीरों के लिए बैकएंड डेटाबेस/स्टोरेज सेवा देता है।",
          "<strong>OpenStreetMap Nominatim</strong> लोकेशन आधारित शहर सुझावों के लिए निर्देशांक प्राप्त करता है।",
          "<strong>Google Maps</strong> मैप या नेविगेशन दिखाए जाने पर लोकेशन डेटा प्राप्त करता है।",
          "<strong>Unsplash</strong> ऐप में वैकल्पिक तस्वीरें उपलब्ध कराता है।",
          "<strong>Google Fonts</strong> ऐप या वेबसाइट लोड होने पर माँगे गए फ़ॉन्ट उपलब्ध कराता है।",
          "<strong>ब्राउज़र/डिवाइस की speech-recognition service</strong> ऊपर बताए अनुसार आवाज़ का ऑडियो प्राप्त और प्रोसेस कर सकती है; उसकी गोपनीयता नीति सेवा प्रदाता पर निर्भर करती है।",
          "<strong>WhatsApp और आपके डिवाइस का फोन ऐप</strong> तभी खुलते हैं जब आप सहायता या लिस्टिंग के लिए कॉल/WhatsApp विकल्प चुनते हैं। लिस्टिंग के लिए मालिक का नंबर कॉल हेतु डायलर को दिया जाता है; WhatsApp को मालिक का नंबर और पहले से भरा संदेश मिलता है। सपोर्ट WhatsApp लिंक पहले से भरे सहायता संदेश के साथ खुलता है।",
        ],
        location: "<strong>लोकेशन सेवाएँ और नेविगेशन:</strong>",
        whatsappMessage:
          "नमस्ते Where Is My Ghar सपोर्ट, मुझे गोपनीयता के बारे में सवाल पूछना है।",
      },
      delete: {
        title: "खाता हटाएँ | Where Is My Ghar",
        description: "Where Is My Ghar वेबसाइट और समर्थित ऐप्स से जुड़े खाते और डेटा को हटाने का अनुरोध कैसे करें।",
        eyebrow: "खाता और डेटा नियंत्रण",
        effective: "<strong>Where Is My Ghar</strong> · वेबसाइट, ऐप और ईमेल के विकल्प",
        intro:
          "यह प्रक्रिया वेबसाइट और Android व iOS सहित समर्थित ऐप्स पर इस्तेमाल किए गए खातों पर लागू होती है। ऐप में दी गई प्रक्रिया चुनें या ऐप ऐक्सेस न कर पाने पर ईमेल से हटाने का अनुरोध करें। दोनों तरीकों की प्रोसेसिंग अवधि अलग है।",
        headings: [
          "1. ऐप से हटाएँ (ऐप के अंदर हटाना)",
          "2. ईमेल से हटाने का अनुरोध",
          "क्या हटता है और कब",
          "मदद चाहिए?",
        ],
        paragraphs: [
          "खाते के लिए 30 दिनों की स्वचालित प्रतीक्षा अवधि शुरू होती है। इस दौरान दोबारा साइन इन करने पर हटाने का अनुरोध अपने-आप रद्द हो जाता है।",
          "30 दिन पूरे होने पर प्रोफ़ाइल का डेटा, प्रॉपर्टी लिस्टिंग, अपलोड की गई तस्वीरें और सेव किए गए बुकमार्क बैकएंड से अपने-आप और स्थायी रूप से हटा दिए जाते हैं।",
          "अगर आप ऐप ऐक्सेस नहीं कर पा रहे हैं, तो खाता हटाने का अनुरोध इस ईमेल पर भेजें",
          deletionEmail,
          "अनुरोध की समीक्षा के लिए अपना रजिस्टर्ड नाम और फोन नंबर शामिल करें। सपोर्ट टीम ईमेल अनुरोध की मैन्युअल समीक्षा करके 7 से 10 कार्यदिवसों में उसे प्रोसेस करती है। यह ऐप की 30-दिन की प्रतीक्षा अवधि से अलग है।",
          "<strong>अपना पासवर्ड या वन-टाइम पासवर्ड (OTP) ईमेल न करें।</strong>",
          "ऐप से किए गए अनुरोधों में 30-दिन की प्रतीक्षा अवधि के बाद प्रोफ़ाइल डेटा, प्रॉपर्टी लिस्टिंग, अपलोड तस्वीरें और सेव किए गए बुकमार्क Where Is My Ghar के बैकएंड से अपने-आप और स्थायी रूप से हटा दिए जाते हैं।",
          "खाता हटाने पर Where Is My Ghar के Supabase बैकएंड से खाते का डेटा हट जाता है। तीसरी-पक्ष सेवाओं द्वारा प्रोसेस किया गया अलग डेटा उनकी अपनी गोपनीयता सूचनाओं और डेटा रखने की नीतियों के अनुसार संभाला जाता है, चाहे आप वेबसाइट इस्तेमाल करें या समर्थित मोबाइल ऐप।",
          "सहायता या खाता हटाने के अनुरोध से जुड़े सवालों के लिए हमें ईमेल करें",
          email,
          'डेटा के उपयोग, अनुमतियों और तीसरी-पक्ष सेवाओं की जानकारी के लिए हमारी <a href="/privacy-policy">गोपनीयता नीति</a> देखें।',
        ],
        items: [
          "<strong>प्रोफ़ाइल &gt; खाता हटाएँ</strong> पर जाएँ।",
          "हटाने के अनुरोध की समीक्षा करें और पुष्टि करें।",
        ],
        buttons: [
          "खाता हटाने का ईमेल अनुरोध भेजें",
        ],
        whatsappMessage:
          "नमस्ते Where Is My Ghar सपोर्ट, मुझे खाता हटाने के बारे में सवाल पूछना है।",
      },
    },
    hinglish: {
      common: {
        privacy: "Privacy Policy",
        delete: "Delete Account",
        home: "Where Is My Ghar home",
        legal: "Legal pages",
        whatsapp: "WhatsApp Support (+91 9304493065)",
      },
      privacy: {
        title: "Privacy Policy | Where Is My Ghar",
        description: "Where Is My Ghar website aur supported platforms ke apps ki Privacy Policy.",
        effective: "<strong>Effective date:</strong> 8 November, 2026",
        intro:
          "Yeh policy Where Is My Ghar ki website aur Android aur iOS samet supported platforms ke apps par apply hoti hai. Isme bataya gaya hai ki kaunsi information process hoti hai, uska use kyun hota hai, kaunsi services use handle karti hain, aur aap account deletion request kaise kar sakte hain.",
        headings: [
          "Publisher aur contact",
          "Kaunsi information process hoti hai aur kyun",
          "Permissions aur aapke options",
          "Information process karne wali services",
          "Data retention aur account deletion",
          "Security",
          "Policy updates",
          "Help chahiye?",
        ],
        paragraphs: [
          "Where Is My Ghar website aur Android aur iOS samet supported platforms ke apps ka publisher hai. Privacy questions, support ya account deletion request ke liye humein email karein",
          email,
          "Yeh services information ko apni privacy notices aur retention practices ke according process karti hain. Account delete karne par Where Is My Ghar ke Supabase backend se account data remove hota hai; third-party services ka alag data unki apni policies ke according handle hota hai, chahe aap website ya supported mobile app use karein.",
          "Active profile aur property listing data account active rehne tak rakha jata hai. App se deletion request par automated 30-day grace period shuru hota hai. Is dauran dobara sign in karne par request automatically cancel ho jati hai. 30 din baad profile data, property listings, uploaded photos aur saved bookmarks backend se automatically aur permanently delete hote hain.",
          "Agar aap app access nahi kar pa rahe, to apne registered name aur phone number ke saath email se account deletion request bhejein",
          deletionEmail,
          "Support team email requests ko manually review karke 7 se 10 business days mein process karti hai. Email wali process app ke 30-day grace period se alag hai.",
          'Account deletion se Where Is My Ghar ke Supabase backend se account data remove hota hai. Third-party services ka alag data unki apni privacy notices aur retention practices ke according handle hota hai. Steps ke liye <a href="/delete-account">Account Deletion page</a> dekhein.',
          "Publisher ke mutabik data HTTPS/TLS se transmit hota hai aur backend data access Supabase Row Level Security (RLS) policies se control hota hai. Isse aage security ki koi guarantee nahi di jati.",
          "Is policy ko samay-samay par update kiya ja sakta hai. Change hone par page ke top par effective date update hogi. Kripya is page ko waqt-waqt par check karein.",
          "Privacy, support ya account deletion request ke liye humein email karein",
          email,
        ],
        items: [
          "<strong>Account aur profile information:</strong> sign-in mein mainly aapka mobile number use hota hai, jo backend mein authentication credentials se linked hai. Aapka naam, mobile number aur account details access aur features ke liye process hote hain.",
          "<strong>Property listings aur photos:</strong> aapke diye listing details se owner listings banti hain aur app users ko dikhayi jati hain. Photos upload karna optional hai. Upload ki hui photos guests ko property preview dikhane ke liye Supabase mein listing ke saath store hoti hain.",
          "<strong>Owner contact details:</strong> listing mein owner ka naam aur phone number contact options ke liye use hote hain. Listing ka call ya WhatsApp button tap karne par number aapke dialer ko diya jata hai; WhatsApp ko prefilled listing message bhi milta hai.",
          "<strong>Saved properties:</strong> saved property aur bookmark records aapki saved listings feature ke liye use hote hain.",
          '<strong>Owner View:</strong> listing banate waqt owner "Use my current location" choose karta hai, to app device location use karke property ki exact location map par pin karta hai. Location permission tabhi maangi jati hai jab owner is option par tap karta hai.',
          '<strong>Guest View:</strong> device location permission tabhi maangi jati hai jab aap "Nearby First" choose karte hain. Property ka map dekhne ya Google Maps mein directions kholne ke liye app ko aapki device location access karne ki zaroorat nahi hoti.',
          "<strong>Voice search:</strong> voice search choose karne par browser/device Web Speech API speech ko search text mein convert karta hai. Microphone permission tabhi maangi jati hai jab aap voice search par tap karte hain; yeh location permission se alag hai. Browser aur device ke hisaab se speech audio unki speech-recognition service ko bheja aur wahan process kiya ja sakta hai. Where Is My Ghar voice audio apne backend par store nahi karta; service provider audio ko apni privacy practices ke according handle karta hai.",
          "<strong>Device preferences:</strong> app aur website language aur user role jaisi preferences aapke device ya browser storage mein rakhte hain.",
          "Aap app, browser ya device settings mein location permission deny ya revoke kar sakte hain. Location permission tabhi maangi jati hai jab aap \"Nearby First\" ya \"Use my current location\" jaisa feature choose karte hain. Permission deny karne par ye features unavailable ho sakte hain.",
          "Voice search optional hai aur microphone permission use karta hai, location permission nahi. App, browser aur device ke hisaab se speech audio unki speech-recognition service par process ho sakta hai, jiske liye provider ki privacy practices apply hoti hain. Aap text search use kar sakte hain aur app, browser ya device settings se microphone access manage kar sakte hain.",
          "Property photos upload karna optional hai. Aapki choose ki hui photos guests ko preview dikhane ke liye Supabase mein listing ke saath store hoti hain.",
          "Owner ko call ya message karna optional hai. Call ya WhatsApp choose karne par selected phone app/service apni privacy practices ke under interaction handle karti hai.",
          'Aap app mein saved properties remove kar sakte hain ya <a href="/delete-account">Account Deletion page</a> ke steps se account aur associated data delete karne ki request kar sakte hain.',
          "<strong>Supabase</strong> account authentication aur profile, property listings, saved properties aur uploaded photos ke liye backend database/storage services deta hai.",
          "<strong>OpenStreetMap Nominatim</strong> location-based city suggestions ke liye location coordinates receive karta hai.",
          "<strong>Google Maps</strong> map ya navigation dikhaye jane par location data receive karta hai.",
          "<strong>Unsplash</strong> app mein fallback image assets provide karta hai.",
          "<strong>Google Fonts</strong> app ya website load hone par requested font assets provide karta hai.",
          "<strong>Browser/device ki speech-recognition service</strong> upar bataye gaye tareeke se voice-search audio receive aur process kar sakti hai; uski privacy practices provider par depend karti hain.",
          "<strong>WhatsApp aur aapke device ka phone app</strong> tabhi open hote hain jab aap support ya listing call/WhatsApp action choose karte hain. Listing contact ke liye owner ka number call ke liye dialer ko diya jata hai; WhatsApp ko owner ka number aur prefilled listing message milta hai. Support WhatsApp link prefilled support message ke saath open hota hai.",
        ],
        location: "<strong>Location services aur navigation:</strong>",
        whatsappMessage:
          "Hi Where Is My Ghar Support, privacy ke baare mein ek question hai.",
      },
      delete: {
        title: "Delete Account | Where Is My Ghar",
        description: "Where Is My Ghar website aur supported apps ke account aur associated data deletion request karne ka tareeka.",
        eyebrow: "Account aur data controls",
        effective: "<strong>Where Is My Ghar</strong> · Website, app aur email options",
        intro:
          "Yeh process website aur Android aur iOS samet supported apps par use kiye gaye accounts par apply hota hai. App ke andar deletion process choose karein ya app access nahi kar pa rahe hain to email se request karein. Dono methods ki processing timelines alag hain.",
        headings: [
          "1. App se delete karein (In-App Deletion)",
          "2. Email se deletion request",
          "Kya delete hota hai aur kab",
          "Help chahiye?",
        ],
        paragraphs: [
          "Account ke liye automated 30-day grace period shuru hota hai. Is period mein dobara sign in karne par deletion request automatically cancel ho jati hai.",
          "30 din poore hone par profile data, property listings, uploaded photos aur saved bookmarks backend se automatically aur permanently delete ho jate hain.",
          "Agar aap app access nahi kar pa rahe, to account deletion request is email par bhejein",
          deletionEmail,
          "Request review karne ke liye apna registered name aur phone number include karein. Support team email deletion requests ko manually review karke 7 se 10 business days mein process karti hai. Yeh app ke 30-day grace period se alag hai.",
          "<strong>Apna password ya one-time password (OTP) email na karein.</strong>",
          "In-app requests mein 30-day grace period ke baad profile data, property listings, uploaded photos aur saved bookmarks Where Is My Ghar backend se automatically aur permanently delete ho jate hain.",
          "Account deletion se Where Is My Ghar ke Supabase backend se account data remove hota hai. Third-party services ka alag data unki apni privacy notices aur retention practices ke according handle hota hai.",
          "Support ya deletion request ke sawal ke liye humein email karein",
          email,
          'Data use, permissions aur third-party services ke baare mein janne ke liye <a href="/privacy-policy">Privacy Policy</a> dekhein.',
        ],
        items: [
          "<strong>Profile &gt; Delete Account</strong> par jayein.",
          "Deletion request review karke confirm karein.",
        ],
        buttons: [
          "Deletion request email karein",
        ],
        whatsappMessage:
          "Hi Where Is My Ghar Support, account deletion ke baare mein ek question hai.",
      },
    },
  };

  const content = translations[locale][page];
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
  const labels = [common.privacy, common.delete];
  setText(".legal-nav a, .legal-footer nav a", [...labels, ...labels]);
  document.querySelector(".legal-brand")?.setAttribute("aria-label", common.home);
  document.querySelector(".legal-nav")?.setAttribute("aria-label", common.legal);
  document.querySelector(".legal-footer nav")?.setAttribute("aria-label", common.legal);

  document.documentElement.lang =
    locale === "hi" ? "hi" : locale === "hinglish" ? "hi-Latn" : "en";
  document.title = content.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", content.description);
  setText(".legal-card h1", [page === "privacy" ? common.privacy : common.delete]);
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
})();
