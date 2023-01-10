import React from "react";
import imageMapResize from "image-map-resizer";
import { Link } from "react-router-dom";

const DEBOUNCED_RESIZE = ((fn, ms) => {
    let timer;
    return _ => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn();
        }, ms);
    };
})(imageMapResize, 100);

export default class Need extends React.Component {
    componentDidMount() {
        DEBOUNCED_RESIZE();
        window.addEventListener("resize", DEBOUNCED_RESIZE);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", DEBOUNCED_RESIZE);
    }
    render() {
        return (
            <div>
                <section className="container has-text-centered">
                    <Link
                        className="button is-primary is-outlined is-large is-fullwidth"
                        to="/facets"
                    >
                        Calculate FACETS Score
                    </Link>
                </section>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                The Need for Responsible AI
                            </h1>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <p>
                        Artificial Intelligence (AI) is a revolutionary field that 
                        has seen its application in diverse situations.
                        To ensure that AI solutions are delivered 
                        with integrity, equity, respecting individuals, and 
                        always being mindful of the social impact of what we do: 
                        There is a need to evaluate the AI solutions according to 
                        established standards (<strong>ISO 26000</strong>) and frameworks (e.g.,
                         <strong> FACETS</strong>, etc.). 

                    </p>
                    <p>
                    These considerations encourage the building of AI systems 
                    that are <strong>Responsible</strong> and <strong>Trustworthy</strong>. 
                    </p>
                    <img
                        className="components-image"
                        alt="Components of an AI project - Envision, Data, Model and Deploy"
                        src="components.png"
                        useMap="#component-image-map"
                    />
                    <label className="components-image-caption">
                        Click on the component circle to answer its questions.
                    </label>
                    <map name="component-image-map">
                        <area
                            shape="rect"
                            coords="100, 70, 458, 430"
                            alt="Envision"
                            href="facets/#envision"
                        /><area
                            shape="rect"                           
                            coords="565, 70, 923, 430"
                            alt="Data"
                            href="facts/#data"
                        />
                        <area
                            shape="rect"                           
                            coords="1030, 70, 1388, 430"
                            alt="Model"
                            href="facets/#model"
                        />
                        <area
                            shape="rect"
                            coords="1600, 70, 1853, 430"
                            alt="Deploy"
                            href="facets/#deploy"
                        />
                    </map>
                    <p>
                        Any system can be modelled using input-process-output
                        with reasonable encapsulation of the concepts.
                        Similarly, an AI system can be represented using an 
                        <strong> envision-data-model-deploy</strong> pipeline.
                    </p>
                </div>

                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Sponsors
                            </h1>
                            <p>
                                This initiative is proudly supported by 
                            </p>
                        </div>

                        <img
                        className="components-image"
                        alt="Components of an AI project - Envision, Data, Model and Deploy"
                        src="sponsors.png"
                        useMap="#sponsors-image-map"
                    />

                        <map name="sponsors-image-map">
                        <area 
                        target="_blank" 
                        alt="AI4D Africa" 
                        title="AI4D Africa" 
                        href="https://africa.ai4d.ai/" 
                        coords="1087,596,48,38" 
                        shape="rect"
                        />
                        <area 
                        target="_blank" 
                        alt="IDRC" 
                        title="IDRC" 
                        href="https://idrc.ca/en" 
                        coords="1177,38,2167,596" 
                        shape="rect"
                        />
                        <area 
                        target="_blank" 
                        alt="SIDA" 
                        title="SIDA" 
                        href="https://www.sida.se/en" 
                        coords="2255,38,3244,602" 
                        shape="rect"
                        />
                        <area 
                        target="_blank" 
                        alt="GIZ" 
                        title="GIZ" 
                        href="https://www.giz.de/en/html/index.html" 
                        coords="3313,38,4378,602" 
                        shape="rect"
                        />
                    </map>
                    
                    </div>
                </section>

            </div>
        );
    }
}
