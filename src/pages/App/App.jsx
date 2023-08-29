import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import MyPlantsPage from '../MyPlantsPage/MyPlantsPage';
import NewPlantPage from '../NewPlantPage/NewPlantPage';
import PlantsCategoryPage from '../PlantsCategoryPage/PlantsCategoryPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import * as plantAPI from '../../utilities/plant-api';
import handleAuthSuccess from '../AuthPage/AuthPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [plants, setPlants] = useState([]);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  useEffect(function () {
    async function getPlants() {
        const plants = await plantAPI.getAll();
        console.log(plants)
        setPlants(plants);
        }
    getPlants();
}, []);

  return (
    <div>
    <main className="App">
      <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories' element={<PlantsCategoryPage />} />
          <Route path='/categories/:id' element={<DetailsPage />} />
          {user ? (
            <>
              <Route path='/plants/new' element={<NewPlantPage setPlants={addPlant}/>} />
              <Route path='/plants' element={<MyPlantsPage plants={plants}/>} />
            </>
          ) : (
            <>
            {/* // If the user is not authenticated, render the AuthPage */}
            <Route path='/auth' element={<AuthPage setUser={setUser} />} />
            </>
          )}
        </Routes>
      </main>
      </div>
    );
  }
