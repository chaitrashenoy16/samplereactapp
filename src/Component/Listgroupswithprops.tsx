interface Props {
  heading: string;
  items: string[];
}

function Listgroupwithprops(props: Props) {
  return (
    <>
      <h1> {props.heading} </h1>
      <h3> {props.items}</h3>
    </>
  );
}

export default Listgroupwithprops;
