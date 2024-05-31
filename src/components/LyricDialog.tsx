import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SongProps } from "@/lib/utils";
import TextEffect from "@/components/TextEffect";

const LyricDialog: React.FC<{ props: SongProps }> = ({ props }) => {
  const [lyrics, setLyrics] = useState<string>("");

  const fetchLyrics = () => {
    if (!lyrics) {
      fetch("https://lyrics-finder-api-jade.vercel.app/lyrics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: props.url }),
      })
        .then((response) => response.json())
        .then((data) => setLyrics(data))
        .catch((err) => console.error(err));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={() => fetchLyrics()}
          className="text-xs rounded-sm h-[2rem] px-2"
        >
          View Lyrics
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[90%] max-sm:w-[90%] max-sm:rounded-lg text-primary">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="aspect-square w-[6rem] flex items-center">
              <img className="rounded" src={props.image} alt={props.title} />
            </div>
            <div className="flex flex-col items-start">
              <DialogTitle className="text-primary text-base line-clamp-1 text-start mb-2">
                {props.title}
              </DialogTitle> 
                <div className="flex flex-col gap-2 items-start text-muted-foreground">
                  <p className="text-xs font-medium">{props.artistName}</p>
                  <p className="text-xs font-medium">{props.releaseDate}</p>
                </div>
            </div>
          </div>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll">
          <TextEffect words={lyrics} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LyricDialog;
