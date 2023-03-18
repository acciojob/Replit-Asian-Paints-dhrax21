const gridItems = document.querySelectorAll('.grid-item');

        function changeColor(block_id, colour) {
            const block = document.getElementById(block_id);
            block.style.backgroundColor = colour;
        }

        function resetColors() {
            gridItems.forEach((item) => {
                item.style.backgroundColor = 'transparent';
            });
        }

        document.getElementById('change-button').addEventListener('click', () => {
            const block_id = document.getElementById('block_id').value;
            const colour_id = document.getElementById('colour_id').value;
            const colour = document.getElementById(colour_id).value;

            resetColors();
            changeColor(block_id, colour);
        });

        document.getElementById('reset-button').addEventListener('click', () => {
            resetColors();
        });