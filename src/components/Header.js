import { Icon } from "@iconify/react";
import React, { Component } from "react";
import Switch from "react-switch";

import { TypeAnimation } from "react-type-animation";

class Header extends Component {
    titles = [];

    constructor() {
        super();
        this.state = { checked: false };
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    }

    onThemeSwitchChange(checked) {
        this.setState({ checked });
        this.setTheme();
    }

    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme =
            body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    render() {
        if (this.props.sharedData) {
            var name = this.props.sharedData.name;
            this.titles = this.props.sharedData.titles
                .map((x) => [x.toUpperCase(), 1500])
                .flat();
        }

        const HeaderTitleTypeAnimation = React.memo(
            () => {
                <TypeAnimation
                    className="title-styles"
                    sequence={["BEAT THE BRUINS"]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                />;
            },
            (props, prevProp) => true
        );

        return (
            <header
                id="home"
                style={{ height: window.innerHeight - 150, display: "block" }}
            >
                <h2 className="blink">only on friday 1-5 and saturday 8-11</h2>
                <div className="title-container">
                    <TypeAnimation
                        className="title-styles"
                        sequence={["BEAT THE BRUINS"]}
                        wrapper="span"
                        speed={50}
                        cursor={false}
                        style={{
                            fontSize: "5em",
                            display: "inline-block",
                        }}
                    />
                </div>
                <div className="row aligner" style={{ height: "100%" }}>
                    <div className="col-md-12">
                        <div>
                            <Icon
                                className="header-icon"
                                icon="la:horse-head"
                                width="300"
                            />
                            <span
                                className="iconify header-icon"
                                data-icon="la:laptop-code"
                                data-inline="false"
                            ></span>
                            <br />
                            <h1 className="mb-0">
                                <TypeAnimation
                                    sequence={[
                                        "FIGHT ON !",
                                        1000,
                                        "TROJAN NATION",
                                        1000,
                                    ]}
                                    cursor={false}
                                    wrapper="span"
                                    speed={20}
                                    style={{
                                        fontSize: "1em",
                                        display: "inline-block",
                                    }}
                                    repeat={Infinity}
                                />
                            </h1>

                            <Switch
                                checked={this.state.checked}
                                onChange={this.onThemeSwitchChange}
                                offColor="#baaa80"
                                onColor="#353535"
                                className="react-switch mx-auto"
                                width={90}
                                height={40}
                                uncheckedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="twemoji:owl"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 25,
                                            textAlign: "end",
                                            marginLeft: "20px",
                                            color: "#353239",
                                        }}
                                    ></span>
                                }
                                checkedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="noto-v1:sun-with-face"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 25,
                                            textAlign: "end",
                                            marginLeft: "10px",
                                            color: "#353239",
                                        }}
                                    ></span>
                                }
                                id="icon-switch"
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
