/**
 * A class that represents a view for the application.
 * @class */
export class View {
    /**
     * Create a view.
     */
    constructor() {
        /**
         * section elements
         * @type {jQuery}
         * @private
         */
        this.$newsSection = $('#section-news');
        this.$aboutSection = $('#about');
        this.$peopleFaculty = $('#peopleFaculty');
        this.$coop = $('#coopTable');
        this.$employment = $('#employment');

        // graduate section
        this.$ISMS = $('#ISMS');
        this.$HMS = $('#HMS');
        this.$NMS = $('#NMS');
        this.$MS = $('#MS');

        // under graduate section
        this.$web = $('#web');
        this.$humanU = $('#human');
        this.$compU = $('#computing');


    }

    /**
     * Renders a spinner.
     */
    renderSpinner() {
        this.$newsSection.html('<img src="media/gears.gif" id="spinner"/>');
        //select all sections which id starts with 'section-'
        //$('[id^=section-]').html('<img src="media/gears.gif" id="spinner"/>');
    }

    /**
     * Renders the news section.
     * @param {Object} data - The data object for the news section.
     */
    renderNewsSection(data) {

        /**
         * News section accordion element
         * @type {jQuery}
         */
        this.$newsSection.html(''); //removes any previous content (like spinner)

        let $newsDiv = $('<div id="div-accordion"></div>');
        $.each(data.older, (index, item) => {
            let $newsItem = $(`<h2><b>${item.date}:</b> ${item.title}</h2><div><p>${item.description}</p></div>`);
            $newsDiv.append($newsItem);
        });
        $newsDiv.accordion({collapsible: true, heightStyle: "content"});

        this.$newsSection.append($newsDiv);
    }

    /**
     * Renders the about section.
     * @param {Object} data - The data object for the about section.
     */
    renderAboutSection(data) {
        this.$aboutSection.html('');
        this.$aboutSection.append(`<h1>${data.title}</h1>`);
        this.$aboutSection.append(`<div><p>${data.description}</p></div>`);
    }

    /**

     Render faculty information on the web page.
     @param {Object} data - The data containing faculty information.
     @param {Array} data.faculty - The array of faculty members.
     @param {string} item.imagePath - The image URL of the faculty member.
     @param {string} item.name - The name of the faculty member.
     @param {string} item.title - The title of the faculty member.
     @param {string} item.tagline - The tagline of the faculty member.
     @param {string} item.interestArea - The interest area of the faculty member.
     @param {string} item.office - The office location of the faculty member.
     @param {string} item.website - The website URL of the faculty member.
     @param {string} item.phone - The phone number of the faculty member.
     @param {string} item.email - The email address of the faculty member.
     @param {string} item.twitter - The Twitter username of the faculty member.
     @param {string} item.facebook - The Facebook username of the faculty member.
     */
    renderPeopleFaculty(data) {
        this.$peopleFaculty.html('');

        let $peopleFacultyDiv = $('<div class="img-container"></div>');

        $.each(data.faculty, (index, item) => {

            let $peopleFacultyItem = $(`<img src="${item.imagePath}" alt="
                name: ${item.name} <br> 
                title: ${item.title}  <br>
                tagline: ${item.tagline} <br>
                title: ${item.title} <br>
                interest Area: ${item.interestArea} <br>
                office: ${item.office} <br>
                website: ${item.website} <br>
                phone: ${item.phone} <br>
                email: ${item.email} <br>
                twitter: ${item.twitter} <br>
                facebook: ${item.facebook}<br>
                <br>
                " />
                `);
            $peopleFacultyDiv.popupLightbox({
                width: 600,
                height: 600
            });
            $peopleFacultyDiv.append($peopleFacultyItem);
        });
        this.$peopleFaculty.append($peopleFacultyDiv);
    }

    /**

     Render undergraduate information on the web page.
     @param {Object} data - The data containing undergraduate information.
     @param {Array} data.undergraduate - The array of undergraduate programs.
     @param {string} item.title - The title of the program.
     @param {string} item.degreeName - The degree name of the program.
     @param {string} item.description - The description of the program.
     @param {string} item.concentrations - The concentrations of the program.
     */
    renderUnderGraduate(data) {
        this.$web.html('');
        this.$humanU.html('');
        this.$compU.html('');

        $.each(data.undergraduate, (index, item) => {
            let $card1 = $(`
            <div id="card">
                <div class="front">
                    <h1> ${item.title}</h1>
                </div>
        
                <div class="back"> 
                    <h1> ${item.degreeName}</h1>
                    <p>${item.description}</p> 
                    <p> ${item.concentrations}</p>
                </div>
            </div>`);
            if (index === 0) {
                this.$web.append($card1);
            } else if (index === 1) {
                this.$humanU.append($card1);
            } else {
                this.$compU.append($card1);
            }
            $card1.flip();
        });
    }

    /**
     Renders the graduate program information on the webpage.
     @param {Object} data - An object containing the graduate program information.
     @param {Array} data.graduate - An array of objects representing the available graduate programs.
     @param {string} data.graduate.title - The title of the graduate program.
     @param {string} data.graduate.degreeName - The name of the degree.
     @param {string} data.graduate.description - A brief description of the graduate program.
     @param {string} data.graduate.concentrations - The available concentrations for the graduate program.
     @param {string} data.graduate.availableCertificates - Any available certificates for the graduate program.
     */
    renderGraduate(data) {
        this.$ISMS.html('');
        this.$HMS.html('');
        this.$NMS.html('');
        this.$MS.html('');

        $.each(data.graduate, (index, item) => {
            let availableCertificates = item.availableCertificates ? `<p>${item.availableCertificates}</p>` : '';

            let $card = $(`
            <div id="card">
                <div class="front">
                    <h1> ${item.title}</h1>
                </div>
        
                <div class="back"> 
                    <h1> ${item.degreeName}</h1>
                    <p>${item.description}</p> 
                    <p> ${item.concentrations} ${availableCertificates}  </p>
                </div>
            </div>`);
            if (index === 0) {
                this.$ISMS.append($card);
            } else if (index === 1) {
                this.$HMS.append($card);
            } else if (index === 2) {
                this.$NMS.append($card);
            } else {
                this.$MS.append($card);
            }
            $card.flip();
        });
    }

    /**
     Renders the co-op information on the webpage.
     @param {Object} data - An object containing the co-op information.
     @param {Object} data.coopTable - An object containing information about the co-op table.
     @param {string} data.coopTable.title - The title of the co-op table.
     @param {Array} data.coopTable.coopInformation - An array of objects representing the co-op information.
     @param {string} data.coopTable.coopInformation.employer - The name of the co-op employer.
     @param {string} data.coopTable.coopInformation.degree - The degree related to the co-op.
     @param {string} data.coopTable.coopInformation.city - The city where the co-op takes place.
     @param {string} data.coopTable.coopInformation.term - The term of the co-op.
     */
    renderCoop(data) {
        this.$coop.html('');

        let $coopElement = $(`<h2> ${data.coopTable.title}</h2>
        <table id="myTable" class="display">
            <thead>
                <tr>
                    <th>Employer</th>
                    <th>Degree</th>
                    <th>City</th>
                    <th>Term</th>
                </tr>
            </thead>
            <tbody id="myTableBody">
    
            </tbody>
        </table>
        `);

        this.$coop.append($coopElement);

        $.each(data.coopTable.coopInformation, (index, item) => {
            $('#myTableBody').append(
                `<tr>
                <td>${item.employer}</td>
                <td>${item.degree}</td>
                <td>${item.city}</td>
                <td>${item.term}</td>
            </tr>`
            )
        });

        $(document).ready(function () {

            $(`#myTable`).DataTable();
        });

    }

    /**
     Renders the employment information table on the page.
     @param {Object} data - The data to be rendered on the table.
     @param {Object} data.employmentTable - The employment table information.
     @param {string} data.employmentTable.title - The title of the employment table.
     @param {Array} data.employmentTable.professionalEmploymentInformation - The employment information array.
     @param {string} data.employmentTable.professionalEmploymentInformation[].employer - The name of the employer.
     @param {string} data.employmentTable.professionalEmploymentInformation[].degree - The degree obtained by the employee.
     @param {string} data.employmentTable.professionalEmploymentInformation[].city - The city where the employee is employed.
     @param {string} data.employmentTable.professionalEmploymentInformation[].title - The title of the employee.
     @param {string} data.employmentTable.professionalEmploymentInformation[].startDate - The start date of the employee's employment.
     */
    renderEmployment(data) {
        this.$employment.html('');

        let $employmentElement = $(`<h2> ${data.employmentTable.title}</h2>
        <table id="myTableEmployment" class="display">
            <thead>
                <tr>
                    <th>Employer</th>
                    <th>Degree</th>
                    <th>City</th>
                    <th>Title</th>
                    <th>StartDate</th>
                </tr>
            </thead>
            <tbody id="myTableBodyEmplyment">
    
            </tbody>
        </table>
        `);

        this.$employment.append($employmentElement);

        $.each(data.employmentTable.professionalEmploymentInformation, (index, item) => {
            $('#myTableBodyEmplyment').append(
                `<tr>
            <td>${item.employer}</td>
            <td>${item.degree}</td>
            <td>${item.city}</td>
            <td>${item.title}</td>
            <td>${item.startDate}</td>
            </tr>`
            )
        });

        $(document).ready(function () {

            $(`#myTableEmployment`).DataTable();
        });


    }


}
