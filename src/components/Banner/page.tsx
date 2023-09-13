"use client";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

export default function Banner() {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-screen max-h-[100vw] bg-slate-50 flex justify-center items-center px-[5vw] md:px-[100px] py-[50px]  gap-2 md:gap-8">
      <div>
        <IconButton onClick={() => setIndex((index - 1 + 4) % 4)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <div className="max-w-[1000px] max-h-[80vh] self-center">
        <img
          src={`/banner_cycle/banner${index}.png`}
          className="object-contain"
          style={{ maxHeight: "80vh" }}
          onClick={() => setIndex((index + 1) % 4)}
        />
      </div>
      <div>
        <IconButton onClick={() => setIndex((index + 1) % 4)}>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
}
