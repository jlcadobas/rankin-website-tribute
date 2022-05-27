
    function inspectorRebus() {

        var inspectorRebusContent = "<ul>" +
                                        "<h1 class=\"title\"> Inspector John Rebus </h1>" +
                                        "<li id=\"nani\"> Knots and Crosses (1987) </li>" +
                                        "<li> Hide and Seek (1991) </li>" +
                                        "<li> Tooth and Nail / Wolfman (1992) </li>" +
                                        "<li> Strip Jack (1992) </li>" +
                                        "<li> The Black Book (1993) </li>" +
                                        "<li> Mortal Causes (1994) </li>" +
                                        "<li> Let It Bleed (1995) </li>" +
                                        "<li> Black and Blue (1997) </li>" +
                                        "<li> The Hanging Garden (1998) </li>" +
                                        "<li> Dead Souls    (1999) </li>" +
                                        "<li> Set in Darkness	(2000) </li>" +
                                        "<li> The Falls	(2001) </li>" +
                                        "<li> Resurrection Men	(2002) </li>" +
                                        "<li> A Question of Blood	(2003) </li>" +
                                        "<li> Fleshmarket Alley / Fleshmarket Close	(2004) </li>" +
                                        "<li> The Naming of the Dead	(2006) </li>" +
                                        "<li> Exit Music	(2007) </li>" +
                                        "<li> Standing in Another Man's Grave	(2012) </li>" +
                                        "<li> Saints of the Shadow Bible	(2013) </li>" +
                                        "<li> Even Dogs in the Wild	(2015) </li>" +
                                        "<li> Rather Be the Devil	(2016)	 </li>" +
                                        "<li> In a House of Lies	(2018) </li>" +
                                        "<li> A Song for the Dark Times	(2020)	 </li>" +
                                    "</ul>";

        document.getElementsByClassName("description-column")[0].innerHTML = inspectorRebusContent;
        document.getElementsByTagName('a')[1].setAttribute("class", "active");
    }

    //Change content: Inspector Rebus link is clicked.
    document.getElementsByTagName('a')[1].addEventListener("click", inspectorRebus);

    

    