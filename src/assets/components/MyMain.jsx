import languages from "../../../languages"
import ButtonsMain from "./mainComponents/ButtonsMain"
import CardMain from "./mainComponents/CardMain"

function MyMain() {

    return (
        <>
            <div className="d-flex justify-content-center gap-4 mt-5">
                {languages.map(card => (

                    <ButtonsMain
                        key={card.id}
                        titolo={card.title}
                        content={card.description}
                    />
                ))}
            </div>
        </>
    )
}

export default MyMain