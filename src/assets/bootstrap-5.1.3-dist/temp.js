
function filterSearch() {
    var a, l, b, i, j, c, ahref, s, tr, td;
    c = document.getElementById("searchstring").value.toUpperCase();
    a = document.getElementById("jsreftable").getElementsByClassName("ws-table-all");
    //h = document.getElementById("jsreftable").getElementsByTagName("h2");
    for (j = 0; j < a.length; j++) {
        s = 0;
        tr = a[j].getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                cc = td.textContent;
                if (cc.toUpperCase().indexOf(c) > -1) {
                    tr[i].style.display = "";
                    s = 1;
                } else {
                    tr[i].style.display = "none";
                }
            }
            if (i == (tr.length - 1)) {
                if (s == 0) {
                    a[j].style.display = "none";
                    //      h[j].style.display = "none";
                } else {
                    a[j].style.display = "";
                    //    h[j].style.display = "";
                    fixStripes(tr);
                }
            }
        }
    }
}

function fixStripes(a) {
    var i, c = 0, n = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i].style.display != "none") {
            if (c == 0) {
                a[i].className = "w3-white";
                c = 1;
            } else {
                a[i].className = "ws-grey";
                c = 0;
            }
        }
    }
}
