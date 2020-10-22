import  * as environment from '../environments/environment';

const axios = require('axios');

export default class Client {

    // dishout-db.duckdns.org
    serverUrl = environment.backendApi;

    // return promise function
    getAllDishes() {
        var resp = axios.get(this.serverUrl + 'dishes/')
            .then(function (response) {
                // handle success
                var data = response.data.dishes;
                // console.log(data)
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