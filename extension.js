"use strit"
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let insertInlineComment = vscode.commands.registerCommand('comment.inlineComment',() =>{
    const editor = vscode.window.activeTextEditor;
    const document = editor.document;
    const selection = editor.selection;
    const word = document.getText(selection);
	let cursorPosition = editor.selection.start;
	let range = new vscode.Position(cursorPosition.line , cursorPosition.character);
	let selectedText ;
		editor.edit((editBuilder) => {
			editBuilder.insert(range, "/\/write yor comment here \n");
		});
  });
	context.subscriptions.push(insertInlineComment);
	let insertDocComment = vscode.commands.registerCommand('comment.docComment',() =>{
    const editor = vscode.window.activeTextEditor;
    const document = editor.document;
    const selection = editor.selection;
    const word = document.getText(selection);
	let cursorPosition = editor.selection.start;
	let range = new vscode.Position(cursorPosition.line, cursorPosition.character);
	let selectedText ;
		editor.edit((editBuilder) => {
			editBuilder.insert(range,`/**\n \t* @param  {} url\n \t* @param  {} body\n \t**/\n`);
		});
  });
	context.subscriptions.push(insertDocComment);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
