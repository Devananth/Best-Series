import { React, useState } from "react";
import "./styles.css";

export default function App() {
  const AllSeries = {
    Drama: [
      {
        Title: "Prison Break",
        Description:
          "An engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence.",
        Rating: `8.3/10`
      },

      {
        Title: "Person of Interest",
        Description:
          "Former CIA agent Reese (Jim Caviezel) -- now presumed dead -- and billionaire software genius Finch (Michael Emerson) join forces as a vigilante crime-fighting team",
        Rating: `8.4/10`
      },

      {
        Title: "Breaking Bad",
        Description:
          "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
        Rating: `9.4/10`
      }
    ],
    Love: [
      {
        Title: "Nevertheless ",
        Description:
          "The story of a romance between a man who is annoyed with relationships but likes to flirt and a woman who wants to date but does not believe in love.",
        Rating: `7.7/10`
      },
      {
        Title: "Brooklyn Nine-Nine",
        Description:
          "Ray Holt, an eccentric commanding officer, and his diverse and quirky team of odd detectives solve crimes in Brooklyn, New York City.",
        Rating: `8.4/10`
      },
      {
        Title: "The Kissing Booth",
        Description:
          "A high school student finds herself face-to-face with her long-term crush when she signs up to run a kissing booth at the spring carnival.",
        Rating: `6/10`
      }
    ],
    Crime: [
      {
        Title: "Money Heist",
        Description:
          "A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.",
        Rating: `9.5/10`
      },
      {
        Title: "Peaky Blinders",
        Description:
          "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.",
        Rating: `8/10`
      },
      {
        Title: "Dark ",
        Description:
          "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.",
        Rating: `8.5/10`
      }
    ]
  };

  const genreList = Object.keys(AllSeries);

  const [genre, setGenre] = useState("Love");

  function display(movie) {
    return (
      <div style={{ textAlign: "left" }}>
        <h2>{movie.Title}</h2>
        <p>{movie.Description}</p>
        <p>
          <span style={{ fontWeight: "bold" }}>Rating : </span>
          {movie.Rating}
        </p>
        <hr />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="header">
        <h2>Best Series</h2>
        <p> Check out the genre and enjoy watching series</p>
      </div>

      <div className="genre-links">
        {genreList.map((genre) => {
          return <button onClick={() => setGenre(genre)}>{genre}</button>;
        })}
      </div>

      <hr />

      <div className="output">
        {AllSeries[genre].map((movie) => {
          //console.log(movie);
          return display(movie);
        })}
      </div>
    </div>
  );
}
