import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Details() {

    const [post, setPost] = useState([]);

   useEffect(() => {
     
   axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    setPost(response.data)
   })
      
   }, [])
   
  

    return(
        <div>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Body</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
            {post.map((data)=> {
               return(
                <TableRow
                key={data.userId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.userId}
                </TableCell>
                <TableCell align="">{data.id}</TableCell>
                <TableCell align="">{data.title}</TableCell>
                <TableCell align="">{data.body}</TableCell>
              </TableRow>
               )
            })}
        </TableBody>    

        </Table>
        </TableContainer>
        </div>
    )
        
    }
    
    export default Details






    //   <div>
    //     {post.map((data)=>{
    //         return(
    //         <Container>

    //             <h4>{data.id}</h4>
    //             <h5>{data.title}</h5>
    //             <h6>{data.body}</h6>

    //             </Container>
    //         )    
    // })}
       
    //   </div>