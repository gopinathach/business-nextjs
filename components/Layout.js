import Link from "next/link";
import Image from "next/image";
import rslogo from "../public/rslogo.png";
import avatar from "../public/avatar.png";
import { Drawer, Button,  Space } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";

export default function Layouts({ children }) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="layout">
      <div className="layout_image">
        <Link href="/">
          <Image src={rslogo} width={150} height={100} />
        </Link>
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
        <div className="nav-left-hide">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
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

      <div className="navtoggleholder">
        <Space>
          <div className="nav_toggle" onClick={showDrawer}>
            <span className="toggle"></span>
            <span className="toggle"></span>
            <span className="toggle"></span>
          </div>
        </Space>
        <Drawer
          title="Business"
          placement="left"
          width={"60%"}
          onClose={onClose}
          visible={visible}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <div className="nav_left">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
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
        </Drawer>
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
          display: flex;
          justify-content: space-around;
          padding-left: 20px;
          align-items: center;
        }

        .nav_right {
          margin-right: 30px;
          display: flex;
        }

        .nav_left {
          display: flex;
          cursor: pointer;
        }
        .nav_toggle {
          position: absolute;
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 25px;
        }
        .nav_toggle .toggle {
          width: 100%px;
          height: 4px;
          background-color: #42c0fb;
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
          text-align: left;
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
        @media only screen and (max-width: 1024px) {
          .navbar {
            justify-content: space-evenly;
          }
        }

        @media only screen and (max-width: 768px) {
          .nav_toggle {
            display: flex;
            margin-right: 20px;
            margin-bottom: 20%;
            justify-content: space-evenly;
          }
          .navtoggleholder {
            display: flex;
            width: 80vw;
            justify-content: flex-start;
            margin: 10px 40px;
            top: 104px;
            position: absolute;
            z-index: 1;
          }
          .nav-left-hide {
            display: none !important;
          }
          .navbar {
            display: flex;
            flex-direction: column;
            height: auto;
            min-height: 45px;
            margin: 5px 0;
          }
          .nav_left {
            flex-direction: column;
            display: flex;
            align-items: flex-start;
          }
          a {
            color: black;
            margin-top: 10px;
            padding: 15px 0px;
          }

          a:hover {
            background-color: #42c0fb;
            width: 100%;
            cursor: pointer;
            padding-left: 10px;
            color: white;
          }
          a:active {
            background-color: #42c0fb;
            padding-left: 10px;
            color: white;
          }
          .page-content {
            margin: 25px 0px;
            width: 90vw;
          }

          .layout_image {
            margin: 0;
          }
          .right_layout-img {
            margin-right: 15px;
          }
        }
        @media only screen and (max-width: 460px) {
          .navtoggleholder {
            margin: 10px 20px;
          }
        }
        @media only screen and (max-width: 360px) {
          .navtoggleholder {
            margin: 10px 23px;
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
