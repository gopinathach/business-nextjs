import Link from "next/link";
import Image from "next/image";
import layout from "../public/layout.jpg";
import rslogo from "../public/rslogo.png";
import avatar from "../public/avatar.png";

export default function Layouts({ children }) {
  return (
    <div className="layout">
      <div className="layout_image">
        <nav>
          <Image src={rslogo} width={180} height={120} />

          <div className="left_nav">
            <Image src={avatar} width={60} height={50} />

            <div className="right_nav_user">
              <p> Avatar </p>
              <p> Todays sign in 8:30 am</p>
            </div>
          </div>
        </nav>
      </div>

      <div className="layout_pages">
        <div className="layout_pages_left">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#42C0FB"
              class="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
          </Link>
          <a>Budget Process</a>
          <Link href="/request"><a>PR Request</a></Link>
          <Link href="/mytasks"><a>My Tasks</a></Link>
          <a>RFP Forms</a>
          <a>Evaluation Report</a>
        </div>
        <div className="layout_pages_right">
          <p>Day Time | Date</p>
        </div>
      </div>

      <div className="background">
        <Image src={layout} width={1800} height={1000} />
      </div>

      <div className="page-content">{children}</div>

      <style jsx>{`
        .layout {
          top: 0px;
          margin: 0px;
          padding: 0px;
        }

        .layout_image {
          margin: 0 10% 0;
        }

        nav {
          top: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .left_nav {
          display: flex;
          align-items: center;
        }

        .right_nav_user {
          font-size: 12px;
          color: green;
          margin-left: 30px;
        }

        .layout_pages {
          height: 30px;
          width: 100%;
          background-color: #d3d3d3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: nowrap;
          align-content: center
        }

        .layout_pages_right {
          margin-right: 30px;
        }

        .layout_pages_left {
          margin: 0px 20px; 
          cursor: pointer; 
        }

        a {
          background-color: #d3d3d3;
          color: #191919;
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


        .page-content{
            
            position:absolute;
            top:25%;
            margin: 0 15%;
            z-index:1;
            background-color: white;
            height: 100vh;
            width: 70%;
            border-radius:10px;
            box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
          
        }
       

      `}</style>
    </div>
  );
}
