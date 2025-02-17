import axios from 'axios';

export const handleRegister = async (username, useremail, password) => {
    console.log("username", username)
    const response = await axios.post('/api/v1/authentication/register', {
        username: username,
        email: useremail,
        password: password
    })
    const { token } = response.data.token;
    localStorage.setItem('token', token);
    localStorage.setItem('username', response.data.user).username;
    return response.data.status

}
