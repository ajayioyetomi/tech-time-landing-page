import { Home } from "./views"
import { Header,Footer } from "./components";
import {Routes,Route} from 'react-router-dom';
function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
