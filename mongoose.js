var mongoose = (function() {

    var _x = 600;
    var _y = 0;

    var _$entitySpan;

    var _mongoose = {
        init: _init,
        getPosition: _getPosition,
        render: _render
    };

    return _mongoose;

    function _init() {
        _$entitySpan = $('#mongoose');
        _$entitySpan.css('left', _x);
        _$entitySpan.css('top', _y);
    }

    function _getPosition() {
        return {
            x: _x,
            y: _y
        };
    }

    function _render() {
        console.log("baag mongoose...");
        _$entitySpan.toggleClass('dance');
    }

})();