import './app-style.css'
import RootLayout from "./Shared/Layouts/RootLayout";
import { Routes, Route } from 'react-router-dom'
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={ <Welcome /> } />
        <Route path="/Home" element={ <Home /> } />
      </Routes>
    </RootLayout>
  )
}

export default App;