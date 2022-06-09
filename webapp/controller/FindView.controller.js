sap.ui.define([
	 "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("com.users.usersapp.controller.FindView", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.users.usersapp.view.FindView
		 */
		onInit: function () {
			
		},
		onSearch: function (oEvent) {
			 // build filter array
           var aFilter = [];
            // fetch event parameter
           var sQuery = this.byId("cat").getValue();
            // retrieve list control
            var oList = this.getView().byId("results");
            // get binding for aggregation 'items'
            var oBinding = oList.getBinding("items");

            if (sQuery) {
                aFilter.push(new Filter("{Model>IdLg}", FilterOperator.Contains, sQuery));
            }
            // apply filter. an empty filter array will show all items
            oBinding.filter(aFilter);
			
		}
	});
});