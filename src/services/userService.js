
export async function getUsers(){
const res = await fetch("https://jsonplaceholder.typicode.com/users");
if(!res.ok) throw new Error("API request failed");
return res.json();
}
