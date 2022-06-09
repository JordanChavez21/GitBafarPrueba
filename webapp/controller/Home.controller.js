sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("com.users.usersapp.controller.Home", {
		onInit: function () {
			
		},
		onPressItem: function(oEvent){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oItem = oEvent.getSource();
			
			oRouter.navTo("DispInf",{
				IdLg: oItem.getBindingContext("Model").getObject().IdLg
			});
		},
		onPressNew: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("NewUser",null);
		},
		onPressFind: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("FindView",null);
		}
	});
});