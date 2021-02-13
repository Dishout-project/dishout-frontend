import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Cc from './cc';
import '../styles/styles.css'




class LandingPage extends Component {

    //Cc contains the Carousel component
    render() {
        return (
            <Card className="text-center">
                <Card.Header>Welcome to</Card.Header>
                <Card.Body>
                    <Card.Title>Dishout</Card.Title>
                        <Cc className="test2" />
                    <Card.Text>
                        The app used to randomize your cuisine with the clcik of a button.
                        </Card.Text>
                    <Button variant="primary">Login</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        );
    }
}

export default LandingPage;