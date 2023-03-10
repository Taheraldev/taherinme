const config: Config = {
    // AI_PAINTING_SPRING
    // DIFFERENT_DIMENSION_ME
    // AI_PAINTING_ANIME
    // AIGCSDK_AI_PAINTING_ANIME
    mode: 'AI_PAINTING_ANIME',

    botToken: '6019511005:AAG5lXsS6aZHE0V2nEJgKiYJX2U2jaVmtNY',

    keepFiles: {
        compared: true,
        input: true,
        single: true,
        video: true,
    },

    messages: {
        blocked: 'قام الموقع الصيني بحظر الروبوت، سيء للغاية 🤷‍♂️',
        bye:
            'شكرا لك لاستخدامك البوت للمزيد من معلومات @ta_ja199\n\n' +
            'اشترك في القناة @i2pdfbotchannel',
        hello: 'مرحبا 👋 أرسل لي صورة لتحويلها إلى فن أنيمي ثنائي الأبعاد\nللمزيد من معلومات @ta_ja199',
        media: '@AnimetoImgbot',
        received: 'تم استلام الصورتك، انتظر بعض الدقائق لكي اقوم بمعالجة',
    },

    sendMedia: {
        // AI_PAINTING_SPRING
        // DIFFERENT_DIMENSION_ME
        // AI_PAINTING_ANIME
        compared: true,

        // AI_PAINTING_SPRING
        // DIFFERENT_DIMENSION_ME
        // AI_PAINTING_ANIME
        // AIGCSDK_AI_PAINTING_ANIME
        single: true,

        // AI_PAINTING_SPRING
        // AI_PAINTING_ANIME
        video: true,
    },

    parallelRequests: 10,

    // Uncomment the line below and set your proxy if you need it.
     proxyUrl: 'socks5://@58.49.230.248:30001',
};

export default config;
