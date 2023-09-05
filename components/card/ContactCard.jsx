import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactCard() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="contacts">
      <div data-aos="zoom-in" className="contact-card">
        <svg
          width="89"
          height="89"
          viewBox="0 0 89 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="89"
            height="89"
            rx="44.5"
            fill="#D3AD7F"
            fillOpacity="0.3"
          />
          <g clipPath="url(#clip0_67_220)">
            <path
              d="M54.7228 66.0503C52.6252 65.8465 50.8272 65.3695 49.0724 64.7174C44.5032 63.0201 40.501 60.3879 36.8272 57.2307C32.1549 53.2153 28.2617 48.5622 25.397 43.0868C24.0773 40.5625 23.092 37.9159 22.5898 35.0955C22.4148 34.1151 22.4627 33.2257 23.0129 32.3507C24.9906 29.2067 27.2693 26.3215 30.1208 23.9171C30.2239 23.8308 30.333 23.7517 30.4432 23.6738C31.9571 22.5914 33.4482 22.8119 34.5402 24.3438C35.4415 25.6084 36.3345 26.8873 37.1256 28.2214C38.1061 29.8755 39.059 31.556 39.8729 33.2952C40.7587 35.1878 40.5226 35.9981 38.9883 37.4125C38.329 38.0202 37.6458 38.6028 36.9482 39.1661C36.6677 39.3927 36.6198 39.5916 36.7445 39.9224C38.5304 44.6666 41.6397 48.2578 46.1154 50.6406C46.9412 51.0805 47.8366 51.3886 48.6924 51.7733C48.9286 51.8788 49.0664 51.8261 49.2246 51.6355C49.7688 50.9798 50.3178 50.3266 50.8907 49.6961C51.2419 49.3113 51.6171 48.9398 52.0246 48.6173C52.6336 48.1343 53.3336 48.0096 54.0947 48.223C55.6793 48.6665 57.1116 49.4456 58.4973 50.2954C60.3683 51.4425 62.1963 52.6615 64.0314 53.8662C64.7565 54.342 65.2312 55.0085 65.4541 55.8619C65.5836 56.3557 65.5536 56.822 65.2887 57.2415C64.9471 57.7833 64.6091 58.3395 64.1836 58.8129C61.7492 61.5242 58.9587 63.8076 55.8003 65.6296C55.412 65.8537 54.9577 65.9604 54.7216 66.0503H54.7228ZM62.563 56.3893C62.3808 56.2419 62.2466 56.1244 62.104 56.0213C59.5329 54.1598 56.8144 52.5477 53.9425 51.1896C53.6296 51.0422 53.4738 51.0997 53.2736 51.337C52.5808 52.1605 51.8377 52.9444 51.1796 53.793C50.3058 54.9198 49.2966 55.0672 47.9793 54.6021C43.7037 53.0906 40.163 50.5795 37.3929 47.0004C35.6705 44.7733 34.3472 42.3293 33.6448 39.5772C33.4878 38.9611 33.5813 38.4266 34.0523 37.9759C34.2789 37.7589 34.4778 37.512 34.7128 37.3046C35.5398 36.5699 36.3729 35.8435 37.2107 35.1219C37.3941 34.9649 37.4409 34.8366 37.3258 34.5945C35.945 31.6854 34.3148 28.925 32.4234 26.3191C32.3311 26.1921 32.2172 26.0794 32.1033 25.9464C32.0003 26.0339 31.9307 26.0878 31.866 26.1477C29.5335 28.2933 27.4958 30.6882 25.723 33.318C25.4078 33.7854 25.3562 34.2146 25.4521 34.736C25.8884 37.1045 26.6927 39.3483 27.8098 41.4687C31.9967 49.4144 38.051 55.5694 45.8169 60.0415C48.2849 61.4631 50.9159 62.5023 53.7327 63.0285C54.2721 63.1292 54.7096 63.0693 55.189 62.7432C57.1728 61.3936 59.0402 59.9073 60.7591 58.2352C61.3668 57.6443 61.9457 57.021 62.5618 56.3881L62.563 56.3893Z"
              fill="#D3AD7F"
            />
            <path
              d="M64.107 42.6694C64.0962 42.8492 64.1178 43.1416 64.0542 43.4125C63.8864 44.1245 63.19 44.5704 62.4529 44.4769C61.7864 44.393 61.2446 43.7889 61.2339 43.0829C61.1859 39.9784 60.4032 37.0837 58.6808 34.4887C56.0234 30.4864 52.3112 28.1048 47.5419 27.4203C46.8491 27.3208 46.1443 27.2909 45.4443 27.2561C44.6016 27.2142 43.9975 26.6196 44.0035 25.8022C44.0083 24.9895 44.628 24.3926 45.4742 24.3842C53.6309 24.3015 61.1667 29.989 63.3794 37.888C63.8085 39.4199 64.0506 40.9781 64.1082 42.6706L64.107 42.6694Z"
              fill="#D3AD7F"
            />
            <path
              d="M45.8098 31.5625C50.88 31.6128 55.5631 35.4748 56.6359 40.5307C56.8085 41.3422 56.8684 42.1848 56.9092 43.0166C56.9499 43.8545 56.3051 44.479 55.496 44.4826C54.6845 44.4862 54.0768 43.8773 54.0516 43.0358C53.9354 39.0336 51.4925 35.8188 47.7132 34.7617C47.0168 34.5663 46.2761 34.4956 45.5509 34.444C44.6052 34.3769 43.9867 33.8231 44.0011 32.9565C44.0155 32.1247 44.6555 31.5613 45.5857 31.5637C45.66 31.5637 45.7355 31.5637 45.8098 31.5637V31.5625Z"
              fill="#D3AD7F"
            />
          </g>
          <defs>
            <clipPath id="clip0_67_220">
              <rect
                width="43.0298"
                height="43.0501"
                fill="white"
                transform="translate(22.5 23)"
              />
            </clipPath>
          </defs>
        </svg>
        <div>
          <h2>Let's Talk</h2>
          <p>Phone: 0000-000-0000 Fax: 0-000-000-000</p>
        </div>
      </div>
      <div data-aos="zoom-in" className="contact-card">
        <svg
          width="38"
          height="27"
          viewBox="0 0 38 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_67_230)">
            <path
              d="M18.6085 26.9972C14.1024 26.9972 9.59639 27.0004 5.09034 26.9961C2.84649 26.994 1.0555 25.7877 0.398838 23.7876C0.227395 23.2665 0.145448 22.6954 0.144369 22.1466C0.126039 16.5768 0.123882 11.0069 0.134665 5.43711C0.140056 2.63994 2.1963 0.61426 5.03104 0.611063C14.1111 0.603604 23.19 0.603604 32.27 0.611063C35.108 0.613194 37.1556 2.62929 37.1621 5.43818C37.1761 11.008 37.1739 16.5778 37.1621 22.1477C37.1567 24.9757 35.1101 26.9886 32.2474 26.994C27.7004 27.0036 23.1544 26.9961 18.6074 26.9961L18.6085 26.9972ZM2.75915 7.67591C2.74836 7.81124 2.73866 7.87731 2.73866 7.94231C2.73866 12.7407 2.73435 17.539 2.7419 22.3373C2.74405 23.534 3.67567 24.4206 4.9189 24.4216C14.0647 24.4248 23.2105 24.4248 32.3563 24.4216C33.662 24.4216 34.5581 23.5329 34.5592 22.2404C34.5635 17.4953 34.5613 12.7502 34.5592 8.00518C34.5592 7.89649 34.5408 7.7878 34.5279 7.64501C34.3672 7.73559 34.2508 7.79846 34.1365 7.86559C29.9766 10.325 25.8188 12.7897 21.6546 15.2427C19.6813 16.4052 17.6801 16.4255 15.6993 15.2725C12.4818 13.4003 9.27722 11.5046 6.06725 9.61955C4.98467 8.98339 3.89995 8.3483 2.75699 7.67698L2.75915 7.67591ZM34.4794 4.75087C34.1699 3.73004 33.4065 3.18446 32.3207 3.18339C26.9822 3.18126 21.6438 3.18339 16.3053 3.18339C12.5131 3.18339 8.72084 3.18339 4.9286 3.18339C4.01963 3.18339 3.37375 3.59578 2.94137 4.37366C2.78395 4.65817 2.81414 4.81907 3.12683 5.00022C7.56926 7.5864 12.002 10.1875 16.4379 12.7843C16.6223 12.893 16.8099 12.9975 16.9932 13.1083C18.0413 13.7402 19.1023 13.754 20.1558 13.1392C23.2903 11.3117 26.4194 9.47463 29.5496 7.64075C31.1885 6.68065 32.8275 5.71949 34.4794 4.75087Z"
              fill="#D3AD7F"
            />
          </g>
          <defs>
            <clipPath id="clip0_67_230">
              <rect
                width="37.0436"
                height="26.3936"
                fill="white"
                transform="translate(0.128235 0.606445)"
              />
            </clipPath>
          </defs>
        </svg>
        <div>
          <h2>TICKETS INFO</h2>
          <p>cafeUrban@gmail.com</p>
        </div>
      </div>
      <div data-aos="zoom-in" className="contact-card">
        <svg
          width="31"
          height="36"
          viewBox="0 0 31 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_67_232)">
            <path
              d="M15.3378 0.700195C22.578 0.785594 28.6736 5.89284 29.8972 13.0778C30.7242 17.9351 29.3942 22.2362 25.9991 25.7917C22.8248 29.116 19.5172 32.3133 16.2647 35.5626C15.6774 36.1489 14.964 36.1448 14.3735 35.5553C11.1575 32.3424 7.91546 29.1546 4.73905 25.9032C1.72718 22.8195 0.33373 19.065 0.534729 14.767C0.855495 7.93408 5.98253 2.16551 12.7144 1.00326C13.5809 0.853288 14.463 0.799133 15.3378 0.700195ZM15.3222 32.9361C15.393 32.8767 15.4441 32.8392 15.4888 32.7944C18.3997 29.8805 21.3595 27.0144 24.2057 24.039C27.0343 21.0834 28.0924 17.4987 27.4124 13.4642C26.2543 6.57707 19.5547 2.0447 12.7259 3.57771C8.10916 4.61395 4.97858 7.46959 3.59658 11.9822C2.22083 16.4781 3.19562 20.596 6.43244 24.0244C9.26725 27.0279 12.2541 29.8867 15.1743 32.81C15.2108 32.8465 15.2524 32.8767 15.3222 32.9361Z"
              fill="#D3AD7F"
            />
            <path
              d="M15.3204 21.0665C11.7649 21.0363 9.05403 18.2369 9.0884 14.6294C9.11964 11.3134 12.0097 8.54314 15.4027 8.57647C18.8717 8.61084 21.5899 11.4592 21.5555 15.0251C21.5243 18.3223 18.6614 21.0957 15.3204 21.0676V21.0665ZM15.3423 11.0957C13.3167 11.0645 11.6087 12.736 11.5795 14.7772C11.5514 16.781 13.2011 18.5181 15.1652 18.5504C17.3158 18.5858 19.0217 16.9861 19.0634 14.896C19.104 12.8256 17.4418 11.128 15.3423 11.0957Z"
              fill="#D3AD7F"
            />
          </g>
          <defs>
            <clipPath id="clip0_67_232">
              <rect
                width="29.6198"
                height="35.2998"
                fill="white"
                transform="translate(0.516266 0.700195)"
              />
            </clipPath>
          </defs>
        </svg>

        <div>
          <h2>contact us</h2>
          <p>CVSU Trece Campus, Brgy Gregorio</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
