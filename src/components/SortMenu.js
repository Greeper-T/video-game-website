import React from "react";
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

//hi

function SortMenu(){
    return(
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Consoles
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <FormGroup>
  <FormControlLabel control={<Checkbox />} label="Nintendo" />
  <FormControlLabel control={<Checkbox />} label="Play Station" />
  <FormControlLabel control={<Checkbox />} label="Xbox" />
  <FormControlLabel control={<Checkbox />} label="PC" />
  <FormControlLabel control={<Checkbox />} label="Mobile" />
</FormGroup>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <FormGroup>
  <FormControlLabel control={<Checkbox />} label="Action" />
  <FormControlLabel control={<Checkbox />} label="Indie" />
  <FormControlLabel control={<Checkbox />} label="Adventure" />
  <FormControlLabel control={<Checkbox />} label="RPG" />
  <FormControlLabel control={<Checkbox />} label="Strategy" />
  <FormControlLabel control={<Checkbox />} label="Shooter" />
  <FormControlLabel control={<Checkbox />} label="Casual" />
  <FormControlLabel control={<Checkbox />} label="Simulation" />
  <FormControlLabel control={<Checkbox />} label="Puzzle" />
  <FormControlLabel control={<Checkbox />} label="Arcade" />
  <FormControlLabel control={<Checkbox />} label="Platformer" />
  <FormControlLabel control={<Checkbox />} label="Racing" />
  <FormControlLabel control={<Checkbox />} label="Massively Multiplayer" />
  <FormControlLabel control={<Checkbox />} label="Sports" />
  <FormControlLabel control={<Checkbox />} label="Fighting" />
  <FormControlLabel control={<Checkbox />} label="Family" />
  <FormControlLabel control={<Checkbox />} label="Board Games" />
  <FormControlLabel control={<Checkbox />} label="Educational" />
  <FormControlLabel control={<Checkbox />} label="Card" />
</FormGroup>
      </Dropdown.Menu>
    </Dropdown>
      </Dropdown.Menu>
    </Dropdown>
    )
}

export default SortMenu;