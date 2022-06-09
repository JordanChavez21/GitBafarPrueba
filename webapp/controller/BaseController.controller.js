// in your base controller
 
sap.ui.define([

  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {

  "use strict";
 
  return Controller.extend("my.application.controller.BaseController", {
 
    // some basic functionalities
 
    // just this.getRouter() ...
    getRouter: function() {
     
      // ... instead of
      return UIComponent.getRouterFor(this);
 
    },
 
    // just this.getModel() ...
    getModel: function(sName) {
   
      // ... instead of
      return this.getView().getModel(sName);
 
    },
 
    // just this.setModel() ...
    setModel: function(oModel, sName) {
 
      // ... instead of
      return this.getView().setModel(oModel, sName);
 
    },
 
    // just this.getResoureBundle() ... 
    getResourceBundle: function () {
 
      // ... instead ofsss
      return this.getOwnerComponent().getModel("i18n").getResourceBundle();
 
    },
 
    // calculate something
    randomCalculations: function(fValue1, fValue2) {
 
      // do some calculations
 
    }
 
  });
 
});