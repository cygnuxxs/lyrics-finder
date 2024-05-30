import React, { ChangeEvent, FormEvent, useState } from "react";
import Song from "@/components/Song";
import { SongProps } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholder";
import Home from "@/components/Home";

const Results: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [songs, setSongs] = useState<SongProps[]>([]);
  const placeholders = ['Type Starboy.', 'My Favourite is \'Creepin\'.', 'Search lyrics for your favourites.', 'Regional songs maybe available.']

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const fetchData = () => {
    fetch(`http://localhost:1155/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <div className="w-full h-[90%]">
      <div className="h-[10%]">
        {/* <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            name="query"
            type="text"
            autoComplete="off"
            className="text-primary-foreground"
            required
            minLength={4}
            placeholder="Search for the lyrics of your favorite song."
          />
          <Button type="submit" className="text-xs">
            Search
          </Button>
        </form> */}
        <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={handleSubmit} />
        <div className="py-2">
          <Separator />
        </div>
      </div>
      <div className="w-full h-[90%] overflow-y-scroll">
        {songs.length > 0 ? (
          <div className="flex flex-col gap-2 pt-2 pb-8">
          {songs.map((song, key) => (
            <Song props={song} key={key} />
          ))}
        </div>
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
};

export default Results;
