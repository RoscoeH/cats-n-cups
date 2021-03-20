/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { motion } from "framer-motion";

import { ItemTypes } from "../constants";
import { shuffle } from "../utils";
import Pattern from "./Pattern";
import { useObservable } from "../hooks/useObservable";
import { useGame } from "../hooks/useGame";

export const MOODS = {
  SLEEPY: "sleepy",
  HAPPY: "happy",
  GRUMPY: "grumpy",
  SITTING: "sitting",
};
const DARK_COLORS = ["black", "chocolate"];

const Eye = ({ id, r, delay, intervals, ...props }) => {
  // const [open, setOpen] = useState(true);
  // useEffect(() => {
  //   const ints = [];
  //   const timeouts = [];

  //   const delayTimeout = setTimeout(() => {
  //     intervals.forEach((seconds) => {
  //       const closeInterval = setInterval(() => {
  //         setOpen(false);
  //         const openTimeout = setTimeout(() => setOpen(true), 100);
  //         timeouts.push(openTimeout);
  //       }, seconds * 1000);
  //       ints.push(closeInterval);
  //     });
  //   }, delay);

  //   timeouts.push(delayTimeout);

  //   // return () => {
  //   //   ints.forEach(clearInterval);
  //   //   timeouts.forEach(clearTimeout);
  //   // };
  // });

  const variants = {
    open: { translateY: -r * 2 },
    closed: { translateY: 0 },
  };
  return (
    <g>
      <mask id={`eyeMask${id}`}>
        <circle r={r} fill="white" {...props} />
        <motion.circle
          r={r}
          fill="black"
          initial="open"
          transition={{ duration: 0.05 }}
          // animate={open ? "open" : "closed"}
          variants={variants}
          {...props}
        />
      </mask>
      <circle r={r} {...props} mask={`url(#eyeMask${id})`} />
    </g>
  );
};

const Body = () => (
  <g>
    <circle cx="16" cy="16" r="16" />
    <path d="M0 16V0L16 16H0Z" />
    <path d="M32 16V0L16 16H32Z" />
  </g>
);

const Tail = () => (
  <path
    d="M5.02158 4.86789C4.48268 5.44271 4 6.42818 4 8.00004C4 9.10461 3.10457 10 2 10C0.89543 10 0 9.10461 0 8.00004C0 5.57187 0.767316 3.55732 2.10342 2.13213C3.42996 0.71715 5.21338 -8.34464e-07 7 0C8.78662 8.34466e-07 10.57 0.717154 11.8966 2.13214C13.2327 3.55733 14 5.57188 14 8.00005C14 9.10462 13.1046 10.0001 12 10.0001C10.8954 10.0001 10 9.10462 10 8.00005C10 6.42819 9.51732 5.44272 8.97842 4.86789C8.42996 4.28286 7.71338 4 7 4C6.28662 4 5.57004 4.28286 5.02158 4.86789Z"
    transform="translate(28 8)"
  />
);

const Legs = () => (
  <g transform="translate(4 24)">
    <path d="M10 4H6V10C6 11.1046 6.89543 12 8 12V12C9.10457 12 10 11.1046 10 10V4Z" />
    <path d="M18 4H14V10C14 11.1046 14.8954 12 16 12V12C17.1046 12 18 11.1046 18 10V4Z" />
    <path d="M24 0H20V6C20 7.10457 20.8954 8 22 8V8C23.1046 8 24 7.10457 24 6V0Z" />
    <path d="M4 0H0V6C0 7.10457 0.895431 8 2 8V8C3.10457 8 4 7.10457 4 6V0Z" />
  </g>
);

const EYE_INTERVALS = [7, 13, 17, 19, 23];
const Face = ({ id, color, mood }) => {
  const [delay] = useState(Math.round(Math.random() * 1000));
  const [intervals] = useState(shuffle(EYE_INTERVALS).slice(1));
  return (
    <g
      transform="translate(18, 20)"
      sx={{ fill: DARK_COLORS.includes(color) ? "light" : "dark" }}
    >
      {mood === MOODS.SLEEPY ? (
        <g>
          <path d="M16.5 1.5C16.7761 1.5 17 1.72386 17 2C17 2.55228 17.4477 3 18 3C18.5523 3 19 2.55228 19 2C19 1.72386 19.2239 1.5 19.5 1.5C19.7761 1.5 20 1.72386 20 2C20 3.10457 19.1046 4 18 4C16.8954 4 16 3.10457 16 2C16 1.72386 16.2239 1.5 16.5 1.5Z" />
          <path d="M0.5 1.5C0.776142 1.5 1 1.72386 1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.72386 3.22386 1.5 3.5 1.5C3.77614 1.5 4 1.72386 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 1.72386 0.223858 1.5 0.5 1.5Z" />
          <circle cx="10" cy="6" r="1" />
        </g>
      ) : (
        <g>
          <Eye
            id={`${id}${1}`}
            delay={delay}
            intervals={intervals}
            cx="2"
            cy="2"
            r="2"
          />
          <Eye
            id={`${id}${2}`}
            delay={delay}
            intervals={intervals}
            cx="18"
            cy="2"
            r="2"
          />
          <path
            d="M13 2C12.4477 2 12 2.44772 12 3C12 3.72864 11.7367 4.20164 11.3981 4.50259C11.0412 4.8199 10.5369 5 10 5C9.46307 5 8.95883 4.8199 8.60186 4.50259C8.2633 4.20164 8 3.72864 8 3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3C6 4.27136 6.4867 5.29836 7.27314 5.99741C8.04117 6.6801 9.03693 7 10 7C10.9631 7 11.9588 6.6801 12.7269 5.99741C13.5133 5.29836 14 4.27136 14 3C14 2.44772 13.5523 2 13 2Z"
            transform={mood === MOODS.GRUMPY ? "rotate(180 10 4)" : ""}
          />
        </g>
      )}
    </g>
  );
};

export const Cat = ({ id, color, mood, cupped, size }) => (
  <svg width={size || 128} height={size || 128} viewBox="0 0 56 56">
    <mask id={`catMask${id}`}>
      <g fill="white" transform="translate(12 12)">
        <Body />
        {(mood === MOODS.HAPPY || mood === MOODS.GRUMPY) && (
          <g>
            <Legs />
            <Tail />
          </g>
        )}
      </g>
    </mask>
    <g mask={`url(#catMask${id})`}>
      <Pattern color={color || "blue"} />
      {mood === MOODS.GRUMPY && (
        <rect x="0" y="0" width="56" height="56" sx={{ fill: "angry" }} />
      )}
    </g>
    <Face id={id} color={color} mood={mood} />
    {cupped && (
      <path d="m12 28 h32 v6 A16 16 0 0 1 12 34 z" sx={{ fill: "cup" }} />
    )}
  </svg>
);

const DraggableCat = ({ id, color, mood, cupped, size, x, y }) => {
  const game = useGame();
  const [cat] = useObservable(game.cats.find((cat) => cat.get().id === id));

  const [{ isDragging }, drag, preview] = useDrag(() => {
    return {
      type: ItemTypes.CAT,
      item: () => {
        game.setMoods(id);
        return {
          id,
          color,
          size,
          pos: typeof x !== "undefined" && typeof y !== "undefined" && { x, y },
        };
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    };
  }, []);

  useEffect(() => preview(getEmptyImage(), { captureDraggingState: true }), [
    preview,
  ]);

  return cat.docked || cupped ? (
    <div
      ref={drag}
      sx={{
        opacity: isDragging ? 0 : 1,
        display: "inline-block",
      }}
    >
      <Cat
        id={id}
        color={color}
        mood={(cat.mad && MOODS.GRUMPY) || mood}
        cupped={cupped}
        size={size}
      />
    </div>
  ) : (
    <div sx={{ width: `${size}px`, height: `${size}px` }} />
  );
};

export default DraggableCat;
