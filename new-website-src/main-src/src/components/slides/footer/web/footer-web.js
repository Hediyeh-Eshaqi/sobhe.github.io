import './footer-web.scss';
import {ReactComponent as Line} from "../../../../assets/images/footer-line.svg";
import {ReactComponent as Name} from "../../../../assets/images/sherkat.svg";
import {ReactComponent as RoshanSVG} from "../../../../assets/images/roshan-icon.svg";
import scrollToTop from "../../scroll-to-top";

export default function FooterWeb() {
    const height = window.innerHeight;
    return (
        <div id={'footer'}>
            <Line id={'line'}/>
            <div id={'body'}>
                <div id={'icons-group'}>
                    <button title={'خانه'} onClick={() => {
                        scrollToTop(height);
                    }} style={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                    }}>
                        <RoshanSVG id={'icon'}/>
                    </button>
                    <button title={'خانه'} onClick={() => {
                        scrollToTop(height);
                    }} style={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                    }}>
                        <svg
                            id={'title'}
                            width={44}
                            height={17}
                            viewBox="0 0 44 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                id={'text'}
                                d="M4.453 16.03a4.233 4.233 0 01-2.044-.496 3.866 3.866 0 01-1.484-1.396 4.253 4.253 0 01-.56-1.374 5.551 5.551 0 01-.13-1.222c0-.126.01-.364.029-.713.019-.354.118-.844.298-1.469.18-.63.429-1.28.749-1.95L2.547 8A11.632 11.632 0 001.9 9.622a7.15 7.15 0 00-.29 1.462c-.01.155-.015.305-.015.45 0 .291.031.6.094.924.063.33.194.65.393.96.252.393.582.696.989.91a2.88 2.88 0 001.382.327h1.709c.557 0 1.01-.061 1.36-.182.354-.117.628-.282.822-.495.198-.213.332-.473.4-.778.072-.3.109-.635.109-1.004V7.084h1.374v2.261c.005.194.04.371.102.531.068.155.158.289.27.4.11.112.244.2.4.262.16.058.336.088.53.088h.284V12h-.284c-.475 0-.909-.104-1.302-.313v.51c0 1.28-.34 2.237-1.018 2.872-.679.64-1.694.96-3.047.96h-1.71zm.05-9.492l1.237-1.25 1.265 1.265-1.25 1.25-1.251-1.265zm10.209 4.088c.053 0 .08.019.08.058v1.243c0 .049-.027.073-.08.073h-3.113c-.048 0-.073-.024-.073-.073v-1.243c0-.04.025-.058.073-.058h3.113zm2.969 0c.053 0 .08.019.08.058v1.243c0 .049-.027.073-.08.073h-3.113c-.049 0-.073-.024-.073-.073v-1.243c0-.04.024-.058.073-.058h3.113zm5.456 1.36c-.456 0-.861-.066-1.215-.197a2.426 2.426 0 01-.894-.582 2.366 2.366 0 01-.88.604c-.335.126-.672.189-1.011.189h-1.673v-1.374h1.673c.072 0 .177-.01.312-.03.136-.024.27-.08.4-.167.131-.092.245-.228.342-.407.102-.18.153-.424.153-.735V7.084h1.374v2.174c0 .47.11.815.328 1.033.223.218.586.327 1.09.327.073 0 .175-.012.306-.036a1.125 1.125 0 00.75-.59c.101-.179.152-.424.152-.734V7.084h1.367v2.174c0 .47.114.817.342 1.04.228.223.594.335 1.098.335.078 0 .182-.015.313-.044a1.165 1.165 0 00.72-.61c.092-.18.138-.42.138-.72 0-.107-.01-.24-.029-.4a7.955 7.955 0 00-.065-.517 18.804 18.804 0 00-.19-1.098c-.034-.17-.065-.32-.094-.451a3.897 3.897 0 00-.073-.298l1.302-.415a17.296 17.296 0 01.276 1.295c.044.223.083.448.117.676.039.223.07.441.094.654.024.209.037.393.037.553 0 .46-.075.863-.226 1.208a2.458 2.458 0 01-1.404 1.36c-.305.111-.61.17-.916.174a3.48 3.48 0 01-1.236-.204 2.483 2.483 0 01-.902-.603 2.403 2.403 0 01-.88.596c-.33.131-.662.197-.996.197zM26.126 1.81l-1.033 1.01-1.018-1.01L25.122.77l1.004 1.04zm.356 3.287l-1.149-1.163 1.135-1.179 1.178 1.179-1.164 1.163zm-2.785-.014l-1.15-1.164 1.135-1.178L24.86 3.92l-1.163 1.164zm8.254 9.556c.732 0 1.347-.056 1.847-.167.5-.112.894-.284 1.185-.517.252-.203.437-.463.553-.778.121-.315.182-.708.182-1.178H34.38c-.34 0-.684-.05-1.033-.153a2.69 2.69 0 01-.953-.502 2.645 2.645 0 01-.69-.909c-.18-.378-.27-.838-.27-1.381 0-.32.027-.609.08-.866a4.42 4.42 0 01.211-.698 3.176 3.176 0 01.582-.916 2.811 2.811 0 012.022-.836c.344 0 .666.053.967.16.3.106.57.266.807.48.655.61.982 1.568.982 2.872V12c0 .688-.102 1.28-.305 1.774-.2.5-.51.917-.931 1.252-.427.334-.958.581-1.593.741-.63.165-1.399.248-2.305.248V14.64zm2.378-7.527c-.48 0-.854.17-1.12.509-.267.34-.4.817-.4 1.433 0 .625.189 1.059.567 1.301.092.059.187.107.284.146.097.034.191.06.283.08l.248.036c.077.005.14.008.189.008h1.338V9.25c0-.354-.027-.652-.08-.895a2.492 2.492 0 00-.204-.61 1.067 1.067 0 00-.283-.364 1.048 1.048 0 00-.306-.19.961.961 0 00-.29-.065 2.243 2.243 0 00-.226-.014zM38 16.036v-1.374h1.004c.499 0 .93-.06 1.294-.182.369-.116.672-.298.91-.546a2.2 2.2 0 00.53-.945c.117-.383.175-.839.175-1.367V7.084h1.374v4.538c0 .693-.092 1.311-.276 1.854a3.623 3.623 0 01-.807 1.39 3.486 3.486 0 01-1.346.865c-.533.204-1.151.305-1.854.305H38z"
                                fill="#fff"
                            />
                        </svg>
                    </button>
                </div>
                <div id={'left'}>
                    <div id={'links'}>
                        <a href={'https://www.roshan-ai.ir/contact-us'}  title={'بخش تماس با ما'}>
                            <svg
                                id={'contact-us'}
                                width={62}
                                height={14}
                                fill="none"
                                viewBox="0 0 62 14"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    viewBox="0 0 62 14"
                                    id={'text'}
                                    fill={'white'}
                                    d="M3.471 10a6.476 6.476 0 01-1.107-.09 2.838 2.838 0 01-.738-.247c-.2-.11-.361-.246-.484-.408a2 2 0 01-.28-.572 3.416 3.416 0 01-.134-.738 11.678 11.678 0 01-.031-.904V.919h1.202v6.122c0 .369.01.668.032.897.026.23.087.407.185.535a.801.801 0 00.451.254c.204.043.505.066.904.07V10zm4.363-.897c.03 0 .07-.002.12-.007a.465.465 0 00.173-.05.656.656 0 00.184-.134.812.812 0 00.166-.261c.05-.115.091-.259.12-.433.035-.178.052-.394.052-.649 0-.047-.005-.12-.013-.223a2.245 2.245 0 00-.191-.725 1.309 1.309 0 00-.23-.363 1.125 1.125 0 00-.865-.375 1.03 1.03 0 00-.477.102.939.939 0 00-.324.267c-.09.114-.164.25-.223.407-.06.153-.115.32-.166.503-.05.178-.101.367-.152.566-.051.195-.11.39-.179.586.221.11.425.214.611.311.187.098.361.183.522.255.161.068.312.123.452.165.144.039.284.058.42.058zM7.35 4.686c.416 0 .777.081 1.082.242.31.157.567.37.77.637.204.267.354.574.452.922.102.348.153.709.153 1.082 0 .412-.036.766-.108 1.063a2.81 2.81 0 01-.274.75c-.115.2-.244.361-.388.484a1.689 1.689 0 01-.853.407 2.32 2.32 0 01-.35.032c-.208 0-.407-.02-.598-.063a3.711 3.711 0 01-.586-.185c-.199-.076-.409-.172-.63-.286a56.111 56.111 0 01-.719-.388A1.678 1.678 0 013.96 10h-.732V8.797h.732c.16 0 .292-.06.394-.178.106-.119.197-.274.274-.464.076-.191.146-.41.21-.656.063-.246.136-.498.216-.757a6.85 6.85 0 01.3-.757c.114-.247.258-.465.432-.656a2.1 2.1 0 01.643-.464c.254-.12.562-.179.922-.179zM19.125 10a6.477 6.477 0 01-1.107-.09 2.84 2.84 0 01-.738-.247c-.2-.11-.36-.246-.484-.408a2 2 0 01-.28-.572 3.414 3.414 0 01-.133-.738 11.685 11.685 0 01-.032-.904V.919h1.203v6.122c0 .369.01.668.031.897.026.23.087.407.185.535a.802.802 0 00.452.254c.203.043.505.066.903.07V10zm3.173-5.18a8.761 8.761 0 01.134.617c.034.161.07.342.108.541a17.062 17.062 0 01.178 1.177c.021.187.032.35.032.49 0 .408-.068.76-.203 1.057a2.1 2.1 0 01-1.24 1.158c-.269.093-.538.14-.81.14h-1.622V8.797h1.622c.064 0 .153-.008.268-.025a.937.937 0 00.655-.49c.09-.153.134-.365.134-.637 0-.093-.009-.21-.026-.35a6.704 6.704 0 00-.057-.458 11.096 11.096 0 00-.076-.502 21.758 21.758 0 00-.172-.898 4.452 4.452 0 00-.064-.267l1.14-.35zm-2.201 7.49l1.081-1.095 1.108 1.108-1.095 1.094-1.095-1.107zM42.21 10c-.42 0-.79-.062-1.107-.185a2.067 2.067 0 01-.79-.534c-.114.136-.243.25-.388.344-.14.089-.286.163-.439.222a2.43 2.43 0 01-.903.153c-.53 0-.989-.119-1.375-.356v.534c0 1.112-.297 1.945-.89 2.501-.595.556-1.484.834-2.667.834h-1.496a3.749 3.749 0 01-1.788-.427 3.399 3.399 0 01-1.298-1.215 3.722 3.722 0 01-.49-1.203 4.724 4.724 0 01-.121-1.082c0-.11.009-.32.026-.63.02-.31.11-.742.267-1.298.157-.556.375-1.128.655-1.718l1.082.528c-.238.492-.426.965-.566 1.42-.136.453-.221.882-.255 1.285-.013.135-.019.267-.019.394 0 .26.028.533.083.821.06.289.176.569.35.84.22.344.509.609.865.796.357.19.76.286 1.21.286h1.495c.488 0 .884-.05 1.19-.153.31-.101.55-.246.719-.432.174-.187.29-.412.35-.675.063-.259.095-.55.095-.872v-4.48h1.203V6.94c0 .407.038.734.115.98.08.242.184.429.311.56a.964.964 0 00.44.261c.165.042.335.064.509.064.106 0 .226-.02.362-.058.136-.038.263-.101.382-.19a1.168 1.168 0 00.426-.942V5.698h1.197v1.98c.008.385.11.67.305.852.2.182.516.274.949.274.072-.005.165-.02.28-.045a.925.925 0 00.617-.522c.08-.157.12-.365.12-.623 0-.094-.008-.21-.025-.35a10.587 10.587 0 00-.127-.935c-.03-.17-.06-.33-.09-.478a8.322 8.322 0 00-.14-.662l1.146-.35c.009.021.024.087.045.197a14.78 14.78 0 01.19.93c.039.195.073.392.103.591.03.195.053.386.07.573.02.182.031.344.031.484 0 .403-.065.753-.197 1.05a2.205 2.205 0 01-.509.738 2.15 2.15 0 01-.713.445 2.382 2.382 0 01-.795.153zm6.91 0a6.476 6.476 0 01-1.107-.09 2.84 2.84 0 01-.738-.247c-.2-.11-.36-.246-.484-.408a2 2 0 01-.28-.572 3.414 3.414 0 01-.133-.738 11.682 11.682 0 01-.032-.904V.919h1.203v6.122c0 .369.01.668.032.897.025.23.087.407.184.535a.802.802 0 00.452.254c.203.043.505.066.903.07V10zm7.227 0a2.7 2.7 0 01-.859-.134 2.471 2.471 0 01-.725-.381 1.67 1.67 0 01-.795.675c-.137.059-.268.097-.395.114a2.055 2.055 0 01-.331.032c-.208 0-.408-.022-.599-.064a3.708 3.708 0 01-.585-.185c-.2-.076-.41-.172-.63-.286a55.64 55.64 0 01-.72-.388 1.678 1.678 0 01-1.342.617h-.496V8.797h.496c.161 0 .293-.06.395-.178.106-.119.197-.274.273-.464.077-.191.147-.41.21-.656.064-.246.136-.498.217-.757.084-.259.184-.511.299-.757.114-.247.259-.465.432-.656a2.1 2.1 0 01.643-.464c.255-.12.562-.179.923-.179.416 0 .776.081 1.082.242.31.157.566.37.77.637.203.267.354.574.452.922.101.348.152.709.152 1.082 0 .28.05.503.147.668.102.161.216.285.343.37a1.203 1.203 0 00.643.19h.223V10h-.223zm-3.105-.897c.033 0 .076-.002.127-.007a.46.46 0 00.165-.05.655.655 0 00.185-.134.812.812 0 00.165-.261c.051-.115.092-.259.121-.433a3.527 3.527 0 00.038-.872 2.246 2.246 0 00-.19-.725 1.31 1.31 0 00-.23-.363 1.125 1.125 0 00-.865-.375 1.03 1.03 0 00-.477.102.939.939 0 00-.325.267c-.089.114-.163.25-.223.407-.059.153-.114.32-.165.503-.051.178-.102.367-.153.566-.05.195-.11.39-.178.586.22.11.424.214.611.311.187.098.36.183.522.255.161.068.312.123.452.165.144.039.284.058.42.058zm7.502-4.283a8.907 8.907 0 01.134.617c.033.161.07.342.107.541a16.818 16.818 0 01.178 1.177c.022.187.032.35.032.49 0 .408-.067.76-.203 1.057a2.1 2.1 0 01-1.241 1.158c-.267.093-.537.14-.808.14h-2.635V8.797h2.635c.063 0 .152-.008.267-.025a.938.938 0 00.656-.49c.089-.153.133-.365.133-.637 0-.093-.008-.21-.025-.35a6.767 6.767 0 00-.058-.458 11.098 11.098 0 00-.076-.502 21.758 21.758 0 00-.172-.898 4.39 4.39 0 00-.063-.267l1.139-.35zm-.115-1.35l-1.005-1.017.992-1.031 1.031 1.03-1.018 1.019zm-2.437-.012L57.187 2.44l.993-1.03 1.031 1.03-1.018 1.018z"
                                />
                            </svg>
                        </a>
                        <a href={'https://www.roshan-ai.ir/join-us'}  title={'بخش همکاری باما'}>
                            <svg
                                id={'join-us'}
                                width={72}
                                height={15}
                                fill="none"
                                viewBox="0 0 72 15"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    id={'text'}
                                    d="M3.149 11a6.467 6.467 0 01-1.107-.09 2.838 2.838 0 01-.739-.247c-.199-.11-.36-.246-.483-.408a2.002 2.002 0 01-.28-.572 3.416 3.416 0 01-.134-.738 11.679 11.679 0 01-.032-.904V1.919h1.203v6.122c0 .369.01.668.032.897.025.23.087.407.184.535a.801.801 0 00.452.254c.204.043.505.066.904.07V11zm4.363-.897c.03 0 .07-.002.12-.007a.466.466 0 00.172-.05.656.656 0 00.185-.134.812.812 0 00.165-.261c.051-.115.092-.259.121-.433.034-.178.051-.394.051-.649 0-.047-.004-.12-.012-.223a2.243 2.243 0 00-.191-.725 1.308 1.308 0 00-.23-.363 1.125 1.125 0 00-.865-.375 1.03 1.03 0 00-.477.102.939.939 0 00-.325.267c-.089.114-.163.25-.222.407-.06.153-.115.32-.166.503-.05.178-.102.367-.153.566-.05.195-.11.39-.178.586.22.11.424.214.611.311.187.098.36.183.522.255.161.068.312.123.452.165.144.039.284.058.42.058zm-.484-4.417c.416 0 .776.081 1.082.242.31.157.566.37.77.637.204.267.354.574.452.922.102.348.152.709.152 1.082 0 .412-.036.766-.108 1.063a2.81 2.81 0 01-.273.75c-.115.2-.244.361-.389.484a1.689 1.689 0 01-.853.407 2.32 2.32 0 01-.35.032c-.207 0-.407-.02-.597-.063a3.71 3.71 0 01-.586-.185c-.2-.076-.41-.171-.63-.286a54.725 54.725 0 01-.719-.388A1.678 1.678 0 013.636 11h-.732V9.797h.732c.162 0 .293-.06.395-.178.106-.119.197-.274.273-.464.077-.191.147-.41.21-.656.064-.246.136-.498.217-.757.085-.259.184-.511.299-.757.114-.247.259-.465.433-.656a2.1 2.1 0 01.642-.464c.255-.12.563-.179.923-.179zM18.803 11a6.466 6.466 0 01-1.107-.09 2.837 2.837 0 01-.738-.247c-.2-.11-.36-.246-.484-.408a2.004 2.004 0 01-.28-.572 3.42 3.42 0 01-.134-.738 11.685 11.685 0 01-.031-.904V1.919h1.202v6.122c0 .369.01.668.032.897.026.23.087.407.185.535a.801.801 0 00.451.254c.204.043.505.066.904.07V11zm3.173-5.18c.009.025.026.093.051.204.025.11.053.248.083.413.034.161.07.342.108.541a17.068 17.068 0 01.178 1.177c.021.187.032.35.032.49 0 .408-.068.76-.204 1.057a2.1 2.1 0 01-1.24 1.158c-.268.093-.537.14-.809.14h-1.623V9.797h1.623c.064 0 .153-.008.267-.025a.938.938 0 00.655-.49c.09-.153.134-.365.134-.637 0-.093-.008-.21-.025-.35a6.832 6.832 0 00-.057-.458 11.098 11.098 0 00-.077-.502 21.758 21.758 0 00-.171-.898 4.55 4.55 0 00-.064-.267l1.14-.35zm-2.202 7.49l1.082-1.095 1.107 1.108-1.094 1.094-1.095-1.107zm13.51-.013a4.64 4.64 0 001.102-.114c.314-.072.573-.19.776-.35.204-.162.354-.372.452-.63.098-.26.146-.573.146-.942-.407-.106-.806-.212-1.196-.318l-.522-.134c-.182-.05-.365-.1-.547-.146-.178-.051-.354-.098-.528-.14a35.38 35.38 0 01-.471-.121 3.514 3.514 0 01-.28-1.343l.006-.407c.009-.246.1-.57.274-.974.174-.403.42-.763.738-1.082.318-.322.685-.579 1.1-.77a4.077 4.077 0 011.662-.362c.399 0 .808.061 1.228.184l-.3 1.152a2.822 2.822 0 00-.877-.127c-.297 0-.584.042-.86.127-.27.08-.523.2-.757.356a2.454 2.454 0 00-.598.567c-.161.216-.278.46-.35.732-.05.178-.076.362-.076.553 0 .11.008.22.025.331l2.438.605c.339.093.593.246.763.458.17.212.255.47.255.776 0 .556-.066 1.042-.197 1.457-.132.42-.342.768-.63 1.044-.289.276-.662.484-1.12.624-.454.14-1.006.21-1.655.21h-1.406c-.323 0-.635-.04-.936-.121a3.922 3.922 0 01-.853-.337 3.881 3.881 0 01-1.33-1.196c-.199-.323-.35-.678-.451-1.063a4.77 4.77 0 01-.153-1.222c0-.53.083-1.101.248-1.712.17-.615.416-1.264.738-1.947a663.092 663.092 0 011.056.515c-.56 1.196-.84 2.234-.84 3.112 0 .314.039.613.115.897.076.284.183.541.318.77.217.34.51.605.878.796.37.195.773.292 1.21.292h1.406zm4.7 1.235v-1.203h.879c.437 0 .814-.053 1.132-.159.323-.102.588-.26.796-.477.212-.217.367-.492.464-.827.102-.336.153-.734.153-1.197V6.7h1.203v3.97c0 .607-.08 1.148-.242 1.623-.157.48-.392.884-.706 1.215a3.05 3.05 0 01-1.178.758c-.466.178-1.007.267-1.622.267h-.879zM47.282 11a6.466 6.466 0 01-1.108-.09 2.837 2.837 0 01-.738-.247c-.2-.11-.36-.246-.483-.408a2 2 0 01-.28-.572 3.414 3.414 0 01-.134-.738 11.685 11.685 0 01-.032-.904V1.919h1.203v6.122c0 .369.01.668.032.897.025.23.087.407.184.535a.801.801 0 00.452.254c.204.043.505.066.904.07V11zm7.882 0h-.096c-.377 0-.715-.036-1.012-.108a3.345 3.345 0 01-.801-.306 3.573 3.573 0 01-.669-.483 7.211 7.211 0 01-.598-.637.757.757 0 01-.025.058.802.802 0 00-.026.057 2.075 2.075 0 01-.502.63 2.748 2.748 0 01-.758.464c-.25.11-.528.193-.833.249-.306.05-.624.076-.955.076h-1.87V9.797h1.87c.246 0 .475-.017.687-.05.217-.039.41-.09.58-.153.173-.068.32-.149.439-.242a.938.938 0 00.273-.312.883.883 0 00.083-.388c0-.115-.03-.278-.09-.49-.059-.217-.222-.505-.49-.866a2632.29 2632.29 0 00-2.08-2.92l.235-.891L54.368.786l.497 1.101-5.212 2.387 2.526 3.506c.259.348.49.65.694.904.203.25.41.458.617.623.212.166.441.289.687.37.25.08.548.12.891.12h.096V11zm7.22 0a2.7 2.7 0 01-.86-.134 2.469 2.469 0 01-.725-.381 1.669 1.669 0 01-.795.675 1.47 1.47 0 01-.395.114 2.055 2.055 0 01-.331.032c-.208 0-.407-.022-.598-.064a3.712 3.712 0 01-.586-.185c-.2-.076-.41-.171-.63-.286a54.979 54.979 0 01-.719-.388 1.678 1.678 0 01-1.343.617h-.496V9.797h.496c.161 0 .293-.06.395-.178.106-.119.197-.274.274-.464.076-.191.146-.41.21-.656.063-.246.135-.498.216-.757.085-.259.184-.511.299-.757.114-.247.259-.465.433-.656.178-.19.392-.346.642-.464.255-.12.563-.179.923-.179.416 0 .777.081 1.082.242.31.157.566.37.77.637.204.267.354.574.452.922.102.348.153.709.153 1.082 0 .28.048.503.146.668.102.161.216.285.343.37a1.203 1.203 0 00.643.19h.223V11h-.223zm-3.106-.897c.034 0 .076-.002.127-.007a.46.46 0 00.166-.05.656.656 0 00.184-.134.812.812 0 00.165-.261c.051-.115.092-.259.121-.433.034-.178.051-.394.051-.649 0-.047-.004-.12-.012-.223a2.246 2.246 0 00-.191-.725 1.311 1.311 0 00-.23-.363 1.125 1.125 0 00-.865-.375 1.03 1.03 0 00-.477.102.94.94 0 00-.325.267c-.089.114-.163.25-.222.407-.06.153-.115.32-.166.503-.05.178-.102.367-.153.566-.05.195-.11.39-.178.586.22.11.424.214.611.311.187.098.36.183.522.255.161.068.312.123.452.165.144.039.284.058.42.058zm7.21-.745a2 2 0 00.432-.254 1.79 1.79 0 00.35-.344 1.452 1.452 0 00.318-.923 1 1 0 00-.134-.534 1.184 1.184 0 00-.318-.357 1.16 1.16 0 00-.388-.197 1.13 1.13 0 00-.337-.064c-.174 0-.335.028-.484.083a1.058 1.058 0 00-.636.554c-.06.131-.09.273-.09.426 0 .183.024.348.07.497.052.144.128.28.23.407.106.123.24.242.4.356.162.115.357.231.586.35zm1.622-5.053a133.702 133.702 0 011.8 1.922c.17.183.327.359.472.528.148.166.277.319.388.459.114.135.2.246.254.33.115.187.208.368.28.541a2.06 2.06 0 01.184.853c0 .072-.005.174-.018.306a2.97 2.97 0 01-.115.521 2.069 2.069 0 01-.324.675c-.145.2-.32.371-.528.516a2.408 2.408 0 01-.707.33c-.263.081-.547.121-.853.121-.288 0-.587-.038-.897-.114a4.854 4.854 0 01-.96-.357 5.296 5.296 0 01-.262-.114 11.191 11.191 0 00-.222-.102 3.36 3.36 0 01-.178-.09 7.99 7.99 0 01-1.4.28c-.535.06-1.112.09-1.731.09h-.936V9.797h.936c.275 0 .56-.004.852-.012.297-.009.56-.028.79-.058a2.524 2.524 0 01-.669-.878 2.74 2.74 0 01-.21-1.1 2.198 2.198 0 01.668-1.604c.212-.2.46-.355.745-.465a2.53 2.53 0 01.942-.172 2.163 2.163 0 011.279.401c.174.119.324.259.452.42.131.157.242.323.33.496.09.17.155.344.198.522.046.174.07.338.07.49 0 .437-.083.832-.248 1.184-.162.348-.401.655-.72.923.179.072.367.131.567.178a2.699 2.699 0 00.98.044 1.233 1.233 0 00.668-.305c.093-.09.174-.204.242-.344a.853.853 0 00.083-.375c0-.064-.015-.166-.045-.306-.025-.14-.106-.328-.242-.566a5.467 5.467 0 00-.515-.738 13.78 13.78 0 00-.687-.79 27.58 27.58 0 00-.783-.801 70.502 70.502 0 01-.796-.796l.866-.84z"
                                    fill="#fff"
                                />
                            </svg>
                        </a>
                    </div>
                    <div id={'email-name'}>
                        <Name id={'name'}/>
                        <a
                            title={'تماس از طریق ایمیل'}
                            href={'mailto:salam@roshan-ai.ir'}
                            target="_blank"
                            id={'a-email'}
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="103"
                                height="12"
                                viewBox="0 0 103 12"
                                fill="none"
                                id={'email'}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    id={'email'}
                                    d="M4.33903 7.32C4.33903 7.02545 4.22812 6.79818 4.00631 6.63818C3.78812 6.47455 3.40449 6.33455 2.8554 6.21818C2.30631 6.10182 1.86994 5.96182 1.54631 5.79818C1.22631 5.63091 0.988125 5.43455 0.831761 5.20909C0.679034 4.98364 0.60267 4.71455 0.60267 4.40182C0.60267 3.88182 0.820852 3.44182 1.25722 3.08182C1.69722 2.72182 2.25903 2.54182 2.94267 2.54182C3.66267 2.54182 4.24631 2.72727 4.69358 3.09818C5.14085 3.46909 5.36449 3.94364 5.36449 4.52182H4.27358C4.27358 4.22727 4.14813 3.97273 3.89722 3.75818C3.64631 3.54 3.32812 3.43091 2.94267 3.43091C2.54994 3.43091 2.24267 3.51818 2.02085 3.69273C1.79903 3.86364 1.68813 4.08727 1.68813 4.36364C1.68813 4.62545 1.78994 4.82364 1.99358 4.95818C2.20085 5.08909 2.5754 5.21636 3.11722 5.34C3.65903 5.46 4.09722 5.60364 4.43176 5.77091C4.76994 5.93818 5.01903 6.14 5.17903 6.37636C5.34267 6.61273 5.42449 6.90182 5.42449 7.24364C5.42449 7.80727 5.19722 8.26 4.74267 8.60182C4.29176 8.94364 3.70449 9.11455 2.98085 9.11455C2.47176 9.11455 2.02085 9.02545 1.62813 8.84727C1.23903 8.66909 0.93358 8.41818 0.711761 8.09455C0.49358 7.77091 0.384489 7.42182 0.384489 7.04727H1.46994C1.48813 7.41091 1.63176 7.7 1.90085 7.91455C2.17358 8.12545 2.53358 8.23091 2.98085 8.23091C3.39176 8.23091 3.72085 8.14909 3.96812 7.98545C4.2154 7.81818 4.33903 7.59636 4.33903 7.32ZM10.7502 9C10.6884 8.87636 10.6374 8.65455 10.5974 8.33455C10.092 8.85455 9.49017 9.11455 8.79199 9.11455C8.16653 9.11455 7.65381 8.93818 7.25381 8.58545C6.85381 8.23273 6.65381 7.78545 6.65381 7.24364C6.65381 6.58182 6.90472 6.06909 7.40653 5.70545C7.90835 5.33818 8.61381 5.15455 9.5229 5.15455H10.5811V4.65818C10.5811 4.28 10.4665 3.97818 10.2374 3.75273C10.012 3.52727 9.67926 3.41455 9.23926 3.41455C8.85017 3.41455 8.52472 3.51273 8.2629 3.70909C8.00472 3.90545 7.87563 4.14182 7.87563 4.41818H6.78472C6.78472 4.10182 6.89562 3.79636 7.11744 3.50182C7.3429 3.20727 7.64835 2.97455 8.03381 2.80364C8.41926 2.62909 8.8429 2.54182 9.30472 2.54182C10.0356 2.54182 10.6065 2.72545 11.0174 3.09273C11.432 3.45636 11.6484 3.95818 11.6665 4.59818V7.51636C11.6665 8.09818 11.7393 8.56182 11.8847 8.90727V9H10.7502ZM8.95017 8.17636C9.29199 8.17636 9.61381 8.08909 9.91562 7.91455C10.2211 7.73636 10.4429 7.50727 10.5811 7.22727V5.92364H9.73017C8.4029 5.92364 7.73926 6.31273 7.73926 7.09091C7.73926 7.42909 7.85199 7.69455 8.07744 7.88727C8.3029 8.08 8.59381 8.17636 8.95017 8.17636ZM14.5393 9H13.4593V0H14.5393V9ZM20.1955 9C20.1337 8.87636 20.0828 8.65455 20.0428 8.33455C19.5373 8.85455 18.9355 9.11455 18.2373 9.11455C17.6118 9.11455 17.0991 8.93818 16.6991 8.58545C16.2991 8.23273 16.0991 7.78545 16.0991 7.24364C16.0991 6.58182 16.35 6.06909 16.8518 5.70545C17.3537 5.33818 18.0591 5.15455 18.9682 5.15455H20.0264V4.65818C20.0264 4.28 19.9118 3.97818 19.6828 3.75273C19.4573 3.52727 19.1246 3.41455 18.6846 3.41455C18.2955 3.41455 17.97 3.51273 17.7082 3.70909C17.45 3.90545 17.3209 4.14182 17.3209 4.41818H16.23C16.23 4.10182 16.3409 3.79636 16.5628 3.50182C16.7882 3.20727 17.0937 2.97455 17.4791 2.80364C17.8646 2.62909 18.2882 2.54182 18.75 2.54182C19.4809 2.54182 20.0518 2.72545 20.4628 3.09273C20.8773 3.45636 21.0937 3.95818 21.1118 4.59818V7.51636C21.1118 8.09818 21.1846 8.56182 21.33 8.90727V9H20.1955ZM18.3955 8.17636C18.7373 8.17636 19.0591 8.08909 19.3609 7.91455C19.6664 7.73636 19.8882 7.50727 20.0264 7.22727V5.92364H19.1755C17.8482 5.92364 17.1846 6.31273 17.1846 7.09091C17.1846 7.42909 17.2973 7.69455 17.5228 7.88727C17.7482 8.08 18.0391 8.17636 18.3955 8.17636ZM23.8265 2.66182L23.8592 3.36545C24.3246 2.81636 24.9519 2.54182 25.741 2.54182C26.6246 2.54182 27.2265 2.88182 27.5465 3.56182C27.7574 3.25636 28.0319 3.01091 28.3701 2.82545C28.7083 2.63636 29.1083 2.54182 29.5701 2.54182C30.9592 2.54182 31.6665 3.27818 31.6919 4.75091V9H30.6065V4.81636C30.6065 4.36182 30.5028 4.02364 30.2956 3.80182C30.0883 3.57636 29.741 3.46364 29.2537 3.46364C28.8501 3.46364 28.5156 3.58364 28.2501 3.82364C27.9846 4.06364 27.8301 4.38727 27.7865 4.79455V9H26.701V4.84364C26.701 3.92364 26.2501 3.46364 25.3483 3.46364C24.6356 3.46364 24.1483 3.76545 23.8865 4.36909V9H22.801V2.66182H23.8265ZM42.6836 6.06C42.6364 7.00545 42.4018 7.75091 41.98 8.29636C41.5582 8.84182 40.9945 9.11455 40.2891 9.11455C39.5582 9.11455 39.0891 8.78727 38.8818 8.13273C38.6709 8.46364 38.4291 8.71091 38.1564 8.87455C37.8873 9.03455 37.6073 9.11455 37.3164 9.11455C36.76 9.11455 36.34 8.88727 36.0564 8.43273C35.8309 8.07273 35.7182 7.60364 35.7182 7.02545C35.7182 6.87636 35.7255 6.72 35.74 6.55636C35.7982 5.91273 35.9455 5.33818 36.1818 4.83273C36.4182 4.32727 36.7218 3.93091 37.0927 3.64364C37.4673 3.35273 37.86 3.20727 38.2709 3.20727C38.5873 3.20727 38.8709 3.24909 39.1218 3.33273C39.3727 3.41636 39.6545 3.58 39.9673 3.82364L39.6618 7.07455C39.6545 7.18 39.6509 7.28 39.6509 7.37455C39.6509 8.07636 39.9036 8.42727 40.4091 8.42727C40.8527 8.42727 41.2109 8.20909 41.4836 7.77273C41.7564 7.33273 41.9036 6.76182 41.9255 6.06C41.9327 5.89636 41.9364 5.73818 41.9364 5.58545C41.9364 4.29818 41.6345 3.27818 41.0309 2.52545C40.4273 1.76909 39.4727 1.39091 38.1673 1.39091C37.3818 1.39091 36.6836 1.58545 36.0727 1.97455C35.4655 2.36 34.9855 2.92 34.6327 3.65455C34.28 4.38909 34.0836 5.23818 34.0436 6.20182C34.0364 6.34 34.0327 6.47636 34.0327 6.61091C34.0327 7.40727 34.1618 8.13636 34.42 8.79818C34.6818 9.46 35.1 9.97818 35.6745 10.3527C36.2527 10.7309 36.9509 10.92 37.7691 10.92C38.1182 10.92 38.4691 10.8764 38.8218 10.7891C39.1782 10.7055 39.4727 10.5945 39.7055 10.4564L39.9236 11.1327C39.68 11.2855 39.3582 11.4109 38.9582 11.5091C38.5582 11.6073 38.1527 11.6564 37.7418 11.6564C36.7673 11.6564 35.9273 11.4364 35.2218 10.9964C34.52 10.5564 33.9945 9.92364 33.6455 9.09818C33.3364 8.37091 33.1818 7.53455 33.1818 6.58909C33.1818 6.46182 33.1855 6.33273 33.1927 6.20182C33.24 5.12545 33.48 4.16 33.9127 3.30545C34.3455 2.44727 34.9327 1.78545 35.6745 1.32C36.4164 0.850909 37.2545 0.616364 38.1891 0.616364C39.1636 0.616364 39.9982 0.834546 40.6927 1.27091C41.3873 1.70727 41.9055 2.33818 42.2473 3.16364C42.5455 3.88727 42.6945 4.72 42.6945 5.66182C42.6945 5.79273 42.6909 5.92545 42.6836 6.06ZM36.6727 6.55636C36.6582 6.69818 36.6509 6.83091 36.6509 6.95455C36.6509 7.32182 36.72 7.63455 36.8582 7.89273C36.9964 8.15091 37.2364 8.28 37.5782 8.28C37.8145 8.28 38.04 8.18 38.2545 7.98C38.4727 7.78 38.6527 7.49455 38.7945 7.12364L38.8 7.07455L39.0673 4.12364C38.8491 4.01091 38.6145 3.95455 38.3636 3.95455C37.9091 3.95455 37.5309 4.18727 37.2291 4.65273C36.9309 5.11818 36.7455 5.75273 36.6727 6.55636ZM47.1532 3.63273C46.9895 3.60364 46.8113 3.58909 46.6186 3.58909C45.9095 3.58909 45.4277 3.89273 45.1732 4.5V9H44.0877V2.66182H45.1459L45.1623 3.39273C45.5186 2.82545 46.0223 2.54182 46.6732 2.54182C46.8841 2.54182 47.0441 2.56909 47.1532 2.62364V3.63273ZM47.8588 5.77091C47.8588 5.14909 47.9806 4.59091 48.2242 4.09636C48.4679 3.59818 48.8079 3.21455 49.2442 2.94545C49.6806 2.67636 50.1769 2.54182 50.7333 2.54182C51.5988 2.54182 52.2969 2.84182 52.8279 3.44182C53.3624 4.03818 53.6297 4.83273 53.6297 5.82545V5.90182C53.6297 6.51636 53.5115 7.06909 53.2751 7.56C53.0388 8.05091 52.7006 8.43273 52.2606 8.70545C51.8206 8.97818 51.3151 9.11455 50.7442 9.11455C49.886 9.11455 49.1897 8.81636 48.6551 8.22C48.1242 7.62364 47.8588 6.83273 47.8588 5.84727V5.77091ZM48.9497 5.90182C48.9497 6.60364 49.1115 7.16727 49.4351 7.59273C49.7624 8.01818 50.1988 8.23091 50.7442 8.23091C51.2969 8.23091 51.7351 8.01636 52.0588 7.58727C52.3824 7.15455 52.5442 6.54909 52.5442 5.77091C52.5442 5.07636 52.3788 4.51273 52.0479 4.08C51.7206 3.64727 51.2824 3.43091 50.7333 3.43091C50.1988 3.43091 49.7679 3.64545 49.4406 4.07455C49.1133 4.5 48.9497 5.10909 48.9497 5.90182ZM58.6789 7.32C58.6789 7.02545 58.568 6.79818 58.3462 6.63818C58.128 6.47455 57.7443 6.33455 57.1952 6.21818C56.6462 6.10182 56.2098 5.96182 55.8862 5.79818C55.5662 5.63091 55.328 5.43455 55.1716 5.20909C55.0189 4.98364 54.9425 4.71455 54.9425 4.40182C54.9425 3.88182 55.1607 3.44182 55.5971 3.08182C56.0371 2.72182 56.5989 2.54182 57.2825 2.54182C58.0025 2.54182 58.5862 2.72727 59.0334 3.09818C59.4807 3.46909 59.7043 3.94364 59.7043 4.52182H58.6134C58.6134 4.22727 58.488 3.97273 58.2371 3.75818C57.9862 3.54 57.668 3.43091 57.2825 3.43091C56.8898 3.43091 56.5825 3.51818 56.3607 3.69273C56.1389 3.86364 56.028 4.08727 56.028 4.36364C56.028 4.62545 56.1298 4.82364 56.3334 4.95818C56.5407 5.08909 56.9152 5.21636 57.4571 5.34C57.9989 5.46 58.4371 5.60364 58.7716 5.77091C59.1098 5.93818 59.3589 6.14 59.5189 6.37636C59.6825 6.61273 59.7643 6.90182 59.7643 7.24364C59.7643 7.80727 59.5371 8.26 59.0825 8.60182C58.6316 8.94364 58.0443 9.11455 57.3207 9.11455C56.8116 9.11455 56.3607 9.02545 55.968 8.84727C55.5789 8.66909 55.2734 8.41818 55.0516 8.09455C54.8334 7.77091 54.7243 7.42182 54.7243 7.04727H55.8098C55.828 7.41091 55.9716 7.7 56.2407 7.91455C56.5134 8.12545 56.8734 8.23091 57.3207 8.23091C57.7316 8.23091 58.0607 8.14909 58.308 7.98545C58.5552 7.81818 58.6789 7.59636 58.6789 7.32ZM62.2591 3.42545C62.7391 2.83636 63.3646 2.54182 64.1355 2.54182C65.4737 2.54182 66.15 3.29818 66.1646 4.81091V9H65.0791V4.80545C65.0755 4.34727 64.97 4.00909 64.7627 3.79091C64.5591 3.57273 64.2409 3.46364 63.8082 3.46364C63.4555 3.46364 63.1464 3.55818 62.8809 3.74727C62.6155 3.93273 62.4082 4.17818 62.2591 4.48364V9H61.1737V0H62.2591V3.42545ZM71.6994 9C71.6376 8.87636 71.5867 8.65455 71.5467 8.33455C71.0412 8.85455 70.4394 9.11455 69.7412 9.11455C69.1158 9.11455 68.603 8.93818 68.203 8.58545C67.803 8.23273 67.603 7.78545 67.603 7.24364C67.603 6.58182 67.8539 6.06909 68.3558 5.70545C68.8576 5.33818 69.563 5.15455 70.4721 5.15455H71.5303V4.65818C71.5303 4.28 71.4158 3.97818 71.1867 3.75273C70.9612 3.52727 70.6285 3.41455 70.1885 3.41455C69.7994 3.41455 69.4739 3.51273 69.2121 3.70909C68.9539 3.90545 68.8248 4.14182 68.8248 4.41818H67.7339C67.7339 4.10182 67.8448 3.79636 68.0667 3.50182C68.2921 3.20727 68.5976 2.97455 68.983 2.80364C69.3685 2.62909 69.7921 2.54182 70.2539 2.54182C70.9848 2.54182 71.5558 2.72545 71.9667 3.09273C72.3812 3.45636 72.5976 3.95818 72.6158 4.59818V7.51636C72.6158 8.09818 72.6885 8.56182 72.8339 8.90727V9H71.6994ZM69.8994 8.17636C70.2412 8.17636 70.563 8.08909 70.8648 7.91455C71.1703 7.73636 71.3921 7.50727 71.5303 7.22727V5.92364H70.6794C69.3521 5.92364 68.6885 6.31273 68.6885 7.09091C68.6885 7.42909 68.8012 7.69455 69.0267 7.88727C69.2521 8.08 69.543 8.17636 69.8994 8.17636ZM75.3358 2.66182L75.374 3.45818C75.8576 2.84727 76.4904 2.54182 77.2722 2.54182C78.6104 2.54182 79.2867 3.29818 79.3013 4.81091V9H78.2158V4.80545C78.2122 4.34727 78.1067 4.00909 77.8995 3.79091C77.6958 3.57273 77.3776 3.46364 76.9449 3.46364C76.5922 3.46364 76.2831 3.55818 76.0176 3.74727C75.7522 3.93273 75.5449 4.17818 75.3958 4.48364V9H74.3104V2.66182H75.3358ZM83.1896 5.82H80.3315V4.93091H83.1896V5.82ZM88.1642 9C88.1024 8.87636 88.0515 8.65455 88.0115 8.33455C87.5061 8.85455 86.9042 9.11455 86.2061 9.11455C85.5806 9.11455 85.0679 8.93818 84.6679 8.58545C84.2679 8.23273 84.0679 7.78545 84.0679 7.24364C84.0679 6.58182 84.3188 6.06909 84.8206 5.70545C85.3224 5.33818 86.0279 5.15455 86.937 5.15455H87.9951V4.65818C87.9951 4.28 87.8806 3.97818 87.6515 3.75273C87.4261 3.52727 87.0933 3.41455 86.6533 3.41455C86.2642 3.41455 85.9388 3.51273 85.677 3.70909C85.4188 3.90545 85.2897 4.14182 85.2897 4.41818H84.1988C84.1988 4.10182 84.3097 3.79636 84.5315 3.50182C84.757 3.20727 85.0624 2.97455 85.4479 2.80364C85.8333 2.62909 86.257 2.54182 86.7188 2.54182C87.4497 2.54182 88.0206 2.72545 88.4315 3.09273C88.8461 3.45636 89.0624 3.95818 89.0806 4.59818V7.51636C89.0806 8.09818 89.1533 8.56182 89.2988 8.90727V9H88.1642ZM86.3642 8.17636C86.7061 8.17636 87.0279 8.08909 87.3297 7.91455C87.6351 7.73636 87.857 7.50727 87.9951 7.22727V5.92364H87.1442C85.817 5.92364 85.1533 6.31273 85.1533 7.09091C85.1533 7.42909 85.2661 7.69455 85.4915 7.88727C85.717 8.08 86.0079 8.17636 86.3642 8.17636ZM91.9534 9H90.8734V2.66182H91.9534V9ZM90.7807 0.976363C90.7807 0.801818 90.8352 0.654546 90.9443 0.534546C91.0534 0.410909 91.2134 0.349091 91.4243 0.349091C91.6352 0.349091 91.7952 0.410909 91.9043 0.534546C92.0134 0.654546 92.0679 0.801818 92.0679 0.976363C92.0679 1.15455 92.0134 1.30182 91.9043 1.41818C91.7952 1.53455 91.6352 1.59273 91.4243 1.59273C91.2134 1.59273 91.0534 1.53455 90.9443 1.41818C90.8352 1.30182 90.7807 1.15455 90.7807 0.976363ZM93.7205 8.43273C93.7205 8.24364 93.775 8.08727 93.8841 7.96364C93.9968 7.83636 94.1641 7.77273 94.3859 7.77273C94.6077 7.77273 94.7768 7.83636 94.8932 7.96364C95.0095 8.08727 95.0677 8.24364 95.0677 8.43273C95.0677 8.61091 95.0095 8.76182 94.8932 8.88545C94.7768 9.00545 94.6077 9.06545 94.3859 9.06545C94.1641 9.06545 93.9968 9.00545 93.8841 8.88545C93.775 8.76182 93.7205 8.61091 93.7205 8.43273ZM98.0237 9H96.9437V2.66182H98.0237V9ZM96.851 0.976363C96.851 0.801818 96.9055 0.654546 97.0146 0.534546C97.1237 0.410909 97.2837 0.349091 97.4946 0.349091C97.7055 0.349091 97.8655 0.410909 97.9746 0.534546C98.0837 0.654546 98.1383 0.801818 98.1383 0.976363C98.1383 1.15455 98.0837 1.30182 97.9746 1.41818C97.8655 1.53455 97.7055 1.59273 97.4946 1.59273C97.2837 1.59273 97.1237 1.53455 97.0146 1.41818C96.9055 1.30182 96.851 1.15455 96.851 0.976363ZM102.829 3.63273C102.665 3.60364 102.487 3.58909 102.294 3.58909C101.585 3.58909 101.103 3.89273 100.849 4.5V9H99.7635V2.66182H100.822L100.838 3.39273C101.194 2.82545 101.698 2.54182 102.349 2.54182C102.56 2.54182 102.72 2.56909 102.829 2.62364V3.63273Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};
