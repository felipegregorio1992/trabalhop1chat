


function login(){
    return(
    <form method ="post">
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="senha" placeholder="Senha" />
        <button type="submit">Entrar</button>
    </form>
    );
}



export default login;