
import Users from "./components/Users";

export default function App(){
return(
<div className="app-container">
<header className="hero">
<h1>User Directory Showcase</h1>
<p>Interactive demo fetching live API data</p>
</header>

<Users/>

<footer className="footer">
<p>Professional React Demo • API Integration</p>
</footer>
</div>
)
}
