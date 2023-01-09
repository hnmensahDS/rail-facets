import React from "react";
import Score from "./Score";

export default class Badge extends React.Component {
    render() {
        const score = new Score({ score_value: this.props.score });
        console.log("the score is", score);
        const badge_color =
            this.props.score > score.state.danger_threshold
                ? this.props.score > score.state.success_threshold
                    ? "92d050"
                    : "ffc000"
                : "de656b";
        const badge_url =
            "https://img.shields.io/badge/F.A.C.E.T.S-" +
            this.props.score +
            "-" +
            badge_color +
            ".svg?style=flat-square";
        return (
            <div className="level-item has-text-centered badge-interaction">
                <a
                    className="has-text-black round-interaction"
                    href={badge_url}
                >
                    <p className="heading">Badge</p>
                    <p className="title">
                        <a href={badge_url}>
                            <img
                                src={badge_url}
                                alt="facet badge"
                            />
                        </a>
                    </p>
                </a>
            </div>
        );
    }
}
