/** @jsxImportSource theme-ui */
import { InlineIcon } from "@iconify/react";
import roundStarBorder from "@iconify/icons-ic/round-star-border";
import roundStar from "@iconify/icons-ic/round-star";
import roundStarHalf from "@iconify/icons-ic/round-star-half";

const SIZE = 24;

function getStarIconForPercentage(percentage) {
  let icon = roundStar;
  if (percentage === 0) {
    icon = roundStarBorder;
  } else if (percentage < 100) {
    icon = roundStarHalf;
  }
  return icon;
}

export default function CompletionPercent({ percent }) {
  const cappedPercent = Math.min(percent, 100);
  return (
    <div
      sx={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <InlineIcon
        icon={getStarIconForPercentage(percent)}
        width={SIZE}
        height={SIZE}
        sx={{ color: "star.gold" }}
      />
      <span sx={{ fontWeight: "bold" }}>{`${cappedPercent}%`}</span>
    </div>
  );
}
