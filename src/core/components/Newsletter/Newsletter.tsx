import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const Newsletter = () => {
  return (
    <Grid
      container
      justifyContent="center"
      borderTop={1}
      borderColor={theme => theme.palette.grey[400]}
      paddingTop={2}
      paddingBottom={2}
    >
      <Grid
        container
        maxWidth="md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item sx={{ padding: { xs: 2, sm: 0 } }}>
          <Typography variant="h6" color={theme => theme.palette.grey[400]}>
            <strong>Abonnenz-vous a notre newsletter</strong>
          </Typography>
        </Grid>
        <Grid item sx={{ paddingLeft: { xs: 2, sm: 0 } }}>
          <TextField
            size="small"
            placeholder="Nom"
            sx={{ display: { xs: 'none', sm: 'inline' }, mr: 2 }}
          ></TextField>
          <TextField
            size="small"
            placeholder="Adresse e-mail"
            sx={{ mr: 2 }}
          ></TextField>
          <Button variant="contained">S'ABONNER</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
