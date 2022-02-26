import React from "react";

function Button () {
    return (
        <nav>
            <button type="button" onClick={() => console.log("Jij wilt naar de collectie!")}>to the collection</button>
            <button type="button" onClick={() => console.log("Jij wilt naar alle tassen!")}>shop all bags </button>
            <button type="button" onClick={() => console.log("Jij wilt  pre-orderen!")}>pre-orders</button>
        </nav>
    )
}

export default Button