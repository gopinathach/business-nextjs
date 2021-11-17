import React from "react";
// import { useState } from "react";
import { Table, Space, Input, Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";

export default function request() {
  const { Search } = Input;
  // const [find, setFind] = useState('')

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Button>Low</Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button>Medium</Button>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Button>High</Button>
        </Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: "Request ID",
      dataIndex: "rid",
      key: "rid",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Project Name",
      dataIndex: "projectname",
      key: "projectname",
    },
    {
      title: "Initial Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              // class="bi bi-toggles"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
            </svg>
            {record.name}
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              // class="bi bi-bounding-box"
              viewBox="0 0 16 16"
            >
              <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
            </svg>
          </a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      rid: "0019001",
      priority: "Low",
      projectname: "New data center , Qatar",
      date: "17/12/2020",
      status: "Submited",
    },
    {
      key: "2",
      rid: "0019001",
      priority: "Medium",
      projectname: "New data center , Romania",
      date: "17/12/2020",
      status: "Submited",
    },
    {
      key: "3",
      rid: "0019001",
      priority: "High",
      projectname: "New Electric center , Qatar",
      date: "17/12/2020",
      status: "Submited",
    },
    {
      key: "4",
      rid: "0019001",
      priority: "High",
      projectname: "New Electric center , Ukraine",
      date: "17/12/2020",
      status: "Submited",
    },
    {
      key: "5",
      rid: "0019001",
      priority: "Medium",
      projectname: "New Data center , Ukraine",
      date: "17/12/2020",
      status: "Submited",
    },
    {
      key: "6",
      rid: "0019001",
      priority: "High",
      projectname: "New Electric center , Yeman",
      date: "17/12/2020",
      status: "Submited",
    },
  ];


  return (
    <div className="request">
      <h2>PR Request</h2>

      <div className="line"></div>

      <div className="content">
        <div className="content_find">
          <div className="content_left">
            <Search
              placeholder="Search"
              allowClear
              onChange={(event) => {
                //setFind(event.target.value)
              }}
              style={{ width: 200 }}
            />
            {/* {data.filter((e)=>{
              
              if(!find == '' && e.projectname.toLowerCase().includes(find.toLowerCase())){
                  return e
              }
            })} */}
          </div>
          <div className="content_right">
            <p>Filter</p>
            <div className="dropdown">
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                  style={{ width: 150 }}
                >
                  All   
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="content_table">
          <Table
            columns={columns}
            dataSource={data}
            bordered={true}
            pagination={{ pageSize: 40 }}
            scroll={{ y: 300 }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  debugger;
                }, // click row
                onDoubleClick: (event) => {}, // double click row
                onContextMenu: (event) => {}, // right button click row
                onMouseEnter: (event) => {}, // mouse enter row
                onMouseLeave: (event) => {}, // mouse leave row
              };
            }}
            onHeaderRow={(columns, index) => {
              return {
                onClick: () => {}, // click header row
              };
            }}
          />
        </div>
        <div className="content_bottom">
          <p>CRD - Cheif of Requesting Department</p>
          <p>CFD - Cheif Functional Department</p>
          <p>BCT - Budget Control Team</p>
          <p>CFO - Cheif Finance Officer</p>
        </div>
      </div>

      <style jsx>{`
        h2 {
          font-size: 1rem;
          font-family: sans-serif;
          margin: 30px 35px 25px;
        }
        .line {
          height: 2px;
          width: 94%;
          margin: 0 3%;
          background-color: grey;
        }
        .content_find {
          padding: 1rem 2rem;
          top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .content_right {
          display: flex;
          align-items: center;
        }
        .content_right > p {
          margin: 1rem;
          font-family: sans-serif;
        }
        
        .content_table {
          padding: 0rem 2rem;
        }
        .content_bottom {
          display: flex;
          justify-content: space-around;
          padding: 50px 50px 5px 50px;
        }
        .content_bottom > p {
          font-size: 10px;
          font-family: sans-serif;
          color: #878787;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
