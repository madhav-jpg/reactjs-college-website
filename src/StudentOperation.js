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
import { useNavigate, useParams } from "react-router-dom";

export const StudentOperation = () => {
  const [student, setStudent] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (params.id > 0)
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
    <form style={{ margin: "auto", width: "50%" }}>
      <center>
        <h1>
          {params.id > 0 && "Edit "}
          {!(params.id > 0) && "Add "} Student
        </h1>
      </center>
      <hr />
      <div class="form-group">
        <label class="form-label" for="inputName">
          Student Name
        </label>
        <input
          type="text"
          id="inputName"
          class="form-control"
          value={student.StudentName}
          onChange={(e) => {
            setStudent({ ...student, StudentName: e.target.value });
          }}
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="inputDepartment">
          Student Department
        </label>
        <input
          type="text"
          id="inputDepartment"
          class="form-control"
          value={student.StudentDepartment}
          onChange={(e) => {
            setStudent({ ...student, StudentDepartment: e.target.value });
          }}
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="inputImage">
          Student Image URL
        </label>
        <input
          type="url"
          id="inputImage"
          class="form-control"
          value={student.StudentImage}
          onChange={(e) => {
            setStudent({ ...student, StudentImage: e.target.value });
          }}
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="inputMobile">
          Student Mobile
        </label>
        <input
          type="tel"
          id="inputMobile"
          class="form-control"
          value={student.StudentMobile}
          onChange={(e) => {
            setStudent({ ...student, StudentMobile: e.target.value });
          }}
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="inputParentMobile">
          Student Parent Mobile
        </label>
        <input
          type="tel"
          id="inputParentMobile"
          class="form-control"
          value={student.StudentParentMobile}
          onChange={(e) => {
            setStudent({ ...student, StudentParentMobile: e.target.value });
          }}
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="inputEmail">
          Student Email
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          value={student.StudentEmail}
          onChange={(e) => {
            setStudent({ ...student, StudentEmail: e.target.value });
          }}
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="inputAchievement">
          Student Achievement
        </label>
        <textarea
          id="inputAchievement"
          class="form-control"
          value={student.StudentAchievement}
          onChange={(e) => {
            setStudent({ ...student, StudentAchievement: e.target.value });
          }}
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="inputActivity">
          Student Activity
        </label>
        <textarea
          id="inputActivity"
          class="form-control"
          value={student.StudentActivity}
          onChange={(e) => {
            setStudent({ ...student, StudentActivity: e.target.value });
          }}
        />
      </div>
      <br />
      <center>
        <div class="form-group">
          <button
            class="btn btn-primary btn-block mb-4"
            onClick={(e) => {
              e.preventDefault();
              if (params.id > 0) {
                fetch(
                  "https://62d8f9fb9088313935980fca.mockapi.io/api/v1/Students/" +
                    params.id,
                  {
                    method: "PUT",
                    body: JSON.stringify(student),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }
                ).then(() => {
                  navigate("/students");
                });
              } else {
                fetch(
                  "https://62d8f9fb9088313935980fca.mockapi.io/api/v1/Students/",
                  {
                    method: "POST",
                    body: JSON.stringify(student),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }
                ).then(() => {
                  navigate("/students");
                });
              }
            }}
          >
            {params.id > 0 && "Edit "}
            {!(params.id > 0) && "Add "}
          </button>
        </div>
      </center>
    </form>
  );
};
