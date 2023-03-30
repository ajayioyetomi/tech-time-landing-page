import { Home,Coming } from "./views"
import { Header,Footer } from "./components";
import {Routes,Route} from 'react-router-dom';

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/*" element={<Coming />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
