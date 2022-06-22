import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { routes } from '../../../routes';

interface LinkListProps {
  label: string;
  link: string;
}

const linkList: LinkListProps[] = [
  {
    label: 'Link1',
    link: routes.root,
  },
  {
    label: 'Link2',
    link: routes.root,
  },
  {
    label: 'Link3',
    link: routes.root,
  },
  {
    label: 'Link4',
    link: routes.root,
  },
  {
    label: 'Link5',
    link: routes.root,
  },
  {
    label: 'Link6',
    link: routes.root,
  },
];

const StyledList = styled(List)({
  display: 'flex',
  padding: 0,
  color: '#fff',
});

export const Footer = () => (
  <>
    <Grid
      container
      justifyContent="center"
      bgcolor={theme => theme.palette.primary.main}
      sx={{ borderBottom: '4px solid #01bbd9' }}
    >
      <Grid container maxWidth="md" sx={{ padding: { xs: 2 } }}>
        <Typography variant="body2" color="common.white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod
          <br /> tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>
    </Grid>
    <Grid
      container
      justifyContent="center"
      bgcolor={theme => theme.palette.common.black}
    >
      <Grid container maxWidth="md" sx={{ padding: { xs: 2 } }}>
        <StyledList>
          {linkList.map(item => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component="a" href={item.link}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </StyledList>
        <Typography variant="body2" color="common.white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </Grid>
    </Grid>
  </>
);
