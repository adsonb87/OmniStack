import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (postion) => {
        const { latitude, longitude} = postion.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) =>{
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);
  
  async function handleAddDev(e){
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number"
                name="latitude"
                id="latitude"
                required value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number"
                name="longitude"
                id="longitude"
                required value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/11176895?s=460&v=4" alt="adsonb87"/>
              <div className="user-info">
                <strong>Adson B de Souza</strong>
                <span>ReactJS, React, Node.js</span>
              </div>
            </header>
            <p>Analista de Sistemas, RM Totvs, Backoffice, Gestão de Compras, Estoque e Faturamento</p>
            <a href="https://github.com/adsonb87">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/11176895?s=460&v=4" alt="adsonb87"/>
              <div className="user-info">
                <strong>Adson B de Souza</strong>
                <span>ReactJS, React, Node.js</span>
              </div>
            </header>
            <p>Analista de Sistemas, RM Totvs, Backoffice, Gestão de Compras, Estoque e Faturamento</p>
            <a href="https://github.com/adsonb87">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/11176895?s=460&v=4" alt="adsonb87"/>
              <div className="user-info">
                <strong>Adson B de Souza</strong>
                <span>ReactJS, React, Node.js</span>
              </div>
            </header>
            <p>Analista de Sistemas, RM Totvs, Backoffice, Gestão de Compras, Estoque e Faturamento</p>
            <a href="https://github.com/adsonb87">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/11176895?s=460&v=4" alt="adsonb87"/>
              <div className="user-info">
                <strong>Adson B de Souza</strong>
                <span>ReactJS, React, Node.js</span>
              </div>
            </header>
            <p>Analista de Sistemas, RM Totvs, Backoffice, Gestão de Compras, Estoque e Faturamento</p>
            <a href="https://github.com/adsonb87">Acessar perfil no Github</a>
          </li>
          
        </ul>
      </main>
    </div>
  );
}

export default App;
