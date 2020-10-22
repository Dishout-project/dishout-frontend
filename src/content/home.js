import React, { Component } from 'react';
import Client from '../client/backendClient';

class Home extends Component {

    client = new Client();
    state = {
        dishes: [],
        input: '',
        randomDish: '',
        empty: ""
    }

    componentDidMount() {
        console.log('initialising');
        this.client.getAllDishes().then(
            (data) => {
                console.log(data)
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
        console.log(document.getElementById('dish-name').value);
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