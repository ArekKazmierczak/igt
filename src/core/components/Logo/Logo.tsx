import Box from '@mui/material/Box';
import logo from '../../../assets/png/logo.png';

export const Logo = () => {
  return (
    <Box
      component="div"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'absolute',
        display: 'flex',
        width: 160,
        height: 120,
        backgroundColor: '#152740',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
      }}
    >
      <img src={logo} alt="YOUR LOGO" style={{ marginTop: 24 }} />
    </Box>
  );
};
