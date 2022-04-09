let width = window.innerWidth;
let height = window.innerHeight;
let h = height - 1

function move(element) {
    element.style.position = 'fixed'


    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    // function that sets the start position of element
    function moveWithArrowKeys(left, bottom, callback) {
        // if (callback) {
        //     callback()
        // }
        let direction = null;
        let x = 100;
        let y = 250;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
            // x and y will increase or decrease based on the direction character travels
        function moveCharacter() {

            // Math.max(x) = width - 75
            if (direction === 'west') {
                x = x - 1
            }
            if (direction === 'north') {
                y = y + 1
            }
            if (direction === 'east') {
                x = x + 1
            }
            if (direction === 'south') {
                y = y - 1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'

            // *bonus* setting values for x and y so element can not go off screen
            if (x === width - 50) {
                x = width - 51
            }
            if (x === 0) {
                x = 1
            }
            if (y === height - 75) {
                y = height - 76
            }
            if (y === 100) {
                y = 101
            }

        }

        // call moveCharacter every millisecond 
        setInterval(moveCharacter, 1);

        // adding listener, when arrow key is pressed element will move in that direction
        document.addEventListener('keydown', function(e) {
            if (e.repeat) return;
            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            callback(direction)

        })

        // when arrow key is not being pressed element will stop moving
        document.addEventListener('keyup', function(e) {

            direction = null
            callback(direction)

        })

    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }

}