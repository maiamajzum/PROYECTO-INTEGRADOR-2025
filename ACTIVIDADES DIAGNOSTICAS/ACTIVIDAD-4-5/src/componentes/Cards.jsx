function Card(props){
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    );
}

export default Card;