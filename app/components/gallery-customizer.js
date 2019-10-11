import Component from '@ember/component';

export default Component.extend({
	tagName: 'main',
	strokeWidth: '2',
	color1: 'red',
	color2: 'blue',
	color3: 'yellow',
	change(event) {
		this.updateStrokeWidth(event.target.value);
		return true;
	},
	updateStrokeWidth (newStrokeWidth) {
		console.log(`IN ACTION >> CHANGING TO ${newStrokeWidth}`);
		this.set('strokeWidth', newStrokeWidth)
	}
});
