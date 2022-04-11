import React from 'react';

export const useLocalStorage = (key, inicio) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicio;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};
