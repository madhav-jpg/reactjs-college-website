/**
 * Project - 2 : ReactJS API Consume - getAll, getByID, Add, Edit, Delete (CRUD Operation)
 * Task 1 : Students
 * @author Madhav Kotecha
 * Enrolment No. : 210540107501
 * Roll No. : 437
 * Class : BCZ-2
 * Date : 8th September 2022
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Students.css";

export const Students = () => {
  const styles = {
    width: "18rem"
  };
  const [students, setStudents] = useState([{}]);
  useEffect(() => {
    fetch("https://62d8f9fb9088313935980fca.mockapi.io/api/v1/Students/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setStudents(res);
      });
  }, []);
  return (
    <div class="row" style={{ marginLeft: "5%", marginRight: "5%" }}>
      {students.map((student) => {
        const link = "../student/" + student.id;
        return (
          <div class="card card-sl col-md-3 m-4 card1" style={styles}>
            <img
              class="card-img-top"
              src={student.StudentImage}
              alt="Not Found"
            />
            <div class="card-body">
              <h5 class="card-title">{student.StudentName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {student.StudentDepartment}
              </h6>
              <Link to={link} class="card-button1">
                {" "}
                View Full Profile
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
