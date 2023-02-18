import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import data from "./data";
import TABLE from "./TABLE";

function CustomSearch() {
  const [property, setProperty] = useState([]);

  //for different filters we have to maintain some state
  const [filterProperty, setFilterProperty] = useState([]);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  function handleSearch() {
    //here we can get what selected in the filter
    // console.log(price, location, type);

    const year = Number(date.substr(0, 4));
    const month = Number(date.substr(5, 2));
    const day = Number(date.substr(8, 2));

  //  console.log(year, month, day);
    if (price) {
      var maxPrice = Number(price.substr(1, price.length - 1));
    }
    const newProperty = property
      .filter(
        (item) => item.location === (location === "" ? item.location : location)
      )
      .filter((item) => item.type === (type === "" ? item.type : type))
      .filter(
        (item) =>
          Number(item.price.substr(1, item.price.length - 1)) <=
          (price === ""
            ? Number(item.price.substr(1, item.price.length - 1))
            : maxPrice)
      )
      .filter((item) => {
        const itemYear = item.availableFrom.getFullYear();
        const itemMonth = item.availableFrom.getMonth() + 1;
        const itemDay = item.availableFrom.getDate();
        return itemYear <= year && itemMonth <= month && itemDay <= day;
      });
    setFilterProperty(newProperty);
  }

  useEffect(() => {
    setProperty(data);
    setFilterProperty(data);
  }, []);

  return (
    <div>
      <Table>
        <tr>
          <td>
            <select name="Type" onChange={(e) => setType(e.target.value)}>
              <option value="">--Prop-Type--</option>
              <option value="Home 1-BHK">Home 1-BHK</option>
              <option value="Home 2-BHK">Home 2-BHK</option>
              <option value="Home 3-BHK">Home 3-BHK</option>
              <option value="Office">Office</option>
            </select>
          </td>
          <td>
            <select name="Price" onChange={(e) => setPrice(e.target.value)}>
              <option value="">--Max-Price--</option>
              <option value="₹15000">₹15000</option>
              <option value="₹20000">₹20000</option>
              <option value="₹30000">₹30000</option>
              <option value="₹50000">₹50000</option>
              <option value="₹80000">₹80000</option>
            </select>
          </td>
          <td>
            <select
              name="Location"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">--Location--</option>
              <option value="Goregaon">Goregaon</option>
              <option value="Andheri West">Andheri West</option>
              <option value="Powai">Powai</option>
              <option value="Navi Mumbai">Navi Mumbai</option>
            </select>
          </td>
          <td>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </td>

          <td>
            <button type="submit" onClick={handleSearch}>
              Search
            </button>
          </td>
        </tr>
      </Table>
      <TABLE filterProperty={filterProperty} />
    </div>
  );
}
export default CustomSearch;
