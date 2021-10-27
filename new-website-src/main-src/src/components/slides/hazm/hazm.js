import HazmMobile from "../../jsx-svgs/mobile/hazm";
import './hazm.scss'
import HazmWebImage from "../../jsx-svgs/web/hazm-image";
import HazmWebText from "../../jsx-svgs/web/hazm-text";
import {isMobile, isSafari} from "react-device-detect";
import Div100vh from "react-div-100vh";

const returnBasedOneDevice = (props) => {
    if(isMobile){
        return(
            <Div100vh>
                <div id={'mobile'}>
                    <HazmMobile status={props.scrollQuantity}/>
                </div>
            </Div100vh>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'text'}>
                    <HazmWebText status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <HazmWebImage status={props.scrollQuantity}/>
                </div>
            </div>
        )
    }
};


function Hazm(props) {
    return (
        <div>
            <div id={'hazm'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Hazm;
