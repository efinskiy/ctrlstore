import React from "react";
import './logo.module.css';
import {SVGComponent} from "../../../../GlobalTypes/types";

const Logo = ({className}: SVGComponent): React.ReactElement => {
    return (
        <svg className={className} viewBox="0 0 40 31" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.8136 9.89268C39.8091 9.83436 39.8038 9.77611 39.7977 9.71794C39.6218 7.21436 38.5055 4.87021 36.6732 3.15659C34.841 1.44298 32.4285 0.486927 29.9207 0.48057H10.0794C7.53646 0.469067 5.08734 1.44119 3.24353 3.19393C1.39973 4.94668 0.303801 7.34452 0.184607 9.88672C0.164766 10.0436 0.158813 10.2064 0.158813 10.3891V23.3159C0.158813 25.1526 0.898893 26.9457 2.18659 28.2324C3.49375 29.532 5.26068 30.2628 7.10326 30.2657C10.6747 30.2657 12.0715 28.2801 14.0477 24.3087C14.3374 23.7289 16.016 20.3373 20.0001 20.3373C23.9604 20.3373 25.6608 23.7269 25.9525 24.3087C27.9445 28.2801 29.3255 30.2657 32.8969 30.2657C34.7322 30.2657 36.5239 29.5251 37.8096 28.2364C39.1082 26.9282 39.8384 25.1599 39.8414 23.3159V10.409C39.8414 10.2203 39.8334 10.0515 39.8136 9.89268ZM10.0794 14.4419C9.551 14.4538 9.02549 14.36 8.53376 14.1659C8.04204 13.9718 7.59402 13.6814 7.21601 13.3116C6.838 12.9419 6.53761 12.5002 6.33248 12.0127C6.12735 11.5252 6.02161 11.0015 6.02148 10.4725C6.02135 9.94352 6.12682 9.41983 6.33171 8.93219C6.53659 8.44454 6.83676 8.00278 7.21459 7.63283C7.59242 7.26288 8.04029 6.97221 8.53192 6.77787C9.02354 6.58353 9.54901 6.48945 10.0775 6.50114C11.1143 6.52409 12.1009 6.95234 12.8262 7.69422C13.5515 8.43609 13.9577 9.43264 13.958 10.4705C13.9582 11.5084 13.5525 12.5052 12.8276 13.2474C12.1027 13.9897 11.1163 14.4184 10.0794 14.4419ZM29.9207 4.51348C30.4469 4.51348 30.9516 4.72268 31.3237 5.09507C31.6958 5.46746 31.9048 5.97252 31.9048 6.49916C31.9048 7.02579 31.6958 7.53086 31.3237 7.90324C30.9516 8.27563 30.4469 8.48484 29.9207 8.48484C29.3945 8.48484 28.8898 8.27563 28.5177 7.90324C28.1456 7.53086 27.9366 7.02579 27.9366 6.49916C27.9366 5.97252 28.1456 5.46746 28.5177 5.09507C28.8898 4.72268 29.3945 4.51348 29.9207 4.51348ZM25.9525 12.4562C25.4262 12.4562 24.9216 12.247 24.5495 11.8746C24.1774 11.5022 23.9683 10.9971 23.9683 10.4705C23.9683 9.94388 24.1774 9.43881 24.5495 9.06643C24.9216 8.69404 25.4262 8.48484 25.9525 8.48484C26.4787 8.48484 26.9834 8.69404 27.3555 9.06643C27.7275 9.43881 27.9366 9.94388 27.9366 10.4705C27.9366 10.9971 27.7275 11.5022 27.3555 11.8746C26.9834 12.247 26.4787 12.4562 25.9525 12.4562ZM29.9207 16.4275C29.3945 16.4275 28.8898 16.2183 28.5177 15.846C28.1456 15.4736 27.9366 14.9685 27.9366 14.4419C27.9366 13.9152 28.1456 13.4102 28.5177 13.0378C28.8898 12.6654 29.3945 12.4562 29.9207 12.4562C30.4469 12.4562 30.9516 12.6654 31.3237 13.0378C31.6958 13.4102 31.9048 13.9152 31.9048 14.4419C31.9048 14.9685 31.6958 15.4736 31.3237 15.846C30.9516 16.2183 30.4469 16.4275 29.9207 16.4275ZM33.889 12.4562C33.3627 12.4562 32.8581 12.247 32.486 11.8746C32.1139 11.5022 31.9048 10.9971 31.9048 10.4705C31.9048 9.94388 32.1139 9.43881 32.486 9.06643C32.8581 8.69404 33.3627 8.48484 33.889 8.48484C34.4152 8.48484 34.9199 8.69404 35.292 9.06643C35.6641 9.43881 35.8731 9.94388 35.8731 10.4705C35.8731 10.9971 35.6641 11.5022 35.292 11.8746C34.9199 12.247 34.4152 12.4562 33.889 12.4562Z" fill="white"/>
        </svg>
    )
}

export default Logo;