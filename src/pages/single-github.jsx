import React from 'react'

const SingleGithub = ({location}) => {

  console.log(location.state, 'location.state')
    return (
    <div>
      <h2>{location.state.repo?.name}</h2>
      <table border={1}>
        <thead>
          <th>
            <tr>Repo Name</tr>
          </th>
          <th>
            <tr>Repo URL</tr>
          </th>
          <th>
            <tr>Visibility</tr>
          </th>
          <th>
            <tr>language</tr>
          </th>
        </thead>
        <tbody>
          <td>
            <tr>{location.state.repo?.name}</tr>
          </td>
          <td>
            <tr>{location.state.repo?.html_url}</tr>
          </td>
           <td>
            <tr>{location.state.repo?.visibility}</tr>
          </td>
          <td>
            <tr>{location.state.repo?.language}</tr>
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default SingleGithub
