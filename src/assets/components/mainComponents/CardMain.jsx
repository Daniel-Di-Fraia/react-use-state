import languages from "../../../../languages";

//contenuto pagina in base al bottone clickato in card
function CardMain(props) {

    const { content, titolo } = props;

    return (
        <>
            <div className="card container">
                <h3 className="mt-3 ms-3">{titolo}</h3>
                <p className="card-body fs-4">{content}</p>
            </div>
        </>
    )
}

export default CardMain