import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState(false);

  function handTheme() {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  }

  return (
    <>
      <div className="md:w-[70%]  m-auto">
        <Header isDark={isDark} handTheme={handTheme} />
        <p>
          Extensions List All Active Inactive If you plan to use the JSON file
          to populate the data dynamically, you can delete the content below
          DevLens Quickly inspect page layouts and visualize element boundaries.
          Remove StyleSpy Instantly analyze and copy CSS from any webpage
          element. Remove SpeedBoost Optimizes browser resource usage to
          accelerate page loading. Remove JSONWizard Formats, validates, and
          prettifies JSON responses in-browser. Remove TabMaster Pro Organizes
          browser tabs into groups and sessions. Remove ViewportBuddy Simulates
          various screen resolutions directly within the browser. Remove Markup
          Notes Enables annotation and notes directly onto webpages for
          collaborative debugging. Remove GridGuides Overlay customizable grids
          and alignment guides on any webpage. Remove Palette Picker Instantly
          extracts color palettes from any webpage. Remove LinkChecker Scans and
          highlights broken links on any page. Remove DOM Snapshot Capture and
          export DOM structures quickly. Remove ConsolePlus Enhanced developer
          console with advanced filtering and logging. Remove
        </p>
      </div>
    </>
  );
}

export default App;
