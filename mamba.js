var mamba = (function() {

    var _x = 0;
    var _y = 300;

    var _isUp = false;

    var _$entitySpan;

    var _mamba = {
        init: _init,
        getPosition: _getPosition,
        render: _render
    };

    return _mamba;

    function _init() {
        _$entitySpan = $('#mamba');
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
        console.log("baag mamba...");

        if(_y >= 300) {
            _isUp = false;
        } else if(_y <= 200) {
            _isUp = true;
        }

        if(_isUp) {
            _y++;
        } else {
            _y--;
        }

        _$entitySpan.css('top', _y+"px");
    }

})();