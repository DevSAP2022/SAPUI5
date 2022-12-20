// USER interface component, módulo estandar para extender y realizar instancia de componente

sap.ui.define([
    "sap/ui/core/UIComponent",
    "namespace/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */

    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("namespace.SAPUI5.Component", {
            metadata: {
                manifest : "json"
                // "rootView": {
                //     "viewName": "namespace.SAPUI5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
            },
            
            init: function () {
                //call ini function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                // set i18n model on the view
                var i18nmodel = new ResourceModel({ bundleName: "namespace.SAPUI5.i18n.i18n" });
                this.setModel(i18nmodel, "i18n");

            }
        });
    });