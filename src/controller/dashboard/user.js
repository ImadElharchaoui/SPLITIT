import axios from "axios";

const handleUserData =async (user_id) => {
    const response = await axios.get(`api/v1/user/${user_id}`)
    if(response){
        return response.data
    }
}

export { handleUserData }