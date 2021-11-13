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
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MyBookings from '../MyBookings/MyBookings';
import AllBookings from '../AllBookings/AllBookings';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';


const drawerWidth = 240;

function Sidebar(props) {
    const { user, isAdmin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // nested route

    let { path, url } = useRouteMatch();


    // ____________________________________________________


    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Button color="inherit"> <NavLink to="/" style={{ textDecoration: "none", color: "black" }} >Home</NavLink></Button>
                <div></div>
                <Button color="inherit"> <NavLink to="/dashboard" style={{ textDecoration: "none", color: "black" }} >Dashboard</NavLink></Button>
                <div></div>
                <Button color="inherit"> <NavLink to="/explore" style={{ textDecoration: "none", color: "black" }} >Explore</NavLink></Button>
                <div>
                </div>
                <Button color="inherit"> <NavLink to={`${url}/mybookings`} style={{ textDecoration: "none", color: "black" }} >My Bookings</NavLink></Button>
                <div></div>
                {
                    user.email && isAdmin ?
                        <>
                            <Button color="inherit"> <NavLink to={`${url}/allbookings`} style={{ textDecoration: "none", color: "black" }} >All Bookings</NavLink></Button>
                            <div></div>
                            <Button color="inherit"> <NavLink to={`${url}/addproduct`} style={{ textDecoration: "none", color: "black" }} >Add Product</NavLink></Button>
                            <div></div>
                            <Button color="inherit"> <NavLink to={`${url}/manageorders`} style={{ textDecoration: "none", color: "black" }} >Manage Orders</NavLink></Button>
                            <div></div>
                            <Button color="inherit"> <NavLink to={`${url}/makeadmin`} style={{ textDecoration: "none", color: "black" }} >Make Admin</NavLink></Button>
                        </>
                        :
                        <></>
                }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

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
            <Switch>
                <Route exact path={path}>

                </Route>
                <Route path={`${path}/mybookings`}>
                    <MyBookings></MyBookings>
                </Route>
                <AdminRoute path={`${path}/allbookings`}>
                    <AllBookings></AllBookings>
                </AdminRoute>
                <AdminRoute path={`${path}/makeadmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/addproduct`}>
                    <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/manageorders`}>
                    <ManageOrders></ManageOrders>
                </AdminRoute>
            </Switch>


        </Box >
    );
}

Sidebar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Sidebar;