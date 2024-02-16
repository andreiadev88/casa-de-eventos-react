import { Link } from "react-router-dom"

function Login () {
    return (
        <div className="login">
            <h1>Formulário de Login</h1>
            <Link to='/homepage'>Ir para Homepage</Link>
        </div>
    )
}
export default Login