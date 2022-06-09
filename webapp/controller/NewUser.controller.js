 sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("com.users.usersapp.controller.NewUser", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.users.usersapp.view.NewUser
		 */
		onInit: function () {
			var num = Math.floor(Math.random() * 99999 + 1);
			this.byId("IdLg").setValue(num);
		},
		onInsert: function(){
			var oEntry = {};
			var that = this;
			oEntry.IdLg = that.byId("IdLg").getValue();
			oEntry.Pm = that.byId("Pm").getValue();
			oEntry.Text = that.byId("Text").getValue();
			oEntry.Link = that.byId("Link").getValue();
			oEntry.Title = that.byId("Title").getValue();
			that.getView().getModel("Model").create("/InsertDataSet", oEntry,{
				success: function(oData,response){
					MessageBox.success("Se creo con exito, favor de recargar la pagina");
				},
				error: function(){
					MessageBox.error("Algo salio mal, favor de verificar los datos");
				}
				
			});
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home",null);
			
		},
		onBack: function(){
			 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			 oRouter.navTo("Home",null);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.users.usersapp.view.NewUser
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.users.usersapp.view.NewUser
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.users.usersapp.view.NewUser
		 */
		//	onExit: function() {
		//
		//	}

	});

});