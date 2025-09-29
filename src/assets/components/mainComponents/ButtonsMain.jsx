import languages from "../../../../languages";

function ButtonsMain(props) {

    const { titolo } = props;

    return (
        <>
            <button type="button" className="btn btn-primary">{titolo}</button>
        </>
    )
}

export default ButtonsMain;