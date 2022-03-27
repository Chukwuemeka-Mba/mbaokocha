<template>
  <div class="home">
    <nav>
      <div class="nav-header">
        <a href=""><h1>MO.</h1></a>
      </div>

      <div class="links">
        <a href=""><p>About</p></a>
        <a href=""><p>Work</p></a>
        <a
          href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2516bbc2-67bc-436c-a95c-78008a66115c/mbaokocha.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220327T083539Z&X-Amz-Expires=86400&X-Amz-Signature=aac9e4f6f09be9be99416940945989b4e42a62acf5176675cf6b5452a87d220c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22mbaokocha.pdf%22&x-id=GetObject"
          target="blank"
          ><p>Resume</p></a
        >
      </div>
    </nav>

    <section class="about">
      <div class="about-card">
        <div class="text-container">
          <div class="title">
            <div class="container">
              <div class="glitch" data-text="MBA OKOCHA">MBA OKOCHA</div>
              <div class="glow">MBA OKOCHA</div>
              <p class="subtitle">IMPRACTICAL ENGINEER</p>
            </div>
          </div>
          <div class="text-body">
            <p class="">
              A MULTIFACETED ENGINEER WITH A BORDERLINE HARDWARE OBSESSION
            </p>
            <button>Let's Talk</button>
          </div>
        </div>
        <div class="image-container">
          <div class="image">
            <img src="../assets/headshot.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="cards" class="cards">
      <div class="cardheader flex-center">
        <h1>Want to work with me?</h1>
      </div>
      <div class="card1 flex-center card">
        <h1>EDUCATION</h1>
        <p>
          University of Massachusetts Dartmouth:
          <br />
          Bachelor of Science in Electrical Engineering, Minor in Mathematics.
          <br />
          Massasoit Community College:
          <br />
          Associate in Liberals, Science. Received Honors Award.
        </p>
        <a href="https://www.linkedin.com/in/mokocha/">
          <h4 class="learn">Learn More <i class="fas fa-angle-right"></i></h4>
        </a>
      </div>
      <div class="card2 flex-center card">
        <h1>PROJETS</h1>
        <p>
          Digital Wristwatch Design (2019). Co-designed a rechargeable and time
          tracking circular LED watch.
          <br />
          Designed different couplers (such as Rat-Race, BranchLine, and
          Directional) and matching networks.
        </p>

        <a href="https://www.linkedin.com/in/mokocha/">
          <h4 class="learn">Learn More <i class="fas fa-angle-right"></i></h4>
        </a>
      </div>
      <div class="card3 flex-center card">
        <h1>WORK EXPERIENCE</h1>
        <p>
          Current: US Navy.
          <br />
          2015 - 2021: University of Massachusetts Dartmouth, Dartmouth, MA
          2019-Present Learning Commons Assistant.
          <br />
          Guide subordinates daily with technical concerns. Help bolster group
          output.
        </p>

        <a href="https://www.linkedin.com/in/mokocha/">
          <h4 class="learn">Learn More <i class="fas fa-angle-right"></i></h4>
        </a>
      </div>
      <div class="card4 flex-center card">
        <h1>SKILLS & CERTIFICATIONS</h1>
        <p>
          Skills: Microsoft Office, MATLAB, CREO Parametric, C, C#, Multisim,
          Arduino, Advanced Design System(ADS), and LaTeX, SQL
          <br />
          Certifications: First Aid, MAP Certified, CPR & AED.
          <br />Ongoing: AWS
        </p>

        <a href="https://www.linkedin.com/in/mokocha/">
          <h4 class="learn">Learn More <i class="fas fa-angle-right"></i></h4>
        </a>
      </div>
    </section>

    <footer>
      <div class="">
        <div class="footer-text flex-center">
          <div class="links">
            <a href="https://www.linkedin.com/in/mokocha/"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>

            <a href=""><i class="fa-brands fa-twitter"></i></a>
          </div>
          <p><a href="mailto:mbanitus@yahoo.com">Send me an email.</a></p>
        </div>
        <div class="emeka flex-center">
          <a href="https://www.github.com/Chukwuemeka-Mba"
            ><p>designed and built by: &lt; emeka /&gt;</p></a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Montserrat+Subrayada:wght@700&family=Montserrat:wght@600&family=PT+Mono&family=Press+Start+2P&display=swap");

.home {
  background: rgb(0, 0, 0);
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
}

nav a:hover {
  color: #ef0d27;
}
.nav-header {
  margin-left: 20px;
}
.nav-header a {
  color: #d3cdb3;
  text-decoration: none;
}
.links {
  display: flex;
  gap: 40px;
}
.links a {
  color: #d3cdb3;
  text-decoration: none;
}

/* About Section  */

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
.about-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 80px;
  margin: 70px;
}

.image img {
  margin-top: 50px;
  width: 100%;
  height: auto;
  opacity: 0.7;
  box-shadow: none;
  transition-property: opacity, box-shadow;
  transition-duration: 0.02s;
  transition-delay: 0.02s;
}

.image img:hover {
  opacity: 1;
  box-shadow: 5px 5px 1px#ef0d27;
}

.text-container {
  display: flex;
  flex-direction: column;
}

.text-container h1 {
  font-family: "Montserrat Subrayada", sans-serif;
  font-size: 60px;
  color: #d3cdb3;
}

.text-container h2 {
  font-family: "Montserrat Subrayada", sans-serif;
  -webkit-text-stroke: 1px #d3cdb3;
}

.text-container p {
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  color: #d3cdb3;
  font-size: 13px;
}

.text-body {
  margin-top: 260px;
}

.text-body p {
  font-size: 17px;
  margin-left: 10px;
  width: 300px;
}

.small {
  font-size: 12px;
}
button {
  font-family: "Montserrat", sans-serif;
  padding: 7px 14px;
  margin: 30px;
  font-size: 15px;
  background: #d3cdb3;
  color: #000000;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-radius: 5px;
  border: 1px solid #ef0d27;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
button:after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 0;
  height: 100%;
  background: #ef0d27;
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 150ms ease-in-out;
}
button:hover {
  padding: 7px 14px;
  border: 1px solid #d3cdb3;
  color: #fff;
}
button:hover:after {
  width: 110%;
}
/* Card Styles  */

.cardheader h1 {
  color: #d3cdb3;
  background-color: #000000;
  padding: 10px 20px;
}
.cards {
  background-color: #707770;
  height: 70vh;
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1.5fr;
  grid-template-areas:
    "cardheader cardheader cardheader cardheader"
    "card1 card2 card3 card4";
}
.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cardheader {
  font-family: "Montserrat", sans-serif;
  grid-area: cardheader;
}
.card1 {
  grid-area: card1;
}
.card2 {
  grid-area: card2;
}
.card3 {
  grid-area: card3;
}
.card4 {
  grid-area: card4;
}

.card {
  padding: 20px;
  transition-property: background-color;
  transition-duration: 0.4s;
  transition-delay: 0.1s;
}
.card:hover {
  background-color: #d3cdb3;
  color: #000000;
}
.card a {
  text-decoration: none;
  color: #000000;
}

.learn {
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
  padding: 10px 20px;
}
.learn:after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 0;
  height: 100%;
  background: #ef0d27;
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 150ms ease-in-out;
}
.learn:hover:after {
  width: 110%;
}
.card h1 {
  font-family: "Montserrat", sans-serif;
}

.card p {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  gap: 6px;
}
footer {
  height: 30vh;
  background-color: #000000;
}

.links ul {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.footer-text {
  padding-top: 90px;
}

.footer-text a {
  color: #d3cdb3;
  font-weight: normal;
  font-size: 20px;
  text-decoration: none;
}

.footer-text p a {
  font-size: 16px;
  color: #d3cdb3;
  padding: 5px 10px;
}

.footer-text p:hover a {
  background-color: #707770;
  color: #000000;
}
.emeka a {
  bottom: 10px;
  color: #ef0d27;
  font-weight: normal;
  font-size: 12px;
  text-decoration: none;
}

/* Responsive Styles  */

@media screen and (min-width: 900px) {
  .about-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 80px;
    margin: 200px;
  }
  .text-body p {
    margin-top: 120px;
  }
}

@media screen and (max-width: 800px) {
  .cards {
    background-color: #707770;
    height: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.5fr 1.5fr 1.5fr 1.5fr;
    grid-template-areas:
      "cardheader "
      "card1"
      "card2"
      "card3"
      "card4";
  }
  .image img {
    width: 0%;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
  }
}

.container {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  font-family: "Montserrat Subrayada", sans-serif;
}

.glitch {
  color: rgb(223, 191, 191);
  position: relative;
  font-size: 9vw;
  // margin: 70px 200px;
  animation: glitch 5s 5s infinite;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: -5px 0 magenta;
  overflow: hidden;
  top: 0;
  animation: noise-1 3s linear infinite alternate-reverse,
    glitch 5s 5.05s infinite;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -5px 0 lightgreen;
  overflow: hidden;
  top: 0;
  animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
}

@keyframes glitch {
  1% {
    transform: rotateX(10deg) skewX(90deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}

@keyframes noise-1 {
  $steps: 30;
  @for $i from 1 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

@keyframes noise-2 {
  $steps: 30;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

.scanlines {
  overflow: hidden;
  mix-blend-mode: difference;
  font-family: "Montserrat Subrayada", sans-serif;
}

.scanlines::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: repeating-linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 0.5%,
    transparent 1%
  );

  animation: fudge 7s ease-in-out alternate infinite;
}

@keyframes fudge {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(0px, 2%);
  }
}

.glow {
  @extend .glitch;
  text-shadow: 0 0 1000px rgb(223, 191, 191);
  color: transparent;
  position: absolute;
  top: 0;
}

.subtitle {
  font-family: "Montserrat Subrayada", sans-serif;
  font-weight: 100;
  font-size: 0.8vw;
  color: rgba(165, 141, 141, 0.4);
  text-transform: uppercase;
  letter-spacing: 1em;
  text-align: center;
  position: absolute;
  left: 17%;
  animation: glitch-2 5s 5.02s infinite;
}

@keyframes glitch-2 {
  1% {
    transform: rotateX(10deg) skewX(70deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
</style>
