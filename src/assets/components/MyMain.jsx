//importiamo i componenti del main, il file JS con gli oggetti e lo stato 
import languages from "../../../languages"
import ButtonsMain from "./mainComponents/ButtonsMain"
import CardMain from "./mainComponents/CardMain"
import { useState } from "react";

function MyMain() {

    const [clicked, setClicked] = useState(null);

    return (
        <>
        {/* sezione bottoni main di pagina */}
            <div className="d-flex justify-content-center gap-4 mt-5">
                {languages.map(card => (

                    <ButtonsMain
                        key={card.id}
                        titolo={card.title}
                        isActive={clicked?.id === card.id}
                        // stato click bottone
                        onClick={() => setClicked(card)}
                    />

                ))}
            </div>

            {/* contenuto oggetti card del main */}
            <div className="d-flex justify-content-center mt-5 container">
                {clicked
                    ? <CardMain content={clicked.description} titolo={clicked.title} />
                    : <CardMain content="Seleziona un linguaggio di programmazione" />
                }
            </div>
        </>
    )
}

export default MyMain