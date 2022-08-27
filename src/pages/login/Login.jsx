import "./login.css";

export default function Login() {

const handleClick= ()=>{

 console.log("clicked");

}
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialBook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialBook.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email"  className="loginInput" />
            <input placeholder="Password" type="password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}