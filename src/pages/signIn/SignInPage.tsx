import * as React from 'react';

interface ISignInPageProps {
}

export const SignInPage: React.FC<ISignInPageProps> = (props) => {
  console.log(props);
  
  return <h1>
      登录页面
  </h1>;
};

