import React, { useState } from "react";
import img from "../../img/arrow-down-svgrepo-com.svg";
import "./SimpleMode.css";

function SimpleModal() {
  const [isHovered, setIsHovered] = useState(false); // Состояние для отображения всплывающего окна

  // Функции для показа и скрытия всплывающего окна
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="modal-container">
      <ul className="list">
        <li className="list-item">
          <a href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
        <li className="list-item">
          <a href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
        <li className="list-item ">
          <a className="ava blue" href="/">
            И
          </a>
        </li>
        <li className="list-item">
          <a
            className="name"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="/"
          >
            Иванов Иван Иванович
          </a>
        </li>
      </ul>

      {/* Добавляем обработчики событий для отображения и скрытия всплывающего окна */}

      {/* Отображаем всплывающее окно, если showPopup равен true */}
      {isHovered && (
        <div className="modal">
          <div className="item-1">
            <p>История посещений</p>
          </div>
          <div className="item-2">
            <p>Безопасност и вход</p>
            <span className="arrow">
              <img src={img} alt="img" width={17} />
            </span>
          </div>
          <div className="item-3">
            <p>Выйти</p>
          </div>
          <div className="item-4">
            <p>
              Ваш последний визит: <span className="date">09.02.2024</span>
              <span className="time">16:44:06</span>
            </p>
          </div>
          <div className="item-5">
            <p>Петрова Наталья Владимировна</p>
          </div>
          <div className="item-6">
            <p>
              Под вашим аккаунтом вы можете{" "}
              <span className="text-bold">
                создавать, изменять, подписывать и отправлять транзакции.
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SimpleModal;
