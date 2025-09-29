function ButtonsMain(props) {

    const { title, description } = props;

    return (
        <>
            <div className="d-flex">
                <button type="button" class="btn btn-primary">{props.title}</button>
            </div>
        </>
    )
}

export default ButtonsMain;