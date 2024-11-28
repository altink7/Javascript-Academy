/**
 * Hier finden sich unsere Funktionen, mit denen wir das Schachbrett erzeugen
 * Die idee ist, eine Steuernde Funktion zu verwenden, die die Rahmenbedingungen schafft
 * und dann die Ausführung startet.
 */

/**
 * Dies ist unsere Steuernde Funktion
 */
function createChessBoard() {
    let boardView = document.getElementById('chessBoard-view');
    boardView.innerHTML = "";

    let labelsData = {
        "rowLabels": [1, 2, 3, 4, 5, 6, 7, 8],
        "colLabels": ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    };
    drawBoard(boardView, labelsData);
}

/**
 * Diese Funktion kümmert sich nun um das gesamte Zeichnen des Schachbretts
 * @param HTMLTabelElement boardView
 * @param Object labels
 */
function drawBoard(boardView, labels) {

    //zunächst fügen wir eine Zeile mit der Beschrifung der Grundreihe durch
    //und zwar oben, was wir über den zweiten parameter steuern
    //der erste parameter beinhaltet die Beschriftung je Feld
    boardView.append(getLabelRow(labels.colLabels, true));

    //nun durchlaufen wir alle Zeielen
    for (let i in labels.rowLabels) {

        //wir stellen Fest ob wir eine gerade Zeile haben
        let rowIsEven = i % 2 == 0 ? true : false;
        //die neue zeile wird erzeugt und gleich unserer tabelle hinzugefügt
        //als parameter übergeben wir die Anzahel der Felder, die Beschrifunt an der Seite und ob es sich um eine gerade
        //oder ungerade Zeile handelt
        boardView.append(getFieldsRow(labels.colLabels.length, labels.rowLabels[i], rowIsEven));

    }

    //zum schluss fügen wir unten auch noch eine Beschriftungszeile hinzu
    boardView.append(getLabelRow(labels.colLabels, false));

}

/**
 * Deise Funktion erzeugt ein TR Element, welches die Beschriftung der Spalten beinhaltet
 * Wahlweise kann man angeben ob diese oben uoder unten angefügt wird.
 * Ebenfalls werden die Beschrftungseinträge übergeben (also A - H z.b.)
 * @param String labels
 * @param Boolean top
 * @returns {HTMLTableRowElement}
 */
function getLabelRow(labels, top) {

    //wir erzeugen ein tr element für die Zeile
    let tr = document.createElement("tr");
    //und ein leeres TD als Ecke (links oben oder links unten)
    //weil wir ja seitliche links eine Spalte mit den Zahlen Beschriftungen haben werden.
    let tdCorner = document.createElement('td');
    //und fügen diese der Zeile hinzu
    tr.append(tdCorner);

    //dann durchlaufen wir die Labels
    for (let i in labels) {
        //und erzeugen jeweils eine Tabellen Zelle
        let td = document.createElement('td');

        //in die wir die Beschriftung schreiben
        td.innerText = labels[i];
        //wir fügen eie CSS Klasse hinzu, die wir im CSS für die Beschriftungsfelder
        //vorbereitet haben
        td.classList.add("label");

        //je nachdem ob die Beschrifutng oben oder unten hinzugefügt wird,
        //fügen wir eine CSS Klasse hinzu die uns einen Rand so zeichnet, dass das
        //Schachbrett von einem Rand umfasst wird
        if (top) {
            td.classList.add("border-bottom");
        } else {
            td.classList.add("border-top");
        }

        //noch die Zelle zur Zeile hinzufügen
        tr.append(td);
    }

    //rechts brauchen wir auch eine leere Ecke, weil wir darunter die
    //Beschriftung auf der rechten Seite haben werden.
    tr.append(tdCorner.cloneNode(true));
    return tr;
}

/**
 * Diese Funktion zeichnet eine Zeile im Schachbrett
 * und beschriftet diese links und rechts
 * @param int fieldCount
 * @param string label
 * @param bool rowIsEven
 * @returns {HTMLTableRowElement}
 */
function getFieldsRow(fieldCount, label, rowIsEven) {

    //zuerst bruachen wir ein TR element für die HTML Tabellen Zeile
    let tr = document.createElement("tr");
    //dann fügen wir die Seitliche Beschriftung hinzu (siehe dazu utnen den Aufruf)
    tr.append(getSideLabel(label, true));

    //nun erzeugen wir soviele Felder, wie die Anzahl eben ist
    for (let i = 0; i < fieldCount; i++) {
        //und stellen am Anfang fest ob die Spalte gerade oder ungerade ist
        let colIsEven = i % 2 == 0 ? true : false;
        let td = document.createElement('td');

        //Wir wollten dies mit einem Switch lösen
        //Achten Sie darauf wie gut die Fälle lesbar sind, weil wir die Variablen gut benannt haben
        //mittels switch ( T R U E  ) haben wir die möglichkeit allerhand Fälle zu durchlaufen
        //je nach Fall fügen wir die even oder odd CSS Klasse hinzu
        switch (true) {
            case (rowIsEven && colIsEven):
                td.classList.add("even");
                break;
            case (!rowIsEven && !colIsEven):
                td.classList.add("even");
                break;
            case (!rowIsEven && colIsEven):
                td.classList.add("odd");
                break;
            case (rowIsEven && !colIsEven):
                td.classList.add("odd");
                break;
            //es gibt keinen default fall.
        }

        //eine andere elegante Lösung wäre
        /*
        if(rowIsEven == colIsEven) {
            td.classList.add("even");
        } else {
            td.classList.add("odd");
        }*/

        //dann ergänzen wir noch die gemeiname Klasse für Flder
        td.classList.add('board-field');

        //und fügen die Zelle der Zeile hinzu.
        tr.append(td);
    }

    //als Abshcluss beschriften wir die Zeile auch auf der rechten Seite
    tr.append(getSideLabel(label, false));
    return tr;
}

/**
 * Diese Funktion erzeugt eine Zelle mit einer Beschriftung
 * und kann zwischen Links und Rechts untercheiden
 * @param string label
 * @param bool left
 * @returns {HTMLTableDataCellElement}
 */
function getSideLabel(label, left) {
    //Zelle erstellen
    let td = document.createElement('td');
    //Beschriften
    td.innerText = label;
    //die vorbereitete Label CSS Klasse vergeben
    td.classList.add("label");
    //und jenachdem ob die Zelle links oder rechts eingefügt wird
    //geben wir einen rahmen dazu, der in der Gesamtheit das Schachbrett umfasst
    if (left) {
        td.classList.add("border-right");
    } else {
        td.classList.add("border-left");
    }

    //rückgabewert
    return td;
}