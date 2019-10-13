import Component from '@ember/component';
import { brandColorList, bgColorList } from '../data/colors';

export default Component.extend({
	tagName: 'main',
	strokeWidth: '3',
	brandColorList,
	bgColorList,
	activeBrandColor: '',
	activeBgColor: '',
	activeStrokeColor: '',

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
		},
		updateActiveBgColor(newColor) {
			let newColorVal = newColor.target.value;
			this.set('activeBgColor', newColorVal);
		},
		updateActiveStrokeColor(newColor) {
			let newColorVal = newColor.target.value;
			this.set('activeStrokeColor', newColorVal);
		}
	}
});
