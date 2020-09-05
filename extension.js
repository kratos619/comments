"use strit"
const vscode = require('vscode');

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
