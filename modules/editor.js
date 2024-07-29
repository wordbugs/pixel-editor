class Editor {
	constructor() {
		this.canvas = document.createElement('canvas');
		document.body.appendChild(this.canvas);
		this.ctx = this.canvas.getContext('2d');
		this.ctx.fillStyle = 'gold';
		this.ctx.fillRect(0, 0, 1000, 1000);
	}
}

export default Editor;