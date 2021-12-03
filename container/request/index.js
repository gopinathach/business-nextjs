import React from "react";
import "antd/dist/antd.css";
import styles from "./styles.module.scss";
import Image from "next/image";
import search from "../../public/search1.png";

export default function RequestContainer() {
  return (
    <div className={styles.request}>
      <h2 className={styles.title}>Leave Request</h2>

      <div className={styles.line}></div>

      <div className={styles.content}>
        <div className={styles.content_find}>
          <div className={styles.content_left}>
            <div className={styles.search_box}>
              <Image src={search} width={15} height={15} />
              <input type="text" className="input" placeholder="Search.." />
            </div>
          </div>
          <div className={styles.content_right}>
            <p>Filter</p>
            <div className={styles.dropdown}>
              <span className={styles.focus}></span>
              <select id="standard-select">
                <option value="Option 1">All</option>
                <option value="Option 2">High</option>
                <option value="Option 3">Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content_table">
          <table className="styled_table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Priority</th>
                <th>Title</th>
                <th>Iniated Date</th>
                <th>Status</th>
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Request ID">0019001</td>
                <td data-label="Priority">Low</td>
                <td data-label="Title">New data center , Qatar</td>
                <td data-label="Iniated Date">17/12/2020</td>
                <td data-label="Status">
                  <button className="submit">Submited</button>
                </td>
                {/* <td data-label="Actions">
                  <a style={{ marginRight: "10px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-toggles"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bounding-box"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                    </svg>
                  </a>
                </td> */}
              </tr>
              <tr>
                <td data-label="Request ID">0019001</td>
                <td data-label="Priority">Low</td>
                <td data-label="Title">New data center , Romania</td>
                <td data-label="Iniated Date">17/12/2020</td>
                <td data-label="Status">
                  <button className="submit">Submited</button>
                </td>
                {/* <td data-label="Actions">
                  <a style={{ marginRight: "10px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-toggles"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bounding-box"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                    </svg>
                  </a>
                </td> */}
              </tr>
              <tr>
                <td data-label="Request ID">0019001</td>
                <td data-label="Priority">Low</td>
                <td data-label="Title">New Electric center , Qatar</td>
                <td data-label="Iniated Date">17/12/2020</td>
                <td data-label="Status">
                  <button className="submit">Submited</button>
                </td>
                {/* <td data-label="Actions">
                  <a style={{ marginRight: "10px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-toggles"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bounding-box"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                    </svg>
                  </a>
                </td> */}
              </tr>
              <tr>
                <td data-label="Request ID">0019001</td>
                <td data-label="Priority">Low</td>
                <td data-label="Title">New Electric center , Ukraine</td>
                <td data-label="Iniated Date">17/12/2020</td>
                <td data-label="Status">
                  <button className="submit">Submited</button>
                </td>
                {/* <td data-label="Actions">
                  <a style={{ marginRight: "10px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-toggles"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bounding-box"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                    </svg>
                  </a>
                </td> */}
              </tr>
              <tr>
                <td data-label="Request ID">0019001</td>
                <td data-label="Priority">Low</td>
                <td data-label="Title">New Data center , Ukraine</td>
                <td data-label="Iniated Date">17/12/2020</td>
                <td data-label="Status">
                  <button className="submit">Submited</button>
                </td>
                {/* <td data-label="Actions">
                  <a style={{ marginRight: "10px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-toggles"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bounding-box"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                    </svg>
                  </a>
                </td> */}
              </tr>
              <tr>
                <td data-label="Request ID">0019001</td>
                <td data-label="Priority">Low</td>
                <td data-label="Title">New Electric center , Yeman</td>
                <td data-label="Iniated Date">17/12/2020</td>
                <td data-label="Status">
                  <button className="submit">Submited</button>
                </td>
                {/* <td data-label="Actions">
                  <a style={{ marginRight: "10px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-toggles"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bounding-box"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                    </svg>
                  </a>
                </td> */}
              </tr>
              <tr>
                <td data-label="Request ID">0019001</td>
                <td data-label="Priority">Low</td>
                <td data-label="Title">New Electric center , Oman</td>
                <td data-label="Iniated Date">17/12/2020</td>
                <td data-label="Status">
                  <button className="submit">Submited</button>
                </td>
                {/* <td data-label="Actions">
                  <a style={{ marginRight: "10px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-toggles"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bounding-box"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                    </svg>
                  </a>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.content_bottom}>
          <p>CRD - Cheif of Requesting Department</p>
          <p>CFD - Cheif Functional Department</p>
          <p>BCT - Budget Control Team</p>
          <p>CFO - Cheif Finance Officer</p>
        </div>
      </div>

      <style jsx>
        {`
          .content_table {
            padding: 0rem 2rem;
          }

          .styled_table {
            border-collapse: collapse;
            width: 100%;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
          }
          .styled_table thead tr {
            background-color: #e5e4db;
            color: 2e2e2c;
            text-align: left;
          }
          .styled_table th,
          .styled_table td {
            padding: 8px 15px;
            text-align: center;
          }
          .styled_table tbody tr {
            border-bottom: 1px solid #e5e4db;
          }
          .styled_table tbody tr:last-of-type {
            border-bottom: 2px solid #e5e4db;
          }
          .styled_table tbody tr:hover {
            font-weight: bold;
            color: black;
          }
          .submit {
            border: none;
            width: 100px;
            height: 30px;
            color: #d40000;
            background-color: #f8cccc;
            border-radius: 20px;
          }

          @media only screen and (max-width: 850px) {
            .styled_table,
            .styled_table tbody,
            .styled_table tr,
            .styled_table td {
              display: block;
              width: 100%;
            }
            .styled_table tbody tr td {
              text-align: right;
              padding-left: 50%;
              position: relative;
            }
            .styled_table td:before {
              content: attr(data-label);
              position: absolute;
              left: 0;
              width: 50%;
              padding-left: 15px;
              font-weight: bold;
              font-size: 0.7rem;
              text-align: left;
            }

            .styled_table tbody tr {
              border-bottom: 1px solid #e5e4db;
              margin-bottom: 30px;
            }
            .styled_table thead tr {
              display: none;
            }
            .styled_table {
              width: 100%;
              font-size: 0.7rem;
              min-width: 200px;
            }
          }

          @media only screen and (max-width: 768px) {
            .submit {
              width: 80px;
              height: 25px;
              border-radius: 15px;
            }
          }
        `}
      </style>
    </div>
  );
}
