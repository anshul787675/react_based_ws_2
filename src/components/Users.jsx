
import {useEffect,useState} from "react";
import {getUsers} from "../services/userService";

export default function Users(){

const [users,setUsers] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);
const [search,setSearch] = useState("");
const [selected,setSelected] = useState(null);

const fetchUsers = async () => {
setLoading(true);
try{
const data = await getUsers();
setUsers(data);
setError(null);
}catch(e){
setError("Failed to load users");
}
setLoading(false);
}

useEffect(()=>{ fetchUsers() },[]);

const filtered = users.filter(u =>
u.name.toLowerCase().includes(search.toLowerCase())
);

return(
<div className="users-wrapper">

<div className="controls">
<input
placeholder="Search user..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button onClick={fetchUsers}>Reload Data</button>
</div>

{loading && <p className="status">Loading users...</p>}
{error && <p className="error">{error}</p>}

<div className="grid">

{filtered.map(user=>(
<div
key={user.id}
className="card"
onClick={()=>setSelected(user)}
>
<h3>{user.name}</h3>
<p>{user.email}</p>
<span>Click for details</span>
</div>
))}

</div>

{selected && (
<div className="modal" onClick={()=>setSelected(null)}>
<div className="modal-content" onClick={e=>e.stopPropagation()}>
<h2>{selected.name}</h2>
<p><b>Email:</b> {selected.email}</p>
<p><b>Phone:</b> {selected.phone}</p>
<p><b>Website:</b> {selected.website}</p>
<p><b>Company:</b> {selected.company.name}</p>
<button onClick={()=>setSelected(null)}>Close</button>
</div>
</div>
)}

</div>
)
}
