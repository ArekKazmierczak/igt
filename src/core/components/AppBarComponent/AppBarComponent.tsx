import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../../../App';
import logo from '../../../assets/png/logo.png';
import { Logo } from '../Logo/Logo';

const StyledButton = styled(Button)({
  textTransform: 'initial',
  marginRight: 8,
});

export const AppBarComponent = () => {
  const pages = ['Lorem ipsum', 'Change color mode'];
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChangeTheme = () => {
    setAnchorElNav(null);
    colorMode.toggleColorMode();
  };

  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        color="transparent"
        sx={{
          alignItems: 'center',
          p: 1,
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
      >
        <Grid container maxWidth="md" alignItems="center">
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" sx={{ marginRight: 1 }}>
            Lorem ipsum
          </Typography>
          <StyledButton variant="contained" disableElevation>
            Lorem ipsum
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={colorMode.toggleColorMode}
            disableElevation
          >
            Color mode
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon sx={{ ml: 1 }} />
            ) : (
              <Brightness4Icon sx={{ ml: 1 }} />
            )}
          </StyledButton>
        </Grid>
      </AppBar>
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          alignItems: 'center',
          bgcolor: '#152740',
          p: 1,
          display: {
            xs: 'flex',
            sm: 'none',
          },
        }}
      >
        <Grid container maxWidth="md" alignItems="center" flexWrap="nowrap">
          <Grid item>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleChangeTheme}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <Grid container item justifyContent="center">
            <img src={logo} alt="YOUR LOGO" style={{ width: 100 }} />
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};
