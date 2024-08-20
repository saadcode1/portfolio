import "./Navbar.css";

export default function Navbar(){
    return(<>
        <div className="navbar">
            <div>
            <h2>SAAD</h2>
            </div>
            <div className="option">
                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
             
             <div className="button">
                <button>Lets Talk</button>
             </div>
        </div>
        
       
         </>

    )
}