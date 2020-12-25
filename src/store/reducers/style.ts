const INITIAL_STATE = {
  lightMode: {
    primary: '#6200ee',
    primaryVariant: '#3700b3',
    secondary: '#03dac6',
    secondaryVariant: '#018786',
    background: '#eeeeee',
    surface: '#dddddd',
    error: '#b00020',
    primaryText: '#eeeeee',
    secondaryText: '#121212',
    backgroundText: '#121212',
    surfaceText: '#121212',
    errorText: '#eeeeee'
  },
  darkMode: {
    primary: '#bb86fc',
    primaryVariant: '#3700b3',
    secondary: '#03dac6',
    secondaryVariant: '#03dac6',
    background: '#232931',
    surface: '#393e46',
    error: '#cf6679',
    primaryText: '#121212',
    secondaryText: '#121212',
    backgroundText: '#eeeeee',
    surfaceText: '#eeeeee',
    errorText: '#121212'
  }
};

interface Action {
  type: string;
  style: object;
};

const style = (state:any = INITIAL_STATE, action:Action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default style;