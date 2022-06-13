

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../assets/img/logo.png'
import { CgProfile } from "react-icons/cg";
import LockIcon from '@mui/icons-material/Lock';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid"
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineGooglePlus } from "react-icons/ai";
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const pages = ['Home', 'Shop ', 'Sale ', 'Features ', 'Blog ', 'About ', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 70,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <><Grid sx={{ display: { sm: 'none', md: 'flex', xs: 'none' }, height: '38px', backgroundColor: '#F5F5F5' }}>
      <Container>

        <Grid sx={{ display: { md: 'flex', sm: 'none', xs: 'none' }, flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
          <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <FaFacebookF style={{ color: '#888888' }} />
            <BsTwitter style={{ marginRight: '6%', marginLeft: '6%', fontSize: '30px', color: '#888888' }} />
            <AiOutlineGooglePlus style={{ marginRight: '6%', marginLeft: '5%', fontSize: '33px', color: '#888888' }} />
            <AiOutlineGooglePlus style={{ marginRight: '6%', marginLeft: '6%', fontSize: '33px', color: '#888888' }} />
            <AiOutlineInstagram style={{ fontSize: '30px', color: '#888888' }} />
          </Grid>
          <Grid color='#888' sx={{ fontSize: '13px' ,display:'flex',alignItems:'center'}}>Free shipping for standard order over $100</Grid>
          <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Grid color='#888' mr='15px'>
              <Typography>
                fashe@example.com
              </Typography>            </Grid>

            <Grid>
              <Typography
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="button"
                disableElevation
                color='#888'
                ml='2%'
                onClick={handleClick}
                sx={{display:'flex',flexDirection:'row'}}
              >
                USD <KeyboardArrowDownIcon  />
              </Typography>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem sx={{ ":hover": { backgroundColor: '#E65540' } }} >
                  USD
                </MenuItem>
                <MenuItem sx={{ ":hover": { backgroundColor: '#E65540' } }}>
                  EUR
                </MenuItem>
                <MenuItem sx={{ ":hover": { backgroundColor: '#E65540' } }}>
                  GBP
                </MenuItem>
                <MenuItem sx={{ ":hover": { backgroundColor: '#E65540' } }}>
                  PKR
                </MenuItem>
                <MenuItem sx={{ ":hover": { backgroundColor: '#E65540' } }}>
                  CAD
                </MenuItem>
                <MenuItem sx={{ ":hover": { backgroundColor: '#E65540' } }}>
                  JPY
                </MenuItem>
              </StyledMenu>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </Grid>
      <AppBar  position="sticky" sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              noWrap
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <img src={logo} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'black' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}

                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Container>

                  < Grid sx={{ display: { sm: 'flex', md: 'none', flexDirection: 'column' }, justifyContent: 'space-between' }}>
                    <Grid color='#888' sx={{ fontSize: '13px' }}>Free shipping for standard order over $100</Grid>
                    <Grid>
                      fashe@example.com

                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <FaFacebookF style={{ color: '#888888' }} />
                      <BsTwitter style={{ marginRight: '6%', marginLeft: '6%', fontSize: '30px', color: '#888888' }} />
                      <AiOutlineGooglePlus style={{ marginRight: '6%', marginLeft: '5%', fontSize: '33px', color: '#888888' }} />
                      <AiOutlineGooglePlus style={{ marginRight: '6%', marginLeft: '6%', fontSize: '33px', color: '#888888' }} />
                      <AiOutlineInstagram style={{ fontSize: '30px', color: '#888888' }} />
                    </Grid>
                  </Grid>
                </Container>
                {pages.map((page) => (<>
                  <Grid sx={{ backgroundColor: '#E65540', color: 'white' }} >
                    <MenuItem color='black' key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Grid>

                </>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              noWrap
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none', justifyContent: 'flex-start' },
              }}
            >
              <img src={logo} />

            </Typography>
            <Box sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', ":hover": { color: 'red', bacgroundColor: 'white' } }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, alignItems: 'center' }}>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'text.secondary',
                  '& svg': {
                    mr: 2,
                    mb: 1,
                    ml: 2,
                    mt: 1,

                  },

                }}
              >
                <CgProfile style={{ fontSize: '30px' }} />
                <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: 'none', md: 'flex' } }} />

                <Badge badgeContent={1} color="primary" variant='standard'>
                  <LockIcon style={{ fontSize: '30px' }} />
                </Badge>
              </Box>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar
