import "./App.css";
import image from "./assets/images/finite-logo.svg";
import heroImage from "./assets/images/hero-image.png";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <img src={image} alt="IMG" />
          <input
            placeholder="Search for “crypto punks”"
            name="search"
            type="search"
          />
        </div>
        <navbar className="header-right">
          <a href="/">Explore</a>
          <a href="/">Create</a>
          <a href="/">Blog</a>
          <button>Connect Wallet</button>
        </navbar>
      </header>
      <div className="section-1">
        <div className="content-texts-wrapper">
          <h1>Explore, Collect Sell Incredible NFTs</h1>
          <p>
            The largest NFT marketplace. Authentic and incredible unique digital
            creations.
          </p>
          <div className="buttons">
            <button>Get Started</button>
            <button>Play Video</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
}

export default App;
