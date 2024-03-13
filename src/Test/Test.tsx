import { useEffect } from 'react';
import { GetApi } from './TestAction';

const Test = () => {
  
  useEffect(() => {
    GetApi();
  }, []);

  return (
    <div>Test</div>
  );
}

export default Test;
