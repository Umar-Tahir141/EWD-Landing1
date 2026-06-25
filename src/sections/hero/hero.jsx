import "./Hero.css";


const stats = [
  {
    number: "6",
    title: "Core services",
    text: "— all built around one strategy",
  },
  {
    number: "20+",
    title: "Years of experience",
    text: "across Atlanta industries",
  },
  {
    number: "ATL",
    title: "",
    text: "Headquartered in Atlanta — not a remote agency parachuting in",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-left">
            
            <p className="location">-ATLANTA, GEORGIA</p>
            <div className="hero-head">
            <h1>
              Atlanta's Full-Service Digital
              <br class="desk-only" />
              Agency-Strategy First .
              <br class="desk-only" />
              Everything Else Second.
            </h1>
            <button className="project-btn">Start a Project</button>
            </div>


            <div className="hero-lower-sec">
                <div className="lower-l">
            <p className="description">
              Tailor & Made is Atlanta's Black-owned, strategy-first digital
              agency. Six services. One team. One plan that works.
            </p>

            <button className="outline-btn">See Our Work</button>

            <div className="stats">
              {stats.map((item, index) => (
                <div className="stat" key={index}>
                  <h3>{item.number}</h3>
                  {item.title && <h4>{item.title}</h4>}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            </div>
             <div className="hero-right">

            <div className="image-grid">
              <div className="img img-1">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
                  alt=""
                />
              </div>

              <div className="img img-2">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
                  alt=""
                />
              </div>

              <div className="img img-3">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                  alt=""
                />
              </div>

              <div className="img img-4">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800"
                  alt=""
                />
              </div>

              <div className="img img-5">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                  alt=""
                />
              </div>

              <div className="img img-6">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200"
                  alt=""
                />
              </div>

              <div className="img img-7">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800"
                  alt=""
                />
              </div>

              <div className="img img-8">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                  alt=""
                />
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}