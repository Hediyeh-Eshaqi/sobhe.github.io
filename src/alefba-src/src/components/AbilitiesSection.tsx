import '../stylesheets/abilities-section.scss';
import {ReactComponent as Side} from "../assets/images/abilities/side.svg";
import {ReactComponent as Right1} from "../assets/images/abilities/right-1.svg";
import {ReactComponent as Right2} from "../assets/images/abilities/right-2.svg";
import {ReactComponent as Right3} from "../assets/images/abilities/right-3.svg";
import {ReactComponent as Left1} from "../assets/images/abilities/left-1.svg";
import {ReactComponent as Left2} from "../assets/images/abilities/left-2.svg";
import {ReactComponent as Left3} from "../assets/images/abilities/left-3.svg";
import { useInView } from 'react-intersection-observer';

const AbilitiesSection = () => {

    const observerOptions = {
        delay: 1000,
        triggerOnce: true
    };

    const [right1Ref,right1InView] = useInView(observerOptions);
    const [right2Ref,right2InView] = useInView(observerOptions);
    const [right3Ref,right3InView] = useInView(observerOptions);
    const [left1Ref,left1InView] = useInView(observerOptions);
    const [left2Ref,left2InView] = useInView(observerOptions);
    const [left3Ref,left3InView] = useInView(observerOptions);

    return(
        <div id={'abilities'}>
            <p id={'abilities-title'}>
                قابلیت‌های الفبا
            </p>
            <div id={'side'}>
                <Side id={'side-main'}/>
            </div>
            <div id={'abilities-wrapper'}>
                <div id={'left'}>
                    <div style={{height: '8vw'}}/>
                    <div className={'ability-group'} id={'left-1'}>
                        <Left1 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p 
                                className={left1InView? "black-text in-view" : "black-text"}
                                ref={left1Ref}
                                data-title={"تشخیص چند زبان"}
                            >
                                تشخیص چند زبان
                            </p>
                            <p 
                                className={left1InView? "black-text-background in-view-bg" : 
                                "black-text-background"}
                                data-title={"تشخیص چند زبان"}
                            >
                                تشخیص چند زبان
                            </p>
                        </div>
                        <p className={'white-text'}>
                            تشخیص زبان فارسی، انگلیسی و زبان‌های مشابه فارسی، مثل عربی و دری
                        </p>
                    </div>
                    <div className={'ability-group on-left'} id={'left-2'}>
                        <Left2 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p 
                                className={left2InView? "black-text in-view" : "black-text"}
                                ref={left2Ref}
                                data-title={"اصلاح تصویر"}
                            >
                                اصلاح تصویر
                            </p>
                            <p 
                                className={left2InView? "black-text-background in-view-bg" : "black-text-background"}
                                data-title={"اصلاح تصویر"}
                            >
                                اصلاح تصویر
                            </p>
                        </div>
                        <p className={'white-text'}>
                            اصلاح نویز، چرخش و سایه تصویر برای دقیق‌تر خواندن متن
                        </p>
                    </div>
                    <div className={'ability-group'} id={'left-3'}>
                        <Left3 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p 
                                className={left3InView? "black-text in-view" : "black-text"}
                                ref={left3Ref}
                                data-title={"خواندن حرکت‌های حروف"}
                            >
                                خواندن حرکت‌های حروف
                            </p>
                            <p 
                                className={left3InView? "black-text-background in-view-bg" : "black-text-background"}
                                ref={left3Ref}
                                data-title={"خواندن حرکت‌های حروف"}
                            >
                                خواندن حرکت‌های حروف
                            </p>
                        </div>
                        <p className={'white-text'}>
                        خواندن نوشته ها و حذف حرکت ها از کلمات فارسی و عربی
                        </p>
                    </div>
                </div>
                <div id={'right'}>
                    <div className={'ability-group on-left'} id={'right-1'}>
                        <Right1 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p 
                                className={right1InView? "black-text in-view":"black-text"}
                                ref={right1Ref}
                                data-title={"خواندن قلم‌های گوناگون"}
                            >
                                خواندن قلم‌های گوناگون
                            </p>
                            <p 
                                className={right1InView? "black-text-background in-view-bg":"black-text-background"}
                                data-title={"خواندن قلم‌های گوناگون"}
                            >
                                خواندن قلم‌های گوناگون
                            </p>
                        </div>
                        <p className={'white-text'}>
                        خواندن متن‌‌ با فونت ها و اندازه‌های گوناگو‌ن؛ مثل عنوان، متن یا پاورقی
                        </p>
                    </div>
                    <div className={'ability-group'} id={'right-2'}>
                        <Right2 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p
                                className={right2InView? "black-text in-view":"black-text"}
                                ref={right2Ref}
                                data-title={"حفظ ساختار سند"}
                            >
                                حفظ ساختار سند
                            </p>
                            <p
                                className={right2InView? "black-text-background in-view-bg":"black-text-background"}
                                data-title={"حفظ ساختار سند"}
                            >
                                حفظ ساختار سند
                            </p>
                        </div>
                        <p className={'white-text'}>
                        حفظ طول جملات، پاراگراف‌ها، جداول، فواصل و موقعیت تصاویر
                        </p>
                    </div>
                    <div className={'ability-group on-left'} id={'right-3'}>
                        <Right3 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p
                                className={right3InView? "black-text in-view":"black-text"}
                                ref={right3Ref}
                                data-title={"تعیین خطاهای احتمالی"}
                            >
                                تعیین خطاهای احتمالی
                            </p>
                            <p
                                className={right3InView? "black-text-background in-view-bg":"black-text-background"}
                                data-title={"تعیین خطاهای احتمالی"}
                            >
                                تعیین خطاهای احتمالی
                            </p>
                        </div>
                        <p className={'white-text'}>
                        مشخص کردن بخش‌هایی از نوشته که با «تردید» خوانده شده‌اند، برای بازنگری توسط انسان
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbilitiesSection;
