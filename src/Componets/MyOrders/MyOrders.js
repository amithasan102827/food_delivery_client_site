import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Grid } from '@mui/material';
import useAuth from '../Hooks/useAuth';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { user } = useAuth();

    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
        .then(data => {setMyOrders(data)
        console.log(data);
        })
          
    }, [user.email])

    // DELETE ORDERS
    const handelDelete = (id) => {
        const url = `https://mighty-journey-16776.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('are sure to delete')
                    const remainigServices = myOrders.filter(myOrder => myOrder._id !== id)
                    setMyOrders(remainigServices)
                }
            })
    }

    
    return (
        <Container>

           <h2>My Orders</h2>

            <div>
                <Table responsive="lg" className="table table-primary table-striped">
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Phone</th>

                            <th>Address</th>
                            <th>Action</th>
                           
                            {/* <th>Action</th> */}
                            

                        </tr>

                    </thead>

                    {
                        myOrders.map(myOrder => <tbody>
                            <tr>

                                <td>{myOrder?.email}</td>
                                <td>{myOrder?.cart.map(c=><li>{c.name}</li>)}</td>
                                <td>{myOrder.total}</td>
                                <td>{myOrder.data.mobile}</td>
                                <td>{myOrder.data.address}</td>
                                <td align="right">{myOrder.order ?
                                    'Delivered' :<p>Pending</p>
                                    
                                }</td>

                                {/* <td>{myOrder?.data.Address
                                }</td>
                                <td>${myOrder?.carprice}</td>
                                <td>{myOrder?.phone}</td>
                                <td>{myOrder?.address}</td> */}
                                
                                {/* <td><Button onClick={() => handelDelete(myOrder._id)} variant="contained" style={{ backgroundColor: '#F93E57', color: '#FFFFFF' }}>Delete</Button></td> */}

                                {/* <td>  <Link to={`/payment/${myOrder._id}`}><button>Pay</button></Link></td> */}
                            </tr>


                        </tbody>)
                    }

                </Table>



            </div>


        </Container>
    );
};

export default MyOrders;