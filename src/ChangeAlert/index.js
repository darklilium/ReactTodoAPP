import react from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css'
function ChangeAlert({show, toggleShow}){
    if(show) {
        return (    
        <div className="ChangeAlert">
            <p>There are changes, please reload</p>
            <button onClick={()=> {toggleShow(false)}}>Reload</button>
        </div>
        );
    }else {
        return null;
    }
   
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}