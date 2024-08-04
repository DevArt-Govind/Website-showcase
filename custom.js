document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.accordion-item h3');

    items.forEach(item => {
        item.addEventListener('click', function () {
            const parent = this.parentElement;
            const isActive = parent.classList.contains('active');
            const allItems = document.querySelectorAll('.accordion-item');

            // Remove active and inactive classes from all items
            allItems.forEach(item => {
                item.classList.remove('active');
                item.classList.remove('inactive');
            });

            // If the clicked item was not already active, activate it and make others inactive
            if (!isActive) {
                parent.classList.add('active');
                allItems.forEach(item => {
                    if (!item.classList.contains('active')) {
                        item.classList.add('inactive');
                    }
                });
            }
        });
    });
});


// typing effect
var typingElement = document.querySelector(".typing-text");
var typeArray = ["developers", "markets", "bloggers", "designers"];
var index = 0,
    isAdding = true,
    typeIndex = 0;

function playAnim() {
    setTimeout(
        function () {
            typingElement.innerText = typeArray[typeIndex].slice(0, index);
            if (isAdding) {
                if (index >= typeArray[typeIndex].length) {
                    isAdding = false;
                    // If text typed completely, wait 2s before starting to remove it.
                    setTimeout(function () {
                        playAnim();
                    }, 2000);
                    return;
                } else {
                    // Continue to typing text by increasing index
                    index++;
                }
            } else {
                // If removing
                if (index === 0) {
                    isAdding = true;
                    //If text removed completely, move on to next text by increasing typeIndex
                    typeIndex++;
                    if (typeIndex >= typeArray.length) {
                        // Turn to beginning when reached to last text
                        typeIndex = 0;
                    }
                } else {
                    // Continue to removing text by decreasing index
                    index--;
                }
            }
            // Call the function always
            playAnim();
        },
        isAdding ? 120 : 60
    );
}

// Start typing text
playAnim();
