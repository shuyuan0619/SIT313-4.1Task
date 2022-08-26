import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import SearchBar from './SearchBar';
import Article from './Article';
import Tutorial from './Tutorial';
import SignUp from './SignUp';
import End from './End';

ReactDOM.render(
  <body>
    <SearchBar />
    <div>
      <img className='image' src={'https://picsum.photos/id/1047/200/300'} />
    </div>
    <p className='feature'>Featured Acticles</p>
    <Article />
    <button className='botton'>See all articles</button>
    <p className='feature'>Featured Tutorials</p>
    <Tutorial />
    <button className='botton'>See all tutortials</button>
    <SignUp />
    <End />
  </body>,

  document.getElementById('root')
);
