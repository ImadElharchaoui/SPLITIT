import axios from 'axios';

export const handleLogin = async (userLogin, password) => {
    const response = await axios.post('/api/v1/authentication/login', {
        username: userLogin,
        password: password
    })
    const { token } = response.data.token;
    localStorage.setItem('token', token);
    localStorage.setItem('username', response.data.user).username;
    console.log("response", response)
    return response.data.status

}
