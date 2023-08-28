import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios";
import SingleUser from "./SingleUser";

   //https://randomuser.me/api/0.8/?results=5
function UserList() {

    const [users, setUsers] = useState([])

    const fetchUsers = async() => {
        const response = await axios.get("https://randomuser.me/api/0.8/?results=5")
        console.log(response)
        setUsers(response.data.results.map((r: any) => r.user))
    }
    useEffect(() => {
        fetchUsers()
    },[])
return (
    <>
<div className="user-list">
    <ul>
        {users.map((user,id)=>(
            <li key={id}><SingleUser user={user}/></li>
        ))}
    </ul>
</div>
    </>
)
}
export default UserList