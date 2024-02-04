function Project(props) {
    return <div>
        <div className="card col col-xs-10 col-sm-10 col-md-5 col-lg-3 m-2 p-3">
            <h2 className="card-title">{ props.title }</h2>
            <p>{ props.description }</p>
            <img src={props.image} />
            <div className="custom-card-footer">
                <p>
                    <button onClick={() => window.open(props.deployed, '_blank')}>
                        Deploy link
                    </button>
                    <button onClick={() => window.open(props.github, '_blank')}>
                        Github Repo
                    </button>
                </p>
            </div>
        </div>

        
    </div>
}

export default Project; 