import "./styles.css";

const App = () => (
  <>
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <header className="site-header">
      <a className="logo" href="#top" aria-label="Uganda Heart Institute">
        <span className="logo-mark">UHI</span>
        <span className="logo-text">Uganda Heart Institute</span>
      </a>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#pledge">Pledge</a>
        <a href="#impact">Impact</a>
        <a href="#wall">Wall of Hearts</a>
        <a href="#moments">Moments</a>
      </nav>
      <a className="button ghost" href="#pledge">
        Take the Pledge
      </a>
    </header>

    <main id="main-content">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">World Heart Day • Uganda Heart Institute</p>
          <h1>DON’T MISS A BEAT</h1>
          <p className="hero-copy">
            Join the movement for healthier hearts across Uganda. Together we can
            protect every heartbeat through awareness, prevention, and community
            action.
          </p>
          <div className="hero-actions">
            <a className="button" href="#pledge">
              Take the Pledge
            </a>
            <a className="button ghost" href="#pledge">
              Sign Up / Join the Movement
            </a>
          </div>
          <div className="hero-highlights">
            <div>
              <span className="highlight-number" data-count="9200" data-stat="reached">
                0
              </span>
              <span className="highlight-label">People reached</span>
            </div>
            <div>
              <span className="highlight-number" data-count="1800" data-stat="pledges">
                0
              </span>
              <span className="highlight-label">Pledges taken</span>
            </div>
            <div>
              <span className="highlight-number" data-count="45" data-stat="activities">
                0
              </span>
              <span className="highlight-label">Community activities</span>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="pulse"></div>
          <div className="heart-shape"></div>
          <div className="orbit"></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-head">
          <h2>About the Campaign</h2>
          <p>
            World Heart Day is a global reminder that every heartbeat matters. It
            empowers communities to learn, act, and advocate for healthier hearts.
          </p>
        </div>
        <div className="about-grid">
          <article>
            <h3>Why heart health matters</h3>
            <p>
              Heart disease is preventable when we know the risks and make small,
              consistent lifestyle choices that protect our families and future.
            </p>
          </article>
          <article>
            <h3>UHI’s role</h3>
            <p>
              Uganda Heart Institute leads life-saving care, research, and outreach
              to ensure that every Ugandan has access to heart health education and
              services.
            </p>
          </article>
          <article>
            <h3>Community first</h3>
            <p>
              The “Don’t Miss a Beat” campaign brings together health workers,
              volunteers, and neighbors to build a culture of prevention and care.
            </p>
          </article>
        </div>
      </section>

      <section id="pledge" className="pledge">
        <div className="section-head">
          <h2>Sign Up &amp; Pledge</h2>
          <p>
            Make a public commitment and inspire someone else to care for their
            heart.
          </p>
        </div>
        <div className="pledge-grid">
          <form id="pledge-form" className="pledge-form">
            <label>
              Full Name
              <input
                type="text"
                name="name"
                placeholder="e.g. Amina Nankya"
                required
              />
            </label>
            <label>
              Email Address
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
              />
            </label>
            <label>
              Phone Number (optional)
              <input type="tel" name="phone" placeholder="+256" />
            </label>
            <label className="checkbox">
              <input type="checkbox" name="pledge" required />
              <span>
                “I pledge to take care of my heart and encourage others to do the
                same.”
              </span>
            </label>
            <button className="button" type="submit">
              Submit Pledge
            </button>
            <p className="form-status" role="status" aria-live="polite"></p>
          </form>
          <div className="pledge-info">
            <div className="info-card">
              <h3>What happens next?</h3>
              <p>
                Your pledge adds a heart to our community wall and helps UHI measure
                impact across screenings, talks, and outreach events.
              </p>
            </div>
            <div className="info-card">
              <h3>Need support?</h3>
              <p>
                Talk to our heart health team about prevention, lifestyle support,
                and services available through Uganda Heart Institute.
              </p>
              <a className="text-link" href="mailto:info@uhi.go.ug">
                info@uhi.go.ug
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="impact">
        <div className="section-head">
          <h2>Impact Made</h2>
          <p>These numbers grow with every action taken in the campaign.</p>
        </div>
        <div className="impact-cards">
          <article className="impact-card">
            <p className="impact-label">Pledges taken</p>
            <p className="impact-number" data-count="1800" data-stat="pledges">
              0
            </p>
            <p className="impact-note">Voices committed to heart health.</p>
          </article>
          <article className="impact-card">
            <p className="impact-label">People reached</p>
            <p className="impact-number" data-count="9200" data-stat="reached">
              0
            </p>
            <p className="impact-note">Across communities and campuses.</p>
          </article>
          <article className="impact-card">
            <p className="impact-label">Activities conducted</p>
            <p className="impact-number" data-count="45" data-stat="activities">
              0
            </p>
            <p className="impact-note">Screenings, walks, and awareness talks.</p>
          </article>
        </div>
      </section>

      <section id="wall" className="wall">
        <div className="section-head">
          <h2>Wall of Hearts</h2>
          <p>
            Each heart represents a person who pledged to care for their heart and
            inspire someone else.
          </p>
        </div>
        <div className="wall-grid" id="heart-wall" aria-live="polite"></div>
        <p className="wall-note">Add your heart and watch the wall grow.</p>
      </section>

      <section id="moments" className="moments">
        <div className="section-head">
          <h2>Moments That Mattered</h2>
          <p>Snapshots from community outreach, screenings, and awareness walks.</p>
        </div>
        <div className="moments-grid">
          <figure className="moment-card">
            <div
              className="moment-photo"
              data-label="Community Outreach"
              aria-hidden="true"
            ></div>
            <figcaption>Community outreach and education sessions.</figcaption>
          </figure>
          <figure className="moment-card">
            <div
              className="moment-photo"
              data-label="Heart Screenings"
              aria-hidden="true"
            ></div>
            <figcaption>Heart screenings bringing care closer to home.</figcaption>
          </figure>
          <figure className="moment-card">
            <div
              className="moment-photo"
              data-label="Awareness Walks"
              aria-hidden="true"
            ></div>
            <figcaption>Awareness walks across neighborhoods and campuses.</figcaption>
          </figure>
          <figure className="moment-card">
            <div
              className="moment-photo"
              data-label="Community Support"
              aria-hidden="true"
            ></div>
            <figcaption>Group moments of support and unity.</figcaption>
          </figure>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Every heartbeat matters.</h2>
          <p>Take the pledge today and help us build a healthier Uganda.</p>
          <a className="button" href="#pledge">
            Take the Pledge Today
          </a>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div>
        <strong>Uganda Heart Institute</strong>
        <p>info@uhi.go.ug • +256 200 111 555</p>
      </div>
      <p>© 2024 Uganda Heart Institute. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
  </>
);

export default App;
