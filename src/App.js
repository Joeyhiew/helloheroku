import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch , connect } from 'react-redux';
import { searchUsername , fetchUserRepo , fetchUserOrg } from './actions/searchAction'
import { checkUser } from './actions/searchUser'
import Repos from './components/repo';
import Orgs from './components/org';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from './components/spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub , } from '@fortawesome/free-brands-svg-icons';
import './App.css'

function App({text, loading, error, repos, userFound, orgs}) {

  const [found, setFound] = useState(false)
  const handleSearch =(e)=> {
    e.preventDefault();
    dispatch(checkUser(text))
    dispatch(fetchUserRepo(text))
    dispatch(fetchUserOrg(text))
  }

  const checkFound =(userFound)=> {
    if (userFound===true){
      return true
    }
    else{
      return false
    }
  }

  const dispatch = useDispatch();

  return (
    <div className = 'main_container'>
      <div className = 'container'>
        <div className='iconDiv'><FontAwesomeIcon icon={faGithub}/></div>
      
        <h1>Github Search</h1>
        <Form inline onSubmit = {(e) => handleSearch(e)}>
          <FormControl type="text" placeholder="Search Username" className="mr-sm-2"
          onChange = {e => dispatch(searchUsername(e.target.value))} />
          <Button type = "button" variant="outline-success" onClick = {(e) => handleSearch(e)}>Search</Button>
        </Form>

         {checkFound(userFound)?
            <div className='info_container'>
                <div className='repo_container'><Repos repos={repos} /></div>
                <div className='org_container'><Orgs orgs={orgs}/></div>
            </div>
            :
            null
          }

          {loading?
            <Spinner/>
          :
            null
          }

          {error?
          
          <Alert variant='warning'>
            User not found!
          </Alert>
          :
          null
          }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  text: state.user.text,
  loading: state.user.loading,
  error: state.user.error,
  repos: state.user.repo,
  userFound: state.user.userFound,
  orgs: state.user.org,
})

export default connect(mapStateToProps)(App);