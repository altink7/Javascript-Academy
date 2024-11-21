# Tutorium Beispiel: Geschäftskonto anlegen

In diesem Tutorium soll ein Formular erstellt werden, das folgende Anforderungen erfüllt:

**nutze bitte für js externe Dateien**
CSS ist vorgegeben und muss nicht verändert werden, nur über Javascript eventuell geändert werden.

---

## **Formularfelder**

1. **Vorname**:
    - Pflichtfeld (darf nicht leer sein).

2. **Nachname**:
    - Pflichtfeld (darf nicht leer sein).

3. **Telefonnummer**:
    - Pflichtfeld (darf nicht leer sein).

4. **Geschlecht**:
    - Auswahl über Radio-Buttons mit den Optionen:
        - Männlich
        - Weiblich
        - Divers

5. **Land**:
    - Dropdown-Menü mit den Auswahlmöglichkeiten:
        - Deutschland (DE)
        - Österreich (AT)
        - Schweiz (CH)

6. **Geschäftsbedingungen**:
    - Checkbox mit folgendem Text:
        - "Ich akzeptiere die Geschäftsbedingungen"

7. **Einkommen**:
    - Pflichtfeld (darf nicht leer sein).
    - Der Wert muss größer als 500 sein.

---

## **Validierungsanforderungen**

1. Das Formular soll validiert werden.
2. Bei Fehlern sollen alle Fehlermeldungen als zusammengesetzter Text angezeigt werden, z. B.:
    - "Vorname darf nicht leer sein, Nachname darf nicht leer sein, Telefonnummer darf nicht leer sein,
      Einkommen muss höher als 500 sein."
3. Wenn alle Felder korrekt ausgefüllt sind:
    - Eine Erfolgsmeldung wird angezeigt.
    - Der Hintergrund des Formulars ändert sich auf **grün**.

---

## **Zusätzliche Funktion**

1. Ein Button mit der Bezeichnung **"Geschäftskonto anzeigen"** soll hinzugefügt werden.
2. Beim Klick auf den Button:
    - Soll das geschäftskonto angezeigt werden. mit alle Daten die im Formular eingegeben wurden.

---

## **Hinweis**

- Überlegen Sie, ob der Einsatz einer Klasse (ECMAScript 6) für die Formularvalidierung sinnvoll ist, und implementieren
  Sie für mind. ein Objekt!
