import Grid from '@mui/material/Grid';
import { FC, ReactNode } from 'react';
import { AppBarComponent } from '../core/components/AppBarComponent/AppBarComponent';
import { Footer } from '../core/components/Footer/Footer';
import { Header } from '../core/components/Header/Header';
import { Newsletter } from '../core/components/Newsletter/Newsletter';

interface RootProps {
  children: ReactNode;
}

export const Root: FC<RootProps> = ({ children }) => (
  <Grid>
    <AppBarComponent />
    <Header />
    <Grid
      container
      justifyContent="center"
      sx={{ bgcolor: { xs: '#00347a', sm: 'inherit' } }}
    >
      {children}
    </Grid>
    <Newsletter />
    <Footer />
  </Grid>
);
