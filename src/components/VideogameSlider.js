import React from "react";
import { Button, Card } from 'react-bootstrap'
import { Form } from "react-bootstrap";
import tboiImage from  '../assets/tboi.jpg'

function VideogameSlider(){
    return(
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={tboiImage}/>
            <Card.Body>
                <Card.Title>The Binding Of Isaac</Card.Title>
                <Button variant="primay">go to web <a href="https://store.steampowered.com/app/1426300/The_Binding_of_Isaac_Repentance/"/></Button>
            </Card.Body>
        </Card>
    )
}

export default VideogameSlider;

