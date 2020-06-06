import React from 'react'
import './style.css'

const checkNull =(orgs)=> {
  if (orgs.length===0){
    return true
  }
  else{
    return false
  }
}

const Orgs = ({ orgs }) => {
  return (
    <div>
      <center><h1>Organisations</h1></center>
      {checkNull(orgs)? 
        <p>No Organisations</p>
        :
        <div>
        

        {orgs.map((org) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{org.login}</h5>
              {console.log(org.name)}
            </div>
          </div>
        ))}
        </div>
        }
      {/* <center><h1>Organisations</h1></center>

      {orgs.map((org) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{org.login}</h5>
            {console.log(org.name)}
          </div>
        </div>
      ))} */}
    </div>
  )
};

export default Orgs;