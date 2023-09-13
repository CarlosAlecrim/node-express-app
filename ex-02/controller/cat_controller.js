const CatService = require('../service/service_cat')

class CatController {
    constructor(){
        this.catService = new CatService();
    }
    index = (req, res) => {
        res.render('index');
    }

    all = async (req, res) => {
        const cats = await this.catService.all();
        res.json(cats)
    }

}
module.exports = CatController;