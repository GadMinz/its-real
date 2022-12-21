import React from "react";
import s from "./Element.module.scss";

interface ElementProps {
  id: string;
  time: number;
  deleteItem: (id: string) => void;
}

const Element: React.FC<ElementProps> = ({ id, time, deleteItem }) => {
  const [seconds, setSeconds] = React.useState(time);
  const [timeout, _setTimeout] = React.useState<NodeJS.Timeout>();

  if (seconds <= 0) deleteItem(id);
  const countDown = () => {
    setSeconds((prevState) => prevState - 1);
  };
  const runTimer = () => {
    const timer = setTimeout(() => {
      countDown();
    }, 1000);
    _setTimeout(timer);
  };

  React.useEffect(() => {
    runTimer();
    return clearTimeout(timeout);
  }, [seconds]);

  return (
    <div className={s.wrapper}>
      <li className={s.element}>Исчезнет через {seconds} секунд</li>
      <button className={s.element_delete} onClick={() => deleteItem(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <rect width="100%" height="100%" fill="none" />
          <g className="currentLayer">
            <path
              fill="none"
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1.164 4.506 4.55 1.083 8.144 4.72l3.595-3.637 3.384 3.423-3.595 3.638 3.595 3.637-3.384 3.424-3.595-3.637-3.595 3.637-3.385-3.424L4.76 8.144 1.164 4.506z"
              color="#000"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Element;
