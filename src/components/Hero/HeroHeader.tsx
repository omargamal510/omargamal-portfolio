"use client";

import { useTypeWriter } from "@/hooks/useTypeWriter";
import { useEffect, useState } from "react";

interface Iprops {
  textProp: string;
}

const HeroHeader = ({ textProp = "" }: Iprops) => {
  const { text } = useTypeWriter(textProp, 50);
  return (
    <span>
      {text}
      {text.length >= textProp.length ? "" : "|"}
    </span>
  );
};

export default HeroHeader;
