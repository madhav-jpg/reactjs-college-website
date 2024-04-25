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
import { Link, useNavigate, useParams } from "react-router-dom";

export const Student = () => {
  const buttonStyle = {
    width: "10%",
    margin: "auto"
  };
  const innerButtonStyle = {
    float: "right",
    width: "10%"
  };
  const params = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  useEffect(() => {
    fetch(
      "https://62d8f9fb9088313935980fca.mockapi.io/api/v1/Students/" +
        params.id,
      { method: "GET" }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setStudent(res);
      });
  }, []);
  return (
    <div class="row m-5">
      <div className="card col-4" style={{ width: "18rem", padding: "15px" }}>
        <img
          className="card-img-top"
          src={student.StudentImage}
          alt="Not Found"
        />
        <div className="card-body">
          <h5 className="card-title">{student.StudentName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {student.StudentDepartment}
          </h6>
        </div>
        <h3 className="card-title" style={{ color: "red", fontWeight: "bold" }}>
          Profile
        </h3>
        <hr />

        <p className="card-text">
          <i class="fa fa-phone" aria-hidden="true"></i> &emsp; Student :{" "}
          {student.StudentMobile}
          <br />
          &emsp;&emsp;&ensp;Parent : {student.StudentParentMobile}
        </p>
        <p className="card-text">
          <b>
            <i class="fa fa-envelope" aria-hidden="true"></i> &emsp;
          </b>{" "}
          {student.StudentEmail}
        </p>
      </div>
      <div className="card col-10">
        <div className="card-body" style={{ margin: "3%" }}>
          <h3
            className="card-title"
            style={{ color: "red", fontWeight: "bold" }}
          >
            Achievements
          </h3>
          <hr />
          <p className="card-text">
            <b>
              <i class="fa fa-trophy" aria-hidden="true"></i> &emsp;
            </b>{" "}
            {student.StudentAchievement}
          </p>
          <br />
          <h3
            className="card-title"
            style={{ color: "red", fontWeight: "bold" }}
          >
            Activities
          </h3>
          <hr />
          <p className="card-text">
            <b>
              <i class="fa fa-tasks" aria-hidden="true"></i> &emsp;
            </b>{" "}
            {student.StudentActivity}
          </p>
          <button
            class="card-button1"
            style={innerButtonStyle}
            onClick={(e) => {
              e.preventDefault();
              fetch(
                `https://62d8f9fb9088313935980fca.mockapi.io/api/v1/Students/${params.id}`,
                { method: "DELETE" }
              ).then((res) => {
                navigate("/students");
              });
            }}
          >
            Delete
          </button>

          <button
            class="card-button1"
            style={innerButtonStyle}
            onClick={(e) => {
              e.preventDefault();
              navigate(`../student/edit/${params.id}`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
      <Link to="../students" class="card-button1" style={buttonStyle}>
        <b>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </b>
        &emsp;Back
      </Link>
    </div>
  );
};
