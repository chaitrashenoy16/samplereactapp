interface Props {
  text: string;
  subtext: string;
}
// function Message(props: Props) {
//   return (
//     <>
//       <h1> {props.text} </h1>
//       <h3> {props.subtext}</h3>
//     </>
//   );
// }

function Message({ text }: Props) {
  return <h1>{text}</h1>;
}

export default Message;
