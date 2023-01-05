import React, { useState } from "react";
import ButtonGroup from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function Index3() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const radio = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3 " },
  ];

  return (
    <>
      <ButtonGroup>
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          value="1"
          checked={checked}
          onChange={e => {
            setChecked(e.currentTarget.checked);
          }}>
          Checked
        </ToggleButton>
      </ButtonGroup>
    </>
  );
}
