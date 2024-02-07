function Project(props) {
    return <div>
          <div className='card align-items-center shadow'>
            <div className='card-body text-center'>
              <h2 className="card-title">{ props.title }</h2>
              <p>{ props.description }</p>
                <img 
                src={props.image}
                alt={props.title}
                />
                <p className="tools">
                    {props.tools}
                </p>
            <div className="custom-card-footer">
                <p>
                    <button className='btn btn-color shadow' onClick={() => window.open(props.deployed, '_blank')}>
                        Deploy link
                    </button>
                    <button className='btn btn-color shadow m-2' onClick={() => window.open(props.github, '_blank')}>
                        Github Repo
                    </button>
                </p>
            </div>
        </div>
      </div>
    </div>
}


export default Project; 