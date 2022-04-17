import { useHttp } from "../../hooks/http.hook";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './autorization.css';

const Autorization = () => {
    const {request} = useHttp();
    const [users, setUsers] = useState([]);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        request("http://localhost:3001/users").then(onAdminsListLoaded);
    }, []);

    const onAdminsListLoaded = (list) => {
        setUsers(list);
    }

    const handleLogin = (event) => {
        setLogin(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const onAuth = (event) => {
        event.preventDefault();

        users.forEach(element => {
            if (element.email == login) {
                if (element.password == password) {
                    alert('Вход прошел успешно');
                    navigate("/admin");
                    return;
                }
            }

            return alert('Неверные данные');
        });
    }

    return (
        <div className="form-signin text-center container-sm">
            <form onSubmit={onAuth}>
                <h1 className="h3 mb-3 fw-normal">Авторизация</h1>
                <div className="form-floating">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="email"
                        onChange={handleLogin}
                        value={login}
                        required
                    />
                </div>
                <div className="form-floating mb-3">
                <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="password"
                        onChange={handlePassword}
                        value={password}
                        required
                    />
                </div>

                <button className="w-100 btn btn-lg btn-primary">Войти</button>
            </form>
        </div>
    )
}

export default Autorization;