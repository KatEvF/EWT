//Example code that texts a user sensor values
exports.handler = function(context, event, callback) {

    
console.log(event.Body);
    
console.log(event.From);
    
console.log(event.To);
    
    
var client = context.getTwilioClient();
    
var phone = 16475265284;
    
var temp = 30;
    
var hum = 40;
    
    
if (event.Body == "Weather" || event.Body == "Weather " || event.Body == "weather" || event.Body == "weather ")
    {

        client.messages.create({to: phone, from: event.To, body: "The current temperature is " + temp + " degrees C. Current humidity is " + hum + " %."});

    }
    
else if (event.Body !== "")
    {

        client.messages.create({to: phone, from: event.To, body: "Unrecognized Command. Please type 'weather' for weather updates."});

    }

   
function cb() {

       callback(null, "Command Sent");

    }
    
setTimeout(cb, 2000); 
};