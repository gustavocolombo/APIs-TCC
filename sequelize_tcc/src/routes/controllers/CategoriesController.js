const categories = require("../../app/models/Categories.js");

class CategoriesController {
  async store(request, response) {
    const { name } = request.body;

    console.log("esta chegando?");

    try {
      const category = await categories.create({ name: name }).then((result) =>
        response.json(result)
      );
    } catch (err) {
      console.log("erro", err);
    }
  }

  async show(request, response) {
    const isPopulated = [];

    const categories = Categories.findAll();

    return isPopulated ? response.json(categories) : [];
  }
}

module.exports = CategoriesController;
