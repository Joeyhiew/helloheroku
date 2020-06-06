import React from 'react'
import './style.css'

const checkNull =(repos)=> {
  if (repos.length===0){
    return true
  }
  else{
    return false
  }
}

const Repos = ({ repos }) => {
  return (
    <div>
      <center><h1>Repositories</h1></center>
      {checkNull(repos)?
        <p>No Repositories</p>
        :
        <div>
          

          {repos.map((repo) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{repo.name}</h5>
                {console.log(repo.name)}
              </div>
            </div>
          ))}
        </div>
        }

    </div>
  )
};

export default Repos;