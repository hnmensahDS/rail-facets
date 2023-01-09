import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>FACETS Responsible AI</strong> by{" "}
                        <a rel="noreferrer" target="_blank" href="https://rail.knust.edu.gh/">RAIL</a> under
                        the{" "}
                        <a rel="noreferrer" target="_blank" href="https://github.com/hnmensahDS/rail-facets/blob/master/LICENCE">
                            MIT license
                        </a>
                        .
                    </p>
                </div>
            </footer>
        );
    }
}
