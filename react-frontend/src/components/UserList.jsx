import React , {useEffect , useState} from 'react' ; 
import axios from 'axios' ; 

const UserList = () =>{
    const [users , setUsers] = useState() ; 

    useEffect(() => {
        fetchUsers() ; 
    } , []) ; 

    const fetchUsers = async() =>{
        try{
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data);
        }catch(err){
            console.log("fetching users error :" , err)
        }
    } ; 

    const handledelete = async() =>{
        try{
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            fetchUsers(); // Refresh the list after deletion
        }catch(err){
            console.log("Error deleting user : " , err)
        }
    } ; 
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {Array.isArray(users) && 
                    users.map((user) => (
                    <li key={user?.id}>
                        {user?.name} - {user?.email}
                        <button onClick={() => handledelete(user?.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default UserList ; 