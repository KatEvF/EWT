# EWT
Emergency Weather Transmitter 

## Inspiration
To connect remote locations and bring them information and technology that would otherwise not be available
## What it does
Provides weather alerts for communities in remote locations
## How we built it
We used the Telus board as our internal processing system, with its sensors devoted to getting data aiming to protect the board. Then we connected external sensors to the board to get accurate weather data. We integrated an arduino board to the Telus board to process the external data. After that, we sent the data to Azure IoT platform. On Azure, we analyzed the data and deduced when a natural disaster is occurring. After that, we used Twilio to alert communities.
## Challenges we ran into
Sending data from Azure to Twilio via SMS
## What's next for EWT
Implementation of the product in remote locations
