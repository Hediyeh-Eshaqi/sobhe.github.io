import kart from "../../assets/images/samples/kart.jpg";

const KartMelli = () => {
    return(
        <div className="container sample-image" style={{marginTop: '-105vh'}}>
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\n\t.container {\n\t\tmax-width: 1170px;\n\t}\n\t#document {\n\t\tmargin: 50px 0;\n\t\ttransform-origin: top left;\n\t\t-moz-transform-origin: top left;\n\t}\n\t#document img {\n\t\tz-index: -1;\n\t\tborder: 2px solid #ddd;\n\t\tmargin-top: -2px;\n\t\tmargin-left: -2px;\n\t}\n\n\t.document.line-view .line, .document.paragraph-view p, .document.paragraph-view table {\n\t\tfont-family: IRMitra;\n\t    /*background: rgba(255, 98, 0, 0.9);*/\n\t    background: rgba(255, 98, 0, 0.95);\n\t    color: black;\n\t    border-radius: 3px;\n\t    color: #333;\n\t    line-height: 1;\n\t    /* box-shadow: 0px 2px 2px #777; */\n\t    /* text-shadow: 0px 1px 1px #999; */\n\t    /* border: 1px solid #e45701; */\n    }\n    .document.line-view .line_bold, .document.paragraph-view p, .document.paragraph-view table {\n\t\tfont-family: IRMitra;\n\t    /*background: rgba(255, 98, 0, 0.9);*/\n\t    background: rgba(255, 98, 0, 0.95);\n\t    color: black;\n\t    border-radius: 3px;\n\t    color: #333;\n\t    line-height: 1;\n\t    /* box-shadow: 0px 2px 2px #777; */\n\t    /* text-shadow: 0px 1px 1px #999; */\n\t    /* border: 1px solid #e45701; */\n    }\n\t.document .words {\n\t\twhite-space: nowrap;\n\t}\n\t.document.line-view .line {\n\t\tdisplay: table;\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t}\n\t.document.line-view .line_bold {\n\t\tdisplay: table;\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t\tfont-weight: bold\n\t}\n\t.document.line-view .words {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t}\n\t.document.line-view p, .document.line-view table {\n\t\theight: initial !important;\n\t\twidth: initial !important;\n\t}\n\n\t.document.paragraph-view p, .document.paragraph-view table {\n\t\tposition: absolute;\n\t\tpadding: 5px 30px;\n\t\tdisplay: table;\n\t}\n\t.document.paragraph-view .lines {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t}\n\t.document.paragraph-view .line {\n\t\tdisplay: block;\n\t\tline-height: 1.3;\n\t\theight: initial !important;\n\t\twidth: initial !important;\n\t}\n\t.document.paragraph-view .words {\n\t\tfont-size: inherit !important;\n\t}\n\n\t.document div.image {\n\t\tposition: absolute;\n\t\t/*border: 10px solid #33bbff;*/\n\t\tborder-radius: 5px;\n\t\t/*box-shadow: 0px 2px 5px #777;*/\n\t\tmargin-top: 0;\n\t\tbackground: rgba(255, 98, 0, 0);\n\t}\n\n\t.document .image div.image-wrapper{\n\t\theight: 100%;\n\t\tmax-width: 128px;\n\t\tmargin: auto;\n\t\tbackground: url("/static/images/picture1600.png") no-repeat center center;\n\t\tbackground-size: contain;\n\t}\n\n\t.document.paragraph-view table th, .document.paragraph-view table td {\n\t\tborder: 6px dashed #fff;\n\t}\n'
                }}
            />
            <div
                id="document"
                style={{ position: "relative", transform: "scale(0.21)" }}
            >
                <img
                    style={{ position: "absolute", left: 0 }}
                    id="raw"
                    src={kart}
                    alt={''}
                />
                <page style={{ width: 2500, height: "1576.4750093949642px" }}>
                    <div className="document line-view">
                        <div
                            className="image"
                            style={{ left: "-2px", top: "-2px", width: 2495, height: 1578 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <p
                            style={{
                                left: 2026,
                                top: 223,
                                width: 371,
                                height: 95,
                                fontSize: "48pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <span
                dir="auto"
                className="line"
                width={372}
                height={96}
                style={{
                    left: 2026,
                    top: 223,
                    width: 371,
                    height: 95,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 49 }}>
                جمهوری اسلامی ایران
              </span>
            </span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 910,
                                top: 66,
                                width: 632,
                                height: 224,
                                fontSize: "118pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <span
                dir="auto"
                className="line"
                width={633}
                height={225}
                style={{
                    left: 910,
                    top: 66,
                    width: 632,
                    height: 224,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 193 }}>
                کارت ملی
              </span>
            </span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 1369,
                                top: 409,
                                width: 1035,
                                height: 415,
                                fontSize: "66pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <span
                dir="auto"
                className="line_bold"
                width={1036}
                height={127}
                style={{
                    left: 1369,
                    top: 409,
                    width: 1035,
                    height: 126,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 106 }}>
                شماره ملی، ۰۰۴۰۳۱۶۲۸۵
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={376}
                  height={129}
                  style={{
                      left: 1592,
                      top: 550,
                      width: 375,
                      height: 128,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 112 }}>
                حمید رضا
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={259}
                  height={131}
                  style={{
                      left: 1721,
                      top: 694,
                      width: 258,
                      height: 130,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 127 }}>
                نکویی
              </span>
            </span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 1980,
                                top: 591,
                                width: 141,
                                height: 86,
                                fontSize: "44pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <span
                dir="auto"
                className="line"
                width={142}
                height={87}
                style={{
                    left: 1980,
                    top: 591,
                    width: 141,
                    height: 86,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 85 }}>
                نام :
              </span>
            </span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 2004,
                                top: 743,
                                width: 340,
                                height: 408,
                                fontSize: "50pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <span
                dir="auto"
                className="line"
                width={341}
                height={104}
                style={{
                    left: 2004,
                    top: 743,
                    width: 340,
                    height: 103,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 74 }}>
                نام خانوادگی :
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={264}
                  height={95}
                  style={{
                      left: 2019,
                      top: 901,
                      width: 263,
                      height: 94,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 69 }}>
                تاریخ تولد :
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={220}
                  height={96}
                  style={{
                      left: 2008,
                      top: 1057,
                      width: 219,
                      height: 95,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 81 }}>
                نام پدر :
              </span>
            </span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 2015,
                                top: 1207,
                                width: 291,
                                height: 95,
                                fontSize: "48pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <span
                dir="auto"
                className="line"
                width={292}
                height={96}
                style={{
                    left: 2015,
                    top: 1207,
                    width: 291,
                    height: 95,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 68 }}>
                پایان اعتبار :
              </span>
            </span>
          </span>
                        </p>
                        <div
                            className="image"
                            style={{ left: 2005, top: 1554, width: 137, height: 19 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <p
                            style={{
                                left: 1391,
                                top: 858,
                                width: 568,
                                height: 283,
                                fontSize: "63pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <span
                dir="auto"
                className="line_bold"
                width={569}
                height={133}
                style={{
                    left: 1391,
                    top: 858,
                    width: 568,
                    height: 132,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 111 }}>
                ۱۳۶۷/۰۲/۲۶
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={213}
                  height={113}
                  style={{
                      left: 1737,
                      top: 1029,
                      width: 212,
                      height: 112,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 111 }}>
                محمد
              </span>
            </span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 1400,
                                top: 1195,
                                width: 578,
                                height: 112,
                                fontSize: "58pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <span
                dir="auto"
                className="line_bold"
                width={579}
                height={113}
                style={{
                    left: 1400,
                    top: 1195,
                    width: 578,
                    height: 112,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 111 }}>
                ۱۴۰۳/۰۸/۱۲
              </span>
            </span>
          </span>
                        </p>
                        <div
                            className="image"
                            style={{ left: 789, top: 2, width: 46, height: 16 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                    </div>
                </page>
            </div>
        </div>
    );
};

export default KartMelli;
