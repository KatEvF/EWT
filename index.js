module.exports = function (context, IoTHubMessages) {
    context.log('Node.js queue trigger function processed work item', IoTHubMessages);

    var string_message = null;

    IoTHubMessages.forEach(message => {
        string_message = JSON.stringify(message);
    });

    if (string_message){
        context.bindings.sms = {};
        context.bindings.sms = {
            body : string_message,
            to: "+16475265284"
        };
    }
    context.done();
};