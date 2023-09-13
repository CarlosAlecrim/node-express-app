const axios = require('axios')
class CatService{
   async all (){
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        const data = response.data
        return data;
    }
}

module.exports = CatService;