import languages from "../../../../languages";

function ButtonsMain(props) {

    const { titolo, onClick, isActive } = props;

    return (
        <>
            <button
                type="button"
                onClick={onClick}
                className={`btn ${isActive ? "btn-warning" : "btn-primary"}`}>
                {titolo}
            </button>
        </>
    )
}

export default ButtonsMain;