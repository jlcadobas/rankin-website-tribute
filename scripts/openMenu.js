
    var state = "close";

    function openMenu() {

        if (state == "close") {

            document.getElementsByClassName('nav-column')[0].setAttribute("class", "nav-column open-nav");

            document.getElementsByTagName('input')[0].setAttribute("class", "prev remove-input");
            document.getElementsByTagName('input')[1].setAttribute("class", "next remove-input");

            document.getElementsByClassName('description-column')[0].setAttribute("class", "description-column half-width");
            document.getElementsByClassName('picture-column')[0].setAttribute("class", "picture-column half-width")

            for (var i = 0; i <= 9; i++) {

                document.getElementsByTagName('li')[i].style.display = "block";
            }

            state = "open";
        }

        else {

            document.getElementsByClassName('nav-column')[0].setAttribute("class", "nav-column");

            document.getElementsByTagName('input')[0].setAttribute("class", "prev");
            document.getElementsByTagName('input')[1].setAttribute("class", "next");

            document.getElementsByClassName('description-column')[0].setAttribute("class", "description-column");
            document.getElementsByClassName('picture-column')[0].setAttribute("class", "picture-column");

            for (var j = 0; j <= 9; j++) {

                document.getElementsByTagName('li')[j].style.display = "none";
            }

            state = "close"
        }
    }

    document.getElementsByClassName('menu')[0].addEventListener("click", openMenu);
    document.getElementsByClassName('menu')[0].addEventListener("click", nani);