interface Props {
    id: string;
    text:string;
    format:React.CSSProperties;
}

export default function LoginBtn(props : Props){
    return(
        <>
        <button role="button" id={props.id} style={props.format}  className="ml-auto font-bold p-button text-primary bg-white rounded-xl">
                    {props.text}
                </button>
        </>
    )
}