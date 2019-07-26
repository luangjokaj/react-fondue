import * as ts from "typescript";
import * as Lint from "tslint";
import { forEachComment } from "tsutils";

export class Rule extends Lint.Rules.AbstractRule {
    /* tslint:disable:object-literal-sort-keys */
    public static metadata: Lint.IRuleMetadata = {
        ruleName: "no-object",
        description: "Disallows usages of `object` as a type declaration.",
        hasFix: false,
        rationale: Lint.Utils.dedent`
            Using \`object\` as a type declaration nullifies the compile-time benefits of the type system.
        `,
        optionsDescription: "Not configurable.",
        options: null,
        optionExamples: [true],
        type: "typescript",
        typescriptOnly: true,
    };
    /* tslint:enable:object-literal-sort-keys */

    public static FAILURE_STRING: string =
        "Type declaration of 'object' loses type-safety. Consider replacing it with a more precise type. Describe the members of your object using an interface and use that interface name as your type.";

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithFunction(sourceFile, walk);
    }
}

function walk(ctx: Lint.WalkContext<void>): void {
    return ts.forEachChild(ctx.sourceFile, function cb(node: ts.Node): void {
        if (node.kind === ts.SyntaxKind.ObjectKeyword) {
            return ctx.addFailure(node.getStart(), node.getEnd(), Rule.FAILURE_STRING);
        }
        return ts.forEachChild(node, cb);
    });
}
