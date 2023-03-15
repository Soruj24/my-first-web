import React, { useState, useEffect } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);

  const handleChange = e => {
    setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={name}
        style={{
          backgroundColor: validInput ? "green" : "red",
        }}
      />
    </div>
  );
};

export default Index;
