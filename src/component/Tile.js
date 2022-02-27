import React from "react";

function Tile ({title, image, text}){
    return(
        <footer>
            <section>
                <h2>{title}</h2>
                <p>{text}</p>
            </section>

            <section>
                <img src={image}/>
            </section>

        </footer>
    )
}

export default Tile;