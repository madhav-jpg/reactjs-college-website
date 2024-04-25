/**
 * Project - 2 : ReactJS API Consume - getAll, getByID, Add, Edit, Delete (CRUD Operation)
 * Task 1 : Students
 * @author Madhav Kotecha
 * Enrolment No. : 210540107501
 * Roll No. : 437
 * Class : BCZ-2
 * Date : 8th September 2022
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Layout } from "./Layout";
import "./index.css";
import { Students } from "./Students";
import { Student } from "./Student";
import { StudentOperation } from "./StudentOperation";
import { Contact } from "./Contact";
import { About } from "./About";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/student/:id" element={<Student />}></Route>
          <Route path="/student/add" element={<StudentOperation />}></Route>
          <Route
            path="/student/edit/:id"
            element={<StudentOperation />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
