import React from "react";
import { useRouter } from "next/router";
import getStudents from "../api/listStudents";

function students() {
  const listStudent = getStudents();
  const router = useRouter();
  const handleClick = (studentId) => {
    router.push(`/TH2/${studentId}`);
  };
  return (
    <div>
      <h1>List Students</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listStudent?.map((student) => (
            <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td colSpan="2">{student.name}</td>
              <td onClick={() => handleClick(student.id)}>Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default students;
