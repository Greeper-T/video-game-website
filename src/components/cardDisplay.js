import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function cardDisplay(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className={`col-auto col-md-5 min-vh-100`}>
                    <Image src="" fluid />;
                </div>    
            </div>
        </div>
    )
}

export default cardDisplay;