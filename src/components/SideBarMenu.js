import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VideogameSlider from "./VideogameSlider";
import { Dropdown } from "react-bootstrap";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

function SideBarMenu() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="bg-dark col-auto col-md-2 min-vh-100">
                    <a className="text-decoration-none text-white d-flex align-items-center">
                        <span className="ms-1 fs-3">Browse</span> 
                    </a>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle 
                                    className="text-white fs-4 bg-dark border-0" 
                                    id="consoleDropdown"
                                >
                                    <i className="bi bi-controller"></i>
                                    <span className="ms-2">Console</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="bg-light">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Nintendo" />
                                        <FormControlLabel control={<Checkbox />} label="Play Station" />
                                        <FormControlLabel control={<Checkbox />} label="Xbox" />
                                        <FormControlLabel control={<Checkbox />} label="PC" />
                                        <FormControlLabel control={<Checkbox />} label="Mobile" />
                                    </FormGroup>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                    <ul className="nav nav-pills flex-column"> 
                    <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle 
                                    className="text-white fs-4 bg-dark border-0" 
                                    id="consoleDropdown"
                                >
                                    <i className="bi bi-controller"></i>
                                    <span className="ms-2">Console</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="bg-dark">
                                    <Dropdown.Item className="text-white" href="#">Option 1</Dropdown.Item>
                                    <Dropdown.Item className="text-white" href="#">Option 2</Dropdown.Item>
                                    <Dropdown.Item className="text-white" href="#">Option 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                <div className="col bg-light min-vh-100">
                    <VideogameSlider/>
                </div>
            </div>
        </div>
    );
}

export default SideBarMenu;
