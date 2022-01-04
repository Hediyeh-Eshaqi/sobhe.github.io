import {motion} from 'framer-motion'
import {
    flowerAndFrameAnimation,
    mainLineAnimation,
    subLineAnimation,
    polygonAnimation,
    dotAnimation,
    textAnimation,
    backgroundAnimation,
    bottomLineAnimation,
    boxAnimation,
    aboutAnimation,
    basicKashfAnimation
} from '../../../animations/kashf';
import {noneAnimation} from "../../../animations/main-page";
import '../../../stylesheets/buttons.scss';
import '../../../stylesheets/kashf.scss';

const animationChooser = (scrollQuantity) => {

    switch (scrollQuantity) {
        case 1:
            return {
                'flowerAndFrameAnimation': flowerAndFrameAnimation,
                'mainLineAnimation': mainLineAnimation,
                'subLineAnimation': subLineAnimation,
                'polygonAnimation': polygonAnimation,
                'dotAnimation': dotAnimation,
                'textAnimation': textAnimation,
                'backgroundAnimation': backgroundAnimation,
                'bottomLineAnimation': bottomLineAnimation,
                'boxAnimation': boxAnimation,
                'aboutAnimation': aboutAnimation,
                'basicKashfAnimation':basicKashfAnimation,
            };
        default:
            return {
                'flowerAndFrameAnimation': noneAnimation,
                'mainLineAnimation': noneAnimation,
                'subLineAnimation': noneAnimation,
                'polygonAnimation': noneAnimation,
                'dotAnimation': noneAnimation,
                'textAnimation': noneAnimation,
                'backgroundAnimation': noneAnimation,
                'bottomLineAnimation': noneAnimation,
                'boxAnimation': noneAnimation,
                'aboutAnimation': noneAnimation,
                'basicKashfAnimation':noneAnimation,
            };
    }
};

const KashfWebText = (props) => {
    return (
        <div>
            <motion.div
                id={'kashf-text-box'}
                variants={animationChooser(props.status)['basicKashfAnimation']}
                initial={"hidden"}
                animate={"visible"}
            >
                <p id={'kashf-title-text'}>
                    پردازش تصویر و کشف محتوا
                </p>
                <p id={'kashf-main-text'}>
                    کشف یاد میگیرد که مفاهیم مورد نظر انسان را
                    <br/>
                    در میان داده ها پیدا کند. آنقدر آسان که همه میتوانند کشف را آموزش دهند.
                </p>
            </motion.div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 427 252"
            >
                <motion.path
                    d="M352.624 20.105c.775 0 1.493-.063 2.152-.189a4.07 4.07 0 01-.611-.465 3.16 3.16 0 01-.487-.567 2.741 2.741 0 01-.32-.655 2.323 2.323 0 01-.116-.734c0-.408.07-.784.211-1.128.14-.349.334-.647.581-.894.253-.252.553-.449.902-.59.32-.125.674-.188 1.062-.188h.146c.354 0 .69.075 1.01.225.32.146.599.35.837.61.242.263.431.566.567.91.141.34.211.69.211 1.055 0 .475-.128.918-.385 1.33-.253.413-.621.776-1.106 1.091.63.127 1.285.19 1.964.19h.516V21h-.516c-.582 0-1.144-.041-1.688-.124a8.835 8.835 0 01-1.52-.378c-.48.165-1.006.291-1.578.378-.567.083-1.178.124-1.832.124h-5.23c-.31 0-.606-.05-.887-.153a2.199 2.199 0 01-.734-.465 2.087 2.087 0 01-.262-.284 2.348 2.348 0 01-.24-.407 3.282 3.282 0 01-.175-.531 3.173 3.173 0 01-.065-.67c0-.16.012-.331.036-.515a11.1 11.1 0 01.087-.56c.039-.19.08-.371.124-.546l.116-.473.095-.341a2.19 2.19 0 01.051-.153l.851.269-.029.116c-.024.083-.056.187-.095.313a38.812 38.812 0 00-.225.93c-.034.17-.063.34-.088.51a3.976 3.976 0 00-.029.45c0 .302.044.554.131.757.088.204.199.371.335.502.14.126.298.218.473.277.174.053.351.08.53.08h5.23zm3.41-.56a3.958 3.958 0 00.568-.269c.145-.082.293-.179.443-.29.151-.117.286-.248.408-.393.126-.146.228-.31.305-.495.078-.184.116-.385.116-.603a2.027 2.027 0 00-.48-1.302 1.808 1.808 0 00-.567-.437 1.623 1.623 0 00-.749-.167c-.296 0-.562.046-.8.138a1.705 1.705 0 00-1.004.982 2.122 2.122 0 00-.138.786c0 .232.044.443.131.632.092.19.209.361.349.517.146.155.303.29.473.407.175.116.347.218.516.305l.204.102c.073.03.148.058.225.088zm-.945-7.76l.931-.945.96.96-.946.945-.945-.96zM372.296 21c-.228 0-.451-.017-.669-.05a3.006 3.006 0 01-.604-.175 2.04 2.04 0 01-.516-.306 1.648 1.648 0 01-.386-.45 1.86 1.86 0 01-.167.21 5.024 5.024 0 01-.167.16c-.223.199-.47.352-.742.458a2.485 2.485 0 01-.88.153c-.252 0-.48-.02-.684-.058a2.583 2.583 0 01-.545-.182 2.32 2.32 0 01-.451-.305 3.063 3.063 0 01-.385-.437 2.406 2.406 0 01-1.964.982c-.436 0-.805-.06-1.105-.182a2.417 2.417 0 01-.8-.538 1.319 1.319 0 01-.11-.124 3.378 3.378 0 01-.101-.138 1.865 1.865 0 01-.335.371 2.396 2.396 0 01-.764.458 2.604 2.604 0 01-.894.153h-.626v-.895h.713c.18 0 .359-.029.538-.087a1.371 1.371 0 00.866-.77c.097-.21.145-.464.145-.764V16.09h.895v2.393c0 .533.123.935.371 1.207.252.271.666.41 1.243.415.18 0 .357-.03.531-.088a1.313 1.313 0 00.822-.77c.087-.21.131-.464.131-.764V16.09h.895v2.393c0 .533.126.935.378 1.207.252.271.666.41 1.243.415.18 0 .359-.03.539-.088a1.352 1.352 0 00.829-.77c.092-.21.138-.464.138-.764V16.09h.894v2.393c0 1.066.577 1.607 1.731 1.621h.386V21h-.393zm-6.873-7.87l-.902.91-.901-.894.909-.917.894.902zm2.931-.02l-.902.9-.916-.9.909-.91.909.91zm-1.44-1.98l-.902.903-.916-.902.909-.91.909.91zm14.004-.748l-6.102 2.684c.32.271.749.656 1.287 1.156a37.03 37.03 0 011.848 1.847c.61.645 1.027 1.273 1.25 1.884.117.32.177.625.182.916v.037c0 .28-.051.54-.152.778a2.24 2.24 0 01-.255.414c-.112.15-.274.294-.487.43-.209.13-.473.242-.793.334-.32.092-.713.138-1.178.138h-4.138v-.895h4.138c.548 0 .989-.08 1.323-.24.286-.135.476-.315.568-.538.058-.13.087-.274.087-.429 0-.223-.08-.519-.24-.887-.155-.369-.475-.812-.96-1.331a34.773 34.773 0 00-1.44-1.454 33.133 33.133 0 00-1.135-1.055c-.32-.286-.569-.502-.749-.647a5.08 5.08 0 00-.276-.218l.095-.764 6.763-2.982.364.822z"
                    fill="#fff"
                    variants={animationChooser(props.status)['textAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                />
                <motion.path
                    variants={animationChooser(props.status)['flowerAndFrameAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                    stroke="#7000FF"
                    d="M426 23.5V31h-6.5M402.5 31H396v-7.5M419.5 1h6.5v7.5M396 8.5V1h6.5"
                />
                <motion.path
                    variants={animationChooser(props.status)['flowerAndFrameAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                    stroke="#7000FF"
                    strokeLinecap="round"
                    d="M411 26.93v-11M411 23.81s3.89 1.58 3.9-3.72a6.379 6.379 0 00-2.77.58M411 21.11s-3.89 1.58-3.9-3.73a6.291 6.291 0 012.77.59M411.5 6.94a3.18 3.18 0 013.82-.76v5.74a4.199 4.199 0 01-4.35 4 4.202 4.202 0 01-4.35-4V6.18s5.92 0 5.92 4.26"
                />
                <motion.path
                    stroke="#7000FF"
                    d="M250.303 59.5 L 276.86 37.882 L 426.12 37.882"
                    variants={animationChooser(props.status)['mainLineAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                />
                <motion.path
                    stroke="#7000FF"
                    d="M330.85 40.529h-53.114l-9.327 7.592"
                    variants={animationChooser(props.status)['subLineAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                />
                <motion.path
                    stroke="#7000FF"
                    d="M246.48 50.676h9.2l4.6 7.941-4.6 7.941h-9.2l-4.6-7.94 4.6-7.942z"
                    clipRule="evenodd"
                    variants={animationChooser(props.status)['polygonAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                />
                <motion.path
                    fill="#7000FF"
                    d="M251.14 62.088a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                    variants={animationChooser(props.status)['dotAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                />
                <a
                    target="_blank"
                    href={'https://www.roshan-ai.ir/kashf/'}
                    id={'link-kashf'}
                >
                    <motion.path
                        fill="#7000FF"
                        d="M34.29 219L3.11 251H2.008l31.18-32h1.103zm3.118 0l-31.18 32H5.126l31.18-32h1.103zm3.118 0l-31.18 32H8.244l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32H14.48l31.18-32h1.103zm3.118 0L18.7 251h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32H30.07l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32H42.54l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.117 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32H61.25l31.18-32h1.103zm9.354 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32H76.84l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32H89.31l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32H104.9l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.117 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm.228 1.834v1.132L124.71 251h-1.102L153 220.834zm0 3.2v1.132L127.828 251h-1.102L153 224.034zm0 3.2v1.132L130.946 251h-1.102L153 227.234zm0 3.2v1.132L134.064 251h-1.102L153 230.434zm0 3.2v1.132L137.182 251h-1.102L153 233.634zm0 3.2v1.132L140.3 251h-1.102L153 236.834zm0 3.2v1.132L143.418 251h-1.102L153 240.034zm0 3.2v1.132L146.536 251h-1.103l7.567-7.766zm0 3.2v1.132L149.654 251h-1.103l4.45-4.566zm0 3.2v1.132l-.228.234h-1.103l1.331-1.366zM96.65 219l-31.18 32h-1.103l31.18-32h1.103zm3.117 0l-31.18 32h-1.102l31.18-32h1.103zm-68.595 0L1 249.965v-1.131L30.07 219h1.102zm-3.118 0L1 246.765v-1.131L26.951 219h1.103zm-3.118 0L1 243.565v-1.131L23.833 219h1.103zm-3.118 0L1 240.365v-1.131L20.715 219h1.103zm-3.118 0L1 237.165v-1.131L17.597 219H18.7zm-3.118 0L1 233.966v-1.132L14.48 219h1.102zm-3.118 0L1 230.766v-1.132L11.361 219h1.103zm-3.118 0L1 227.566v-1.132L8.243 219h1.103zm-3.118 0L1 224.366v-1.132L5.126 219h1.103zm-3.118 0L1 221.166v-1.132L2.007 219H3.11z"
                        opacity="0.3"
                        variants={animationChooser(props.status)['backgroundAnimation']}
                        initial={"hidden"}
                        animate={"visible"}
                    />
                    <motion.path
                        d="M189.19 185.5H162.89L123.24 218.5H152.5V250.5H0.5V218.5H116.64"
                        stroke="#7000FF"
                        variants={animationChooser(props.status)['boxAnimation']}
                        initial={"hidden"}
                        animate={"visible"}
                    />
                    <rect id="Hidden Layer" y="218" width="153" height="33" fill="black" fillOpacity="0.01"/>
                    <motion.path
                        fill="#fff"
                        id={'text'}
                        d="M47.868 237.52c.776 0 1.493-.063 2.153-.189a4.053 4.053 0 01-.611-.466 3.113 3.113 0 01-.487-.567 2.736 2.736 0 01-.32-.655 2.3 2.3 0 01-.117-.734c0-.407.07-.783.211-1.127.14-.35.335-.648.582-.895.252-.252.553-.449.902-.589.32-.126.674-.189 1.062-.189h.145c.354 0 .691.075 1.011.225.32.146.599.349.836.611.243.262.432.565.568.909.14.34.21.691.21 1.055 0 .475-.128.919-.385 1.331-.252.412-.62.775-1.105 1.091.63.126 1.284.189 1.963.189h.517v.894h-.517c-.582 0-1.144-.041-1.687-.123a8.872 8.872 0 01-1.52-.379 9.12 9.12 0 01-1.578.379c-.567.082-1.178.123-1.833.123h-5.229c-.31 0-.606-.051-.887-.152a2.203 2.203 0 01-.735-.466 2.164 2.164 0 01-.262-.284 2.3 2.3 0 01-.24-.407 3.236 3.236 0 01-.174-.531 3.129 3.129 0 01-.066-.669c0-.16.012-.332.037-.516.024-.189.053-.376.087-.56.039-.189.08-.371.124-.546l.116-.472.095-.342c.029-.092.046-.143.05-.153l.851.269-.029.117-.094.312a37.43 37.43 0 00-.225.931c-.035.17-.064.34-.088.509-.02.165-.03.315-.03.451 0 .301.045.553.132.757.087.203.199.37.334.501.14.126.299.219.473.277.175.053.352.08.531.08h5.229zm3.411-.56a3.986 3.986 0 00.567-.269c.146-.083.294-.18.444-.291.15-.117.286-.248.407-.393.126-.145.228-.31.306-.495.077-.184.116-.385.116-.603a2.019 2.019 0 00-.48-1.302 1.81 1.81 0 00-.567-.436 1.617 1.617 0 00-.75-.168 2.18 2.18 0 00-.8.139 1.69 1.69 0 00-1.004.981 2.12 2.12 0 00-.137.786c0 .233.043.443.13.633.093.189.21.361.35.516.145.155.303.291.473.407.174.117.346.218.516.306l.204.101c.072.03.147.059.225.088zm-.946-7.76l.931-.946.96.96-.945.946-.946-.96zm17.208 9.214a4.34 4.34 0 01-.67-.051 2.985 2.985 0 01-.603-.174 2.061 2.061 0 01-.517-.306 1.635 1.635 0 01-.385-.451 1.838 1.838 0 01-.335.371c-.223.199-.47.352-.741.459a2.504 2.504 0 01-.88.152c-.252 0-.48-.019-.684-.058a2.57 2.57 0 01-.545-.182 2.296 2.296 0 01-.451-.305 3.09 3.09 0 01-.386-.437 2.375 2.375 0 01-.858.728 2.417 2.417 0 01-1.105.254c-.437 0-.805-.06-1.106-.182a2.414 2.414 0 01-.8-.538 1.427 1.427 0 01-.109-.123 3.26 3.26 0 01-.102-.139 1.85 1.85 0 01-.334.371 2.398 2.398 0 01-.764.459c-.281.101-.58.152-.895.152h-.625v-.894h.713c.18 0 .359-.029.538-.088.184-.058.351-.15.502-.276s.271-.291.363-.494c.097-.209.146-.464.146-.764v-2.393h.894v2.393c0 .533.124.936.371 1.207.252.272.667.41 1.244.415.18 0 .356-.029.53-.088.18-.058.34-.15.48-.276s.255-.291.343-.494c.087-.209.13-.464.13-.764v-2.393h.895v2.393c0 .533.126.936.378 1.207.252.272.667.41 1.244.415.18 0 .359-.029.538-.088a1.343 1.343 0 00.83-.77c.091-.209.137-.464.137-.764v-2.393h.895v2.393c0 1.067.577 1.607 1.73 1.622h.386v.894h-.392zm-6.873-7.869l-.902.909-.902-.894.91-.917.894.902zm2.93-.022l-.901.902-.916-.902.909-.909.909.909zm-1.44-1.978l-.901.902-.916-.902.909-.909.909.909zm14.005-.749l-6.102 2.684c.32.271.749.657 1.287 1.156.538.495 1.154 1.11 1.848 1.847.61.645 1.027 1.273 1.25 1.884.117.32.177.625.182.916v.037c0 .281-.05.54-.152.778a2.183 2.183 0 01-.255.414 1.795 1.795 0 01-.487.43c-.209.13-.473.242-.793.334s-.713.138-1.178.138h-4.138v-.894h4.138c.548 0 .989-.08 1.323-.24.286-.136.476-.315.568-.538.058-.131.087-.274.087-.43 0-.223-.08-.518-.24-.887-.155-.368-.475-.812-.96-1.331a34.92 34.92 0 00-1.44-1.454 33.006 33.006 0 00-1.135-1.055c-.32-.286-.57-.502-.749-.647a4.812 4.812 0 00-.276-.218l.095-.764 6.763-2.982.364.822zm8.87 10.618c-.412 0-.8-.065-1.164-.196a3.152 3.152 0 01-.945-.553 2.743 2.743 0 01-.64-.814 2.246 2.246 0 01-.233-1.004c0-.339.046-.652.138-.938a4.15 4.15 0 01.342-.786c.14-.242.291-.46.451-.654l.436-.538c.073-.088.153-.18.24-.277.088-.097.175-.191.262-.283.087-.097.172-.187.255-.269.087-.088.165-.168.232-.24l-.567-.633.655-.597c.005 0 .063.063.174.19.117.121.262.278.437.472a56.507 56.507 0 011.207 1.353c.242.276.468.545.676.807.209.262.388.521.538.778.156.257.277.517.364.779.087.257.131.526.131.807 0 .364-.08.708-.24 1.033-.155.32-.383.603-.684.851a2.93 2.93 0 01-.945.53 3.412 3.412 0 01-1.12.182zm-.022-5.891a9.35 9.35 0 00-.218.226 11.207 11.207 0 00-.676.742l-.386.465a4.16 4.16 0 00-.378.546 3.237 3.237 0 00-.29.632 2.156 2.156 0 00-.117.713c0 .218.05.429.152.633.102.198.248.375.437.531.203.164.434.291.69.378.263.087.532.131.808.131a2.332 2.332 0 001.484-.495c.189-.155.337-.337.443-.545.112-.209.168-.429.168-.662a1.7 1.7 0 00-.095-.553 2.838 2.838 0 00-.284-.589 5.294 5.294 0 00-.465-.662c-.184-.237-.4-.499-.647-.785l-.626-.706zm2.343 9.913v-.887h1.011c1.14 0 1.974-.298 2.502-.895.485-.552.727-1.379.727-2.48v-4.669h.895v4.669c0 1.406-.35 2.468-1.047 3.186-.694.717-1.72 1.076-3.077 1.076h-1.01zm10.087-4.022c-.577 0-1.04-.068-1.389-.203a1.681 1.681 0 01-.792-.604 2.304 2.304 0 01-.364-.982 9.315 9.315 0 01-.087-1.353v-7.236h.909v7.236c0 .451.014.822.043 1.113s.102.521.219.691a.932.932 0 00.516.349c.233.063.548.095.945.095h.102v.894h-.102zm3.576-5.847c.05.208.102.439.16.691s.11.514.153.785c.048.267.09.539.124.815s.055.54.065.793v.043c0 .33-.05.657-.153.982s-.252.618-.45.88a2.337 2.337 0 01-.735.626 1.998 1.998 0 01-.967.232h-1.89v-.894h1.89c.233-.015.436-.075.61-.182.18-.107.328-.245.444-.415.121-.174.213-.371.276-.589.054-.199.08-.402.08-.611v-.051a6.264 6.264 0 00-.058-.727 9.803 9.803 0 00-.116-.749 14.298 14.298 0 00-.146-.72 50.549 50.549 0 00-.152-.647l.865-.262zm-1.927 8.487l.83-.836.857.851-.843.843-.844-.858zm3.217 1.382v-.887h1.011c1.14 0 1.973-.298 2.501-.895.485-.552.728-1.379.728-2.48v-4.669h.894v4.669c0 1.406-.349 2.468-1.047 3.186-.693.717-1.719 1.076-3.076 1.076h-1.01zm10.174-3.964a7.383 7.383 0 01-2.182-.334 4.64 4.64 0 01-.865-.386l-.385-.225.458-.771.385.233c.204.121.446.225.727.313.282.087.577.155.888.203.31.044.625.066.945.066h.087c.282 0 .546-.022.793-.066.32-.053.59-.148.807-.283.22-.136.37-.304.451-.502.05-.122.073-.25.073-.386 0-.063-.012-.162-.036-.298-.024-.141-.109-.32-.255-.538l-.96-1.44c-.266-.403-.492-.742-.676-1.018a177.032 177.032 0 00-.706-1.069 1.973 1.973 0 00-.123-.182.26.26 0 01-.029-.058l-.24-.379.756-.48c.04.068.082.141.131.219.053.072.12.169.196.291l.298.465c.127.184.282.419.466.705.19.282.417.623.684 1.026.266.397.581.873.945 1.425.233.349.376.701.43 1.055a1.848 1.848 0 01-.131 1.011c-.146.344-.384.63-.714.858-.329.223-.734.376-1.214.458-.306.058-.64.087-1.004.087z"
                        variants={animationChooser(props.status)['aboutAnimation']}
                        initial={"hidden"}
                        animate={"visible"}
                    />
                </a>
            </svg>
        </div>
    );
}

export default KashfWebText;
