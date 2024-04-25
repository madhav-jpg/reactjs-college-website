/**
 * Project - 2 : ReactJS API Consume - getAll, getByID, Add, Edit, Delete (CRUD Operation)
 * Task 1 : Students
 * @author Madhav Kotecha
 * Enrolment No. : 210540107501
 * Roll No. : 437
 * Class : BCZ-2
 * Date : 8th September 2022
 */

import { styles } from "./styles";
export const Footer = () => {
  return (
    <footer class="text-center text-white" style={styles}>
      <div class="container p-4 pb-0">
        <section class="">
          <form action="">
            <div class="row d-flex justify-content-center" style={styles}>
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div class="col-md-5 col-12">
                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div class="col-auto">
                <button type="submit" class="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div
        class="text-center p-3"
        style={{ background_color: "rgba(0, 0, 0, 0.2);" }}
      >
        © 2022 All Rights Reserved ~ <b>Madhav Kotecha [210540107501]</b> <br />
        Made for submission purpose of React Workshop
      </div>
    </footer>
  );
};
