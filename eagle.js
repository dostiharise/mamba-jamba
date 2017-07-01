var eagle = (function() {

    var _x = 0;
    var _y = 0;

    var _eagle = {
        init: _init,
        getPosition: _getPosition,
        render: _render
    };

    return _eagle;

    function _init() {
        _$entitySpan = $('#eagle');
    }

    function _getPosition() {
        return {
            x: _x,
            y: _y
        };
    }

    function _render() {
        console.log("baag eagle...");
    }

})();