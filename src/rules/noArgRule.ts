/*
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export class Rule extends Lint.Rules.AbstractRule {
    public static FAILURE_STRING = "access forbidden to arguments property";

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new NoArgWalker(sourceFile, this.getOptions()));
    }
}

class NoArgWalker extends Lint.RuleWalker {
    public visitPropertyAccessExpression(node: ts.PropertyAccessExpression) {
        const expression = node.expression;
        const name = node.name;

        if (expression.kind === ts.SyntaxKind.Identifier && name.text === "callee") {
            const identifierExpression = <ts.Identifier> expression;
            if (identifierExpression.text === "arguments") {
                this.addFailure(this.createFailure(expression.getStart(), expression.getWidth(), Rule.FAILURE_STRING));
            }
        }

        super.visitPropertyAccessExpression(node);
    }
}
