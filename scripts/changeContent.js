
    // Remove active color class for the navigation link.
    function removeClass() {

        for (var i = 0; i < 9; i++) {

            document.getElementsByTagName('a')[i].setAttribute("class", "");
        }
    }   
        //Reload the page on about link click.
        function about() {

            location.href = "index.html";
        }

        // List of change content functions for each link.
        //    
        // Change content on Inspector Rebus link click.
        // 1
        function inspectorRebus() {

            var inspectorRebusContent = "<ul>" +
                                            "<h1> List of Inspector Rebus novels in order </h1>" +
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

            //Change content inside the description column.
            document.getElementsByClassName("description-column")[0].innerHTML = inspectorRebusContent;
            removeClass(); 
            
            //Change navigation link color set to active (black).   
            document.getElementsByTagName('a')[1].setAttribute("class", "active");
        }

        // Change content on Jack Harvey link click.
        // 2
        function jackHarvey() {

            var jackHarveyContent = "<ul>" +
                                        "<h1> List of Jack Harvey Novels </h1>" +
                                        "<li> Witch Hunt </li>" +
                                        "<li> Bleeding Heart </li>" +
                                        "<li> Blood Hunt </li>" +
                                    "</ul>";

            document.getElementsByClassName("description-column")[0].innerHTML = jackHarveyContent;
            removeClass(); 
            document.getElementsByTagName('a')[2].setAttribute("class", "active");
        }

        // Change content on Malcolm Fox link click.
        // 3
        function malcolmFox() {

            var malcolmFoxContent = "<ul>" +
                                        "<h1> List of Malcolm Fox Series </h1>" +
                                        "<li> The Complaints </li>" +
                                        "<li> The Impossible Dead </li>" +
                                        "<li> Saints of Shadow Bible </li>" +
                                    "</ul>";
                                    
            document.getElementsByClassName("description-column")[0].innerHTML = malcolmFoxContent;
            removeClass(); 
            document.getElementsByTagName('a')[3].setAttribute("class", "active");
        }

        // Change content on Standalone Novels link click.
        // 4
        function standalone() {

            var standaloneContent = "<ul>" +
                                        "<h1> List of Standalone Novels </h1>" +
                                        "<li> The Flood (1986) </li>" +
                                        "<li> Watchman (1988) </li>" +
                                        "<li> Westwind (1990) </li>" +
                                        "<li> Doors Open (2008) </li>" +
                                    "</ul>";
                                    
            document.getElementsByClassName("description-column")[0].innerHTML = standaloneContent;
            removeClass(); 
            document.getElementsByTagName('a')[4].setAttribute("class", "active");
        }

        // Change content on Plays link click.
        // 5
        function plays() {

            var playsContent = "<ul>" +
                                    "<h1> List of Standalone Plays </h1>" +
                                    "<li> Dark Road (2014) </li>" +
                                "</ul>";
                                    
            document.getElementsByClassName("description-column")[0].innerHTML = playsContent;
            removeClass(); 
            document.getElementsByTagName('a')[5].setAttribute("class", "active");
        }

        // Change content on Short Stories Collection link click.
        // 6
        function shortCollections() {

            var shortCollectionsContent = "<ul>" +
                                            "<h1> List of Short Stories Collection</h1>" +
                                            "<li> Herbert in Motion and Other Stories (1997) </li>" +
                                            "<li> Beggar's Banquet (2002) </li>" +
                                            "<li> The Complete Short Stories (2005) </li>" +
                                            "<li> One City (2006) </li>" +
                                            "<li> Crime Spotting (2009) </li>" +
                                            "<li> Ox-Tales: Earth (2009) </li>" +
                                        "</ul>";
                                    
            document.getElementsByClassName("description-column")[0].innerHTML = shortCollectionsContent;
            removeClass(); 
            document.getElementsByTagName('a')[6].setAttribute("class", "active");
        }

        // Change content on Non-fictions link click.
        // 7
        function nonFictions() {

            var nonFictionsContent = "<ul>" +
                                        "<h1> List of Non-Fictions </h1>" +
                                        "<li> Rebus' Scotland (2004) </li>" +
                                    "</ul>";
                                    
            document.getElementsByClassName("description-column")[0].innerHTML = nonFictionsContent;
            removeClass(); 
            document.getElementsByTagName('a')[7].setAttribute("class", "active");
        }

        // Change content on Graphic Novels link click.
        // 8
        function graphicNovels() {

            var graphicNovelsContent = "<ul>" +
                                            "<h1> List of Graphic Novels </h1>" +
                                            "<li> Dark Entries (2009) </li>" +
                                        "</ul>";
                                    
            document.getElementsByClassName("description-column")[0].innerHTML = graphicNovelsContent;
            removeClass(); 
            document.getElementsByTagName('a')[8].setAttribute("class", "active");
        }

    //Add event listener to each navigation link: change content on click.
    document.getElementsByTagName('a')[0].addEventListener("click", about);
    document.getElementsByTagName('a')[1].addEventListener("click", inspectorRebus);
    document.getElementsByTagName('a')[2].addEventListener("click", jackHarvey);
    document.getElementsByTagName('a')[3].addEventListener("click", malcolmFox);
    document.getElementsByTagName('a')[4].addEventListener("click", standalone);
    document.getElementsByTagName('a')[5].addEventListener("click", plays);
    document.getElementsByTagName('a')[6].addEventListener("click", shortCollections);
    document.getElementsByTagName('a')[7].addEventListener("click", nonFictions);
    document.getElementsByTagName('a')[8].addEventListener("click", graphicNovels);