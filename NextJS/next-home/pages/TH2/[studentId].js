import { useRouter } from "next/router";
import React from "react";
import getStudents from "../api/listStudents";
function studentId() {
  const listStudents = getStudents();
  const router = useRouter();
  const { studentId } = router.query;
  const [student] = listStudents.filter((student) => student.id == studentId);
  return (
    <div>
      <h1>{student?.id}</h1>
      <p>{student?.name}</p>
    </div>
  );
}

export default studentId;
