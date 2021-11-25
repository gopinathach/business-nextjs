import Link from "next/link";
import Image from "next/image";
import rslogo from "../public/rslogo.png";
import avatar from "../public/avatar.png";

export default function Layouts({ children }) {
  return (
    <div className="layout">
      <div className="layout_image">
        <Image src={rslogo} width={160} height={100} />

        <div className="right_layout-img">
          <Image src={avatar} width={50} height={40} />

          <div className="right_layout_user res_user">
            <p style={{ color: "#00e1ff" }} className="res_user">
              {" "}
              Avatar{" "}
            </p>
            <p className="res_user"> Todays sign in 8:30 am </p>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="nav_left">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#42C0FB"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
          </Link>

          <a>Budget Process</a>
          <Link href="/request">
            <a className="a-pr">PR Request</a>
          </Link>
          <Link href="/mytasks">
            <a>My Tasks</a>
          </Link>
          <a>RFP Forms</a>
          <a>Evaluation Report</a>
        </div>
        <div className="nav_right res_user">
          <p style={{ color: "#00e1ff", marginRight: "10px" }}> Day </p>
          <p> Time </p> | <p> Date</p>
        </div>
      </div>

      <div className="main-page-content">
        <div className="page-content">{children}</div>
      </div>

      <style jsx>{`
        .layout {
          top: 0px;
          margin: 0px;
          padding: 0px;
        }

        .layout_image {
          margin: 0 14%;
          display: flex;
          justify-content: space-between;
        }

        .right_layout-img {
          display: flex;
          align-items: center;
        }

        .right_layout_user {
          font-size: 12px;
          margin: 0px 20px;
        }

        .navbar {
          background-color: #e5e4db;
          height: 30px;
          overflow: hidden;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .nav_right {
          margin-right: 30px;
          display: flex;
        }

        .nav_left {
          margin: 0px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        a {
          text-align: center;
          color: black;
          padding: 5px 10px;
          text-decoration: none;
        }

        a:hover {
          background-color: #42c0fb;
          cursor: pointer;
          color: white;
        }

        a:active {
          background-color: red;
          color: white;
        }
        p {
          margin-top: 0;
          margin-bottom: 0em;
        }

        .main-page-content {
          display: flex;
          width: 100vw !important;
          justify-content: center;
        }
        .page-content {
          position: sticky;
          margin: 30px 0px;
          background-color: white;
          height: auto;
          width: 70vw;
          border-radius: 3px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }
        @media only screen and (max-width: 768px) {
          .navbar,
          .nav_left {
            height: auto;
            width: 100%;
          }
          .nav_left {
            display: flex;
            flex-direction: column;
            align-items: left;
          }
        }

        @media only screen and (max-width: 768px) {
          .res_user {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
