"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sdk = exports.bigNumber = exports.feeService = exports.rangerHelper = exports.utils = exports.ledgerTypes = exports.isItNodeEnv = exports.nodeLedger = exports.webLedger = exports.getWebLedger = exports.getNodeLedger = exports.getLedger = void 0;
var ledgerWrapper_1 = require("./services/ledger/ledgerWrapper");
Object.defineProperty(exports, "getLedger", { enumerable: true, get: function () { return ledgerWrapper_1.getLedger; } });
Object.defineProperty(exports, "getNodeLedger", { enumerable: true, get: function () { return ledgerWrapper_1.getNodeLedger; } });
Object.defineProperty(exports, "getWebLedger", { enumerable: true, get: function () { return ledgerWrapper_1.getWebLedger; } });
Object.defineProperty(exports, "webLedger", { enumerable: true, get: function () { return ledgerWrapper_1.webLedger; } });
Object.defineProperty(exports, "nodeLedger", { enumerable: true, get: function () { return ledgerWrapper_1.nodeLedger; } });
Object.defineProperty(exports, "isItNodeEnv", { enumerable: true, get: function () { return ledgerWrapper_1.isItNodeEnv; } });
// export { LedgerForNode } from './services/ledger/nodeLedger';
// export { LedgerForWeb } from './services/ledger/webLedger';
exports.ledgerTypes = __importStar(require("./services/ledger/types"));
exports.utils = __importStar(require("./services/utils"));
exports.rangerHelper = __importStar(require("./services/rangeHelper"));
exports.feeService = __importStar(require("./services/fee"));
exports.bigNumber = __importStar(require("./services/bigNumber"));
var Sdk_1 = require("./Sdk");
Object.defineProperty(exports, "Sdk", { enumerable: true, get: function () { return Sdk_1.Sdk; } });
//# sourceMappingURL=index.js.map