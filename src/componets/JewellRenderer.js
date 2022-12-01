import React from "react";
// cards
import { parts } from "../parts/parts";


const JewellRenderer = ({ jewell = null, width = 200, height = 200, style }) => {
  let seriStr = String(jewell.sellTime);

  while (seriStr.length < 16) seriStr = "0" + seriStr;

  console.log(seriStr)

  let jewellDeatils = {
    bg: seriStr.substring(14, 16) % parts.bg.length,
    name: jewell.name,
  };

  if (!jewell) {
    return null;
  }

  let ring = parts.ring
  let raw = parts.raw
  let gems = parts.gems
  let rawgems = parts.rawgems
  let star = parts.rarity

  if (jewell.rarity <= 40) {
    raw = parts.raw[0]
    ring = parts.ring[0]
  }
  if (jewell.rarity > 40 && jewell.rarity <= 60) {
    raw = parts.raw[1]
    ring = parts.ring[1]
  }
  if (jewell.rarity > 60 && jewell.rarity <= 90) {
    raw = parts.raw[2]
    ring = parts.ring[2]
  }
  if (jewell.rarity > 90) {
    raw = parts.raw[3]
    ring = parts.ring[3]
  }

  if (jewell.rarity <= 20) {
    star = parts.rarity[1]
  }
  if (jewell.rarity > 20 && jewell.rarity <= 40) {
    star = parts.rarity[2]
  }
  if (jewell.rarity > 40 && jewell.rarity <= 80) {
    star = parts.rarity[3]
  }
  if (jewell.rarity > 80 && jewell.rarity <= 90) {
    star = parts.rarity[4]
  }
  if (jewell.rarity > 90) {
    star = parts.rarity[5]
  }

  //ring
  if (jewell.gemslv <= 40) {
    gems = parts.gems[0]
    rawgems = parts.rawgems[0]
  }
  if (jewell.gemslv > 40 && jewell.gemslv <= 60) {
    gems = parts.gems[1]
    rawgems = parts.rawgems[1]
  }
  if (jewell.gemslv > 60 && jewell.gemslv <= 90) {
    gems = parts.gems[2]
    rawgems = parts.rawgems[2]
  }
  if (jewell.gemslv > 90) {
    gems = parts.gems[3]
    rawgems = parts.rawgems[3]
  }
  const jewellstyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: "0.8rem",
  };

  return (
    <div
      style={{
        minWidth: width,
        minHeight: height,
        position: "relative",
        ...style,
      }}
    >

      <img alt={"bg"} src={parts.bg[jewellDeatils.bg]} style={jewellstyle} />
      {
        jewell.gen0 === "0" ?
          <>
            {(parseInt(jewell.rarity) >= parseInt(jewell.gemslv)) ?
              <img alt={"raw"} src={raw} style={jewellstyle} />
              :
              <img alt={"rawgems"} src={rawgems} style={jewellstyle} />
            }
            <img alt={"rarity"} src={star} style={jewellstyle} />
          </>
          :
          jewell.gen0 === "1" ?
            <>
              <img alt={"ring"} src={ring} style={jewellstyle} />
              <img alt={"gems"} src={gems} style={jewellstyle} />
              <img alt={"rarity"} src={star} style={jewellstyle} />
            </>
            :
            <>
              <img alt={"ring"} src={ring} style={jewellstyle} />
              <img alt={"gems"} src={gems} style={jewellstyle} />
              <img alt={"rarity"} src={star} style={jewellstyle} />
              <img alt={"gen2"} src={parts.rarity[5]} style={jewellstyle} />
            </>
      }
    </div>
  );
};

export default JewellRenderer;