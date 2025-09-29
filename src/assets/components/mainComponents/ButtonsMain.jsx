import languages from "../../../../languages";

//bottoni main di pagina per selezionare il contenuto da leggere
function ButtonsMain(props) {

    const { titolo, onClick, isActive } = props;

    return (
        <>
            <button
                type="button"
                onClick={onClick}
                //condizione per cambiare il colore del bottone se clickato o no
                className={`btn ${isActive ? "btn-warning" : "btn-primary"}`}>
                {titolo}
            </button>
        </>
    )
}

export default ButtonsMain;