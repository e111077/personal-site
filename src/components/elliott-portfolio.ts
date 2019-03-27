import { customElement, LitElement, html, css } from "lit-element";

@customElement('elliott-portfolio')
class ElliottPortfolio extends LitElement {
  static get styles() {
    return css`
      :host(*), {
        font-family: var(--main-font);
        font-size: 18px;
        width: 88%;
      }
      /* new rule for shady dom bug workaround */
      :host, p, a {
        font-family: var(--main-font);
        font-size: 18px;
        width: 88%;
      }

      :host {
        display: block;
        margin: 0 auto;
      }

      .elliscript {
        font-family: var(--header-font);
      }

      a {
        color: var(--IntlOrange);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      h1, h2, h3 {
        font-family: var(--header-font);
        font-weight: 500;
        margin-bottom: 0;
      }

      h1 {
        font-size: 3em;
      }

      h2 {
        font-size: 2.25em;
      }

      h3 {
        font-size: 1.725em;
      }
    `;
  }
  render() {
    return html`
      <h1>What stuff I do?</h1>
      <p>
        Currently I'm a part of Google Chrome's Developer Experiences team which
        consists of the
        <a href="https://www.polymer-project.org/">Polymer Project</a> and
        Chrome Developer Tools. I do everything from creating and maintining our
        open sourced
        <a href="https://github.com/PolymerElements">Polymer Elements</a>
        components to running the
        <a href="https://twitter.com/polymer">Twitter</a> account! 🐦
      </p>
      <h2>YouTube</h2>
      <p>
        For a long time I helped convert <a href="https://youtube.com">YouTube</a>
        from their legacy framework to Polymer 1 and have worked extensively in
        helping them migrate to Polymer 2 and 3 and also in fixing
        various component-level bugs across their frontend properties.
      </p>
      <p>(Hello dark mode 🌚)</p>
      <h2>Polymon</h2>
      <p>
        For <a href="https://events.google.com/io2017/">Google I/O '17</a> I
        worked with others making everyone's favorite
        <a href="https://google.github.io/physical-web/">physical web</a>
        creature-battling game
        <a href="https://polymon.polymer-project.org">Polymon</a>! It was a social
        game where we hid physical web beacons around the I/O grounds that each
        contained a Polymon. Once you collected several polymon, you could fight
        each other in a turn-based MTG-like / Pokemon-like battle.
      </p>
      <p>
        The game was a PWA, used QR codes to communicate between players, natively
        supported deep-linking and sharing via android-beam.
        <a href="https://github.com/PolymerLabs/polymon">repo</a>
      </p>
      <h2>Microsoft - Bing</h2>
      <p>
        I did an internship at Microsoft. I worked on Cortana and Bing integration
        designing and implementing some Cortana features.
      </p>
      <h2>Talks and Videos</h2>
      <p>
        I gave some talks at summits and hackathons, but not all were filmed
        <span class="elliscript">:(</span>. I also did a series of <i>Polycasts</i>!
      </p>
      Take a look:
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=NU4TGxYZEjs&t=2s">Polycasts</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=CBSLki5opb4">Polymer Summit London</a>
        </li>
      </ul>
      <h2>World Wide Web Consortium - Crosscloud</h2>
      <p>
        As an undergraduate I did some research at the <a href="https://w3.org">W3C</a>.
        While there I worked on <a href="http://crosscloud.org/">crosscloud</a>
        which at the time was an experimental foray at decentralized social
        profiles.
      </p>
      <p>
        There I built many types of web applications such as a decentralized photo
        gallery and a decentralized twitter (very similar to mastodon today).
      </p>
      <h2>MIT Media Lab</h2>
      <p>
        At the <a href="https://www.media.mit.edu/">MIT Media lab</a>, I worked
        in the
        <a href="https://www.media.mit.edu/groups/responsive-environments/overview/">
          Responsive Environments Group
        </a> A group dedicated to creating context-aware environments that serve humans.
      </p>
      <p>
        While there, I worked under a PhD student whose
        <a href="https://resenv.media.mit.edu/pubs/theses/aldrich-phd.2014.pdf">research</a>
        was on experimental, perception-based, lighting controls.
      </p>
      <p>
        There I created a
        <a href="https://unity.com/">Unity</a> simulation of the lighting controls,
        helped present it to investors at an investor symposium, helped acquire
        millions of dollars in funding and equipment from Philips, created an
        iPhone interface connected to a server that computed the correct lighting
        configuration from the student's research and displayed it in real life.
        I then created robust data collection program that could play and replay
        the touches of test subjects from HCI trials.
      </p>
    `;
  }
}