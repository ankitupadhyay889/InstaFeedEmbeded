import React from "react";
// import "./styles.css";
import InstagramEmbed from "react-instagram-embed";

export default function App() {
  return (
    <div className="App">
      <center>
        <InstagramEmbed
          url="https://instagr.am/p/Zw9o4/"
          maxWidth={800}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </center>
    </div>
  );
}
