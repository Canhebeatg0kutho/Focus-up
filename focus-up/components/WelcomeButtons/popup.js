import classes from "./buttons.module.css"
export default function Popup(props){
    return(
        <div className={classes.popupbox}>
            <div className={classes.box}>
                <button className={classes.btnclose} onClick={props.handleClose}>x</button>
                {props.content}
            </div>
        </div>
    )
}