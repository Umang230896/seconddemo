import About from "./component/About";

function App() {

  var i = "mitali"

  var arr = [1,2,3,4,5,6]

  var obj = {
    name: "mitali",
    email: "mitalimori@gmail"
  }

  return (
    <>
    <h1>{i}</h1>
    <About i={i} arr1={arr} obj={obj}/>
    <h1></h1>

    </>
  );
}

export default App;


