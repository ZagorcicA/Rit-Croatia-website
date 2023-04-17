/**
 * A jQuery plugin to toggle dark mode on and off.
 * @function darkModeOnnOff
 * @memberof jQuery.fn
 */
(function ($) {

    /**
     * Toggles the dark-mode class on the body element when the button is clicked.
     * @method clickHandler
     * @inner
     * @memberof jQuery.fn.darkModeOnnOff
     */
    $.fn.darkModeOnnOff = function () {
        this.click(function () {
            $('body').toggleClass('dark-mode');
        });
    };
})(jQuery);
