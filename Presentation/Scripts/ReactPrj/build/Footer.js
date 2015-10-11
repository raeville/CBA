"use strict";

var Footer = React.createClass({
    displayName: "Footer",


    render: function render() {
        return React.createElement(
            "ul",
            { className: "list-inline text-center" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#/FinacialService" },
                    React.createElement(
                        "small",
                        null,
                        " ",
                        React.createElement(
                            "u",
                            null,
                            "Financial Service guide page"
                        )
                    )
                ),
                React.createElement(
                    "span",
                    null,
                    "|"
                ),
                " "
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#/TermOfUse" },
                    React.createElement(
                        "small",
                        null,
                        React.createElement(
                            "u",
                            null,
                            "Terms of use"
                        )
                    )
                ),
                React.createElement(
                    "span",
                    null,
                    "|"
                ),
                " "
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#/PrivacyPolicy" },
                    React.createElement(
                        "small",
                        null,
                        React.createElement(
                            "u",
                            null,
                            "Privacy"
                        )
                    ),
                    " "
                )
            ),
            React.createElement("br", null),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    null,
                    React.createElement(
                        "small",
                        null,
                        "Copyright © 2015 all rights reserved."
                    )
                )
            )
        );
    }
});

React.render(React.createElement(Footer, null), document.getElementById('footer'));