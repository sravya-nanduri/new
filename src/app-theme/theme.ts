import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import themesVariables from './themesVariables';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: themesVariables.primaryBtnColor,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: themesVariables.fontFamily,
  },
  components: {
    // MuiButtonBase: {
    //   defaultProps: {
    //     style: {
    //      backgroundColor: themesVariables.primaryBtnColor,
    //      color: themesVariables.primaryBtnTextColor,
    //     //  width: '332px',
    //     //  borderRadius: '25px',
    //     }
    //   },
    // },
    MuiMenuItem: {
      defaultProps: {
        style: {
         backgroundColor: 'transparent',
         color: '#000',
         width: 'auto',
        }
      },
    },
    // MuiIconButton: {
    //   defaultProps: {
    //     size: 'small',
    //     style: {
    //       backgroundColor: 'transparent',
    //       color: '#000',
    //       margin: '10px',
    //     },
    //   },
    // },
    MuiBadge: {
      defaultProps: {
        style: {
         marginLeft: '.5rem',
        }
      },
    },
    MuiTableSortLabel: {
      defaultProps: {
        style: {
          backgroundColor: 'transparent',
          color: '#ffffff',
        }
      },
      styleOverrides: {
        icon: {
          styles: {
            color: '#ffffff',
          }
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        style: {
          backgroundColor: 'transparent',
          // color: '#00578d',
          width: 'auto',
          borderRadius: 0,
        }
      },
    },
    // MuiToolbar: {
    //   defaultProps: {
    //     style: {
    //       paddingLeft: 0,
    //       paddingRight: 0,
    //     }
    //   },
    // },
    // MuiAppBar: {
    //   defaultProps: {
    //     style: {
    //       height: 'auto',
    //       width: '100%',
    //       backgroundColor: '#fafafa',
    //     }
    //   },
    // }
  },
});

export default theme;