export default function index(props) {
  return (
    <button
      className=" h-10	rounded-md font-normal	text-sm	leading-5	text-center	"
      style={{
        backgroundColor: props.bgcolor,
        padding: "0 15px",
        color: props.color,
        width: "135px",
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        marginTop: props.marginTop,
        marginRight: props.marginRight,
        border: props.border
      }}
    >
      {props.value}
    </button>
  );
}
