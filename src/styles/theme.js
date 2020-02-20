const theme = {
  palette: {
    white: '#FFFFFF',
    primary: {
      50: '#ffe2d6',
      100: '#FFA883',
      200: '#FF8A59',
      300: '#FF7134',
      400: '#E84A07',
      500: '#B33500'
    },
    secondary: {
      50: '#fad3de',
      100: '#F17C9D',
      200: '#EB527D',
      300: '#E62F63',
      400: '#D10640',
      500: '#A1002E'
    },
    dark: {
      50: '#eeeeee',
      100: '#CCCCCC',
      200: '#888888',
      300: '#445058',
      400: '#3A444A',
      500: '#293136'
    }
  },
  breakpoint: {
    sm: '@media(min-width: 576px)',
    md: '@media(min-width: 768px)',
    lg: '@media(min-width: 992px)',
    xl: '@media(min-width: 1200px)'
  },
  transition: 'all 0.3s ease'
}

export default theme;
