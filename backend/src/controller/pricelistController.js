const { Pricelist } = require("../../db/models");

const getAll = async (req, res) => {
  try {
    const pricelists = await Pricelist.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(pricelists);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch pricelists", error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { articleNo, product, inPrice, price, unit, inStock, description } =
      req.body;
    const pricelist = await Pricelist.create({
      articleNo,
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

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { articleNo, product, inPrice, price, unit, inStock, description } =
      req.body;
    const pricelist = await Pricelist.findByPk(id);

    if (!pricelist) {
      return res.status(404).json({ message: "Pricelist not found" });
    }

    await pricelist.update({
      articleNo,
      product,
      inPrice,
      price,
      unit,
      inStock,
      description,
    });

    res.status(200).json(pricelist);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update pricelist", error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pricelist.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({ message: "Pricelist not found" });
    }

    res.status(200).json({ message: "Pricelist deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete pricelist", error: err.message });
  }
};

module.exports = { getAll, create, edit, remove };
