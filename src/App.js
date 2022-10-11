import logo from "./favicon.ico";
import "./App.css";

function App() {
  return (
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TurdakovA</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <div class="full-screen">
        <div class="full-screen__body">
          <div class="full-screen__title">Turdakov Alexey</div>
          <div class="full-screen__text">
            Lorem ipsum dolor sit amet consectetur
          </div>
          <div class="full-screen__icon">
            
          </div>
        </div>
        <video autoplay muted loop preload="auto" class="full-screen__video">
          <source type="video/webm" src="./video/water.webm" />
          <source type="video/mp4" src="./video/water.mp4" />
        </video>
      </div>
    </div>
  </body>
</html>

  );
}

export default App;
