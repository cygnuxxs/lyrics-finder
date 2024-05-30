import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SongProps {
  songId: string;
  title: string;
  fullTitle: string;
  image: string;
  artistName: string;
  albumName: string;
  releaseDate: string;
  url: string;
}
