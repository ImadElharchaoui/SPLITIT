import axios from 'axios';

export const handleLogin = async (userLogin, password) => {
    const response = await axios.post('/api/v1/authentication/login', {
        username: userLogin,
        password: password
    })
    const { token } = response.data.token;
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response.status;

}
