To change or make a new custom rule, make or modify a typescript file, then 
execute in this folder the following command:
    tsc ./*.ts

Then restart vscode to see the rule working.

If you are adding a new rule remember to add it in tslint.json, is the same file name 
in kebab case without the "Rule" word. Also you need to add: 
    "rulesDirectory": "./tslint/custom-rules/"

Usefull data to develop rules:

    TSLint rules to copy-paste as a starting point:
        https://github.com/palantir/tslint/tree/master/src/rules

    AST Explorer:
        https://astexplorer.net/

    Walkers list:
        https://github.com/palantir/tslint/blob/master/src/language/walker/syntaxWalker.ts
        