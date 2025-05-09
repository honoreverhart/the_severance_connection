import { useRef } from "react";
import ScrolltoTop from "./ScrolltoTop";

export default function HomePage() {
  const about = useRef(null);
  const connect = useRef(null);
  const events = useRef(null);
  const give = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
    })
  }
  return (
    <>
    <ScrolltoTop/>
      <div className="homepage">
        <ul>
          <li onClick={() => scrollToSection(about)} className="link">About</li>
          <li onClick={() => scrollToSection(connect)} className="link">Connect</li>
          <li onClick={() => scrollToSection(events)} className="link">Events</li>
          <li onClick={() => scrollToSection(give)} className="link">Give</li>
        </ul>
        <h1>The Severance Connection</h1>
        <p>description blah blah blah</p>
        <button>Join Us!</button>
      </div>
      <div ref={about} className="about">
        <h1>About Us</h1>
        <div>
          <h2>Mission</h2>
          <p>blah blah blah</p>
          <h2>Time</h2>
          <p>blah blah blah</p>
          <h2>Place</h2>
          <p>blah blah blah</p>
        </div>
      </div>
      <div ref={connect} className="connect">
        <h1>Connect</h1>
        <div>
          <h2>Find Your Community!</h2>
          <form>
            <label>
              Name: <input type="text" required />
            </label>
            <label>
              Email: <input type="email" required />
            </label>
            <label>
              Message: <input type="text" required />
            </label>
          </form>
        </div>
      </div>
      <div ref={events} className="events">
        <h1>Events!</h1>
      </div>
      <div ref={give} className="give">
        <h1>Give!</h1>
      </div>
    </>
  );
}
