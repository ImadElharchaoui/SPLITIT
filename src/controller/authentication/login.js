import axios from 'axios';

export const handleLogin = (userLogin, password) => {
    const response = axios.post('/api/v1/authentication/login', {
        username: userLogin,
        password: password
    })
    const { token } = response.data.token;
    localStorage.setItem('token', token);
    return response.data.user

}
