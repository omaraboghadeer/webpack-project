import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSVG from "../images/sword.svg";
import Whatever from "./Whatever";

export default function App() {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>oh hai, React</h1>    
                </section>

                {/* <img src={sword} alt="sword" width="250" />
                <img src={swordSVG} alt="sword" width="250" /> */}
                
                <Recipes />
                <Whatever/>
            </main>

        </>
    )
}
