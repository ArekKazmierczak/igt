import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface BigBoxProps {
  label: string;
  content: string;
  actionLabel: string;
}

export const BigBox = ({ label, content, actionLabel }: BigBoxProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: 'center',
        mb: 2,
        pb: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          <strong>{label}</strong>
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained">{actionLabel}</Button>
      </CardActions>
    </Card>
  );
};
