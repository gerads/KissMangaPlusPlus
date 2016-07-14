// ==UserScript==
// @name KissManga PlusPlus
// @namespace gerads
// @description Add keyboard shortcuts for KissManga
// @include http://kissmanga.com/*
// @grant none
// @icon https://raw.githubusercontent.com/gerads/KissMangaPlusPlus/master/icon.png
// @updateURL https://raw.githubusercontent.com/gerads/KissMangaPlusPlus/master/kissmangaplusplus.user.js
// @downloadURL https://raw.githubusercontent.com/gerads/KissMangaPlusPlus/master/kissmangaplusplus.user.js
// @version 1.3a
// ==/UserScript==

function doc_keyUp(e) {
    if (document.activeElement.nodeName != 'INPUT') {
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
            switch (e.keyCode) {
                case 74:
                    //j - previous chapter
                    var prev = document.getElementsByClassName('btnPrevious');
                    window.location.href = prev[0].parentNode.href;
                    break;
                case 75:
                    //k - next chapter
                    var next = document.getElementsByClassName('btnNext');
                    window.location.href = next[0].parentNode.href;
                    break;
                case 72:
                    //h - home
                    window.location.href = "/";
                    break;
                case 76:
                    //l - go to bookmark list
                    window.location.href = "/BookmarkList";
                    break;
                case 66:
                    //b - bookmark (only usable in Manga information page)
                    var elements;
                    if(document.getElementById('spanBookmarkAdd').style.display == "inline"){
                        elements = document.getElementById('btnAddBookmark');
                        elements.click();
                    } else {
                        elements = document.getElementById('btnRemoveBookmark');
                        elements.click();
                    }
                    break;
                case 83:
                    //s - search by manga
                    var searchText = prompt("Enter text to search", "");
                    document.getElementById('keyword').value = searchText;
                    var search = document.getElementById('imgSearch');
                    search.click();
                    break;
                case 67:
                    //c - go to comment section
                    document.getElementById('disqus_thread').scrollIntoView();
                    break;
                case 84:
                    //t - go to top
                    document.getElementById('navsubbar').scrollIntoView();
                    break;
                default:
                    //some key we don't have mapped to anything
                    break;
            }
        }
    }
}
document.addEventListener('keyup', doc_keyUp, false);
