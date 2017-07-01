var world = (function() {

    var _$startButton;
    var _$stopButton;

    var _world = {
        init: _init
    };

    return _world;

    function _init() {

        jungle.init();
        engine.init(jungle.getEntities());

        // init our game world
        _$startButton = $('#startButton');       
        _$stopButton = $('#stopButton');  

        _$startButton.attr('disabled', false);    
        _$startButton.on('click', _start);

        _$stopButton.attr('disabled', true); 
        _$stopButton.on('click', _stop);    
    }

    function _start() {
        _$startButton.attr('disabled', true);
        _$stopButton.attr('disabled', false);
        engine.start();
    }

    function _stop() {
        engine.stop();
        _$stopButton.attr('disabled', true);
        _$startButton.attr('disabled', false);
    }
})();

$(document).ready(world.init);


