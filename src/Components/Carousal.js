import React, { Component } from "react";

class Carousal extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active view overlay">
              <img
                style={{
                  width: "100%",
                  height: "80vh",
                }}
                class="d-block img-overlay"
                src={`https://image.tmdb.org/t/p/w1280/en971MEXui9diirXlogOrPKmsEn.jpg`}
                alt="First slide"
              />
              <div
                class="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
              >
                <h1 style={{ color: "white", zIndex: "1" }}>Deadpool</h1>
                <p class="mt-5">
                  "Deadpool tells the origin story of former Special Forces
                  operative turned mercenary Wade Wilson, who after being
                  subjected to a rogue experiment that leaves him with
                  accelerated healing powers, adopts the alter ego Deadpool.
                  Armed with his new abilities and a dark, twisted sense of
                  humor, Deadpool hunts down the man who nearly destroyed his
                  life."
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                style={{ width: "100%", height: "80vh" }}
                class="d-block"
                src={`https://image.tmdb.org/t/p/w1280/yEv8c6i79vk06sZDC3Z9D8HQLVV.jpg`}
                alt="Second slide"
              />
              <div
                class="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
              >
                <h1>Logan</h1>
                <p class="mt-5">
                  "In the near future, a weary Logan cares for an ailing
                  Professor X in a hideout on the Mexican border. But Logan's
                  attempts to hide from the world and his legacy are upended
                  when a young mutant arrives, pursued by dark forces."
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                style={{ width: "100%", height: "80vh" }}
                class="d-block"
                src={`https://image.tmdb.org/t/p/w1280/suopoADq0k8YZr4dQXcU6pToj6s.jpg`}
                alt="Second slide"
              />
              <div
                class="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
              >
                <h1>Game of Thrones</h1>
                <p class="mt-5">
                  "Seven noble families fight for control of the mythical land
                  of Westeros. Friction between the houses leads to full-scale
                  war. All while a very ancient evil awakens in the farthest
                  north. Amidst the war, a neglected military order of misfits,
                  the Night's Watch, is all that stands between the realms of
                  men and icy horrors beyond."
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                style={{ width: "100%", height: "80vh" }}
                class="d-block"
                src={`https://image.tmdb.org/t/p/w1280/8i6ZDk97Vyh0jHohMG4vFeFuKJh.jpg`}
                alt="Third slide"
              />
              <div
                class="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
              >
                <h1>Avengers: Age of Ultron</h1>
                <p class="mt-5">
                  "When Tony Stark tries to jumpstart a dormant peacekeeping
                  program, things go awry and Earth’s Mightiest Heroes are put
                  to the ultimate test as the fate of the planet hangs in the
                  balance. As the villainous Ultron emerges, it is up to The
                  Avengers to stop him from enacting his terrible plans, and
                  soon uneasy alliances and unexpected action pave the way for
                  an epic and unique global adventure."
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousal;
