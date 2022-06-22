import Grid from '@mui/material/Grid';

interface InformationProps {
  text: string;
}

export const Information = ({ text }: InformationProps) => {
  return (
    <Grid
      item
      container
      alignItems="center"
      justifyContent="space-between"
      bgcolor={theme => theme.palette.primary.main}
    >
      {text}
    </Grid>
  );
};
