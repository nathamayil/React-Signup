
import './App.css';
import React from "react";
import {BrowserRouter as Router,Link} from "react-router-dom";
function App() {
 
const styleObj2 = {
  fontSize: 16,
  color: "#566573",
  textAlign: "right",
  
}
  return (
    <div className="App">
    <div class="form">
    <div class="row">
  <div class="column" style={{ background: "#4285f4" }}> 
  <div class="c1"><p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
  <h2>Vincent Obi</h2></div>
  </div>
  <div class="column">
    <div class="lc2" style={styleObj2}><p>Already have an account?<a>Sign In</a></p></div>
    <div class="form-container" style={{ background: "white" }}>
    <main class="signup-container">
    <h1 class="heading-primary">Join Us!<span class="span-blue">.</span></h1>
    <p class="text-mute">To begin this journey, tell us what type of account you'd be opening.</p>
    

    <form class="signup-form">
      <Link to='./main.js'>
       <button class="input-text1" placeholder="&nbsp;">
        <h3 class="heading-primary">Individual</h3>
        <p>Personal account to manage your activities.</p>
        </button></Link>

        <button class="input-text1" placeholder="&nbsp;">
        <h3 class="heading-primary">Business</h3>
        <p>Own or belong to a company, this is for you.</p>
         </button>

    </form>
  </main>
           
        </div>

  </div>
</div>

              
    </div>
</div>
   
  );
}

export default App;