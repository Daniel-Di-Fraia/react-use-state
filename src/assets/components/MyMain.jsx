import languages from "../../../languages"
import ButtonsMain from "./mainComponents/ButtonsMain"
import CardMain from "./mainComponents/CardMain"
import { useState } from "react";

function MyMain() {

    const [clicked, setClicked] = useState({ description: "Seleziona un linguaggio..." });

    return (
        <>
            <div className="d-flex justify-content-center gap-4 mt-5">
                {languages.map(card => (

                    <ButtonsMain
                        key={card.id}
                        titolo={card.title}
                        onClick={() => setClicked(card)}
                    />

                ))}
            </div>
            <div className="d-flex justify-content-center mt-5 container">
                {clicked && <CardMain
                    content={clicked.description}
                />
                }
            </div>
        </>
    )
}

export default MyMain