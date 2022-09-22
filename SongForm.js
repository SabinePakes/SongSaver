import React from "react";
export default function SongForm(props) {
  const { addSong, songToAdd, handleChange, sortSongs } = props;
  return (
    <>
      <form className="inputs--container" onSubmit={addSong}>

        <input
          type="text"
          placeholder="Song"
          onChange={handleChange}
          name="song"
          value={songToAdd.song}
          className="first-input"
          required
        />

        <input
          type="text"
          placeholder="Artist"
          onChange={handleChange}
          name="artist"
          value={songToAdd.artist}
        />


        <select
          id="dropDown"
          placeholder="genre"
          onChange={handleChange}
          name="genre"
        >
          <option value={songToAdd.genre && "Not Categorized"}>
            Not Categorized
          </option>
          <option value={songToAdd.genre && "Rock"}>Rock</option>
          <option value={songToAdd.genre && "Jazz"}>Jazz</option>
          <option value={songToAdd.genre && "Pop"}>Pop</option>
        </select>

        <select
          id="dropDown-1"
          placeholder="Rating"
          onChange={handleChange}
          name="rating"
        >
          <option value={songToAdd.rating[0] && "No Rating"}> No Rating</option>
          <option value={songToAdd.rating[1]}>1</option>
          <option value={songToAdd.rating[2]}>2</option>
          <option value={songToAdd.rating[3]}>3</option>
          <option value={songToAdd.rating[4]}>4</option>
          <option value={songToAdd.rating[5]}>5</option>
        </select>
        {/* submite-button: a button in form defult to submite */}
        <button className="submite-button">Submit</button>
        {/* sortSongs with sort-button */}
        <button onClick={sortSongs} className="sort-button">
          Sort by Name
        </button>
      </form>
      {/* playlist */}
      <div className="playlist">
        <h1>Playlist</h1>
      </div>
    </>
  );
}
