import React from 'react'

export function Table (props) {
  const { data, removeItem } = props

  const body = data.map(item => <tr key={item.bankId}>
    <td>{item.id}</td>
    <td>{item.amount}</td>
    <td>{item.bankId}</td>
    <td className="pointer" onClick={() => removeItem(item.id)}>X</td>
  </tr>)

  return !data.length ? <h5 className="text-center">No data...</h5>
    : <table className="table">
      <thead>
        <tr>
          <th scope="col"><b className="font-weight-bold">Id</b></th>
          <th scope="col"><b className="font-weight-bold">Amount</b></th>
          <th scope="col"><b className="font-weight-bold">Bank ID</b></th>
          <th scope="col"><b className="font-weight-bold">Remove</b></th>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
}
