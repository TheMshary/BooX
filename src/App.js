import React from "react";
import styles from "./styles";

function App() {
  return (
    <div>
      <img
        src="https://pbs.twimg.com/profile_images/1090824731752771584/yuJ1_jwV_400x400.jpg"
        style={styles.logo}
      />
      <p style={{ textAlign: "center" }}>Where Books Are X'ed!</p>
      <hr />
      <h2>Meditations - Hardcover</h2>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41lHhcjiDgL._SX311_BO1,204,203,200_.jpg"
        style={styles.bookImage}
      />
      <p>Marcus Aurelius</p>
      <p>$3.44</p>
      <hr />
      <h2>12 Rules For Life - Hardcover</h2>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71qWDVkNMRL.jpg"
        style={styles.bookImage}
      />
      <p>Jordan Peterson</p>
      <p>$14.95</p>
      <hr />
      <h2>The Psychopath Test - Paperback</h2>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71JYUXRW0cL.jpg"
        style={styles.bookImage}
      />
      <p>Jon Ronson</p>
      <p>$7.55</p>
    </div>
  );
}

export default App;
