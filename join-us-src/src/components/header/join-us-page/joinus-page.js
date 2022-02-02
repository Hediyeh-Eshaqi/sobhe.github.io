import React from 'react';
import {ReactComponent as JoinUsMobile} from "../../../assets/images/mobile-join-us.svg";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import {ReactComponent as JoinUsText} from "../../../assets/images/join-us-text-group.svg";

import  Jobinja from "../../../assets/images/jobinja.svg";
import Linkedin from "../../../assets/images/linkedin.svg";
import Mail from "../../../assets/images/mail.svg";

import './joinus-page.scss';
import {isMobile,isTablet} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isMobile || isTablet){
        return(
            <div id={ 'mobile-j'}>
                <JoinUsMobile id={'pic'}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <JoinUsWeb id={'pic'}/>
                <div id={'text-group'}>
                    <JoinUsText id={'inner'}/>
                    <div id={'button-row'}>
                        <a href={'https://jobinja.ir/companies/roshan-ai/jobs'}>
                            <img className={'join-us-link-button'} src={Jobinja} alt={''}/>
                        </a>
                        <a className={'join-us-link-button'} href={'https://www.linkedin.com/company/roshan-ai/'}>
                            <img className={'join-us-link-button'} src={Linkedin} alt={''}/>
                        </a>
                        <a href={'mailto:salam@roshan-ai.ir'}>
                            <img className={'join-us-link-button'} src={Mail} alt={''}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
};

export default function JoinusPage() {
    return (
        <div className={'join-us-page'}>
            {returnBasedOneDevice()}
        </div>
    )
}
