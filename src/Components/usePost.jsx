import React from 'react';

export const usePost = () => {
  let post;
  let state;
  const [data, setData] = React.useState(null);

  post = React.useCallback(async (url, form) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    state = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
  }, []);

  React.useEffect(() => {
    setData('oi');
  }, [state]);
  return { post, data };
};
