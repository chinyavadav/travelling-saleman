const { Client, Status } = require("@googlemaps/google-maps-services-js");
/**
 * https://developers.google.com/maps/documentation/javascript/distancematrix
 */
require("dotenv").config();

const api_key = process.env.GOOGLE_MAPS_API_KEY;
const client = new Client({

});

syncNode = async (origin, destinations) => {
    origins = []
    destinations.forEach(destination => {
        origins.push(origin);
    });
    try {
        const resp = await client.distancematrix({
            params: {
                origins: origins,
                destinations: destinations,
                key: api_key
            },
            timeout: 1000,
        });
        if (resp.data.status === Status.OK) {
            const rows = resp.data.rows;
            rows.forEach(row => {

            });
            let value = row.elements;
            if (value[0].status == Status.OK) {
                distance = value[0].distance.value;
                duration = value[0].duration.value;
                localStorage.setItem("", "");
            }
        } else {
            console.log(resp.data.error_message);
        }
    } catch (err) {
        console.log(err.response.data);
    }
}

syncNode({ key: 'A', lat: 0, lng: 0 }, [{ lat: 10, lng: 10 }]);