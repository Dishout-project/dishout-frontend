import React, { Component } from 'react';

class Home extends Component {

    state = {
        dishes: ['Burger', 'Carbonora', 'pizza'],
        input: '',
        randomDish: ''
    }

    getRandomDish() {
        var rows = this.state.dishes;
        var rand = Math.floor(Math.random() * (rows.length - 1)) + 1
        this.setState({ randomDish: rows[rand] })
    }

    addDish = () => {
        console.log(this.state.dishes)
        this.setState({ dishes: this.state.dishes.concat(this.state.input) })
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
                        {this.state.dishes.map((value, index) => {
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