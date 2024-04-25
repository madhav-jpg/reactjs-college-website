/**
 * Project - 2 : ReactJS API Consume - getAll, getByID, Add, Edit, Delete (CRUD Operation)
 * Task 1 : Students
 * @author Madhav Kotecha
 * Enrolment No. : 210540107501
 * Roll No. : 437
 * Class : BCZ-2
 * Date : 8th September 2022
 */

import { Link } from "react-router-dom";
import { styles } from "./styles";
export const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark fixed-top" style={styles}>
      <div class="container-fluid">
        <Link to="./" class="navbar-brand" style={{ color: "red" }}>
          <img
            src="https://darshan.ac.in/Content/media/DU_Logo.svg"
            style={{ width: "10rem" }}
            alt=""
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="mynavbar"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="./" style={{ color: "white" }}>
                <b>Home</b>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="./about" style={{ color: "white" }}>
                <b>About</b>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="./contact" style={{ color: "white" }}>
                <b>Contact</b>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="./students" style={{ color: "white" }}>
                <b>Students</b>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="./student/add"
                style={{ color: "white" }}
              >
                <b>Add Student</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
