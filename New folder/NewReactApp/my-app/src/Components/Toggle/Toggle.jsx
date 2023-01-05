import React, { useState } from "react";

export default function Toggle() {
    const [toggle, setToggle] = useState(true);

    return (
        <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
            {toggle && (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                    explicabo quos eum nisi quis accusamus molestias repellat maiores
                    aliquam non ipsa, culpa quo inventore similique laudantium iusto
                    laborum beatae fuga?
                </p>
            )}
            <div style={{ textAlign: "center" }}>
                <button
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    {toggle ? "Hide" : "Show"}
                </button>

            </div>
        </div>
    );
}
