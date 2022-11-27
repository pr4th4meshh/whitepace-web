import styles from "./style";
import {
  Apps,
  Clients,
  Data,
  Extension,
  FooterHero,
  Hero,
  Navbar,
  Plan,
  Project,
  Sponsors,
  Work,
  Working,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden text-black">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Project />
        <Work />
      </div>
    </div>

    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Extension />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Plan />
      </div>
    </div>

    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Working />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Data />
        <Sponsors />
      </div>
    </div>

    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Apps />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <FooterHero/>
      </div>
      </div>
  </div>
);

export default App;
