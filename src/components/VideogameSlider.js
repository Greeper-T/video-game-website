import React from "react";
import { Button, Card } from 'react-bootstrap'
import { Form } from "react-bootstrap";
import tboiImage from  '../assets/tboi.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function VideogameSlider(){
    return(
        <Card style={{width: '10rem'}} variant='primary'>   
            <Card.Body>
                <Card.Title>The Binding Of Isaac</Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={tboiImage}/>
            <Card.Body>
                <Button variant="secondary" href="https://store.steampowered.com/app/1426300/The_Binding_of_Isaac_Repentance/">go to web </Button>
            </Card.Body>
        </Card>
    )
}

export default VideogameSlider;

