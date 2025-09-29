import languages from "../../../../languages";

function ButtonsMain(props) {

    const { titolo , onClick } = props;

    return (
        <>
            <button 
            type="button" 
            className= "btn btn-primary fs-5"
            onClick={onClick}>
                {titolo}
            </button>
        </>
    )
}

export default ButtonsMain;