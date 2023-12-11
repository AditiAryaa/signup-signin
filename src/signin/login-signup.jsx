import { useState } from "react";
import "./login-signup.css";
function SignIn() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div>
      <h1>Instagram</h1>
      <form>
        {action === "Sign In" ? (
          <span></span>
        ) : (
          <input type="text" placeholder="Phone number , username " />
        )}

        <input type="text" placeholder=" email" />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <button>{action === "Sign Up" ? "Sign Up" : "Sign In"}</button>
      </form>

      <p>
        {action === "Sign Up" ? (
          <span>Have an account</span>
        ) : (
          <span> Don't Have an account</span>
        )}
        <span className="click-event" onClick={() => setAction("Sign In")}>
          {action === "Sign Up" ? "Sign In" : "Sign Up"}
        </span>
      </p>
    </div>
  );
}
export default SignIn;
