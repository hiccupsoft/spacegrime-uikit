"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var PanelBody_1 = require("./PanelBody");
var PanelFooter_1 = require("./PanelFooter");
var config_1 = require("./config");
var BgSidebar = require("./IconImage/BgSidebar.svg");
var icons_1 = require("./icons");
var StyledPanel = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-image: url(", ");\n  width: ", ";\n  height: 100vh;\n  background: aliceblue;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-image: url(", ");\n  width: ", ";\n  height: 100vh;\n  background: aliceblue;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), BgSidebar, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? config_1.SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? config_1.SIDEBAR_WIDTH_FULL : config_1.SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
            react_1["default"].createElement(icons_1.Astronaut, { width: config_1.SIDEBAR_WIDTH_FULL + 160 + "px" }),
            react_1["default"].createElement(PanelBody_1["default"], __assign({}, props)),
            react_1["default"].createElement(PanelFooter_1["default"], __assign({}, props)))));
};
exports["default"] = Panel;
var templateObject_1;
