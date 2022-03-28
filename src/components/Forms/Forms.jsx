import "../../styles/formsStyles.css"


export default function Forms(){
    return (
    
    <div className="Forms">
        <div className="boxforms">
            <h2>Formulário de login</h2>
            <label> Email</label>
            <input type="text" placeholder="Digite seu email"/>
            <label> Senha</label>
            <input type="password" placeholder="Digite seu senha"/>
            <button>Enviar</button> 
        </div>
    </div>
    )
}