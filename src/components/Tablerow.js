import React from "react";

function Tablerow(props) {
  return (
    <tr>
      <td><img src={props.avatar} /></td>
      <td>{props.firstname}</td>
      <td>{props.lastname}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default Tablerow;