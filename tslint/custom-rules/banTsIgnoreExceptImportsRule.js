"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var tsutils_1 = require("tsutils");
var Lint = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    /* tslint:disable:object-literal-sort-keys */
    Rule.metadata = {
        ruleName: "ban-ts-ignore-except-imports",
        description: 'Bans "// @ts-ignore" comments from being used, except on the imports.',
        optionsDescription: "Not configurable.",
        options: null,
        optionExamples: [true],
        type: "typescript",
        typescriptOnly: true
    };
    /* tslint:disable:object-literal-sort-keys */
    Rule.FAILURE_STRING = 'Do not use "// @ts-ignore" comments because they suppress compilation errors. Its only allowed in the imports.';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var importLineNumbers = getImportLineNumbers(ctx);
    var ignoreDiagnosticCommentRegEx = /^\s*\/\/\/?\s*@ts-ignore/;
    tsutils_1.forEachComment(ctx.sourceFile, function (fullText, comment) {
        var commentText = fullText.slice(comment.pos, comment.end);
        if (Boolean(commentText.match(ignoreDiagnosticCommentRegEx))) {
            var lineNumber = getLineNumber(comment.pos, ctx);
            if (!hasImportLineBelow(lineNumber, importLineNumbers)) {
                ctx.addFailure(comment.pos, comment.end, Rule.FAILURE_STRING);
            }
        }
    });
}
function getImportLineNumbers(ctx) {
    var result = [];
    for (var _i = 0, _a = ctx.sourceFile.statements; _i < _a.length; _i++) {
        var statement = _a[_i];
        if (!tsutils_1.isImportDeclaration(statement)) {
            continue;
        }
        result.push(getLineNumber(statement.getStart(), ctx));
    }
    return result;
}
function getLineNumber(characterPosition, ctx) {
    return ctx.sourceFile.getLineAndCharacterOfPosition(characterPosition).line;
}
function hasImportLineBelow(lineNumber, importLineNumbers) {
    return importLineNumbers.indexOf(lineNumber + 1) !== -1;
}
