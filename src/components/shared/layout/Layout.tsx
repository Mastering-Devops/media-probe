import './Layout.css';

const Layout: React.FC = (props) => {
  return (
    <>
      <h1 className="topbar-title">New York Times</h1>
      {props.children}
    </>
  );
};

export default Layout;
