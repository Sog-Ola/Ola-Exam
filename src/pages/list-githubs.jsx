import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/card.css'
import About from '../component/about.jsx'

const ListGithub = () => {
  const [page, setPage] = useState(1)
  const [allRepositories, setAllRepositories] = useState([])
  const [user, setUser] = useState({})
  const LIMIT = 2

  useEffect(() => {
    const fectchRepositories = async () => {
      const response = await fetch(
        `https://api.github.com/users/Sog-Ola/repos?per_page=${LIMIT}&page=${page}`)

      let data = await response.json()
      if (data.length > 0) setAllRepositories(data)
    }
    fectchRepositories()
  }, [page])
  
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://api.github.com/users/Sog-Ola`
      )
      let data = await response.json()
      setUser(data);
    }
    fetchUser()
  }, [])


  return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className='about_container'>
        <img src={user.avatar_url}  />
        <About title='Name' description={user.name} />
        <About title='Location' description={user.location} />
        <About title='Bio' description={user.bio} />
        <About title='Public Repo Count' description={user.public_repos} />
        </div>
        <div>
          {allRepositories.map(repo => (
            <div key={repo.id} className='card'>

              <Link
                className='repo_link'
                key={repo.id}
                to={{
                  pathname: `/repository/${repo.id}`,
                  state: {
                    repo
                  }
                }}
              >
                {repo.name}
              </Link>
              <a href={repo.html_url} target="_blank">Visit Repo!</a>
            </div>
          ))}
        </div>
        <div className='footer'>
        {page > 1 && <p onClick={() => setPage(prev => (prev === 1 ? 1 : prev - 1))}>prev</p>}
        <p><strong>{page}</strong></p>
        <p onClick={() => setPage(prev => prev + 1)}>next</p>
        </div>
      </div>
  )
}

export default ListGithub
