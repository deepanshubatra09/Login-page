import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box">
        <img src="./coding.png" alt="logo" className="logo" id="coding"/>
        <h2>Sign In to Codes Hub</h2>
        <h11>Make your devlopment more intresting</h11>
        <button id="google">
          <img src="./google.png" alt="logo" className="logo"/>
            Sign in with Google
        </button>
        <button>
          <img src="./apple.png" alt="logo" className="logo" id="logo-size"/>
            Sign in with Apple
        </button>
        <hr></hr>
        <span>or</span> 
        <form>
          <input type="text" placeholder="phone,email or username"/>
          <button id="green">Sign in</button>
        </form>
        <button id="filled">Forgot Password</button>
        <p>Don't have an account? <a>Sign up</a></p>
      </div> 
    </div>
  );
}

export default App;
