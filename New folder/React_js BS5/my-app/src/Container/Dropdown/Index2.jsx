import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Index2() {
  return (
    <>
      {["Primary", "secondary", "Success", "Info", "warning", "Danger"].map(
        variant => {
          return (
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}>
              <Dropdown.Item eventKey="1">Bangla</Dropdown.Item>
              <Dropdown.Item eventKey="2">Math</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">English</Dropdown.Item>
            </DropdownButton>
          );
        }
      )}
    </>
  );
}
