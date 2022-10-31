import "./App.scss";
import slackImg from "./assets/slack.png";
import githubImg from "./assets/github.png";
import logo1 from "./assets/logo.PNG";
import logo2 from "./assets/logo2.PNG";
import Profile from "./assets/profile.jpg";
import useWindowSize from "./hooks/use-window-size";

function App() {
  const size = useWindowSize();

  return (
    <div className="App">
      <div className="container">
        <div className="profile-section">
          <img src={Profile} alt="profile" id="profile__img"></img>
          <a
            href="https://twitter.com/Just_i_zaris"
            className="twitter-section"
            id="twitter"
            target="_blank"
            rel="noreferrer"
          >
            Odemakin Victoria
          </a>
          <p id="slack" style={{ display: "none" }}>
            victoria Odemakin
          </p>
          <div className={size.width > 501 ? "icon" : "icon-mobile"}>
            {size.width > 502 && <i class="fa fa-share" aria-hidden="true"></i>}
            {size.width < 501 && (
              <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            )}
          </div>
        </div>
        <div
          className={size.width > 501 ? "link-section" : "link-section-mobile"}
        >
          <a
            href="https://twitter.com/Just_i_zaris"
            className="twitter-section"
            target="_blank"
            rel="noreferrer"
          >
            Twitter Link
          </a>
          <a
            href="https://training.zuri.team/"
            rel="noreferrer "
            target="_blank"
            id="btn__zuri"
          >
            Zuri Team 
          </a>
          <a
            href="http://books.zuri.team"
            rel="noreferrer"
            target="_blank"
            id="books"
          >
            Zuri Books{" "}
            
          </a>
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=victoriaodemakin"
            target="_blank"
            rel="noreferrer"
            id="book__python"
          >
            Python Books{" "}
            
          </a>
          <a
            href="https://background.zuri.team"
            target="_blank"
            rel="noreferrer"
            id="pitch"
          >
            Background Check for Coders{" "}
        
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            rel="noreferrer"
            target="_blank"
            id="book__design"
          >
            Design Books{" "}
            
          </a>
        </div>
        <div className="social-section">
          <img src={slackImg} alt="slack"></img>
          <img src={githubImg} alt="github"></img>
        </div>
        <div className={size.width > 729 ? "footer" : "footer-mobile"}>
          <img src={logo1} alt="logo"></img>
          <p>HNG Intership 9 Frontend Task</p>
          <img src={logo2} alt="logo"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
