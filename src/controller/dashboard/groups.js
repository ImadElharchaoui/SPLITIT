import axios from "axios"

const handleGroups = async (groupsIDs) => {
    const queryString =  groupsIDs.groups.map(id => `groupsIDs=${id}`).join("&");
    const response = await axios.get(`/api/v1/group/mygroup?${queryString}`);
    if(response.status === 200) {
        return response.data;
    }else{
        return false
    }
}

export default handleGroups
