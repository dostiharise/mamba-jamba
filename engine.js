var engine = (function() {

    var _interval = 1000/60;
    var _timer;

    var _entities;

    return {
        init: _init,
        start: _start,
        stop: _stop
    }

    function _init(entities) {
        _entities = entities;
    }

    function _render() {
        _entities.forEach(function(entity){
            entity.render();
        });
    }

    function _run() {
        console.log("baag mamba baag...");
        _render();
    }

    function _start() {
        //starts the game
        console.log("Start engine...");
        _timer = window.setInterval(_run, _interval);
    }

    function _stop() {
        //stops the game
        console.log("Stopping engine...");
        window.clearInterval(_timer);
    }


})();