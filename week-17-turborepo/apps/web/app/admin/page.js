"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = require("@repo/ui/admin");
const input_box_1 = require("@repo/ui/input-box");
function default_1() {
    return <div>
        Hi from admin Page
        <admin_1.Admin />
        <input_box_1.InputBox />
    </div>;
}
exports.default = default_1;
