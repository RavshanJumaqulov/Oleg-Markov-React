import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className='row d-flex justify-content-center'>
        <div className='col-9 row  mt-4'>
          <header className='header col-12 d-flex justify-content-center align-items-center'>
            <a href="" className='olegMarkov'>Олег Марков</a>
          </header>
          <div className='col-12 mt-1 menu'>
            <ul className='list-unstyled d-flex flex-row w-100 justify-content-center'>
              <li className='mx-2'>
                Главная
              </li>
              <li className='mx-3'>
                Обо мне
              </li>
              <li className='mx-2'>
                Связаться
              </li>
            </ul>
          </div>
          <div className='col-12 row contentImage mt-4'>
            <div className='col-4'>
              <div className='item'>
                <img className=' d-flex flex-column' src="https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg" alt="" />
              </div>
              
              <div className='item'> 
                <img className=' d-flex flex-column' src="https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_3eea4c192eed4667a602ead5652459c5.jpg" alt="" />  
              </div>
              
              <div className='item'>
                <img className=' d-flex flex-column' src="https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b9747effc3074458a295cf5674f8c73c.jpg" alt="" />
              </div>
              
            </div>
            <div className='col-4'>
              <div className='item'>
                <img className=' d-flex flex-column' src="https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_378,h_566,al_c,q_80,usm_0.66_1.00_0.01/d78df6_9f4f79dd27814710b261e3acb931156e.jpg" alt="" />
              </div>
              <div className='item'>
                <img className=' d-flex flex-column' src="https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b572be78b8984e2db58978eb21e433d7.jpg" alt="" />  
              </div>
              <div className='item'>
                <img className=' d-flex flex-column' src="https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_394a136048754355ad8432b30522c761.jpg" alt="" />
              </div>
            </div>
            <div className='col-4'>
              <div className='item'>
                <img className=' d-flex flex-column' src="https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg" alt="" />
              </div>
              <div className='item'>
                <img className=' d-flex flex-column' src="https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_afe9335eb67640c988d648f7671308e5.jpg" alt="" />  
              </div>
              <div className='item'>
                <img className=' d-flex flex-column' src="https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <footer className='col-12 d-flex justify-content-center align-items-center row  p-5'>
          <div className='col-12 d-flex justify-content-center align-items-center footerInfo'>
          © Олег Марков 2022. Сайт создан на &nbsp;<a href="https://t.me/raximov_nomonjon" target="_blank">Nomonjon Raximov</a>
          </div>
          <div className='col-12 d-flex justify-content-center align-items-center'>
            <ul className='list-unstyled d-flex flex-row'>
              <li className='icons'>
                <a href="">
                  <img src="https://static.wixstatic.com/media/8d2c2a4846503b9067e2fd2f590445c2.wix_mp/v1/fill/w_24,h_24,al_c,usm_0.66_1.00_0.01,enc_auto/8d2c2a4846503b9067e2fd2f590445c2.wix_mp" alt="" />
                </a>
              </li>
              <li className='icons'>
                <a href="">
                  <img src="https://static.wixstatic.com/media/f33e5c8ff44ad726a15419f6ff97b3fd.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f33e5c8ff44ad726a15419f6ff97b3fd.png" alt="" />
                </a>
              </li>
              <li className='icons'>
                <a href="">
                  <img src="https://static.wixstatic.com/media/fe7017590fbd384c7502a64601c7b444.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe7017590fbd384c7502a64601c7b444.png" alt="" />
                </a>
              </li>
              <li className='icons'>gi
                <a href="">
                  <img src="https://static.wixstatic.com/media/a0a5617532c029a9bcc4b6490606cc49.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a0a5617532c029a9bcc4b6490606cc49.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
