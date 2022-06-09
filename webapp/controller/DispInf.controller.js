sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("com.users.usersapp.controller.DispInf", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.users.usersapp.view.DispInf
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("DispInf").attachPatternMatched(this.onRouteMatch,this);
		},
		onBack: function(){
			 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			 oRouter.navTo("Home",null);
		},
		onRouteMatch: function(oEvent){
			var sId = oEvent.getParameter("arguments").IdLg;
			var sPath = this.getView().getModel("Model").createKey("ItemsSet",{
				IdLg: sId
			});
			var oView = this.getView();
				oView.bindElement({
					path: "Model>/"+sPath,
					model: "items"
				});
			
		},
		onDelete: function(oEvent){
			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var delPath = this.getView().mElementBindingContexts.Model.sPath;
			this.getView().getModel("Model").remove(delPath,null,{
				method: "DELETE",
				success: function(oData,response){
					MessageBox.success("Si funciona");
				},
				error: function(){
					MessageBox.error("No funciona");
				}
			});
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home",null);
		},
		onEdit:function(){
		   sap.ushell.Container.getService("UserInfo").getId();
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.users.usersapp.view.DispInf
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.users.usersapp.view.DispInf
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.users.usersapp.view.DispInf
		 */
		//	onExit: function() {
		//
		//	}

	});

});