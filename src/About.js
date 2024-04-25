/**
 * Project - 2 : ReactJS API Consume - getAll, getByID, Add, Edit, Delete (CRUD Operation)
 * Task 1 : Students
 * @author Madhav Kotecha
 * Enrolment No. : 210540107501
 * Roll No. : 437
 * Class : BCZ-2
 * Date : 8th September 2022
 */

export const About = () => {
  return (
    <fieldset class="border m-4">
      <h1 align="center">Vidyarthi</h1>
      <hr />
      <ol>
        <dl>
          <li>
            <dt>View student list</dt>
            <dd>You can view all the students available in form of list.</dd>
          </li>
          <li>
            <dt>View details of perticular student</dt>
            <dd>
              You can view all details of perticular students like name, image,
              email, mobile, parent mobile number and their respective
              department.
            </dd>
          </li>
          <li>
            <dt>Add new student details</dt>
            <dd>
              You can add new student details easily by filling all the details
              related to student.
            </dd>
          </li>
          <li>
            <dt>Update student details</dt>
            <dd>
              If you find any wrong information about student you can easily
              update their details.
            </dd>
          </li>
          <li>
            <dt>Delete student record from list</dt>
            <dd>
              If student need no longer to be included in list you can easily
              remove from student list.
            </dd>
          </li>
        </dl>
      </ol>
    </fieldset>
  );
};
