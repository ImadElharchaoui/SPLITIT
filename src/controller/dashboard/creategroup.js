import axios from "axios";


const handlePushGroup = async (group) => {
    const response = await axios.post("/api/v1/group/create", group);
    if(response.status === 201) {
        return response.status;
    }else{
        return false;
    }
}

const handleMember = async (user_id) => {
    const response = await axios.get(`/api/v1/friends/myfriends/${user_id}`);
    console.log(response)
    if(response.status === 200) {
        return response.data;
    }else{
        return false;
    }
}

export { handlePushGroup, handleMember }