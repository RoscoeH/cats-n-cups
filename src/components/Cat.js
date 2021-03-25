/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { AnimatePresence, motion } from "framer-motion";

import { ItemTypes } from "../core/constants";
import { shuffle } from "../core/utils";
import { useObservable } from "../hooks/useObservable";
import { useGame } from "../hooks/useGame";
import theme from "../core/theme";

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

const Tail = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.path
        key="child"
        d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        transform="translate(28 8)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
      />
    )}
  </AnimatePresence>
);

const Legs = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.g
        key="child"
        initial={{ translateY: -16 }}
        animate={{ translateY: 0 }}
        exit={{ translateY: -16 }}
      >
        <g transform="translate(4 24)">
          <path d="M10 4H6V10C6 11.1046 6.89543 12 8 12V12C9.10457 12 10 11.1046 10 10V4Z" />
          <path d="M18 4H14V10C14 11.1046 14.8954 12 16 12V12C17.1046 12 18 11.1046 18 10V4Z" />
          <path d="M24 0H20V6C20 7.10457 20.8954 8 22 8V8C23.1046 8 24 7.10457 24 6V0Z" />
          <path d="M4 0H0V6C0 7.10457 0.895431 8 2 8V8C3.10457 8 4 7.10457 4 6V0Z" />
        </g>
      </motion.g>
    )}
  </AnimatePresence>
);

const EYE_INTERVALS = [7, 13, 17, 19, 23];
const Face = ({ id, color, mad }) => {
  const [delay] = useState(Math.round(Math.random() * 1000));
  const [intervals] = useState(shuffle(EYE_INTERVALS).slice(1));
  return (
    <g
      transform="translate(18, 20)"
      sx={{ fill: DARK_COLORS.includes(color) ? "light" : "dark" }}
    >
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
        <motion.path
          d="M13 2C12.4477 2 12 2.44772 12 3C12 3.72864 11.7367 4.20164 11.3981 4.50259C11.0412 4.8199 10.5369 5 10 5C9.46307 5 8.95883 4.8199 8.60186 4.50259C8.2633 4.20164 8 3.72864 8 3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3C6 4.27136 6.4867 5.29836 7.27314 5.99741C8.04117 6.6801 9.03693 7 10 7C10.9631 7 11.9588 6.6801 12.7269 5.99741C13.5133 5.29836 14 4.27136 14 3C14 2.44772 13.5523 2 13 2Z"
          animate={{ rotateX: mad ? 180 : 0 }}
        />
      </g>
    </g>
  );
};

export const Cat = ({ id, color, mad, legs, tail, size }) => {
  const bodyColor = theme.colors.cat[color || "blue"];
  return (
    <svg width={size || 128} height={size || 128} viewBox="0 0 56 56">
      <mask id={`catMask${id}`}>
        <g fill="white" transform="translate(12 12)">
          <Body />
          <Legs visible={legs} />
          <Tail visible={tail} />
        </g>
      </mask>
      <g mask={`url(#catMask${id})`}>
        <rect x="0" y="0" width="56" height="56" fill={bodyColor} />
        {mad && (
          <motion.rect
            x="0"
            y="0"
            width="56"
            height="56"
            sx={{ fill: "angry" }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [1, 0.5, 1],
              transition: {
                duration: 1,
                loop: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        )}
      </g>
      <Face id={id} color={color} mad={mad} />
    </svg>
  );
};

const DraggableCat = ({ id, color, mood, size, x, y }) => {
  const [game] = useGame();
  const [cat] = useObservable(game.cats.find((cat) => cat.get().id === id));
  const hasPosition = typeof x !== "undefined" && typeof y !== "undefined";

  const [{ isDragging }, drag, preview] = useDrag(() => {
    return {
      type: ItemTypes.CAT,
      item: () => {
        game.setMoods(id);
        return {
          id,
          color,
          size,
          pos: hasPosition && { x, y },
        };
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    };
  }, [cat, x, y]);

  useEffect(() => preview(getEmptyImage(), { captureDraggingState: true }), [
    preview,
  ]);

  return cat.docked || hasPosition ? (
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
        mad={cat.mad || mood === MOODS.GRUMPY}
        tail={mood !== MOODS.SITTING}
        legs={mood !== MOODS.SITTING}
        size={size}
      />
    </div>
  ) : (
    <div sx={{ width: `${size}px`, height: `${size}px` }} />
  );
};

export default DraggableCat;
