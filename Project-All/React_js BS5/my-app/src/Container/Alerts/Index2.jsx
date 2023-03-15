import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function Index2() {
    const [show, setShow] = useState(true)
    if (show) {
        return (
            <Alert variant="success" onClose={()=>setShow(false)} dismissible >
                <Alert.Heading>Hey ! Nice to say you 1</Alert.Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                    iusto, molestias laborum maxime ipsa fuga quaerat nulla commodi nemo
                    similique debitis enim aperiam sint corporis eveniet, sequi architecto
                    error! Reprehenderit.
                </p>
                <hr />
                <p className="mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                    earum sapiente voluptatum, consectetur sunt natus nisi quia hic ipsa
                    eius ipsum aut veritatis eaque nostrum quibusdam quidem quos rerum quo.
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>
}
