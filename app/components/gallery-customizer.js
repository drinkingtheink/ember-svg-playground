import Component from '@ember/component';
import { brandColorList } from '../data/colors';

export default Component.extend({
	tagName: 'main',
	strokeWidth: '3',
	activeBrandColor: '',
	brandColorList,

	change(event) {
		this.updateStrokeWidth(event.target.value);
		return true;
	},
	updateStrokeWidth(newStrokeWidth) {
		this.set('strokeWidth', newStrokeWidth)
	},
	actions: {
		updateActiveBrandColor(newColor) {
			let newColorVal = newColor.target.value;
			this.set('activeBrandColor', newColorVal);
		}
	}
});
