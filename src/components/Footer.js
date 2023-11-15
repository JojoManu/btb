import React, { Component } from "react";
import { Icon } from "@iconify/react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div style={{ margin: "75px" }} className="col-md-12">
                    <span style={{ marginBottom: "75px" }}>
                        <a href="https://account.venmo.com/u/Kylie-Chen-4">
                            <Icon icon="ion:logo-venmo" width="100" />
                        </a>
                    </span>

                    {/* <div className="social-links">{networks}</div> */}

                    <div className="copyright py-4 text-center">
                        <div className="container">
                            <small>Copyright &copy; Beat the bruins</small>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
