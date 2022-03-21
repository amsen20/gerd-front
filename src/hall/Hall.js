import {getToken, isAuth} from "../auth/token";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import styles from "./Hall.module.css"

export default function Hall (props) {
    let params = useParams();
    let randomWords = require('random-words');
    let navigate = useNavigate();

    useEffect(() => {
        if (!isAuth())
            navigate("/login");
    });

    const createRoom = async () => {
        let room = await fetch('/rooms/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${getToken()}`
            },
            body: JSON.stringify({
                "name": randomWords({exactly: 3, join: '-'}),
                "players": []
            })
        })
            .then(data => data.json());

        navigate(`/${room.name}-${room.id}`);
    };

    return <div className={styles.hall}>
        <svg width="146" height="207" viewBox="0 0 146 207" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.1518 151.12L47.2618 147.16L52.5418 153.61C53.3018 154.51 53.7918 155.32 54.0118 156.04C54.2518 156.76 54.3718 157.43 54.3718 158.05C54.3718 158.73 54.2518 159.37 54.0118 159.97C53.7918 160.57 53.4518 161.1 52.9918 161.56C52.5318 162 51.9418 162.35 51.2218 162.61C50.5218 162.87 49.6918 163 48.7318 163H40.8118L40.3318 157.21H47.2618C47.5818 157.21 47.7418 157.08 47.7418 156.82C47.7418 156.64 47.6318 156.41 47.4118 156.13L43.1518 151.12ZM61.9499 156.79C61.9499 157.07 62.1099 157.21 62.4299 157.21H63.5699C63.6899 157.21 63.7899 157.24 63.8699 157.3C63.9699 157.34 64.0399 157.45 64.0799 157.63C64.1399 157.81 64.1799 158.09 64.1999 158.47C64.2199 158.85 64.2299 159.37 64.2299 160.03C64.2299 160.73 64.2199 161.28 64.1999 161.68C64.1799 162.08 64.1399 162.38 64.0799 162.58C64.0399 162.78 63.9699 162.9 63.8699 162.94C63.7899 162.98 63.6899 163 63.5699 163H63.0899C62.6099 163 62.1899 162.97 61.8299 162.91C61.7099 163.89 61.4399 164.8 61.0199 165.64C60.5999 166.5 60.0599 167.24 59.3999 167.86C58.7399 168.5 57.9599 169 57.0599 169.36C56.1799 169.74 55.2199 169.93 54.1799 169.93H50.8799L50.3699 164.17H53.5199C54.5999 164.17 55.3599 163.95 55.7999 163.51C56.2599 163.07 56.4899 162.52 56.4899 161.86V152.26H61.9499V156.79ZM68.5281 157.21C68.6481 157.21 68.7481 157.24 68.8281 157.3C68.9281 157.34 68.9981 157.45 69.0381 157.63C69.0981 157.81 69.1381 158.09 69.1581 158.47C69.1781 158.85 69.1881 159.37 69.1881 160.03C69.1881 160.73 69.1781 161.28 69.1581 161.68C69.1381 162.08 69.0981 162.38 69.0381 162.58C68.9981 162.78 68.9281 162.9 68.8281 162.94C68.7481 162.98 68.6481 163 68.5281 163H63.5781C63.4581 163 63.3581 162.98 63.2781 162.94C63.1781 162.9 63.1081 162.79 63.0681 162.61C63.0081 162.41 62.9681 162.12 62.9481 161.74C62.9281 161.36 62.9181 160.84 62.9181 160.18C62.9181 159.48 62.9281 158.93 62.9481 158.53C62.9681 158.13 63.0081 157.84 63.0681 157.66C63.1081 157.46 63.1781 157.34 63.2781 157.3C63.3581 157.24 63.4581 157.21 63.5781 157.21H68.5281ZM73.4793 157.21C73.5993 157.21 73.6993 157.24 73.7793 157.3C73.8793 157.34 73.9493 157.45 73.9893 157.63C74.0493 157.81 74.0893 158.09 74.1093 158.47C74.1293 158.85 74.1393 159.37 74.1393 160.03C74.1393 160.73 74.1293 161.28 74.1093 161.68C74.0893 162.08 74.0493 162.38 73.9893 162.58C73.9493 162.78 73.8793 162.9 73.7793 162.94C73.6993 162.98 73.5993 163 73.4793 163H68.5293C68.4093 163 68.3093 162.98 68.2293 162.94C68.1293 162.9 68.0593 162.79 68.0193 162.61C67.9593 162.41 67.9193 162.12 67.8993 161.74C67.8793 161.36 67.8693 160.84 67.8693 160.18C67.8693 159.48 67.8793 158.93 67.8993 158.53C67.9193 158.13 67.9593 157.84 68.0193 157.66C68.0593 157.46 68.1293 157.34 68.2293 157.3C68.3093 157.24 68.4093 157.21 68.5293 157.21H73.4793ZM78.4304 157.21C78.5504 157.21 78.6504 157.24 78.7304 157.3C78.8304 157.34 78.9004 157.45 78.9404 157.63C79.0004 157.81 79.0404 158.09 79.0604 158.47C79.0804 158.85 79.0904 159.37 79.0904 160.03C79.0904 160.73 79.0804 161.28 79.0604 161.68C79.0404 162.08 79.0004 162.38 78.9404 162.58C78.9004 162.78 78.8304 162.9 78.7304 162.94C78.6504 162.98 78.5504 163 78.4304 163H73.4804C73.3604 163 73.2604 162.98 73.1804 162.94C73.0804 162.9 73.0104 162.79 72.9704 162.61C72.9104 162.41 72.8704 162.12 72.8504 161.74C72.8304 161.36 72.8204 160.84 72.8204 160.18C72.8204 159.48 72.8304 158.93 72.8504 158.53C72.8704 158.13 72.9104 157.84 72.9704 157.66C73.0104 157.46 73.0804 157.34 73.1804 157.3C73.2604 157.24 73.3604 157.21 73.4804 157.21H78.4304ZM82.0616 162.97L83.5316 166.48L75.1316 170.08L73.6316 166.6L82.0616 162.97ZM83.3816 157.21C83.5016 157.21 83.6016 157.24 83.6816 157.3C83.7816 157.34 83.8516 157.45 83.8916 157.63C83.9516 157.81 83.9916 158.09 84.0116 158.47C84.0316 158.85 84.0416 159.37 84.0416 160.03C84.0416 160.73 84.0316 161.28 84.0116 161.68C83.9916 162.08 83.9516 162.38 83.8916 162.58C83.8516 162.78 83.7816 162.9 83.6816 162.94C83.6016 162.98 83.5016 163 83.3816 163H78.4316C78.3116 163 78.2116 162.98 78.1316 162.94C78.0316 162.9 77.9616 162.79 77.9216 162.61C77.8616 162.41 77.8216 162.12 77.8016 161.74C77.7816 161.36 77.7716 160.84 77.7716 160.18C77.7716 159.48 77.7816 158.93 77.8016 158.53C77.8216 158.13 77.8616 157.84 77.9216 157.66C77.9616 157.46 78.0316 157.34 78.1316 157.3C78.2116 157.24 78.3116 157.21 78.4316 157.21H83.3816ZM88.3328 157.21C88.4528 157.21 88.5528 157.24 88.6328 157.3C88.7328 157.34 88.8028 157.45 88.8428 157.63C88.9028 157.81 88.9428 158.09 88.9628 158.47C88.9828 158.85 88.9928 159.37 88.9928 160.03C88.9928 160.73 88.9828 161.28 88.9628 161.68C88.9428 162.08 88.9028 162.38 88.8428 162.58C88.8028 162.78 88.7328 162.9 88.6328 162.94C88.5528 162.98 88.4528 163 88.3328 163H83.3828C83.2628 163 83.1628 162.98 83.0828 162.94C82.9828 162.9 82.9128 162.79 82.8728 162.61C82.8128 162.41 82.7728 162.12 82.7528 161.74C82.7328 161.36 82.7228 160.84 82.7228 160.18C82.7228 159.48 82.7328 158.93 82.7528 158.53C82.7728 158.13 82.8128 157.84 82.8728 157.66C82.9128 157.46 82.9828 157.34 83.0828 157.3C83.1628 157.24 83.2628 157.21 83.3828 157.21H88.3328ZM93.2839 157.21C93.4039 157.21 93.5039 157.24 93.5839 157.3C93.6839 157.34 93.7539 157.45 93.7939 157.63C93.8539 157.81 93.8939 158.09 93.9139 158.47C93.9339 158.85 93.9439 159.37 93.9439 160.03C93.9439 160.73 93.9339 161.28 93.9139 161.68C93.8939 162.08 93.8539 162.38 93.7939 162.58C93.7539 162.78 93.6839 162.9 93.5839 162.94C93.5039 162.98 93.4039 163 93.2839 163H88.3339C88.2139 163 88.1139 162.98 88.0339 162.94C87.9339 162.9 87.8639 162.79 87.8239 162.61C87.7639 162.41 87.7239 162.12 87.7039 161.74C87.6839 161.36 87.6739 160.84 87.6739 160.18C87.6739 159.48 87.6839 158.93 87.7039 158.53C87.7239 158.13 87.7639 157.84 87.8239 157.66C87.8639 157.46 87.9339 157.34 88.0339 157.3C88.1139 157.24 88.2139 157.21 88.3339 157.21H93.2839ZM93.9451 142.33L104.805 138.4L105.495 141.64L93.9451 145.87V142.33ZM99.2251 157.21C99.5651 157.21 99.7351 157.08 99.7351 156.82C99.7351 156.66 99.6251 156.46 99.4051 156.22L93.9451 150.79V146.83L105.675 142.54L106.995 147.97L101.205 150.13L103.515 152.44C104.055 152.98 104.495 153.48 104.835 153.94C105.175 154.38 105.445 154.81 105.645 155.23C105.845 155.63 105.975 156.03 106.035 156.43C106.115 156.83 106.155 157.26 106.155 157.72C106.155 158.66 106.005 159.47 105.705 160.15C105.425 160.81 105.025 161.35 104.505 161.77C104.005 162.19 103.415 162.5 102.735 162.7C102.055 162.9 101.325 163 100.545 163H93.2851C93.1651 163 93.0651 162.98 92.9851 162.94C92.8851 162.9 92.8151 162.79 92.7751 162.61C92.7151 162.41 92.6751 162.12 92.6551 161.74C92.6351 161.36 92.6251 160.84 92.6251 160.18C92.6251 159.48 92.6351 158.93 92.6551 158.53C92.6751 158.13 92.7151 157.84 92.7751 157.66C92.8151 157.46 92.8851 157.34 92.9851 157.3C93.0651 157.24 93.1651 157.21 93.2851 157.21H99.2251Z" fill="#F6F8FC"/>
            <path d="M4.68294 196.968C5.1736 196.968 5.5576 196.867 5.83494 196.664C6.11227 196.461 6.25094 196.2 6.25094 195.88V193.96H4.81094C4.29894 193.96 3.92027 194.115 3.67494 194.424C3.4296 194.723 3.30694 195.123 3.30694 195.624C3.30694 196.104 3.41894 196.451 3.64294 196.664C3.86694 196.867 4.2136 196.968 4.68294 196.968ZM7.51494 196.248C7.51494 196.653 7.59494 196.979 7.75494 197.224C7.9256 197.469 8.2136 197.592 8.61894 197.592H8.93894C9.06694 197.592 9.15227 197.651 9.19494 197.768C9.24827 197.875 9.27494 198.045 9.27494 198.28C9.27494 198.525 9.24827 198.707 9.19494 198.824C9.15227 198.941 9.06694 199 8.93894 199H8.61894C8.10694 199 7.6696 198.899 7.30694 198.696C6.95494 198.493 6.7096 198.12 6.57094 197.576C6.44294 197.736 6.28827 197.864 6.10694 197.96C5.93627 198.056 5.75494 198.131 5.56294 198.184C5.37094 198.237 5.1736 198.275 4.97094 198.296C4.76827 198.317 4.5816 198.328 4.41094 198.328C3.64294 198.328 3.05627 198.109 2.65094 197.672C2.2456 197.224 2.04294 196.579 2.04294 195.736C2.04294 195.352 2.09627 194.979 2.20294 194.616C2.32027 194.243 2.49094 193.912 2.71494 193.624C2.93894 193.336 3.21627 193.101 3.54694 192.92C3.88827 192.739 4.28294 192.648 4.73094 192.648H6.25094V191.56H7.51494V196.248ZM9.15331 197.592C9.96398 197.592 10.3693 197.251 10.3693 196.568V196.072C10.3693 195.165 10.604 194.451 11.0733 193.928C11.5533 193.395 12.2146 193.128 13.0573 193.128C13.4946 193.128 13.8786 193.203 14.2093 193.352C14.54 193.491 14.8173 193.688 15.0413 193.944C15.2653 194.189 15.4306 194.488 15.5373 194.84C15.6546 195.192 15.7133 195.576 15.7133 195.992V196.408C15.7133 196.856 15.8253 197.165 16.0493 197.336C16.284 197.507 16.556 197.592 16.8653 197.592H17.1213C17.26 197.592 17.3506 197.651 17.3933 197.768C17.4466 197.875 17.4733 198.045 17.4733 198.28C17.4733 198.525 17.4466 198.707 17.3933 198.824C17.3506 198.941 17.26 199 17.1213 199H16.8653C16.7053 199 16.54 198.984 16.3693 198.952C16.2093 198.92 16.0546 198.867 15.9053 198.792C15.756 198.707 15.612 198.595 15.4733 198.456C15.3346 198.307 15.212 198.115 15.1053 197.88C14.8173 198.339 14.4866 198.643 14.1133 198.792C13.74 198.931 13.356 199 12.9613 199C12.5346 199 12.1346 198.92 11.7613 198.76C11.388 198.589 11.0946 198.307 10.8813 197.912C10.7853 198.136 10.668 198.323 10.5293 198.472C10.3906 198.611 10.2466 198.723 10.0973 198.808C9.94798 198.883 9.78798 198.936 9.61731 198.968C9.45731 198.989 9.30265 199 9.15331 199H8.94531C8.80665 199 8.71598 198.947 8.67331 198.84C8.61998 198.723 8.59331 198.552 8.59331 198.328C8.59331 198.072 8.61998 197.885 8.67331 197.768C8.71598 197.651 8.80665 197.592 8.94531 197.592H9.15331ZM14.4333 196.136C14.4333 195.667 14.3266 195.283 14.1133 194.984C13.9106 194.685 13.548 194.536 13.0253 194.536C12.5453 194.536 12.188 194.68 11.9533 194.968C11.7293 195.256 11.6173 195.661 11.6173 196.184C11.6173 196.653 11.7453 197.005 12.0013 197.24C12.268 197.475 12.604 197.592 13.0093 197.592C13.4893 197.592 13.8466 197.469 14.0813 197.224C14.316 196.968 14.4333 196.605 14.4333 196.136ZM17.5172 197.592C18.3385 197.592 18.7492 197.203 18.7492 196.424V189.08H20.0612V196.424C20.0612 196.637 20.0932 196.819 20.1572 196.968C20.2319 197.117 20.3279 197.24 20.4452 197.336C20.5625 197.421 20.6959 197.485 20.8452 197.528C21.0052 197.571 21.1652 197.592 21.3252 197.592H21.5652C21.7039 197.592 21.7945 197.651 21.8372 197.768C21.8905 197.875 21.9172 198.045 21.9172 198.28C21.9172 198.525 21.8905 198.707 21.8372 198.824C21.7945 198.941 21.7039 199 21.5652 199H21.2772C20.8932 199 20.5305 198.931 20.1892 198.792C19.8585 198.653 19.5812 198.381 19.3572 197.976C19.1119 198.381 18.8292 198.653 18.5092 198.792C18.1892 198.931 17.8585 199 17.5172 199H17.1172C16.9785 199 16.8879 198.947 16.8452 198.84C16.7919 198.723 16.7652 198.552 16.7652 198.328C16.7652 198.072 16.7919 197.885 16.8452 197.768C16.8879 197.651 16.9785 197.592 17.1172 197.592H17.5172ZM25.6663 197.592C26.061 197.592 26.333 197.512 26.4823 197.352C26.6316 197.192 26.7063 196.995 26.7063 196.76C26.7063 196.589 26.6743 196.413 26.6103 196.232C26.557 196.04 26.4076 195.821 26.1623 195.576L22.8983 192.328V190.872L28.2103 188.824L28.5143 190.136L24.1943 191.784L26.8343 194.44C27.0903 194.707 27.2983 194.947 27.4583 195.16C27.629 195.373 27.7623 195.581 27.8583 195.784C27.9543 195.976 28.0183 196.168 28.0503 196.36C28.093 196.552 28.1143 196.749 28.1143 196.952C28.1143 197.315 28.0556 197.624 27.9383 197.88C27.821 198.136 27.661 198.349 27.4583 198.52C27.2556 198.68 27.0103 198.803 26.7223 198.888C26.445 198.963 26.141 199 25.8103 199H21.5703C21.4316 199 21.341 198.947 21.2983 198.84C21.245 198.723 21.2183 198.552 21.2183 198.328C21.2183 198.072 21.245 197.885 21.2983 197.768C21.341 197.651 21.4316 197.592 21.5703 197.592H25.6663ZM44.8548 196.424C44.8548 196.861 44.9721 197.165 45.2068 197.336C45.4415 197.507 45.7081 197.592 46.0068 197.592C46.3801 197.592 46.6681 197.491 46.8708 197.288C47.0841 197.085 47.1908 196.797 47.1908 196.424V194.376H48.5028V196.488C48.5028 197.299 48.2841 197.923 47.8468 198.36C47.4201 198.787 46.8228 199 46.0548 199C45.6815 199 45.3295 198.931 44.9988 198.792C44.6681 198.653 44.3908 198.381 44.1668 197.976C43.9215 198.381 43.6228 198.653 43.2708 198.792C42.9295 198.931 42.5828 199 42.2308 199C41.9001 199 41.6228 198.952 41.3988 198.856C41.1748 198.749 40.9881 198.611 40.8388 198.44V198.744C40.8388 199.288 40.7481 199.811 40.5668 200.312C40.3855 200.813 40.1241 201.251 39.7828 201.624C39.4521 202.008 39.0415 202.312 38.5508 202.536C38.0708 202.76 37.5268 202.872 36.9188 202.872H35.9428C34.7481 202.872 33.8201 202.504 33.1588 201.768C32.4975 201.032 32.1668 200.024 32.1668 198.744V195.912H33.4628V198.696C33.4628 199.528 33.6708 200.2 34.0868 200.712C34.5028 201.224 35.1855 201.48 36.1348 201.48H36.8388C37.3188 201.48 37.7295 201.405 38.0708 201.256C38.4228 201.107 38.7108 200.904 38.9348 200.648C39.1588 200.392 39.3241 200.093 39.4308 199.752C39.5375 199.411 39.5908 199.053 39.5908 198.68V194.376H40.8868V196.472C40.8868 196.824 41.0041 197.101 41.2388 197.304C41.4841 197.496 41.7988 197.592 42.1828 197.592C43.1001 197.592 43.5588 197.203 43.5588 196.424V194.376H44.8548V196.424ZM53.3512 197.592C53.7779 197.592 54.0765 197.501 54.2472 197.32C54.4179 197.139 54.5032 196.963 54.5032 196.792C54.5032 196.696 54.4819 196.568 54.4392 196.408C54.4072 196.248 54.3379 196.003 54.2312 195.672C54.1245 195.341 53.9699 194.899 53.7672 194.344C53.5645 193.779 53.3032 193.048 52.9832 192.152L54.2312 191.64L55.9112 196.392C56.0605 196.829 56.2365 197.139 56.4392 197.32C56.6419 197.501 56.9405 197.592 57.3352 197.592H57.5432C57.7779 197.592 57.8952 197.821 57.8952 198.28C57.8952 198.76 57.7779 199 57.5432 199H57.3352C56.9832 199 56.6419 198.936 56.3112 198.808C55.9912 198.68 55.6979 198.397 55.4312 197.96C55.2072 198.365 54.9245 198.643 54.5832 198.792C54.2525 198.931 53.8899 199 53.4952 199H50.0552L49.9752 197.592H53.3512ZM62.1471 198.072C61.8697 198.243 61.5977 198.387 61.3311 198.504C61.0644 198.621 60.7764 198.717 60.4671 198.792C60.1684 198.867 59.8377 198.92 59.4751 198.952C59.1124 198.984 58.6964 199 58.2271 199H57.5391C57.4004 199 57.3097 198.947 57.2671 198.84C57.2137 198.723 57.1871 198.552 57.1871 198.328C57.1871 198.072 57.2137 197.885 57.2671 197.768C57.3097 197.651 57.4004 197.592 57.5391 197.592H58.2751C58.6804 197.592 59.0377 197.581 59.3471 197.56C59.6671 197.539 59.9604 197.501 60.2271 197.448C60.4937 197.395 60.7444 197.325 60.9791 197.24C61.2137 197.144 61.4537 197.027 61.6991 196.888L64.0831 195.512C63.9977 195.32 63.9124 195.155 63.8271 195.016C63.7524 194.867 63.6511 194.739 63.5231 194.632C63.3951 194.525 63.2404 194.445 63.0591 194.392C62.8777 194.339 62.6484 194.312 62.3711 194.312H58.8831L58.9791 192.904H62.5631C62.8511 192.904 63.1391 192.941 63.4271 193.016C63.7257 193.091 64.0031 193.24 64.2591 193.464C64.5257 193.688 64.7711 194.008 64.9951 194.424C65.2191 194.84 65.4057 195.389 65.5551 196.072L62.1471 198.072ZM74.6804 201.48C75.1818 201.48 75.6031 201.437 75.9444 201.352C76.2964 201.267 76.5791 201.149 76.7924 201C77.0058 200.851 77.1551 200.675 77.2404 200.472C77.3364 200.28 77.3844 200.077 77.3844 199.864C77.3844 199.629 77.3204 199.427 77.1924 199.256C77.0751 199.085 76.8618 199 76.5524 199H74.0564L74.1364 197.592H79.7684C80.0031 197.592 80.1204 197.821 80.1204 198.28C80.1204 198.76 80.0031 199 79.7684 199H78.2804C78.4191 199.117 78.5098 199.261 78.5524 199.432C78.6058 199.603 78.6324 199.8 78.6324 200.024C78.6324 200.312 78.5684 200.621 78.4404 200.952C78.3124 201.283 78.0991 201.587 77.8004 201.864C77.5124 202.152 77.1284 202.392 76.6484 202.584C76.1684 202.776 75.5711 202.872 74.8564 202.872H73.2084C72.0138 202.872 71.0858 202.504 70.4244 201.768C69.7631 201.032 69.4324 200.024 69.4324 198.744V195.912H70.7284V198.696C70.7284 199.528 70.9364 200.2 71.3524 200.712C71.7684 201.224 72.4511 201.48 73.4004 201.48H74.6804ZM79.9814 197.592C80.7921 197.592 81.1974 197.251 81.1974 196.568V196.072C81.1974 195.165 81.4321 194.451 81.9014 193.928C82.3814 193.395 83.0428 193.128 83.8854 193.128C84.3228 193.128 84.7068 193.203 85.0374 193.352C85.3681 193.491 85.6454 193.688 85.8694 193.944C86.0934 194.189 86.2588 194.488 86.3654 194.84C86.4828 195.192 86.5414 195.576 86.5414 195.992V196.408C86.5414 196.856 86.6534 197.165 86.8774 197.336C87.1121 197.507 87.3841 197.592 87.6934 197.592H87.9494C88.0881 197.592 88.1788 197.651 88.2214 197.768C88.2748 197.875 88.3014 198.045 88.3014 198.28C88.3014 198.525 88.2748 198.707 88.2214 198.824C88.1788 198.941 88.0881 199 87.9494 199H87.6934C87.5334 199 87.3681 198.984 87.1974 198.952C87.0374 198.92 86.8828 198.867 86.7334 198.792C86.5841 198.707 86.4401 198.595 86.3014 198.456C86.1628 198.307 86.0401 198.115 85.9334 197.88C85.6454 198.339 85.3148 198.643 84.9414 198.792C84.5681 198.931 84.1841 199 83.7894 199C83.3628 199 82.9628 198.92 82.5894 198.76C82.2161 198.589 81.9228 198.307 81.7094 197.912C81.6134 198.136 81.4961 198.323 81.3574 198.472C81.2188 198.611 81.0748 198.723 80.9254 198.808C80.7761 198.883 80.6161 198.936 80.4454 198.968C80.2854 198.989 80.1308 199 79.9814 199H79.7734C79.6348 199 79.5441 198.947 79.5014 198.84C79.4481 198.723 79.4214 198.552 79.4214 198.328C79.4214 198.072 79.4481 197.885 79.5014 197.768C79.5441 197.651 79.6348 197.592 79.7734 197.592H79.9814ZM85.2614 196.136C85.2614 195.667 85.1548 195.283 84.9414 194.984C84.7388 194.685 84.3761 194.536 83.8534 194.536C83.3734 194.536 83.0161 194.68 82.7814 194.968C82.5574 195.256 82.4454 195.661 82.4454 196.184C82.4454 196.653 82.5734 197.005 82.8294 197.24C83.0961 197.475 83.4321 197.592 83.8374 197.592C84.3174 197.592 84.6748 197.469 84.9094 197.224C85.1441 196.968 85.2614 196.605 85.2614 196.136ZM91.9933 194.024C91.5453 194.024 91.1826 194.173 90.9053 194.472C90.6386 194.76 90.5053 195.117 90.5053 195.544C90.5053 195.768 90.548 195.976 90.6333 196.168C90.7293 196.36 90.852 196.536 91.0013 196.696C91.1613 196.845 91.332 196.984 91.5133 197.112C91.7053 197.229 91.8973 197.336 92.0893 197.432C92.2493 197.336 92.4093 197.229 92.5693 197.112C92.74 196.984 92.8893 196.845 93.0173 196.696C93.156 196.547 93.268 196.381 93.3533 196.2C93.4386 196.008 93.4813 195.8 93.4813 195.576C93.4813 195.117 93.3426 194.744 93.0653 194.456C92.7986 194.168 92.4413 194.024 91.9933 194.024ZM87.9453 199C87.8066 199 87.716 198.947 87.6733 198.84C87.62 198.723 87.5933 198.552 87.5933 198.328C87.5933 198.072 87.62 197.885 87.6733 197.768C87.716 197.651 87.8066 197.592 87.9453 197.592H90.6173C90.2013 197.315 89.876 196.989 89.6413 196.616C89.4066 196.243 89.2893 195.821 89.2893 195.352C89.2893 195 89.3533 194.664 89.4813 194.344C89.6093 194.013 89.7906 193.725 90.0253 193.48C90.2706 193.235 90.5693 193.037 90.9213 192.888C91.2733 192.739 91.668 192.664 92.1053 192.664C92.5426 192.664 92.9213 192.739 93.2413 192.888C93.572 193.037 93.844 193.235 94.0573 193.48C94.2706 193.725 94.4306 194.003 94.5373 194.312C94.644 194.621 94.6973 194.936 94.6973 195.256C94.6973 195.736 94.5906 196.168 94.3773 196.552C94.1746 196.925 93.8653 197.272 93.4493 197.592H96.0093C96.3506 197.592 96.612 197.517 96.7933 197.368C96.9746 197.208 97.0653 197.005 97.0653 196.76C97.0653 196.504 96.9373 196.216 96.6813 195.896L93.8813 192.584L94.8573 191.672L97.6893 195.048C97.988 195.411 98.196 195.747 98.3133 196.056C98.4306 196.365 98.4893 196.669 98.4893 196.968C98.4893 197.256 98.436 197.523 98.3293 197.768C98.2226 198.013 98.068 198.227 97.8653 198.408C97.6733 198.589 97.428 198.733 97.1293 198.84C96.8306 198.947 96.4893 199 96.1053 199H94.3453C93.8546 199 93.4173 198.984 93.0333 198.952C92.66 198.92 92.3613 198.845 92.1373 198.728C91.988 198.792 91.8013 198.845 91.5773 198.888C91.364 198.92 91.14 198.947 90.9053 198.968C90.6813 198.979 90.4573 198.989 90.2333 199C90.02 199 89.8386 199 89.6893 199H87.9453ZM102.121 198.744C102.121 199.341 102.02 199.891 101.817 200.392C101.625 200.904 101.359 201.341 101.017 201.704C100.676 202.077 100.271 202.365 99.8014 202.568C99.3321 202.771 98.8254 202.872 98.2814 202.872H97.3054L97.2254 201.48H97.9614C98.4734 201.48 98.9108 201.4 99.2734 201.24C99.6254 201.091 99.9134 200.888 100.137 200.632C100.372 200.376 100.543 200.083 100.649 199.752C100.756 199.432 100.809 199.096 100.809 198.744V194.376H102.121V198.744ZM105.328 201.48C105.765 201.48 106.149 201.411 106.48 201.272C106.81 201.144 107.082 200.968 107.296 200.744C107.52 200.52 107.69 200.259 107.808 199.96C107.925 199.661 107.994 199.341 108.016 199H106.656C106.112 199 105.664 198.941 105.312 198.824C104.96 198.707 104.682 198.536 104.48 198.312C104.277 198.088 104.133 197.816 104.048 197.496C103.973 197.165 103.936 196.797 103.936 196.392C103.936 195.987 103.994 195.603 104.112 195.24C104.229 194.867 104.4 194.541 104.624 194.264C104.848 193.987 105.125 193.768 105.456 193.608C105.797 193.437 106.192 193.352 106.64 193.352C106.992 193.352 107.328 193.411 107.648 193.528C107.978 193.645 108.266 193.832 108.512 194.088C108.757 194.333 108.949 194.659 109.088 195.064C109.237 195.469 109.312 195.96 109.312 196.536V198.744C109.312 199.288 109.221 199.811 109.04 200.312C108.869 200.813 108.613 201.251 108.272 201.624C107.941 202.008 107.536 202.312 107.056 202.536C106.576 202.76 106.032 202.872 105.424 202.872H103.76L103.664 201.48H105.328ZM105.184 196.312C105.184 196.771 105.29 197.101 105.504 197.304C105.728 197.496 106.154 197.592 106.784 197.592H108.048V196.6C108.048 195.928 107.914 195.448 107.648 195.16C107.392 194.861 107.029 194.712 106.56 194.712C106.122 194.712 105.781 194.856 105.536 195.144C105.301 195.421 105.184 195.811 105.184 196.312ZM116.836 195.096C117.113 195.416 117.316 195.736 117.444 196.056C117.572 196.365 117.636 196.669 117.636 196.968C117.636 197.256 117.582 197.523 117.476 197.768C117.369 198.013 117.214 198.227 117.012 198.408C116.82 198.589 116.574 198.733 116.276 198.84C115.977 198.947 115.636 199 115.252 199H110.868L110.788 197.592H115.06C115.401 197.592 115.662 197.517 115.844 197.368C116.025 197.208 116.116 197.005 116.116 196.76C116.116 196.483 115.993 196.211 115.748 195.944L112.9 192.696L113.924 191.736L116.836 195.096ZM126.533 201.48C126.971 201.48 127.371 201.427 127.733 201.32C128.096 201.224 128.411 201.085 128.677 200.904C128.944 200.733 129.147 200.525 129.285 200.28C129.435 200.045 129.509 199.784 129.509 199.496C129.509 199.24 129.44 199.027 129.301 198.856C129.163 198.685 128.896 198.6 128.501 198.6H125.733V195.704C125.733 195.299 125.792 194.925 125.909 194.584C126.037 194.243 126.219 193.949 126.453 193.704C126.688 193.459 126.971 193.267 127.301 193.128C127.643 192.989 128.021 192.92 128.437 192.92H130.277L130.357 194.328H128.389C128.027 194.328 127.712 194.445 127.445 194.68C127.179 194.904 127.045 195.245 127.045 195.704V197.208H128.741C129.147 197.208 129.483 197.261 129.749 197.368C130.016 197.464 130.224 197.603 130.373 197.784C130.533 197.965 130.645 198.184 130.709 198.44C130.773 198.685 130.805 198.957 130.805 199.256C130.805 199.768 130.699 200.243 130.485 200.68C130.272 201.117 129.979 201.496 129.605 201.816C129.243 202.147 128.811 202.403 128.309 202.584C127.819 202.776 127.285 202.872 126.709 202.872H125.333C124.139 202.872 123.211 202.504 122.549 201.768C121.888 201.032 121.557 200.024 121.557 198.744V195.912H122.853V198.696C122.853 199.528 123.061 200.2 123.477 200.712C123.893 201.224 124.576 201.48 125.525 201.48H126.533ZM130.879 201.48H131.151C131.641 201.48 132.057 201.4 132.399 201.24C132.751 201.091 133.039 200.888 133.263 200.632C133.487 200.376 133.652 200.083 133.759 199.752C133.865 199.432 133.919 199.096 133.919 198.744V194.376H135.231V198.744C135.231 199.341 135.129 199.891 134.927 200.392C134.735 200.904 134.463 201.341 134.111 201.704C133.769 202.077 133.364 202.365 132.895 202.568C132.436 202.771 131.935 202.872 131.391 202.872H130.959L130.879 201.48ZM135.135 192.408H133.567V191.032H135.135V192.408ZM139.35 199C139.062 199 138.784 198.963 138.518 198.888C138.251 198.803 138.016 198.664 137.814 198.472C137.622 198.28 137.467 198.029 137.35 197.72C137.232 197.4 137.174 197.005 137.174 196.536V189.08H138.486V196.248C138.486 196.653 138.571 196.979 138.742 197.224C138.923 197.469 139.206 197.592 139.59 197.592H139.91C140.144 197.592 140.262 197.821 140.262 198.28C140.262 198.76 140.144 199 139.91 199H139.35ZM141.37 197.592C141.754 197.592 142.053 197.491 142.266 197.288C142.49 197.085 142.602 196.797 142.602 196.424V194.376H143.914V196.488C143.914 197.299 143.695 197.923 143.258 198.36C142.831 198.787 142.234 199 141.466 199H139.914C139.775 199 139.685 198.947 139.642 198.84C139.589 198.723 139.562 198.552 139.562 198.328C139.562 198.072 139.589 197.885 139.642 197.768C139.685 197.651 139.775 197.592 139.914 197.592H141.37ZM142.106 202.2H140.538V200.824H142.106V202.2Z" fill="#F6F8FC"/>
            <path d="M31.4101 26.6092C37.1233 26.6092 41.7547 21.9778 41.7547 16.2646C41.7547 10.5514 37.1233 5.91992 31.4101 5.91992C25.6969 5.91992 21.0654 10.5514 21.0654 16.2646C21.0654 21.9778 25.6969 26.6092 31.4101 26.6092Z" fill="#007EA8"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M26.51 29.4961C17.0723 44.2646 17.0179 59.4911 23.6252 75.0427C27.7905 37.0146 49.8544 20.0887 91.1961 25.8901C77.8504 14.6762 62.5144 12.419 46.0379 15.294C44.0313 26.4071 37.9086 31.6888 26.51 29.4961Z" fill="#007EA8"/>
            <path d="M115.316 114.078C121.03 114.078 125.661 109.447 125.661 103.733C125.661 98.0201 121.03 93.3887 115.316 93.3887C109.603 93.3887 104.972 98.0201 104.972 103.733C104.972 109.447 109.603 114.078 115.316 114.078Z" fill="#007EA8"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M120.223 90.5027C129.661 75.7341 129.715 60.5076 123.108 44.9561C118.943 82.9842 96.8788 99.9101 55.5371 94.1087C68.8828 105.323 84.2188 107.58 100.695 104.705C102.702 93.5917 108.825 88.31 120.223 90.5027Z" fill="#007EA8"/>
            <path d="M34.6541 97.7819C40.2733 98.8145 43.9913 104.207 42.9587 109.826C41.926 115.445 36.5337 119.163 30.9146 118.131C25.2954 117.098 21.5774 111.706 22.61 106.086C23.6427 100.467 29.035 96.7492 34.6541 97.7819Z" fill="#F6F8FC"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M30.3469 94.0571C23.7341 77.8257 26.4328 62.8404 35.7419 48.7393C32.9651 86.8939 51.6063 107.529 93.3159 109.296C78.1631 117.913 62.6719 117.361 46.9862 111.555C47.0214 100.262 41.9542 93.961 30.3469 94.0573V94.0571Z" fill="#F6F8FC"/>
            <path d="M112.088 22.2181C106.469 21.1855 102.751 15.7931 103.784 10.174C104.816 4.55489 110.209 0.836818 115.828 1.86947C121.447 2.90213 125.165 8.29446 124.132 13.9136C123.1 19.5327 117.707 23.2508 112.088 22.2181Z" fill="#F6F8FC"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M116.381 25.9423C122.994 42.1737 120.295 57.159 110.986 71.2601C113.763 33.1055 95.1217 12.4704 53.4121 10.7037C68.5649 2.08674 84.056 2.63867 99.7417 8.44432C99.7066 19.737 104.774 26.0384 116.381 25.9421V25.9423Z" fill="#F6F8FC"/>
        </svg>
        <div className={styles.description}>
            <h1>
                توضیح بازی:
            </h1>
            <p>
                شما با سه تا از دوستاتون وارد بازی گرد می‌شید و دوتا تیم دو نفره تشکیل می‌دید. توی هر راند ما تعدادی کلمه رو به سه تا از اعضای اتاق نشون می‌دیم. اونی که کلمه رو نمی‌بینه باید کلمه رو حدس بزنه، چه‌جوری؟ این‌طوری که هم‌تیمیش باید کلمه‌ای که نشون داده‌شده رو براش توصیف کنه.
                <br/>
                اگه درست بگه تیم‌شون ۳ امتیاز می‌گیره. اگه یارش حس کرد کلمه سخته می‌تونه ردش کنه ولی ۱ امتیاز از دست می‌دن.

            </p>
            <h1>
                قوانین توصیف کلمه:
            </h1>
            <ul>
                <li>
                    نباید در هیچ قسمت از توضیح، اون کلمه یا هر زیربخشیش رو بگید.
                </li>
                <li>
                    نباید از کلمات هم‌وزن / هم‌آوا استفاده کنید.
                </li>
                <li>
                    نباید ترجمه یا متضاد کلمه رو بگید.
                </li>
                <li>
                    اشاره به خاطرات مشترک و ضرب‌المثل و اشعار معروف و... ایراد نداره.
                </li>
            </ul>
        </div>
        <div className={styles.create} onClick={createRoom}>
            ساخت اتاق جدید
        </div>
    </div>;
}