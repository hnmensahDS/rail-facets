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
                        Calculate F.A.C.E.T.S Score
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
                        of fields and methods. Formulating a consistent
                        definition for AI remains evasive yet we attempt to
                        draw a framework to measure ethical practices. In order
                        to cast a wide net across the range of AI topics and
                        remain tangible in practical solutions, we rely on high
                        level abstractions of the involved components.
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
                            href="facets#/facets/envision"
                        /><area
                            shape="rect"                           
                            coords="565, 70, 923, 430"
                            alt="Data"
                            href="facets#/facets/data"
                        />
                        <area
                            shape="rect"                           
                            coords="1030, 70, 1388, 430"
                            alt="Model"
                            href="facets#/facets/model"
                        />
                        <area
                            shape="rect"
                            coords="1600, 70, 1853, 430"
                            alt="Deploy"
                            href="facets#/facets/deploy"
                        />
                    </map>
                    <p>
                        Any system can be modelled using input-process-output
                        with reasonable encapsulation of the concepts.
                        Similarly, an A.I. system can be represented using a
                        data-model-deploy pipeline.
                    </p>
                </div>
            </div>
        );
    }
}
