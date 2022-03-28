import { useState, useEffect } from 'react';

const useContextAsLocalState = (state, initValue) => {
  const [localState, setLocalState] = useState(initValue);
  useEffect(() => {
    setLocalState(state)
  }, [state]);

  return [localState, setLocalState];
};

export default useContextAsLocalState;