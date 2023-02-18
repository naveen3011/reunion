import React from "react";
import Table from "react-bootstrap/Table";
import "./Table.css";
function TABLE({ filterProperty }) {
  console.log(filterProperty);

  return (
    <div className="grid-container">
      {filterProperty.map((item) => {
        return (
          <article className="grid-item">
            <img src={item.image} alt={item.type} className="grid-photo" />
            <h4>{item.type}</h4>
            <p>{item.location}</p>
            <p>{item.price}</p>
          </article>
        );
      })}
    </div>
  );
}
export default TABLE;

{
  /* <Table striped bordered hover>
<thead>
  <tr>
    <th>id</th>
    <th>Type</th>
    <th>Location</th>
    <th>Price</th>
  </tr>
</thead>
<tbody>
  {filterProperty && filterProperty.length > 0 ? (
    filterProperty.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.type}</td>
        <td>{item.location}</td>
        <td>{item.price}</td>
      </tr>
    ))
  ) : (
    <h3> No data </h3>
  )}
</tbody>
</Table> */
}
