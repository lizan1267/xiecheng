import * as React from 'react';
import { Layout, Typography} from 'antd';

interface IFooterProps {
}

export const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return <>
        <Layout.Footer>
            <Typography.Title level={3} style={{textAlign:'center'}}>
                版权所有 @ React 旅游网
            </Typography.Title>
        </Layout.Footer>
    </>;
};

