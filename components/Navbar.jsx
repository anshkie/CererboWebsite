import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="py-4 font-[]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side */}
        <div className="flex space-x-6 bg-orange-500 rounded-xl px-10 py-4">
          <Link href="/" className=" px-4 py-2 text-white hover:bg-orange-600">
            Home
          </Link>
          <Link href="/events" className=" px-4 py-2  text-white hover:bg-orange-600">
            Events
          </Link>
          <Link href="/merch" className=" px-4 py-2  text-white hover:bg-orange-600">
            Merch
          </Link>
        </div>

        {/* Center */}
        <div className="text-center py-2">
        <svg width="318" height="74" viewBox="0 0 318 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M110.864 62.8752C110.864 62.6192 110.909 62.3824 110.998 62.1648C111.101 61.9344 111.235 61.736 111.402 61.5696C111.581 61.3904 111.786 61.2496 112.016 61.1472C112.246 61.0448 112.496 60.9936 112.765 60.9936H120.752V57.8448H111.536V55.56H121.251C121.507 55.56 121.744 55.6112 121.962 55.7136C122.192 55.8032 122.39 55.9376 122.557 56.1168C122.736 56.2832 122.877 56.4816 122.979 56.712C123.082 56.9424 123.133 57.192 123.133 57.4608V61.416C123.133 61.672 123.082 61.9152 122.979 62.1456C122.89 62.3632 122.755 62.5616 122.576 62.7408C122.41 62.9072 122.211 63.0416 121.981 63.144C121.75 63.2336 121.501 63.2784 121.232 63.2784H113.245V66.7152H123.555V69H112.726C112.47 69 112.227 68.9552 111.997 68.8656C111.779 68.7632 111.587 68.6288 111.421 68.4624C111.254 68.296 111.12 68.0976 111.018 67.8672C110.915 67.624 110.864 67.368 110.864 67.0992V62.8752ZM135.862 66.7152V57.8448H127.76V66.7152H135.862ZM125.379 57.8064C125.379 57.1664 125.532 56.6352 125.84 56.2128C126.147 55.7776 126.608 55.56 127.222 55.56H135.958C136.598 55.56 137.136 55.72 137.571 56.04C138.006 56.3472 138.224 56.8144 138.224 57.4416V66.7728C138.224 67.4128 138.07 67.944 137.763 68.3664C137.456 68.7888 136.988 69 136.361 69H127.644C127.004 69 126.467 68.8464 126.032 68.5392C125.596 68.232 125.379 67.7648 125.379 67.1376V57.8064ZM140.058 62.8752C140.058 62.6192 140.103 62.3824 140.192 62.1648C140.295 61.9344 140.429 61.736 140.595 61.5696C140.775 61.3904 140.979 61.2496 141.21 61.1472C141.44 61.0448 141.69 60.9936 141.959 60.9936H149.946V57.8448H140.73V55.56H150.445C150.701 55.56 150.938 55.6112 151.155 55.7136C151.386 55.8032 151.584 55.9376 151.751 56.1168C151.93 56.2832 152.071 56.4816 152.173 56.712C152.275 56.9424 152.327 57.192 152.327 57.4608V61.416C152.327 61.672 152.275 61.9152 152.173 62.1456C152.083 62.3632 151.949 62.5616 151.77 62.7408C151.603 62.9072 151.405 63.0416 151.175 63.144C150.944 63.2336 150.695 63.2784 150.426 63.2784H142.439V66.7152H152.749V69H141.92C141.664 69 141.421 68.9552 141.191 68.8656C140.973 68.7632 140.781 68.6288 140.615 68.4624C140.448 68.296 140.314 68.0976 140.211 67.8672C140.109 67.624 140.058 67.368 140.058 67.0992V62.8752ZM154.477 55.56H156.857V63.048H164.307V58.7856H166.688V69H164.307V65.3328H156.377C156.109 65.3328 155.859 65.288 155.629 65.1984C155.398 65.096 155.193 64.9616 155.014 64.7952C154.848 64.616 154.713 64.4176 154.611 64.2C154.521 63.9696 154.477 63.7264 154.477 63.4704V55.56ZM168.616 62.9328H177.64V65.2176H168.616V62.9328ZM179.47 62.8752C179.47 62.6192 179.515 62.3824 179.605 62.1648C179.707 61.9344 179.841 61.736 180.008 61.5696C180.187 61.3904 180.392 61.2496 180.622 61.1472C180.853 61.0448 181.102 60.9936 181.371 60.9936H189.358V57.8448H180.142V55.56H189.857C190.113 55.56 190.35 55.6112 190.568 55.7136C190.798 55.8032 190.997 55.9376 191.163 56.1168C191.342 56.2832 191.483 56.4816 191.585 56.712C191.688 56.9424 191.739 57.192 191.739 57.4608V61.416C191.739 61.672 191.688 61.9152 191.585 62.1456C191.496 62.3632 191.361 62.5616 191.182 62.7408C191.016 62.9072 190.817 63.0416 190.587 63.144C190.357 63.2336 190.107 63.2784 189.838 63.2784H181.851V66.7152H192.161V69H181.333C181.077 69 180.833 68.9552 180.603 68.8656C180.385 68.7632 180.193 68.6288 180.027 68.4624C179.861 68.296 179.726 68.0976 179.624 67.8672C179.521 67.624 179.47 67.368 179.47 67.0992V62.8752ZM194.177 66.7152H203.873V63.2784H195.79C195.521 63.2784 195.271 63.2336 195.041 63.144C194.811 63.0416 194.606 62.9072 194.427 62.7408C194.26 62.5616 194.126 62.3632 194.023 62.1456C193.934 61.9152 193.889 61.672 193.889 61.416V57.4416C193.889 57.1728 193.934 56.9232 194.023 56.6928C194.126 56.4624 194.26 56.264 194.427 56.0976C194.606 55.9312 194.804 55.8032 195.022 55.7136C195.252 55.6112 195.495 55.56 195.751 55.56H205.831V57.8448H196.27V60.9936H204.372C204.641 60.9936 204.891 61.0448 205.121 61.1472C205.351 61.2496 205.55 61.3904 205.716 61.5696C205.883 61.736 206.011 61.9344 206.1 62.1648C206.203 62.3824 206.254 62.6192 206.254 62.8752V67.1184C206.254 67.3872 206.203 67.6368 206.1 67.8672C205.998 68.0976 205.863 68.296 205.697 68.4624C205.531 68.6288 205.332 68.7632 205.102 68.8656C204.871 68.9552 204.635 69 204.391 69H194.177V66.7152Z" fill="white"/>
<path d="M2.304 19.2288C2.304 18.512 2.44053 17.8464 2.7136 17.232C2.98667 16.6176 3.34507 16.0885 3.7888 15.6448C4.23253 15.1669 4.74453 14.8085 5.3248 14.5696C5.9392 14.2965 6.58773 14.16 7.2704 14.16H42.1888V20.2528H8.6528V43.9072H42.1888V50H7.4752C6.7584 50 6.07573 49.8635 5.4272 49.5904C4.8128 49.3173 4.26667 48.9589 3.7888 48.5152C3.34507 48.0715 2.98667 47.5595 2.7136 46.9792C2.44053 46.3648 2.304 45.7163 2.304 45.0336V19.2288ZM46.554 19.2288C46.554 18.512 46.6905 17.8464 46.9636 17.232C47.2367 16.6176 47.5951 16.0885 48.0388 15.6448C48.4825 15.1669 48.9945 14.8085 49.5748 14.5696C50.1892 14.2965 50.8377 14.16 51.5204 14.16H85.0564V20.2528H52.9028V28.6496H80.9092V34.7424H52.9028V43.9072H85.0564V50H51.7252C51.0084 50 50.3257 49.8635 49.6772 49.5904C49.0628 49.3173 48.5167 48.9589 48.0388 48.5152C47.5951 48.0715 47.2367 47.5595 46.9636 46.9792C46.6905 46.3648 46.554 45.7163 46.554 45.0336V19.2288ZM89.66 19.1776C89.66 18.4608 89.7965 17.7952 90.0696 17.1808C90.3427 16.5664 90.7011 16.0373 91.1448 15.5936C91.5885 15.1499 92.1005 14.8085 92.6808 14.5696C93.2952 14.2965 93.9437 14.16 94.6264 14.16H125.705C126.422 14.16 127.087 14.2965 127.702 14.5696C128.316 14.8427 128.845 15.2181 129.289 15.696C129.733 16.1397 130.074 16.6688 130.313 17.2832C130.586 17.8635 130.722 18.4949 130.722 19.1776V31.4144C130.722 32.1312 130.586 32.7968 130.313 33.4112C130.04 34.0256 129.681 34.5547 129.238 34.9984C128.794 35.4421 128.265 35.8005 127.65 36.0736C127.036 36.3125 126.405 36.432 125.756 36.432H120.534L131.234 50H123.554L112.649 36.432H100.105V30.3392H124.374V20.2528H96.0088V50H89.66V19.1776ZM135.854 19.2288C135.854 18.512 135.991 17.8464 136.264 17.232C136.537 16.6176 136.895 16.0885 137.339 15.6448C137.783 15.1669 138.295 14.8085 138.875 14.5696C139.489 14.2965 140.138 14.16 140.82 14.16H174.356V20.2528H142.203V28.6496H170.209V34.7424H142.203V43.9072H174.356V50H141.025C140.308 50 139.626 49.8635 138.977 49.5904C138.363 49.3173 137.817 48.9589 137.339 48.5152C136.895 48.0715 136.537 47.5595 136.264 46.9792C135.991 46.3648 135.854 45.7163 135.854 45.0336V19.2288ZM178.96 20.2016C178.96 18.3584 179.404 16.8907 180.291 15.7984C181.213 14.7061 182.51 14.16 184.182 14.16H210.038C212.086 14.16 213.605 14.6379 214.595 15.5936C215.619 16.5493 216.131 17.8635 216.131 19.536V28.8544C217.428 28.8544 218.555 29.3152 219.51 30.2368C220.466 31.1243 220.944 32.3701 220.944 33.9744V43.856C220.944 45.6992 220.5 47.184 219.613 48.3104C218.725 49.4368 217.445 50 215.773 50H178.96V20.2016ZM214.595 43.9072V34.64H185.309V43.9072H214.595ZM209.782 28.8544V20.2528H185.309V28.8544H209.782ZM225.56 19.1776C225.56 18.4608 225.697 17.7952 225.97 17.1808C226.243 16.5664 226.601 16.0373 227.045 15.5936C227.489 15.1499 228.001 14.8085 228.581 14.5696C229.195 14.2965 229.844 14.16 230.526 14.16H261.605C262.322 14.16 262.987 14.2965 263.602 14.5696C264.216 14.8427 264.745 15.2181 265.189 15.696C265.633 16.1397 265.974 16.6688 266.213 17.2832C266.486 17.8635 266.622 18.4949 266.622 19.1776V31.4144C266.622 32.1312 266.486 32.7968 266.213 33.4112C265.94 34.0256 265.581 34.5547 265.138 34.9984C264.694 35.4421 264.165 35.8005 263.55 36.0736C262.936 36.3125 262.305 36.432 261.656 36.432H256.434L267.134 50H259.454L248.549 36.432H236.005V30.3392H260.274V20.2528H231.909V50H225.56V19.1776ZM308.567 43.9072V20.2528H278.103V43.9072H308.567ZM271.754 19.1776C271.754 18.4608 271.873 17.7952 272.112 17.1808C272.385 16.5664 272.744 16.0373 273.188 15.5936C273.665 15.1499 274.195 14.8085 274.775 14.5696C275.355 14.2965 275.987 14.16 276.669 14.16H309.744C310.461 14.16 311.127 14.2965 311.741 14.5696C312.39 14.8427 312.936 15.2181 313.38 15.696C313.857 16.1397 314.233 16.6688 314.506 17.2832C314.779 17.8976 314.916 18.5461 314.916 19.2288V44.88C314.916 45.5968 314.779 46.2795 314.506 46.928C314.233 47.5424 313.857 48.0885 313.38 48.5664C312.936 49.0101 312.407 49.3685 311.792 49.6416C311.212 49.8805 310.581 50 309.898 50H276.925C276.208 50 275.526 49.8635 274.877 49.5904C274.263 49.3173 273.717 48.9589 273.239 48.5152C272.795 48.0373 272.437 47.5083 272.164 46.928C271.891 46.3136 271.754 45.6651 271.754 44.9824V19.1776Z" fill="white"/>
<path d="M210 60.5L318 60.5" stroke="white"/>
<path d="M0.00195312 60.502H108.007" stroke="white"/>
</svg>
        </div>

        {/* Right side */}
        <div className="flex space-x-6 bg-purple-500 rounded-xl px-10 py-4">
          <Link href="/sponsors" className=" px-4 py-2  text-white hover:bg-purple-600">
            Sponsors
          </Link>
          <Link href="/team" className=" px-4 py-2 rounded-md text-white hover:bg-purple-600">
            Team
          </Link>
          <Link href="/contact" className=" px-4 py-2 rounded-md text-white hover:bg-purple-600">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;