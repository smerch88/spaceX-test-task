import { FC } from 'react';
import { Header } from '../Header';
import { LayoutProps } from './Layout.props';

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <div className="flex h-full min-h-screen flex-col bg-slate-50" {...props}>
      <Header />
      <main className="flex-grow pt-[80px]">{children}</main>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
