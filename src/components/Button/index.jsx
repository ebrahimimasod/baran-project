import { red } from "@material-ui/core/colors";

export default function index(props) {
    const getStyles = {
        backgroundColor: props.bgcolor,
        color: props.txtcolor
    };
  return (
    <button className=" h-10	rounded-md font-normal	text-sm	leading-5	text-center	"
    style={{backgroundColor:props.bgcolor,padding:"0 15px",color:props.color,width:"135px"}}>{props.value}</button>
  )
}
