﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var setValue = {};	// @button
	var getValue = {};	// @button
	var setLabelTextColor = {};	// @button
	var setLabelText = {};	// @button
	var clear = {};	// @button
	var getErrorDiv = {};	// @button
	var clearErrorMessage = {};	// @button
	var setErrorMessage = {};	// @button
	var setErrorDiv = {};	// @button
	var getParent = {};	// @button
	var setParent = {};	// @button
	var setTextColor = {};	// @button
	var setBackgroundColor = {};	// @button
	var getTheme = {};	// @button
	var enable = {};	// @button
	var disable = {};	// @button
	var destroy = {};	// @button
	var getPosition = {};	// @button
	var setBottom = {};	// @button
	var setTop = {};	// @button
	var setRight = {};	// @button
	var getHeight = {};	// @button
	var getWidth = {};	// @button
	var setLeft = {};	// @button
	var setHeight = {};	// @button
	var setWidth = {};	// @button
	var resize_bigger = {};	// @button
	var resize_smaller = {};	// @button
	var move = {};	// @button
	var toggle = {};	// @button
	var removeClass = {};	// @button
	var addClass = {};	// @button
	var show = {};	// @button
	var hide = {};	// @button
	var resizable = {};	// @button
	var draggable = {};	// @button
	
	var addOption = {};	// @button
	var removeOption = {};	// @button
	var removeAddedOption = {};	// @button
	var addSelectedOption = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	setValue.click = function setValue_click (event)// @startlock
	{// @endlock
		$$('combobox1').setValue(1);
	};// @lock

	getValue.click = function getValue_click (event)// @startlock
	{// @endlock
		$$('richText1').setValue($$('combobox1').getValue());
	};// @lock

	setLabelTextColor.click = function setLabelTextColor_click (event)// @startlock
	{// @endlock
		$$('combobox1').setLabelTextColor("#650092");
	};// @lock

	setLabelText.click = function setLabelText_click (event)// @startlock
	{// @endlock
		$$('combobox1').setLabelText("toto");
	};// @lock

	clear.click = function clear_click (event)// @startlock
	{// @endlock
		$$('combobox1').clear();
	};// @lock

	getErrorDiv.click = function getErrorDiv_click (event)// @startlock
	{// @endlock
		var myError = $$('combobox1').getErrorDiv();
		$$('richText1').setValue(myError[0].id);
	};// @lock

	clearErrorMessage.click = function clearErrorMessage_click (event)// @startlock
	{// @endlock
		$$('combobox1').clearErrorMessage();
	};// @lock

	setErrorMessage.click = function setErrorMessage_click (event)// @startlock
	{// @endlock
		$$('combobox1').setErrorMessage({ message: "error" });
	};// @lock

	setErrorDiv.click = function setErrorDiv_click (event)// @startlock
	{// @endlock
		$$('combobox1').setErrorDiv("richText1");
	};// @lock

	getParent.click = function getParent_click (event)// @startlock
	{// @endlock
		var myParentId = $$('combobox1').getParent().id;
		$$('richText1').setValue(myParentId);
	};// @lock

	setParent.click = function setParent_click (event)// @startlock
	{// @endlock
		$$('combobox1').setParent($$('richText1'));
	};// @lock

	setTextColor.click = function setTextColor_click (event)// @startlock
	{// @endlock
		$$('combobox1').setTextColor('#650092');
	};// @lock

	setBackgroundColor.click = function setBackgroundColor_click (event)// @startlock
	{// @endlock
		$$('combobox1').setBackgroundColor("#650092");
	};// @lock

	getTheme.click = function getTheme_click (event)// @startlock
	{// @endlock
		$$('richText1').setValue($$('combobox1').getTheme());
	};// @lock

	enable.click = function enable_click (event)// @startlock
	{// @endlock
		$$('combobox1').enable();
	};// @lock

	disable.click = function disable_click (event)// @startlock
	{// @endlock
		$$('combobox1').disable();
	};// @lock

	destroy.click = function destroy_click (event)// @startlock
	{// @endlock
		$$('combobox1').destroy();
	};// @lock

	getPosition.click = function getPosition_click (event)// @startlock
	{// @endlock
		var myPosition = $$('combobox1').getPosition();
		$$('richText1').setValue(myPosition.left+","+myPosition.right+","+myPosition.top+","+myPosition.bottom);
	};// @lock

	setBottom.click = function setBottom_click (event)// @startlock
	{// @endlock
		$$('combobox1').setBottom(100);
	};// @lock

	setTop.click = function setTop_click (event)// @startlock
	{// @endlock
		$$('combobox1').setTop(100);
	};// @lock

	setRight.click = function setRight_click (event)// @startlock
	{// @endlock
		$$('combobox1').setRight(100);
	};// @lock

	getHeight.click = function getHeight_click (event)// @startlock
	{// @endlock
		$$('richText1').setValue($$('combobox1').getHeight());
	};// @lock

	getWidth.click = function getWidth_click (event)// @startlock
	{// @endlock
		$$('richText1').setValue($$('combobox1').getWidth());
	};// @lock

	setLeft.click = function setLeft_click (event)// @startlock
	{// @endlock
		$$('combobox1').setLeft(100);
	};// @lock

	setHeight.click = function setHeight_click (event)// @startlock
	{// @endlock
		$$('combobox1').setHeight(100);
	};// @lock

	setWidth.click = function setWidth_click (event)// @startlock
	{// @endlock
		$$('combobox1').setWidth(100);
	};// @lock

	resize_bigger.click = function resize_bigger_click (event)// @startlock
	{// @endlock
		$$('combobox1').resize(300,300);
	};// @lock

	resize_smaller.click = function resize_smaller_click (event)// @startlock
	{// @endlock
		$$('combobox1').resize(50,50);
	};// @lock

	move.click = function move_click (event)// @startlock
	{// @endlock
		$$('combobox1').move(0,0);
	};// @lock

	toggle.click = function toggle_click (event)// @startlock
	{// @endlock
		$$('combobox1').toggle();
	};// @lock

	removeClass.click = function removeClass_click (event)// @startlock
	{// @endlock
		$$('combobox1').removeClass("toto");
	};// @lock

	addClass.click = function addClass_click (event)// @startlock
	{// @endlock
		$$('combobox1').addClass("toto");
	};// @lock

	show.click = function show_click (event)// @startlock
	{// @endlock
		$$('combobox1').show(true);
	};// @lock

	hide.click = function hide_click (event)// @startlock
	{// @endlock
		$$('combobox1').hide(true);
	};// @lock

	resizable.click = function resizable_click (event)// @startlock
	{// @endlock
		$$('combobox1').resizable(true);
	};// @lock

	draggable.click = function draggable_click (event)// @startlock
	{// @endlock
		$$('combobox1').draggable(true);
	};// @lock

	addOption.click = function addOption_click (event)// @startlock
	{// @endlock
		$$('combobox1').addOption('2', 'ccc', false);
	};// @lock

	removeOption.click = function removeOption_click (event)// @startlock
	{// @endlock
		$$('combobox1').removeOption(2);
	};// @lock

	removeAddedOption.click = function removeAddedOption_click (event)// @startlock
	{// @endlock
		$$('combobox1').removeOption(3);
	};// @lock

	addSelectedOption.click = function addSelectedOption_click (event)// @startlock
	{// @endlock
		$$('combobox1').addOption('2', 'ccc', true);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("setValue", "click", setValue.click, "WAF");
	WAF.addListener("getValue", "click", getValue.click, "WAF");
	WAF.addListener("setLabelTextColor", "click", setLabelTextColor.click, "WAF");
	WAF.addListener("setLabelText", "click", setLabelText.click, "WAF");
	WAF.addListener("clear", "click", clear.click, "WAF");
	WAF.addListener("getErrorDiv", "click", getErrorDiv.click, "WAF");
	WAF.addListener("clearErrorMessage", "click", clearErrorMessage.click, "WAF");
	WAF.addListener("setErrorMessage", "click", setErrorMessage.click, "WAF");
	WAF.addListener("setErrorDiv", "click", setErrorDiv.click, "WAF");
	WAF.addListener("getParent", "click", getParent.click, "WAF");
	WAF.addListener("setParent", "click", setParent.click, "WAF");
	WAF.addListener("setTextColor", "click", setTextColor.click, "WAF");
	WAF.addListener("setBackgroundColor", "click", setBackgroundColor.click, "WAF");
	WAF.addListener("getTheme", "click", getTheme.click, "WAF");
	WAF.addListener("enable", "click", enable.click, "WAF");
	WAF.addListener("disable", "click", disable.click, "WAF");
	WAF.addListener("destroy", "click", destroy.click, "WAF");
	WAF.addListener("getPosition", "click", getPosition.click, "WAF");
	WAF.addListener("setBottom", "click", setBottom.click, "WAF");
	WAF.addListener("setTop", "click", setTop.click, "WAF");
	WAF.addListener("setRight", "click", setRight.click, "WAF");
	WAF.addListener("getHeight", "click", getHeight.click, "WAF");
	WAF.addListener("getWidth", "click", getWidth.click, "WAF");
	WAF.addListener("setLeft", "click", setLeft.click, "WAF");
	WAF.addListener("setHeight", "click", setHeight.click, "WAF");
	WAF.addListener("setWidth", "click", setWidth.click, "WAF");
	WAF.addListener("resize_bigger", "click", resize_bigger.click, "WAF");
	WAF.addListener("resize_smaller", "click", resize_smaller.click, "WAF");
	WAF.addListener("move", "click", move.click, "WAF");
	WAF.addListener("toggle", "click", toggle.click, "WAF");
	WAF.addListener("removeClass", "click", removeClass.click, "WAF");
	WAF.addListener("addClass", "click", addClass.click, "WAF");
	WAF.addListener("show", "click", show.click, "WAF");
	WAF.addListener("hide", "click", hide.click, "WAF");
	WAF.addListener("resizable", "click", resizable.click, "WAF");
	WAF.addListener("draggable", "click", draggable.click, "WAF");
	
	WAF.addListener("addOption", "click", addOption.click, "WAF");
	WAF.addListener("removeOption", "click", removeOption.click, "WAF");
	WAF.addListener("removeAddedOption", "click", removeAddedOption.click, "WAF");
	WAF.addListener("addSelectedOption", "click", addSelectedOption.click, "WAF");
// @endregion
};// @endlock
