import React, { Component } from "react";
import { Icon } from "@iconify/react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="col-md-12">
                    <a href="https://account.venmo.com/u/Kylie-Chen-4">
                        <Icon icon="ion:logo-venmo" width="100" />
                    </a>
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
