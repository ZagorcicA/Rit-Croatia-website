/**
 * A class that represents a model for the application.
 * @class
 */
export class Model {

    /**
     * Fetch data from a specified point.
     * @param {string} endpoint - endpoint to fetch the data from.
     * @returns {JQuery.jqXHR} - object, represents the AJAX request.
     */
    getData(endpoint) {
        let jqXHR = $.ajax({
            method: "GET",
            url: "proxy.php",
            cache: false,
            data: {path: endpoint},
            timeout: 10000,
            dataType: "json"
        }).fail((jqXHR, textStatus, error) => {
            //TODO: Implement the code here OR in Controller, depending on your design and solution
            console.log('FAIL');
        });

        return jqXHR;
    }
}