function Card(props) {
    return (
      <>
        <div className="cards">
          <div className="card">
            <img src={props.imgsrc} alt="Netflix  series img" className="card_img" />
            <div className="card_info">
              <span className="card_category"> A Netflix Origninal </span>
              <h3 className="card_title">{props.moviename} </h3>
              <a href={props.link} target="_blank">
                <button> Watch Now </button>
              </a>
            </div>
          </div>
        </div> 
      </>
    )
  }
  export default Card;