import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import photo1 from '../../../assets/gallery/photo1.jpg';
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
];

const StyledList = styled(List)({
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  color: '#fff',
  marginBottom: 32,
});

export const Header = () => {
  return (
    <Grid
      container
      flexDirection="column"
      alignContent="center"
      sx={{
        backgroundColor: '#00347a',
        pb: { xs: 0, sm: 4 },
        pt: { xs: 2, sm: 0 },
      }}
      justifyContent="center"
    >
      <Grid container maxWidth="md">
        <Grid
          container
          item
          justifyContent="flex-end"
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
          }}
        >
          <StyledList>
            {linkList.map((item, index) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component="a" href={item.link}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
                {index < 2 && <FiberManualRecordIcon sx={{ fontSize: 12 }} />}
              </ListItem>
            ))}
          </StyledList>
        </Grid>
        <Grid item container justifyContent="space-between" spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${photo1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <Grid container justifyContent="space-between">
                <Button
                  component="div"
                  sx={{
                    width: 50,
                    height: {
                      xs: 140,
                      sm: 200,
                      md: 260,
                    },
                  }}
                >
                  <ChevronLeftIcon />
                </Button>
                <Box alignSelf="flex-end">
                  <List
                    dense
                    disablePadding
                    sx={{ display: 'flex', flexDirection: 'row' }}
                  >
                    <ListItem sx={{ pl: 0, pr: 0 }}>
                      <IconButton color="primary">
                        <FiberManualRecordIcon sx={{ fontSize: 12 }} />
                      </IconButton>
                    </ListItem>
                    <ListItem sx={{ pl: 0, pr: 0 }}>
                      <IconButton color="primary">
                        <FiberManualRecordIcon
                          sx={{ fontSize: 12, opacity: 0.5 }}
                        />
                      </IconButton>
                    </ListItem>
                    <ListItem sx={{ pl: 0, pr: 0 }}>
                      <IconButton color="primary">
                        <FiberManualRecordIcon
                          sx={{ fontSize: 12, opacity: 0.5 }}
                        />
                      </IconButton>
                    </ListItem>
                  </List>
                </Box>
                <Button
                  component="div"
                  sx={{
                    width: 50,
                    height: {
                      xs: 140,
                      sm: 200,
                      md: 260,
                    },
                  }}
                >
                  <ChevronRightIcon />
                </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ display: { md: 'block', xs: 'none' } }}>
            <Paper sx={{ p: 1 }}>
              <Card variant="outlined" sx={{ textAlign: 'center', mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    <strong>LOREM IPSUM LOREM</strong>
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </Typography>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    <strong>LOREM IPSUM LOREM</strong>
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
