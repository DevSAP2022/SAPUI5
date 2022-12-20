sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "namespace/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.module.json.JSONModel} JSONModel
     * @param {typeof sap.ui.model.resouce.ReourceModel} ResourceModel
     */

    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";

        return Controller.extend("namespace.SAPUI5.controller.App", {

            onInit: function () {        
                                    
            },

            onShowHello: function () {
                
                //read text from i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });

    });