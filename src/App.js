import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([{}]);

  return (
    <div className="App">
      <div id="loading-container"></div>
      <table>
        <tr>
          <th>
            ID
          </th>
          <th>
            CITY NAME
          </th>
          <th>
            COUNTRY NAME
          </th>
          <th>
            POPULATION
          </th>
          </tr>
          {
            <tr>
              <td>1</td>
              <td>delhi</td>
              <td>india</td>
              <td>20 Lakhs</td>

            </tr>
          }
          
          <tr>
              <td>2</td>
              <td>banglore</td>
              <td>indponesoia</td>
              <td>30 Lakhs</td>

            </tr>
            <tr>
              <td>3</td>
              <td>chittoor</td>
              <td>urope</td>
              <td>40 Lakhs</td>

            </tr>
            <tr>
              <td>4</td>
              <td>delhi</td>
              <td>india</td>
              <td>50 Lakhs</td>

            </tr>
            <tr>
              <td>5</td>
              <td>delhi</td>
              <td>india</td>
              <td>60 Lakhs</td>

            </tr>
            <tr>
              <td>6</td>
              <td>delhi</td>
              <td>india</td>
              <td>65 Lakhs</td>

            </tr>
            <tr>
              <td>7</td>
              <td>delhi</td>
              <td>india</td>
              <td>70 Lakhs</td>

            </tr>
            <tr>
              <td>8</td>
              <td>delhi</td>
              <td>india</td>
              <td>75 Lakhs</td>

            </tr>
            <tr>
              <td>9</td>
              <td>delhi</td>
              <td>india</td>
              <td>80 Lakhs</td>

            </tr>
            <tr>
              <td>10</td>
              <td>delhi</td>
              <td>india</td>
              <td>90 Lakhs</td>

            </tr>

      </table>

      <div>
        <ButtonComponent id="SORT_BUTTON" title={`Sort by Increasing Population`} />
        <ButtonComponent title="PREV" id="PREV" />
        <ButtonComponent id="NEXT" title="NEXT" />
      </div>
    </div>
  );
}
