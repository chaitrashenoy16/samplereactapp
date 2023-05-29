interface Props {
  children: string;
  color: "primary" | "secondary" | "danger" | "success" | "warning";
  onBtnClick: () => void;
}

const ButtonAssignment2 = ({ children, color, onBtnClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onBtnClick}>
      {children}
    </button>
  );
};

export default ButtonAssignment2;
