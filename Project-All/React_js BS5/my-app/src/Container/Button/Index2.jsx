import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function Request() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}
export default function Index2() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      Request().then(() => {
        setIsLoading(false);
      });
    }
  }, [isLoading]);
  const handleClick = () => {
    setIsLoading(true);
  };

  return (
      <div>
      <Button
        variant="primary"
        onClick={isLoading ? handleClick : null}
        disabled={isLoading}>
        {isLoading ? "Loading" : "Click to Load"}
      </Button>
    </div>
  );
}
