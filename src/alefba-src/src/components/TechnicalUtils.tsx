import '../stylesheets/technical-utils.scss';
import {ReactComponent as Side} from "../assets/images/utils/side.svg";
import Left1 from "../assets/images/utils/left-1.svg";
import Left2 from "../assets/images/utils/left-2.svg";
import Right1 from "../assets/images/utils/right-1.svg";
import Right2 from "../assets/images/utils/right-2.svg";

import {ReactComponent as Accuracy} from "../assets/images/utils/accuracy-mobile.svg";
import {ReactComponent as Parallel} from "../assets/images/utils/parallel-mobile.svg";
import {ReactComponent as NLP} from "../assets/images/utils/nlp-mobile.svg";
import {ReactComponent as Deep} from "../assets/images/utils/deep-mobile.svg";
import {useInView} from "react-intersection-observer";

const TechnicalUtils = () => {

    const observerOptions = {
        delay: 1000,
        triggerOnce: true
    };

    const [right1Ref,right1InView] = useInView(observerOptions);
    const [right2Ref,right2InView] = useInView(observerOptions);
    const [left1Ref,left1InView] = useInView(observerOptions);
    const [left2Ref,left2InView] = useInView(observerOptions);

    const beforeStyle = {
        transform: 'scaleX(0)'
    };
    const afterStyle = {
        transform: 'scaleX(1)'
    };

    const beforeStyleText = {
        color: '#FF6200'
    };
    const afterStyleText = {
        color: 'black'
    };

    return(
        <div id={'tech-utils'}>
            <p id={'utils-title'}>
                امکانات فنی الفبا
            </p>
            <div id={'utils-wrapper'}>
                <div id={'left-utils'}>
                    <div className={'util-group right-to-left'} id={'left-1'}>
                        <Accuracy id={'accuracy'}/>
                        <div className={'util-row'}>
                            <div className={'title-stack-utils'}>
                                <p 
                                    className={left1InView? "black-util-text util-in-view" : "black-util-text"}
                                    ref={left1Ref}
                                    data-title={"دقت و سرعت"}
                                >
                                    دقت و سرعت
                                </p>
                                <p 
                                    className={left1InView? "black-util-text-background util-in-view-bg" : "black-util-text-background"}
                                    data-title={"دقت و سرعت"}
                                >
                                    دقت و سرعت
                                </p>
                            </div>
                        </div>
                        <img src={Left1} id={'left1-icon'} style={{float: "right"}} alt={''}/>
                        <p className={'white-util-text'}>
                        الفبا با دقتی نزدیک به ۹۷٪ نوشته‌ها را در تصاویر تشخیص می‌دهد و با یک سخت‌افزار نه‌چندان قوی می‌تواند در هر دقیقه ۶۰ صفحه را پردازش کند.
                        </p>
                    </div>
                    <div id={'right-space'}/>
                    <div className={'util-group left-to-right'} id={'right-1'}>
                        <NLP id={'nlp'}/>
                        <div className={'util-row left-to-right-row1'}>
                            <div className={'title-stack-utils'}>
                                <p 
                                    className={right1InView? "black-util-text util-in-view" : "black-util-text"}
                                    ref={right1Ref}
                                    data-title={"پردازش زبان طبیعی"}
                                >
                                    پردازش زبان طبیعی
                                </p>
                                <p 
                                    className={right1InView? "black-util-text-background util-in-view-bg" : "black-util-text-background"}
                                    data-title={"پردازش زبان طبیعی"}
                                >
                                    پردازش زبان طبیعی
                                </p>
                            </div>
                        </div>
                        <img src={Right1} id={'right1-icon'} alt={''}/>
                        <p className={'white-util-text left-to-right'}>
                        الفبا، زبان فارسی را می‌فهمد و هرجایی به تردید بیافتد عبارتی متناسب با بافت و معنای متن انتخاب می‌کند.
                        </p>
                    </div>
                </div>
                <div id={'right-utils'}>
                    <div id={'right-space'}/>
                    <div className={'util-group right-to-left'} id={'left-2'}>
                        <Parallel id={'parallel'}/>
                        <div className={'util-row'}>
                            <div className={'title-stack-utils'}>
                                <p 
                                    className={left2InView? "black-util-text util-in-view" : "black-util-text"}
                                    ref={left2Ref}
                                    data-title={"پردازش موازی"}
                                >
                                    پردازش موازی
                                </p>
                                <p 
                                    className={left2InView? "black-util-text-background util-in-view-bg" : "black-util-text-background"}
                                    data-title={"پردازش موازی"}
                                >
                                    پردازش موازی
                                </p>
                            </div>
                        </div>
                        <img src={Left2} id={'left2-icon'} alt={''}/>
                        <p className={'white-util-text'}>
                            الفبا می‌تواند با استفاده از پردازنده گرافیکی (کارت گرافیک)، اسناد را چند برابر سریع‌تر پردازش کند. همچنین قابلیت استفاده از چند ماشین برای پردازش توزیع‌شده اسناد را فراهم می‌کند.
                        </p>
                    </div>
                    <div id={'right-space'}/>
                    <div className={'util-group left-to-right'} id={'right-2'}>
                        <Deep id={'deep'}/>
                        <div className={'util-row left-to-right-row2'}>
                            <div className={'title-stack-utils'}>
                                <p 
                                    className={right2InView? "black-util-text util-in-view" : "black-util-text"}
                                    ref={right2Ref}
                                    data-title={"یادگیری عمیق"}
                                >
                                    یادگیری عمیق
                                </p>
                                <p 
                                    className={right2InView? "black-util-text-background util-in-view-bg" : "black-util-text-background"}
                                    data-title={"یادگیری عمیق"}
                                >
                                    یادگیری عمیق
                                </p>
                            </div>
                        </div>
                        <img src={Right2} id={'right2-icon'} alt={''}/>
                        <p className={'white-util-text left-to-right'}>
                            الفبا با کمک فناوری های روز دنیا یعنی یادگیری عمیق، خواندن نویسه‌ها را با قلم‌های مختلف یادگرفته است. این فناوری علاوه بر دقت بالا، امکان خواندن قلم‌های تازه را هم برای نویسه‌خوان فراهم می‌کند.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalUtils;
