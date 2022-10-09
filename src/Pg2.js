import './App.css';

function App() {
  const styleObj1 = {
    fontSize: 13,
    color: "#ABB2B9",
    textAlign: "left",
    
}
const styleObj2 = {
  fontSize: 13,
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
    <div class="lc1" style={styleObj1}><a href="./Index.js">Back</a></div>
    <div class="lc2" style={styleObj2}><p>STEP 2 OF 3</p><p>Banking Info.</p></div>
    <div class="form-container" style={{ background: "white" }}>
    <main class="signup-container">
    <h1 class="heading-primary">Complete your Profile!<span class="span-blue">.</span></h1>
    <p class="text-mute">For the purpose of Industry Regulation, your details are required.</p>
    

    <form class="signup-form">
      <label class="inp">
        <input type="number" class="input-text" placeholder="&nbsp;"/>
        <span class="label">Bank Verification Number(BVM)*</span>
      </label>
      <button class="btn btn-login">Save and Continue</button>
       <div class="line-breaker">
        
        <span>Your info is safely secured.</span>
        
      </div>
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