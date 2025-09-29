import languages from "../../../../languages";

function CardMain(props) {

    const { content, titolo } = props;

    return (
        <>
            <div className="card container">
                <h3 className="ms-3 mt-3">{titolo}</h3>
                <p className="card-body fs-4">{content}</p>
            </div>
        </>
    )
}

export default CardMain