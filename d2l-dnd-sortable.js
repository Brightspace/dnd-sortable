/**
`d2l-dnd-sortable`
Reorderable drag-and-drop lists
@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import 'Sortable/Sortable.min.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dnd-sortable">
	<template strip-whitespace="">
		<style>

			::slotted(.placeholder) {
				opacity: 0;
			}

		</style>
		<!-- NOTE: You cannot add any local DOM around the slot otherwise it breaks the SortableJS dom
		manipulation of the distributed light DOM children which with shadow DOM will always have the custom
		element as their parent node.
		-->
		<slot></slot>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-dnd-sortable',
	properties: {

		/**
		 * Fired when the sortable list changes after a drag completes
		 *
		 * @event d2l-dnd-sorted
		 * @param {number} oldIndex Original list index of dragged item
		 * @param {number} newIndex New list index of dragged item
		*/

		/** CSS class name applied to the placeholder DOM node for the item being dragged */
		placeholderClass: {
			type: String,
			value: 'placeholder',
			observer: '_placeholderClassChanged'
		},
		/** CSS class name applied to the HTML 5 drag image of the item being dragged */
		mirrorClass: {
			type: String,
			value: 'mirror',
			observer: '_mirrorClassChanged'
		},
		/** CSS class name applied to the touch drag image of the item being dragged */
		touchMirrorClass: {
			type: String,
			value: 'touch-mirror',
			observer: '_touchMirrorClassChanged'
		},
		/** Specify a css selector for a handle element if you don't want to allow drag action on the entire element */
		handle: {
			type: String,
			value: '',
			observer: '_handleChanged'
		},
		/** Specify whether sorting (drag and drop) is enabled */
		disabled: {
			type: Boolean,
			value: false,
			observer: '_disabledChanged'
		}
	},

	attached: function() {
		var options = {
			ghostClass: this.placeholderClass,
			dragClass: this.mirrorClass,
			fallbackClass: this.touchMirrorClass,
			handle: this.handle,
			disabled: this.disabled,
			onUpdate: this._onUpdate.bind(this)
		};

		this.sortable = window.Sortable.create(this, options);
	},

	detached: function() {
		if (this.sortable) {
			this.sortable.destroy();
		}
	},

	_placeholderClassChanged: function(value) {
		this.sortable && this.sortable.option('ghostClass', value);
	},

	_mirrorClassChanged: function(value) {
		this.sortable && this.sortable.option('dragClass', value);
	},

	_touchMirrorClassChanged: function(value) {
		this.sortable && this.sortable.option('fallbackClass', value);
	},

	_handleChanged: function(value) {
		this.sortable && this.sortable.option('handle', value);
	},

	_disabledChanged: function(value) {
		this.sortable && this.sortable.option('disabled', value);
	},

	_onUpdate: function(evt) {
		this.dispatchEvent(new CustomEvent(
			'd2l-dnd-sorted', {
				bubbles: true,
				composed: true,
				detail: {
					oldIndex: evt.oldIndex,
					newIndex: evt.newIndex
				}
			}
		));
	}
});
