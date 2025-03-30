module.exports = {
    locales: ["en", "es"],
    sourceLocale: "en",
    catalogs: [
        {
            path: "src/locales/{locale}.json",
            include: ["src"],
        },
    ],
    format: "json",
};  