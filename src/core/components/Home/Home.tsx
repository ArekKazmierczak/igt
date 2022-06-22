import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import image from '../../../assets/jpg/photo.jpg';
import { BigBox, BigBoxProps } from '../BigBox/BigBox';
import { SmallBox, SmallBoxProps } from '../SmallBox/SmallBox';

const bigBoxContent: BigBoxProps[] = [
  {
    label: 'LOREM IPSUM LOREM',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    actionLabel: 'LOREM IPSUM',
  },
  {
    label: 'LOREM IPSUM LOREM',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    actionLabel: 'LOREM IPSUM',
  },
];

const smallBoxContent: SmallBoxProps[] = [
  {
    label: 'LOREM IPSUM LOREM',
    content: 'Lorem ipsum dolor sit amet',
    actionLabel: 'LOREM IPSUM',
    image: image,
  },
  {
    label: 'LOREM IPSUM LOREM',
    content: 'Lorem ipsum dolor sit amet',
    actionLabel: 'LOREM IPSUM',
    image: image,
  },
  {
    label: 'LOREM IPSUM LOREM',
    content: 'Lorem ipsum dolor sit amet',
    actionLabel: 'LOREM IPSUM',
    image: image,
  },
  {
    label: 'LOREM IPSUM LOREM',
    content: 'Lorem ipsum dolor sit amet',
    actionLabel: 'LOREM IPSUM',
    image: image,
  },
];

export const Home = () => {
  return (
    <Grid container flexDirection="column" maxWidth="md">
      <Grid container marginTop={2} spacing={2}>
        {bigBoxContent.map((item, index) => (
          <Grid item xs={12} sm={6} key={`${item.label}-${index}`}>
            <BigBox
              label={item.label}
              content={item.content}
              actionLabel={item.actionLabel}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        maxWidth="md"
        marginLeft={2}
        sx={{ display: { md: 'block', xs: 'none' } }}
      >
        <Typography>
          <strong>Lorem ipsum lorem ipsum</strong>
        </Typography>
      </Grid>
      <Grid container maxWidth="md" marginTop={1} spacing={2}>
        {smallBoxContent.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={`${item.label}-${index}`}>
            <SmallBox
              label={item.label}
              content={item.content}
              actionLabel={item.actionLabel}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" marginTop={6} marginBottom={6}>
        <Button
          color="secondary"
          variant="contained"
          endIcon={<ChevronRightIcon />}
          sx={{ color: 'common.white' }}
        >
          Lorem ipsum
        </Button>
      </Grid>
    </Grid>
  );
};
