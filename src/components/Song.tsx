import { SongProps } from "@/lib/utils";
import React from "react";
import LyricDialog from "@/components/LyricDialog"; 

const Song: React.FC<{ props: SongProps }> = ({ props }) => {
  return (
    <div className="w-full flex gap-4 hover:bg-secondary h-[8rem] rounded-sm">
      <div className="aspect-square w-[6rem] flex items-center">
      <img
        className="rounded"
        src={props.image}
        alt={props.title}
      />
      </div>
      <div className="flex flex-col w-full items-start justify-between py-2">
        <div className="text-foreground flex flex-col gap-1">
          <p className="font-bold line-clamp-2 leading-4 text-sm">{props.title}</p>
          <p className="font-medium text-xs">{props.artistName}</p>
          <p className="font-semibold text-xs">{props.releaseDate}</p>
        </div>
        <LyricDialog props={props} />
      </div>
    </div>
  );
};

export default Song;
