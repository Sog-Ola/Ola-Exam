import React from 'react'

const SingleGithub = props => {
  console.log(props.location.state.repo)
  return (
    <div>
      <h2>SingleGithub</h2>
      <table border={1}>
        <thead>
          <th>
            <tr>Repo Name</tr>
          </th>
          <th>
            <tr>Repo URL</tr>
          </th>
        </thead>
        <tbody>
          <td>
            <tr>{props.location.state.repo?.name}</tr>
          </td>
          <td>
            <tr>{props.location.state.repo?.html_url}</tr>
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default SingleGithub
