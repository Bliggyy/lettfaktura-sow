const { Pricelist } = require("../../db/models");

const getAll = async (req, res) => {
  try {
    const pricelists = await Pricelist.findAll();
    res.status(200).json(pricelists);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch pricelists", error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { product, inPrice, price, unit, inStock, description } = req.body;
    const pricelist = await Pricelist.create({
      product,
      inPrice,
      price,
      unit,
      inStock,
      description,
    });
    res.status(201).json(pricelist);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create pricelist", error: err.message });
  }
};

module.exports = { getAll, create };
