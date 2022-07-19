import fish from "../../assets/images/samples/fish.jpg";
import "../../stylesheets/fish.scss";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";
import "../../stylesheets/new-sample-style.scss";

const FishHoghoghi = () => {
    // let tempHeight;
    // const[width,setWidth] = useState();
    // const[height,setHeight] = useState();
    //
    // useEffect(() => {
    //     tempHeight = 0.5 * window.innerHeight;
    //     setWidth(tempHeight * 1.5);
    //     setHeight(tempHeight);
    // }, []);
    //
    //
    // window.onresize = () => {
    //     tempHeight = 0.5 * window.innerHeight;
    //     setWidth(tempHeight * 1.5);
    //     setHeight(tempHeight);
    // };

    let width = 1264
    let height = 843

  return(
      <div className="container">
          <div
              id="document"
              style={{ position: "relative",transition: "0s"}}
          >
              <img
                  style={{ position: "absolute", left: 0, width: width, height: height}}
                  id="raw"
                  src={fish}
                  alt={''}
              />
              <page style={{ width: width, height: height }}>
                  <div className="document line-view">
                      <TextGroup
                          fontSize={`${0.03401898734177215 * width}`}
                          text="دستمزد مستقیم"
                          height={`${0.05812574139976275 * height}`}
                          width={`${0.1463607594936709 * width}`}
                          left={`${0.15427215189873417 * width}`}
                          top={`${0.04744958481613286 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03560126582278481 * width}`}
                          text="حقوق و دستمزد"
                          height={`${0.05931198102016608 * height}`}
                          width={`${0.15427215189873417 * width}`}
                          left={`${0.7357594936708861 * width}`}
                          top={`${0.33807829181494664 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03164556962025317 * width}`}
                          text="اضافه کاري - نوبتکاري - شبکاري وحق کشیك"
                          height={`${0.06287069988137604 * height}`}
                          width={`${0.4248417721518987 * width}`}
                          left={`${0.46281645569620256 * width}`}
                          top={`${0.4151838671411625 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03322784810126582 * width}`}
                          text="حق اولاد و سایر هزینه های کارکنان"
                          height={`${0.05338078291814947 * height}`}
                          width={`${0.3370253164556962 * width}`}
                          left={`${0.5498417721518988 * width}`}
                          top={`${0.4804270462633452 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03243670886075949 * width}`}
                          text="بن - حق مسکن - خوارباروناهاری کارکنان"
                          height={`${0.054567022538552785 * height}`}
                          width={`${0.3916139240506329 * width}`}
                          left={`${0.49841772151898733 * width}`}
                          top={`${0.5456702253855279 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03401898734177215 * width}`}
                          text="عیدي وپاداش"
                          height={`${0.054567022538552785 * height}`}
                          width={`${0.1305379746835443 * width}`}
                          left={`${0.7555379746835443 * width}`}
                          top={`${0.6109134045077106 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03401898734177215 * width}`}
                          text="حق بیمه سهم کارفرما"
                          height={`${0.060498220640569395 * height}`}
                          width={`${0.21360759493670886 * width}`}
                          left={`${0.6764240506329114 * width}`}
                          top={`${0.6761565836298933 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03401898734177215 * width}`}
                          text="باز خرید و ذخیره سنوات خدمت"
                          height={`${0.05812574139976275 * height}`}
                          width={`${0.29667721518987344 * width}`}
                          left={`${0.5933544303797469 * width}`}
                          top={`${0.7390272835112692 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03401898734177215 * width}`}
                          text="بیمه حوادث - هزینه بهداشتی"
                          height={`${0.05693950177935943 * height}`}
                          width={`${0.28085443037974683 * width}`}
                          left={`${0.6091772151898734 * width}`}
                          top={`${0.8066429418742586 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03401898734177215 * width}`}
                          text="پس انداز سهم کارفرما"
                          height={`${0.05338078291814947 * height}`}
                          width={`${0.2175632911392405 * width}`}
                          left={`${0.6724683544303798 * width}`}
                          top={`${0.8718861209964412 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="سال ۱۳۹۰"
                          height={`${0.05219454329774614 * height}`}
                          width={`${0.11867088607594936 * width}`}
                          left={`${0.2650316455696203 * width}`}
                          top={`${0.19572953736654805 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="هزار ریال"
                          height={`${0.05693950177935943 * height}`}
                          width={`${0.09889240506329114 * width}`}
                          left={`${0.27689873417721517 * width}`}
                          top={`${0.2609727164887307 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۳۰,۶۷۲,۵۴۵"
                          height={`${0.05338078291814947 * height}`}
                          width={`${0.1463607594936709 * width}`}
                          left={`${0.2587025316455696 * width}`}
                          top={`${0.33214709371293 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۵,۸۲۲,۸۵۸"
                          height={`${0.051008303677342826 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          left={`${0.2689873417721519 * width}`}
                          top={`${0.4092526690391459 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۳,۵۶۴,۳۳۸"
                          height={`${0.05338078291814947 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          left={`${0.2689873417721519 * width}`}
                          top={`${0.4804270462633452 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۲,۳۲۹,۶۲۹"
                          height={`${0.05338078291814947 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          left={`${0.2689873417721519 * width}`}
                          top={`${0.5456702253855279 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۷,۵۹۷,۴۸۷"
                          height={`${0.05338078291814947 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          left={`${0.2689873417721519 * width}`}
                          top={`${0.6109134045077106 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۱۲,۳۰۵,۶۷۸"
                          left={`${0.2650316455696203 * width}`}
                          top={`${0.6702253855278766 * height}`}
                          width={`${0.14240506329113925 * width}`}
                          height={`${0.054567022538552785 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۵,۹۷۳,۷۷۸"
                          left={`${0.27294303797468356 * width}`}
                          top={`${0.7354685646500593 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          height={`${0.05575326215895611 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۲۴۷,۳۲۰"
                          left={`${0.29667721518987344 * width}`}
                          top={`${0.8066429418742586 * height}`}
                          width={`${0.11075949367088607 * width}`}
                          height={`${0.05219454329774614 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۱,۳۵۸,۷۷۷"
                          left={`${0.27689873417721517 * width}`}
                          top={`${0.8718861209964412 * height}`}
                          width={`${0.1305379746835443 * width}`}
                          height={`${0.05338078291814947 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="سال ۱۳۸۹"
                          left={`${0.07911392405063292 * width}`}
                          top={`${0.19572953736654805 * height}`}
                          width={`${0.11867088607594936 * width}`}
                          height={`${0.05338078291814947 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="هزار ریال"
                          left={`${0.09098101265822785 * width}`}
                          top={`${0.2609727164887307 * height}`}
                          width={`${0.10680379746835443 * width}`}
                          height={`${0.05693950177935943 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۲۶,۳۲۵,۸۳۳"
                          left={`${0.07911392405063292 * width}`}
                          top={`${0.33214709371293 * height}`}
                          width={`${0.1463607594936709 * width}`}
                          height={`${0.05338078291814947 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.038765822784810125 * width}`}
                          text="۴,۸۲۱,۸۹۶"
                          left={`${0.09098101265822785 * width}`}
                          top={`${0.4033214709371293 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          height={`${0.054567022538552785 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.038765822784810125 * width}`}
                          text="۳,۶۶۷,۴۳۱"
                          left={`${0.09098101265822785 * width}`}
                          top={`${0.4744958481613286 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          height={`${0.054567022538552785 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.03955696202531646 * width}`}
                          text="۲,۰۳۷,۱۲۷"
                          left={`${0.09098101265822785 * width}`}
                          top={`${0.5397390272835113 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          height={`${0.054567022538552785 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.038765822784810125 * width}`}
                          text="۸,۲۰۴,۹۷۷"
                          left={`${0.09098101265822785 * width}`}
                          top={`${0.604982206405694 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          height={`${0.054567022538552785 * height}`}
                      />
                      <TextGroup
                          fontSize={`${0.0379746835443038 * width}`}
                          text="۹,۳۷۰,۶۲۰"
                          left={`${0.09098101265822785 * width}`}
                          top={`${0.6702253855278766 * height}`}
                          width={`${0.13449367088607594 * width}`}
                          height={`${0.054567022538552785 * height}`}
                      />
                  </div>
              </page>
          </div>
      </div>
  )
};

export default FishHoghoghi;
