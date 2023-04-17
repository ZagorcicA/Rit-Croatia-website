import {Model} from './Model.js';

/**
 * A class that represents a controller for the application.
 * @class
 */
export class Controller {
    /**
     * Creates a new instance of the Controller.
     * @constructor
     * @param {Model} model - model to use.
     * @param {View} view - view to use.
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.renderSpinner();

        //1. send the request - the jqXHR object is returned,
        //that will hold the response on success (available within the done() callback)
        let response = this.model.getData('/news');


        // getting about data
        let aboutAnswer = this.model.getData('/about');


        // getting people/faculty data
        let peopleFaculty = this.model.getData("/people/faculty");

        let undergraduate = this.model.getData("/degrees/undergraduate");

        let graduate = this.model.getData("/degrees/graduate");

        let coop = this.model.getData("/employment/coopTable");

        let employment = this.model.getData("/employment/employmentTable");

        //2. specify what will be executed when the request is successful (done() callback)
        response.done((data) => {
            this.view.renderNewsSection(data);
        });

        aboutAnswer.done((data) => {
            this.view.renderAboutSection(data);
        });

        peopleFaculty.done((data) => {
            this.view.renderPeopleFaculty(data);
        });

        undergraduate.done((data) => {
            this.view.renderUnderGraduate(data);
        });


        graduate.done((data) => {
            this.view.renderGraduate(data);
        });

        coop.done((data) => {
            this.view.renderCoop(data);
        });

        employment.done((data) => {
            this.view.renderEmployment(data);
        });


    }
}