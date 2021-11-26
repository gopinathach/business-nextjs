import React from 'react'
import axios from "axios"
import { useState,useEffect } from "react";

export default function myTasks() {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchedData = async () => {
        const req = await axios.get("http://api.plos.org/search?q=title:DNA");
        const fdata = await req
        setData(fdata.data.results);
        // return req;
      };
      fetchedData();
    }, []);
    console.log(data)

    return (
        <div id={data.id}>
            <h1>My Tasks

                {data.map((e)=>{
                    return e.journal
                })}
            </h1>
        </div>
    )
}
