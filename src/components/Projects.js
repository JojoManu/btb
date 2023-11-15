import React, { Component } from "react";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deps: {},
            detailsModalShow: false,
        };
    }

    render() {
        return (
            <>
                <section id="portfolio">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span>TATTOOS</span>
                    </h1>
                    <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        style={{ cursor: "pointer" }}
                    >
                        <span className="portfolio-item d-block">
                            <div className="foto">
                                <div>
                                    <img
                                        src={"images/design1.png"}
                                        alt="projectImages"
                                        height="230"
                                        style={{
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                            position: "relative",
                                        }}
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        style={{ cursor: "pointer" }}
                    >
                        <span className="portfolio-item d-block">
                            <div className="foto">
                                <div>
                                    <img
                                        src={"images/design2.png"}
                                        alt="projectImages"
                                        height="230"
                                        style={{
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                            position: "relative",
                                        }}
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        style={{ cursor: "pointer" }}
                    >
                        <span className="portfolio-item d-block">
                            <div className="foto">
                                <div>
                                    <img
                                        src={"images/design3.png"}
                                        alt="projectImages"
                                        height="230"
                                        style={{
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                            position: "relative",
                                        }}
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        style={{ cursor: "pointer" }}
                    >
                        <span className="portfolio-item d-block">
                            <div className="foto">
                                <div>
                                    <img
                                        src={"images/design4.png"}
                                        alt="projectImages"
                                        height="230"
                                        style={{
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                            position: "relative",
                                        }}
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        style={{ cursor: "pointer" }}
                    >
                        <span className="portfolio-item d-block">
                            <div className="foto">
                                <div>
                                    <img
                                        src={"images/design5.png"}
                                        alt="projectImages"
                                        height="230"
                                        style={{
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                            position: "relative",
                                        }}
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        style={{ cursor: "pointer" }}
                    >
                        <span className="portfolio-item d-block">
                            <div className="foto">
                                <div>
                                    <img
                                        src={"images/design6.png"}
                                        alt="projectImages"
                                        height="230"
                                        style={{
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                            position: "relative",
                                        }}
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        style={{ cursor: "pointer" }}
                    >
                        <span className="portfolio-item d-block">
                            <div className="foto">
                                <div>
                                    <img
                                        src={"images/design7.png"}
                                        alt="projectImages"
                                        height="230"
                                        style={{
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                            position: "relative",
                                        }}
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                </section>
            </>
        );
    }
}

export default Projects;
