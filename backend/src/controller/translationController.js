const { Translation } = require("../../db/models");

const getTranslations = async (req, res) => {
  try {
    const { lang } = req.params;

    const translations = await Translation.findAll({
      attributes: ["key", lang],
    });

    const result = translations.reduce((acc, translation) => {
      acc[translation.key] = translation[lang];
      return acc;
    }, {});

    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch translations", error: err.message });
  }
};

module.exports = { getTranslations };
