import "./App.css";
import QRcode from "react-qr-code";
import { useState } from "react";

function App() {
  const [text, settext] = useState("text");
  const [d,setd]=useState(false);

  function handleALL(a, b,d) {
    
    const x =   a.value**2;
    const result = 10000*b.value/x;
    if(result>=18.5&&result<=25){
      if(d==="true"){

        // settext("normal "+result+" HE is diabetic")
        settext("normalD")
      }else{
    console.log(d);

        // settext("normal "+result+" HE is nondiabetic")
        settext("normal")

      }

    }else{
      if(d==="true"){

        // settext("obesity "+result+" HE is diabetic")
        settext("oD")

      }else{
        // settext("obesity "+result+" HE is nondiabetic")
        settext("o")

      }

    }
  }
  return (
    <div className="App">
      <div className="conmain">
        <h1>This is Our Qr</h1>
        <QRcode value={text} />
      </div>
      <div className="input-here">
        {/* <p>Enter Your Text</p> */}
        <div className="inner-input">
          <input type="text" id="height" placeholder="Enter Your Height in cm" />
          <input type="text" id="weight" placeholder="Enter Your Weight in kg" />
          <div className="i-small">
           Diabatic
            <input type="radio" name="dia" value='true' onChange={e=>setd(e.target.value)} />
            NonDiabatic
            <input type="radio" name="dia" value='false' onChange={e=>setd(e.target.value)} />
            </div>
          <button
            className="btn"
            onClick={() => {
              handleALL(
                document.getElementById("height"),
                document.getElementById("weight"),d
              );
            }}
          >
            GENERATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
