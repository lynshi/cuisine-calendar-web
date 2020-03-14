import LoggedInHeader from './LoggedInHeader';

const layoutStyle = {
  margin: 20,
  padding: 20
};

const LoggedInLayout = props => (
  <div style={layoutStyle}>
    <LoggedInHeader />
    {props.children}
  </div>
);

export default LoggedInLayout;