"use strict";
class GlobalLogger {
    static logGlobalsToConsole() {
        for (let email of CONTACT_EMAIL_ARRAY) {
            console.log(`found contact : ${email}`);
        }
    }
}
window.onload = () => {
    GlobalLogger.logGlobalsToConsole();
};
//# sourceMappingURL=chapter7.js.map