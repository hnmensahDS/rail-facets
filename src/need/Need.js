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
                        Calculate the FACETS Score
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
                        Artificial Intelligence or AI encompasses a wide range
                        of fields and methods. To ensure that AI solutions are delivered 
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
            </div>
        );
    }
}
