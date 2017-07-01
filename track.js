var track = (function() {

    var _x = 0;

    var _track = {
        init: _init,
        getPosition: _getPosition,
        render: _render
    };

    return _track;

    function _init() {
        _$entitySpan = $('#track');
        _$entitySpan.animate({'background-position-x': '+10%'}, 10000, 'linear');
    }

    function _getPosition() {
        return {
            x: _x,
            y: _y
        };
    }

    function _render() {
        console.log("baag track...");

        if(_x > 100) {
            _x = 0;
        }

        _x++;

        _$entitySpan.css('background-position-x', _x+'%');
    }

})();