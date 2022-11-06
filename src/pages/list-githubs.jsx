import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ListGithub = () => {
  const [page, setPage] = useState(1)
  const [allRepositories, setAllRepositories] = useState([])
  const LIMIT = 5

  useEffect(() => {
    const fectchRepositories = async () => {
      const response = await fetch(
        `https://api.github.com/users/suulola/repos?per_page=${LIMIT}&page=${page}`
      )

      let data = await response.json()
      if (data.length > 0) setAllRepositories(data)
    }
    fectchRepositories()
  }, [page])

  console.log({ allRepositories })

  return (
    <div>
      <div>
        <div>
          {allRepositories.map(repo => (
            <div key={repo.id}>
              <Link
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
            </div>
          ))}
        </div>
        <p onClick={() => setPage(prev => (prev === 1 ? 1 : prev - 1))}>prev</p>
        <p>{page}</p>
        <p onClick={() => setPage(prev => prev + 1)}>next</p>
      </div>
    </div>
  )
}

export default ListGithub
