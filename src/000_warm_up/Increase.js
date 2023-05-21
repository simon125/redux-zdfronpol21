export const Increase = (props) => {
  const { onIncreaseClick } = props;

  return <button onClick={onIncreaseClick}>+1</button>;
};
