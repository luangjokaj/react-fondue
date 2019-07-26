import { forEachComment, isImportDeclaration } from "tsutils";
import * as ts from "typescript";
import * as Lint from "tslint";

export class Rule extends Lint.Rules.AbstractRule {
    /* tslint:disable:object-literal-sort-keys */
    public static metadata: Lint.IRuleMetadata = {
        ruleName: "ban-ts-ignore-except-imports",
        description: 'Bans "// @ts-ignore" comments from being used, except on the imports.',
        optionsDescription: "Not configurable.",
        options: null,
        optionExamples: [true],
        type: "typescript",
        typescriptOnly: true,
    };
    /* tslint:disable:object-literal-sort-keys */

    public static FAILURE_STRING: string =
        'Do not use "// @ts-ignore" comments because they suppress compilation errors. Its only allowed in the imports.';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithFunction(sourceFile, walk);
    }
}

function walk(ctx: Lint.WalkContext<void>): void {
    const importLineNumbers: number[] = getImportLineNumbers(ctx);
    const ignoreDiagnosticCommentRegEx: RegExp = /^\s*\/\/\/?\s*@ts-ignore/;

    forEachComment(ctx.sourceFile, (fullText: string, comment: ts.CommentRange) => {
        const commentText: string = fullText.slice(comment.pos, comment.end);
        if (Boolean(commentText.match(ignoreDiagnosticCommentRegEx))) {
            const lineNumber: number = getLineNumber(comment.pos, ctx);
            if (!hasImportLineBelow(lineNumber, importLineNumbers)) {    
                ctx.addFailure(comment.pos, comment.end, Rule.FAILURE_STRING);
            }
        }
    });
}

function getImportLineNumbers(ctx: Lint.WalkContext<void>): number[] {
    const result: number[] = [];

    for (const statement of ctx.sourceFile.statements) {
        if (!isImportDeclaration(statement)) {
            continue;
        }

        result.push(getLineNumber(statement.getStart(), ctx));
    }

    return result;
}

function getLineNumber(characterPosition: number, ctx: Lint.WalkContext<void>): number {
    return ctx.sourceFile.getLineAndCharacterOfPosition(characterPosition).line;
}

function hasImportLineBelow(lineNumber: number, importLineNumbers: number[]): boolean {
    return importLineNumbers.indexOf(lineNumber + 1) !== -1;
}
