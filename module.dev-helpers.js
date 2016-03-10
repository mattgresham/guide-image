window.development = window.development || {};

window.development.DEVHelpers = (function() {
    'use strict';

    /**
    * Declare variables
    */

    var _isDevGuideShowing = false;
    var _guideLocation = '../images/placeholders/guide.png';
    var _keysPressed = [];
    var _keysRequired = 2;
    var _keyFirst = 17;
    var _keySecond = 71;

    /**
     * Initialise the modules event handlers and variables.
     */

    function init() {

        document.onkeydown = function(event) {
            return development.DEVHelpers.showGuideImage(event);
        };

        document.onkeyup = function(event) {
            return development.DEVHelpers.showGuideImage(event);
        };
    }

    // Self initialise this module
    init();

    /**
     * Determines whether to toggle the display of the guide image based on 
     * whether the declared keys are being pressed.
     *
     * @param  event  The triggered event object.
     */

    function showGuideImage(event) {
        var _indexOfKey = _keysPressed.indexOf(event.which);

        if (event.type === 'keydown') {
            if (_indexOfKey === -1) {
                _keysPressed.push(event.which);
            }

            if (_keysPressed.length === _keysRequired &&
                _keysPressed.indexOf(_keyFirst) !== -1 &&
                _keysPressed.indexOf(_keySecond) !== -1)
            {
                document.body.style.background = _isDevGuideShowing ? '' : 'url(' + _guideLocation + ') no-repeat';
                document.body.style.webkitFilter = _isDevGuideShowing ? '' : 'invert(100%) opacity(50%)';

                _isDevGuideShowing = !_isDevGuideShowing;
            }

        } else if (_indexOfKey !== -1) {
            _keysPressed.splice(_indexOfKey, 1);
        }
    }

    /**
     * Returns the functions that will be publicly accessable.
     *
     * @return  The public methods object.
     */

    return {
        init: init,
        showGuideImage: showGuideImage,
    };
 
})();
