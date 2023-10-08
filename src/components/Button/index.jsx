import { red } from "@material-ui/core/colors";

export default function index(props) {
   
  return (
    <button className=" h-10	rounded-md font-normal	text-sm	leading-5	text-center	"
    style={{backgroundColor:props.bgcolor,padding:"0 15px",color:props.color,width:"135px",width:props.width,height:props.height,
  fontSize:props.fontSize,marginRight:props.marginRight.backgroundColor,
marginTop:props.marginTop}}>{props.value}</button>
  )
}
