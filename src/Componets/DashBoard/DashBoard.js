import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  NavLink
} from "react-router-dom";

import { Button } from '@mui/material';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddBlog from '../AddBlog/AddBlog';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import useAuth from '../Hooks/useAuth';
import AddReview from '../AddReview/AddReview';
const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, admin, LogOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {!admin && <List>


        <Link style={{ textDecoration: 'none', color: '' }} to="/"> <Button color="inherit">Home</Button> </Link> <br />

        <Link style={{ textDecoration: 'none', color: '' }} to="MyOrders"> <Button color="inherit">MyOrders</Button> </Link> <br />

        <Link style={{ textDecoration: 'none', color: '' }} to="addReview"> <Button color="inherit">AddReview</Button> </Link> <br />

        {
          user.email && <NavLink style={{ textDecoration: 'none', color: 'red' }} to=""> <Button style={{ fontSize: '1.1vw' }} onClick={LogOut} color="inherit">Logout</Button> </NavLink>
        }
      </List>
      }

      <Divider />


  
      {user.email && admin && <List>

        <Link style={{ textDecoration: 'none', color: '' }} to="/"> <Button color="inherit">Home</Button> </Link> <br />

        <Link style={{ textDecoration: 'none', color: '' }} to="AddNewProduct"> <Button color="inherit">AddProduct</Button> </Link> <br />



        <Link style={{ textDecoration: 'none', color: '' }} to="MakeAdmin"> <Button color="inherit">MakeAdmin</Button> </Link> <br />

        <Link style={{ textDecoration: 'none', color: '' }} to="addBlog"> <Button color="inherit">AddBlog</Button> </Link> <br />

        <Link style={{ textDecoration: 'none', color: '' }} to="manageAllProduct"> <Button color="inherit">AllFood</Button> </Link> <br />

        <Link style={{ textDecoration: 'none', color: '' }} to="manageAllOrders"> <Button color="inherit">AllOrders</Button> </Link> <br />

        {
          user.email && <NavLink style={{ textDecoration: 'none', color: 'red' }} to=""> <Button style={{ fontSize: '1.1vw' }} onClick={LogOut} color="inherit">Logout</Button> </NavLink>
        }
      </List>
      }

      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />


        {/* <h1>main page</h1>
      <Link to="AddNewProduct">child 1</Link> */}



        <Routes>
          <Route path="AddNewProduct" element={<AddNewProduct></AddNewProduct>} />
          <Route path="MyOrders" element={<MyOrders></MyOrders>} />
          <Route path="MakeAdmin" element={<MakeAdmin></MakeAdmin>} />
          <Route path="addBlog" element={<AddBlog></AddBlog>} />
          <Route path="addReview" element={<AddReview></AddReview>} />
          <Route path="manageAllProduct" element={<ManageAllProduct></ManageAllProduct>} />
          <Route path="manageAllOrders" element={<ManageAllOrders></ManageAllOrders>} />

          {/* <Route path="/payment/:appointmentId" element={<Payment></Payment>} /> */}

        </Routes>


      </Box>
      <Outlet />
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
