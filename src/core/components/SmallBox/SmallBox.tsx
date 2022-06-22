import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BigBoxProps } from '../BigBox/BigBox';

export interface SmallBoxProps extends BigBoxProps {
  image: string;
}

export const SmallBox = ({
  label,
  content,
  actionLabel,
  image,
}: SmallBoxProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: 'center',
        pb: 2,
        mb: 2,
      }}
    >
      <CardContent>
        <Typography variant="body2" component="div">
          <strong>{label}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {content}
        </Typography>
        <img src={image} width="100%" alt="" />
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" endIcon={<ChevronRightIcon />}>
          {actionLabel}
        </Button>
      </CardActions>
    </Card>
  );
};
