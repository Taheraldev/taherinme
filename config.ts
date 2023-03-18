const config: Config = {
    // AI_PAINTING_SPRING
    // DIFFERENT_DIMENSION_ME
    // AI_PAINTING_ANIME
    // AIGCSDK_AI_PAINTING_ANIME
    mode: 'DIFFERENT_DIMENSION_ME',

    botToken: '6016945663:AAFYr1oaLltIgeMtw5Lb5uSabyVWL4R7UcU',

    keepFiles: {
        compared: true,
        input: true,
        single: true,
        video: true,
    },

    messages: {
        blocked: 'قام الموقع الصيني بحظر الروبوت، سيء للغاية 🤷‍♂️',
        bye:
            'شكراً لاستخدامك البوت للاستفسار :@ta\\_\\ja199👍\n' +
            'من فضلك اشترك في قناتنا اذا عجبك البوت [i2pdfbot](https://t.me/i2pdfbotchannel) ♥️',
        hello: 'مرحبًا 👋، أرسل لي صورتك لتحويلها إلى فن أنمي ثنائي الأبعاد \n  للاستفسار:@ta\\_\\ja199',
        media: '@Anime\\_\\tophotobot',
        received: 'تم استلام الصورة، من فضلك انتظر بعض الدقائق لكي يتم المعالجة',
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
