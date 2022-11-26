const withReturnWhatIsPassed = (Component) => (props) =>
  <Component {...props} />;

function withReturn(Component) {
  return function (props) {
    return <Component {...props} />;
  };
}

// const ReturnWhatIsPassed = ({ data }) => {
//   return <p>{data}</p>;
// };

function ReturnWhatIsPassed({ data }) {
  return <p>{data}</p>;
}

export default withReturn(ReturnWhatIsPassed);
