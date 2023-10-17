import React, {ReactNode} from 'react';

interface AppProps {
  className?: string;
  children?: ReactNode;
}

export const App = (props: AppProps) => {
  const {className = '', children} = props;
  return (
    <div>
      1
    </div>
  );
};
