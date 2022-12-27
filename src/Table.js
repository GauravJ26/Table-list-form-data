import React, { useState } from "react";
import StudentForm from "./Forms";
import jsonData from "./data.json";

function TableData() {
  const [studentData, setStudentData] = useState(jsonData);

  const tableRows = studentData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };

  return (
    <div>


<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
    <h3 className="bg-light">Type Something in the box and click on button </h3>   
     <div class="p-3 border bg-light">
    <StudentForm func={addRows} />

     </div>
    </div>
    <div class="col">
<h5 className="bg-light">The values you wrote will be displayed in the table list </h5>
      <div class="p-3 border bg-light">   
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>City</th>
                </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>

      </div>
    </div>   </div>

    </div>


    </div>
  );
}

export default TableData;
