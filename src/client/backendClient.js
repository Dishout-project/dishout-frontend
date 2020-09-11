const axios = require('axios');

export default class Client {

    serverUrl = 'http://localhost:5000/'

    // return promise function
    async getAllDishes() {
        var resp =  axios.get(this.serverUrl + 'dishes/')
            .then(function (response) {
                // handle success
                var data = response.data.dishes;
                console.log(data)
                var dishes = data.map(obj => {
                    return obj.dish;
                });
                return dishes;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        return resp;
    }

    addDish(dish) {
        return axios.post(this.serverUrl + 'dishes/add', {
            dish: dish
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}