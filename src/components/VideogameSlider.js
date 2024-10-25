import React from "react";
import { Button, Card } from 'react-bootstrap'
import { Form } from "react-bootstrap";
import tboiImage from  '../assets/tboi.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function VideogameSlider(){
    return(
        <Card className="width:8rem p-2 bg-emerald-400">   
            <Card.Body className="bg-emerald-400">
                <Card.Title className="bg-emerald-400">The Binding Of Isaac</Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={tboiImage}/>
            <Card.Body className="bg-emerald-400">
                <Button variant="secondary" href="https://store.steampowered.com/app/1426300/The_Binding_of_Isaac_Repentance/" target="_blank">go to web </Button>
                <button className="bg-emerald-400"> nooo </button>
            </Card.Body>
        </Card>
    )
}

export default VideogameSlider;

