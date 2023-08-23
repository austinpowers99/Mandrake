import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import MyPlantsPage from '../MyPlantsPage/MyPlantsPage';
import NewPlantPage from '../NewPlantPage/NewPlantPage';
import PlantsCategoryPage from '../PlantsCategoryPage/PlantsCategoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path='/' element={<HomePage />} />
              <Route path='/plants' element={<MyPlantsPage />} />
              <Route path='/plants/new' element={<NewPlantPage />} />
              <Route path='/categories' element={<PlantsCategoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
