
import Navbar from './components/navbar.js'
import Card from './components/card'
import data from './data.js'

function App() {



  const dataReact = data.map(e => {
    return (
        <Card 
        key = {e.title}
        item = {e} />
    )
})
  return (
    <div className="App">
      
      <Navbar />
      {dataReact}
    </div>
  );
}

export default App;
