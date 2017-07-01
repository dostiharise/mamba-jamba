var jungle = (function() {

    var _currentState = 'STOPPED';

    var _entities = [];

    var _jungle = {
        init: _init,
        getEntities: _getEntitites,
        getState: _getState()
    };

    return _jungle;

    function _init() {
        track.init();
        _entities.push(track);

        mamba.init();
        _entities.push(mamba);

        eagle.init();
        _entities.push(eagle);

        mongoose.init();
        _entities.push(mongoose);
    }

    function _getEntitites() {
        return _entities;
    }

    function _getState() {
        return _currentState;
    }

})();