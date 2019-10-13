import Component from '@ember/component';
import { computed } from '@ember/object';
import { brandColorList, bgColorList } from '../data/colors';

const strokeWidthDefault = 3;

export default Component.extend({
	tagName: 'main',
	strokeWidth: strokeWidthDefault,
	brandColorList,
	bgColorList,
	activeBrandColor: '',
	activeBgColor: '',
	activeStrokeColor: '',
	displayClearButton: computed('activeBrandColor', 'activeBgColor', 'activeStrokeColor', 'strokeWidth', function() {
    	return (this.activeBrandColor || this.activeBgColor || this.activeStrokeColor || this.strokeWidth > strokeWidthDefault);
  	}),

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
		},
		clearActiveColors() {
			this.set('activeBrandColor', '');
			this.set('activeBgColor', '');
			this.set('activeStrokeColor', '');
			this.send('resetStrokeWidth');
		},
		resetStrokeWidth() {
			this.set('strokeWidth', strokeWidthDefault);
		}
	}
});
