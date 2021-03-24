/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { InlineIcon } from "@iconify/react";
import roundStarBorder from "@iconify/icons-ic/round-star-border";
import roundStar from "@iconify/icons-ic/round-star";
import roundStarHalf from "@iconify/icons-ic/round-star-half";

import { range } from "../core/utils";

const DEFAULT_SIZE = 48;
const DEFAULT_MAX_STARS = 3;

function getIcon(index, stars) {
  const fullOrHalf = stars - index >= 1 ? roundStar : roundStarHalf;
  return index < stars ? fullOrHalf : roundStarBorder;
}

const StarBar = ({ stars, max = DEFAULT_MAX_STARS, size = DEFAULT_SIZE }) => (
  <div>
    {range(max).map((i) => (
      <InlineIcon key={i} icon={getIcon(i, stars)} width={size} height={size} />
    ))}
  </div>
);

export default StarBar;
