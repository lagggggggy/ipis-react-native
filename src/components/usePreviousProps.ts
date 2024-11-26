import {useEffect, useRef} from 'react';

const usePreviousProps = <T>(value: T): Partial<T> => {
  const ref = useRef<Partial<T>>({});

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePreviousProps;
