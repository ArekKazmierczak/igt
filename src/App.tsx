import { CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, Suspense, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Root/components/Routing/Routing';
import { Root } from './Root/Root';
import { theme } from './theme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const switchableTheme = theme(mode);

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={switchableTheme}>
          <Suspense fallback={<div>Loading...</div>}>
            <CssBaseline />
            <Root>
              <Routing />
            </Root>
          </Suspense>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
};
