import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const songs_recommendation = {
    Indian: [
      { name: "Dangal Title Track", artist: "Daler Mehndi" },
      { name: "Andhadhun Title Track ", artist: "Raftaar" },
      { name: "Sun le re", artist: "Papon" },
      { name: "Moh Moh ke dhaage", artist: "Monali Thakur" }
    ],
    Classical: [
      { name: "Vivaldi", artist: "The Four Seasons" },
      { name: " Same Old Thing", artist: "The Streets" },
      { name: "Symphony No.6 ", artist: "Beethoven" },
      { name: "Bizet", artist: "Carmen" }
    ],
    Rock: [
      { name: "Rockin' in the Free World", artist: "Neil Young" },
      { name: "Hey Jude", artist: "The Beatles" },
      { name: "Stairway To Heaven", artist: " Led Zeppelin" },
      { name: "Comfortably Numb", artist: "Pink Floyd" }
    ],
    Blue: [
      { name: "I Cant Quit You Baby", artist: "Otis Rush" },
      { name: "I’d Rather Go Blind", artist: "Etta James" },
      { name: "Crossroad Blues", artist: "Robert Johnson" },
      { name: "Sunshine Of Your Love", artist: "Cream" }
    ],
    Pop: [
      { name: "Peaches", artist: "Justin Bieber" },
      { name: "Bad Habits", artist: "Ed Sheeran" },
      { name: "Levitating", artist: "Dua Lipa" },
      { name: "Happier than ever", artist: "Billie Eilish" }
    ]
  };

  const [selected, setSelected] = useState([]);
  const [genre, setGenre] = useState("");

  const clickhandler = (val) => {
    setSelected(songs_recommendation[val]);
    setGenre(val);
  };

  return (
    <div className="App">
      <h1>Music Library</h1>
      <hr />
      <h2> Please Select Genre-</h2>

      <div>
        {Object.keys(songs_recommendation).map((val) => {
          return <button onClick={() => clickhandler(val)}>{val}</button>;
        })}
      </div>

      <div id="genre">
        {selected.length > 0 && (
          <h3>Here are some recommendations for {genre} Music:</h3>
        )}
        <ul>
          {selected.map(({ name, artist }) => {
            return (
              <>
                <li>
                  <div className="name"> {name} </div>
                  <div className="artist"> {artist} </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
