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
import { useState } from 'react';
import Render from './Render_Card';
import { Cardobj } from './Cardsobj';
import Aos from 'aos';



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

export default function Services() {
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

    const Navigate = useNavigate();
    let login = () => {
        Navigate('/login')

    }
    // const [filterData, setFilterData] = useState('')
    // const handleFilter = (event) => {
    //     const searchdata = event.target.value;
    //     const newFilter = Cardobj.filter((value) => {
    //         return value.Price.toLowerCase().includes(searchdata.toLowerCase())
    //     });
    //     if (searchdata === "") {
    //         setFilterData([])

    //     } else {

    //         setFilterData(newFilter)
    //     }
    // }
    const GOtoHome = () => {
        Navigate('/')
    }
    const GOtoAbout = () => {
        Navigate('/about')
    }
    const GOtoServices = () => {
        Navigate('/services')
    }
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
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
                            // onChange={handleFilter}
                            />

                        </Search>
                        {/* {filterData.length != 0 && (
                        <div class='filtermain'>
                        {filterData.map((value, key) => {
                            return (
                                <div class='filterData'>
                                <a href={value} target="_blank">
                                <p>{value.Price}</p>
                                </a>
                                </div>
                                )
                            })}
                            </div>
                        )} */}

                        <Box />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                onClick={GOtoHome}
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit">

                                <Typography className='Naver_hover'>

                                    Home
                                </Typography>

                            </IconButton>
                            <IconButton
                                onClick={GOtoAbout}
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Typography className='Naver_hover'>
                                    About
                                </Typography>

                            </IconButton>
                            <IconButton
                                onClick={GOtoServices}
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Typography className='Naver_hover'>
                                    Services
                                </Typography>
                            </IconButton>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} >

                            <IconButton
                                size="small"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <button class='Nav_btn_Services'onClick={login} >Login</button>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
            <>
                <div class='white_area'>
                    <div class="about_area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-7 col-lg-7">
                                    <div class="about_thumb2 d-flex">
                                        <div  data-aos='fade-up' class="img_1">
                                            <img class='img_Servces' src="https://www.findsuzhou.com/wp-content/uploads/2021/10/Suzhou-seasonal-foods-284x400.jpg" alt="" />
                                        </div>
                                        <div class="img_2">
                                            <img src="https://preview.colorlib.com/theme/montana/img/about/x2.png.pagespeed.ic.TMQb44M-no.webp" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-5">
                                    <div class="about_info">
                                        <div class="section_title mb-20px">
                                            <span>Delicious Food</span>
                                            <h3>We Serve Fresh and <br />
                                                Delicious Food</h3>
                                        </div>
                                        <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare
                                            dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                                            sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                                        <a href="#" class="line-button">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <>
                <div class='white_area' id='about' >
                    <div class="about_area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-5 col-lg-5">
                                    <div class="about_info">
                                        <div class="section_title mb-20px">
                                            <h3>Car rental services.   <br />
                                            </h3>
                                        </div>
                                        <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare
                                            dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                                            sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                                        <a href="#" class="line-button">Learn More</a>
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-7">
                                    <div class="about_thumb d-flex">
                                        <div class="img_1">
                                            <img height='500px' src="https://i.pinimg.com/736x/1a/a8/e9/1aa8e973d49400b90c4f9f30c3f60c92.jpg" />
                                        </div>
                                        <div class="img_2">
                                            <img height='500px' src="https://i.pinimg.com/736x/4f/da/bb/4fdabbbe848a0c81cf1365f0a096d4c4.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <>
                <div class='white_area'>
                    <div class="about_area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-7 col-lg-7">
                                    <div class="about_thumb2 d-flex">
                                        <div data-aos="zoom-in-right" class="img_1">
                                            <img  data-aos='fade-up' height='500px' src="https://i.pinimg.com/originals/e5/3e/87/e53e8760a712ca7f9753944e270cc2df.png" alt="" />
                                        </div>
                                        <div data-aos="zoom-in-right" class="img_2">
                                            <img  data-aos='fade-up' height='500px' src="https://www.freepnglogos.com/uploads/doctor-png/doctor-yashfeen-hospital-navsari-39.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-5">
                                    <div class="about_info">
                                        <div class="section_title mb-20px">
                                            <span>Hospital Service</span>
                                            <h3>Doctor on call  <br />
                                            </h3>
                                        </div>
                                        <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare
                                            dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                                            sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                                        <a href="#" class="line-button">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}
