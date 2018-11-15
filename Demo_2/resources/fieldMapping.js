/**
 * Created by tobias.armbruster on 10.03.2017.
 */

//remove this for your own setup and adjust the template bindings according to your own data
// e.g. <ff-record> {{record.Title}} </ff-record> -> <ff-record> {{record.YourFieldName}} </ff-record>
document.addEventListener("ffReady", function () {
    var key = factfinder.communication.ResultDispatcher.addCallback("result", function (result) {
        console.log("only one time")
        var roles = result.fieldRoles;
        var mapping = {};

        if (roles["price"] && roles["price"] != "Price") {
            mapping[roles["price"]] = "Price";
        }

        if (roles["description"] && roles["description"] != "Description") {
            mapping[roles["description"]] = "Description";
        }

        if (roles["productName"] && roles["productName"] != "Title") {
            mapping[roles["productName"]] = "Title";
        }

        if (roles["productName"] && roles["productName"] != "Deeplink") {
            mapping[roles["deeplink"]] = "Deeplink";
        }

        factfinder.communication.Util.addRenameRecordFields(mapping);

        //we need the timeout cause removing callbacks in a callback of ResultDispatcher is buggy x/
        setTimeout(function () {
            factfinder.communication.ResultDispatcher.removeCallback("result", key);
        });
    });
});