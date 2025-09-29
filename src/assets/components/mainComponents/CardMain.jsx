import languages from "../../../../languages";

function CardMain(props) {

    const { content } = props;

    return (
        <>
            <div className="card container">
                <div className="card-body fs-4">
                    {content}
                </div>
            </div>
        </>
    )
}

export default CardMain