import React from 'react';
import {Link} from 'react-router-dom';
function Home() {
  return (<div>
    <div className='wrapper center'>
      <h2>
        Welcome to Public API Explorer
      </h2>
      <h3>
        Select a Public API Provider
      </h3>
      <Link to='/NASA'>
        <div className='half-wrap card'>
          <img className="img-contain" alt='NASA' src='/nasa.png'/>
        </div>
      </Link>
      <Link to='/Jobs'>
        <div className='half-wrap card'>
          <img className="img-contain" alt='University of Chicago' src='/UoC.jpeg'/>
        </div>
      </Link>
    </div>
  </div>)
}
export default Home
