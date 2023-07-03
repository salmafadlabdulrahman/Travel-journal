import NavBar from './NavBar';
import MainContent from './MainContent';
import data from '../data';
import './App.css'


export default function App() {
  const cities = data.map(city => {
    
    return (
      <MainContent
        key={city.id}
        city={city}
       />
    )
    
  })

  return (
    <div>
      <NavBar />
      <section>
        {cities}
      </section>
      
    </div>
  )
}
