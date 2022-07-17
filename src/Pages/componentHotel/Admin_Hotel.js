import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SMButton from '../../config/components/button';
import { useNavigate } from 'react-router-dom'
import { DeleteData, getData } from '../../config/firebase/firebasemethods';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HashLoader from "react-spinners/HashLoader";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Admin_Hotel() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="primary">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="primary"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="primary"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    // ====================== Get Data  ==============================================
    const [renderr, setRenderr] = React.useState([])


    const getAllData = () => {
        getData('booking').then((res) => {
            setRenderr(res)
            console.log(renderr)
        })
    }
    useEffect(() => {
        getAllData()
    }, [])

    const navigate = useNavigate()
    const AddAdmin = () => {
        navigate('/add')
    }
    // ====================== Get Data  ==============================================

    // ====================== delete data ==============================================

    const DeleteMethod = (uid) => {
        console.log(uid)
        DeleteData("booking/", uid).then(() => {
            toast.success("Delete Success", {
                position: "top-center",
            })
            console.log(uid)
        }).catch((err) => {
            console.log(err)
        })
    };

    // ====================== delete data ==============================================
    // ====================== Edit data ==============================================
    const Navigate = useNavigate();

    const EditNavigate = (receve) => {

        Navigate('/form', { state: receve })
    }

    // ====================== Edit data ==============================================

    const [loading, setLoading] = React.useState(false)
    const [color, setColor] = React.useState("#F6E833");

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)

    }, [])


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='fixed' color='inherit' >
                    <Toolbar>
                        <Typography sx={{ marginRight: 1 }}>
                            <img width={50} src='https://www.nicepng.com/png/full/800-8008978_00-check-out-hotel-check-in-png.png' />
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                            className='navbar_heading'
                        >

                            ARCADA HOTEL
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box />

                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>

            <Typography className='Admin_Name' variant='p'>ADMIN PAGE</Typography>
            <Typography class='AdminBtncenter' >
                <button className='adminadd' onClick={AddAdmin}>Add Hotel Card</button>
            </Typography>
            {
                loading ?
                    <div className='centerloader'>

                        <HashLoader color={color}  size={150} />
                    </div>
                    :
                    <>
                        {
                            renderr.map((e) => {
                                return (
                                    <>
                                        <>
                                        </>
                                        <Box className='Admin_Render'>
                                            <p className='Admin_Render_p'> Name: {e.name}</p>
                                            <p className='Admin_Render_p'> Address:{e.Address}</p>
                                            <p className='Admin_Render_p'> CINC:{e.Cnic}</p>
                                            <p className='Admin_Render_p'> Contact: {e.Contact}</p>
                                            <p className='Admin_Render_p'> Days:{e.Days}</p>
                                            <p className='Admin_Render_p'> Date:{e.Date}</p>
                                            <p className='Admin_Render_p'> Person:{e.Person}</p>
                                            <p className='Admin_Render_p'> HotelNumber:{e.hotelNumber}</p>
                                            <p className='Admin_Render_p'> ID: {e.uid}</p>
                                            <Box class='maindelete'>

                                                <button onClick={() => DeleteMethod(e.uid)} className='deleteEdit' >Delete</button>
                                                <button onClick={() => EditNavigate(e)} className='deleteEdit' >Edit</button>
                                            </Box>
                                        </Box>
                                    </>
                                )
                            })
                        }
                    </>
            }
            <ToastContainer />
        </>
    );
}
