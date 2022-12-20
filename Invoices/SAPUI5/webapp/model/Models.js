sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.module.json.JSONModel} JSONModel
     */

    function (JSONModel) {
        "use strict";

        return {
            createRecipient: function () {
                var oData = {
                    recipient: {
                        name : "Buddy"
                    }
                }

                return new JSONModel(oData);
            }
        }
    });