import "./App.css";
import image from "./assets/images/finite-logo.svg";
import heroImage from "./assets/images/hero-image.png";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <img src={image} alt="IMG" />
          <div className="input-wrapper">
            <input
              placeholder="Search for “crypto punks”"
              name="search"
              type="search"
            />
            <svg
              className="search-icon"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9081 23.7354C19.2144 23.7354 23.516 19.4337 23.516 14.1274C23.516 8.82114 19.2144 4.51953 13.9081 4.51953C8.60178 4.51953 4.30017 8.82114 4.30017 14.1274C4.30017 19.4337 8.60178 23.7354 13.9081 23.7354Z"
                stroke="#49536E"
                stroke-width="2.74512"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.7021 20.9216L26.2609 26.4805"
                stroke="#49536E"
                stroke-width="2.74512"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <navbar className="header-right">
          <a href="/">Explore</a>
          <a href="/">Create</a>
          <a href="/">Blog</a>
          <button className="btn btn-purple">Connect Wallet</button>
        </navbar>
      </header>
      <div className="section-1">
        <div className="content-texts-wrapper">
          <h1>
            Explore, Collect <br /> & Sell Incredible NFTs
          </h1>
          <p>
            The largest NFT marketplace. Authentic and incredible unique <br />{" "}
            digital creations.
          </p>
          <div className="content-buttons">
            <button className="btn btn-purple">Get Started</button>
            <button className="btn btn-transparent">
              <svg
                className="play-icon"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2433 30.6792C24.3413 30.6792 30.0953 24.9087 30.0953 17.7905C30.0953 10.6722 24.3413 4.90172 17.2433 4.90172C10.1454 4.90172 4.3914 10.6722 4.3914 17.7905C4.3914 24.9087 10.1454 30.6792 17.2433 30.6792Z"
                  stroke="#393939"
                  stroke-width="2.455"
                  stroke-miterlimit="10"
                />
                <path
                  d="M21.5273 17.7905L15.1013 13.4942V22.0867L21.5273 17.7905Z"
                  stroke="#393939"
                  stroke-width="2.455"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Play Video
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default App;
