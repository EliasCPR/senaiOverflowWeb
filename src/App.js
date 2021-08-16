
function Page1(){
  return <h1>Está é a pagina 1 Dale!!!</h1>
}

function Page2(){
  return <h1>Está é a pagina 2</h1>
}


function App() {

  let currentPage = 1;

  return (
    <div className="App">
      {
        currentPage === 1 ? <Page1/> : <Page2/>
      }
      
    </div>
  );
}

export default App;
