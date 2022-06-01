const categories = require("../../app/models/Categories.js");

class CategoriesController {
  async store(request, response) {
    const { name } = request.body;

    try {

      console.time('squelizeCreate')

      await categories.create({ name: name }).then((result) =>
        response.json(result)
      );

    } catch (err) {
      console.log("erro", err);
    }

    console.timeEnd('squelizeCreate')
  }

  async show(request, response) {
    const isPopulated = [];

    console.time('sequelizeFind');

    const categoryFind = await categories.findAll();

    console.timeEnd('sequelizeFind');

    return isPopulated ? response.json(categoryFind) : [];
  }

  async update(request, response){
    const { name, newName } = request.body;

    try{

      console.time('sequelizeUpdate');

      const findCategory = await categories.findOne({ where:{name} });

      const updatedCategory = await categories.update({ name: newName }, { where: {name} });

      console.timeEnd('sequelizeUpdate');

      return response.json(updatedCategory);
    }catch(err){
      console.log("erro", err)
    }
  }

  async delete(request, response){
    const { name } = request.body;

    try{

      console.time('sequelizeDelete');

      //const findCategory = await categories.findOne({ where:{name} });

      const deletedCategory = await categories.destroy({ where: {name} });

      console.timeEnd('sequelizeDelete');

      return response.json(deletedCategory);
    }catch(err){
      console.log("erro", err)
    }
  }
}

module.exports = CategoriesController;
