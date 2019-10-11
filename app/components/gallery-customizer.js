import Component from '@ember/component';
import { brandColorList } from '../data/colors';

export default Component.extend({
	tagName: 'main',
	strokeWidth: '3',
	activeBrandColor: null,
	brandColorList,

	change(event) {
		this.updateStrokeWidth(event.target.value);
		return true;
	},
	updateStrokeWidth(newStrokeWidth) {
		this.set('strokeWidth', newStrokeWidth)
	},
	updateActiveBrandColor(colorObject) {
		console.log(`WE IN HERE COLORING >> ${JSON.stringify(colorObject)}`);
		this.set('activeBrandColor', colorObject);
	}
});
