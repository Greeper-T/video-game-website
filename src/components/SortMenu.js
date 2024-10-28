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
  <FormControlLabel control={<Checkbox />} label="Nintendo" />
  <FormControlLabel control={<Checkbox />} label="Play Station" />
  <FormControlLabel control={<Checkbox />} label="Xbox" />
  <FormControlLabel control={<Checkbox />} label="PC" />
  <FormControlLabel control={<Checkbox />} label="Mobile" />
</FormGroup>
      </Dropdown.Menu>
    </Dropdown>

      </Dropdown.Menu>
    </Dropdown>
    )
}

export default SortMenu;