import React from "react";
import Alert from "react-bootstrap/Alert";

export default function Index() {
    return (
        <>
            {[
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "info",
                "light",
                "dark",
            ].map(variant => {
                return (
                    <Alert key={variant} variant={variant}>
                        This is a {variant} alert-check it out with{ ' '}
                        <Alert.Link href="#">An Example Link</Alert.Link>
                    </Alert>
                );
            })}
        </>
    );
}
