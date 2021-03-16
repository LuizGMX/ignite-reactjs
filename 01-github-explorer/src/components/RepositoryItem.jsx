export function RepositoryItem(props){
    return (
        <li>
        <strong>{props.repository.name}</strong>
            {/* <img src={props.repository.avatar} className="avatar"/> */}
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>
                Acessar Repositório
            </a>              
    </li>
    )
}