import Chart from '../../components/cards/Chart'
import Navbar from '../../components/navbor/Navbar'
import styled from './home.module.css'
import { useEffect, useState } from 'react'
import Footer from '../../components/footer/footer'
import React from 'react'


function Home(){

    const [data, setData] = useState([])

    
    useEffect(()=> {
        fetch('http://localhost:8000/data').then(res=>res.json()).then(data=>setData(data.data))

    },[]);

    return(
        <div className={styled.write}>
            <Navbar />
            <div className={styled.Box}>
                    {
                        data[0]?.map((data) => (
                            <Chart key={data.id} article={data} />

                        ))
                    }
            </div>    
            <Footer />
        </div>            
    )
}



export default Home;