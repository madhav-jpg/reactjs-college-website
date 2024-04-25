/**
 * Project - 2 : ReactJS API Consume - getAll, getByID, Add, Edit, Delete (CRUD Operation)
 * Task 1 : Students
 * @author Madhav Kotecha
 * Enrolment No. : 210540107501
 * Roll No. : 437
 * Class : BCZ-2
 * Date : 8th September 2022
 */

import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const Layout = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Outlet />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
