
    //Images should be on the same sizes.
    //Array contains three images in the image/ folder,   

images = [

    "images/gettyimages-1230813722-2048x2048 (1).jpg",
    "images/gettyimages-141973575-2048x2048 (1).jpg",
    "images/gettyimages-121061719-2048x2048 (1).jpg"
    ];

    //Changes picture on each button click.

    index = 1;
    
    function nextPicture() {

            var nextSrc = document.getElementById("change-image");

                // setAttribute gets parameters (attribute, value)
                // updates the attribute of the element with 'change-image' id.

                //gets the value of image index in the array
                nextSrc.setAttribute("src", images[index]);

                if (index > 2) {
                    
                    index = 0;
                    nextSrc.setAttribute("src", images[index]);
                }

                index++;
        }

    //Behaves exactly like the previous function but loops back to the last image.    
    function prevPicture () {

            var prevSrc = document.getElementById("change-image");

                prevSrc.setAttribute("src", images[index]);

                if (index < 0) {

                    index = 2;
                    prevSrc.setAttribute("src", images[index]);
                }
                
                index--;
    }





