import React, { Component } from 'react';
import Client from '../client/backendClient';
import  * as environment from '../environments/environment';

class Home extends Component {

    client = new Client();
    state = {
        dishes: [],
        input: '',
        randomDish: '',
        empty: ""
    }

    componentDidMount() {
        console.log(`Production Environment: ${environment.production}`)

        this.client.getAllDishes().then(
            (data) => {
                this.setState({ dishes: data });
            }
        )
    }

    addDish = () => {
        this.client.addDish(this.state.input).then(
            (res) => {
                console.log(res)
                this.client.getAllDishes().then(
                    (data) => {
                        this.setState({ dishes: data });
                    }
                );
            }
        );
    }

    getRandomDish() {
        var rows = this.state.dishes;
        var rand = Math.floor(Math.random() * (rows.length))  
        this.setState({ randomDish: rows[rand] })
    }

    handleInputChange = (e) => {
        this.setState({ input: e.target.value });
    }

    render() {
        return (
            <div>

                <table id="myTable" >
                    <tbody>
                        <tr>
                            <th>Dish Name</th>
                        </tr>
                        {
                            this.state.dishes.map((value, index) => {
                                return <tr key={index}>
                                    <td> {value}</td>
                                </tr>
                            })}
                    </tbody>
                </table>

                <p></p>
                <p></p>
                <p>Dish name:</p>

                <input type="text" id="dish-name" name="dish-name" value={this.state.input} onChange={this.handleInputChange} />
                <button onClick={() => { this.addDish() }}>Add</button>
                <p></p>

                <button id="random" onClick={() => { this.getRandomDish() }}>What Am I Eating?</button>
                <p>{this.state.randomDish}</p>

            </div>

        );
    }
}

export default Home;