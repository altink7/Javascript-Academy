# Börsenanwendung Spezifikation

## Beschreibung

Diese Anwendung simuliert den Kauf und Verkauf von Aktien an der Börse. Der Benutzer kann verschiedene Aktien kaufen
oder verkaufen. Ab einem bestimmten Transaktionsvolumen gibt es Rabatte auf die Transaktionsgebühren.

---

## Produkte

### Aktien

- **Apple (AAPL):** EUR 150,00 pro Aktie
- **Tesla (TSLA):** EUR 200,00 pro Aktie
- **Amazon (AMZN):** EUR 100,00 pro Aktie
- **Google (GOOGL):** EUR 120,00 pro Aktie

### Transaktionsgebühren

- **Kaufgebühr:** 2% des Transaktionsvolumens
- **Verkaufsgebühr:** 1% des Transaktionsvolumens

### Rabattbedingungen

- Ab einem Transaktionsvolumen von **EUR 1.000,00** gibt es einen Rabatt von **10% auf die Gebühren**.

---

## Benutzerinteraktion

1. **Aktienauswahl:** Der Benutzer kann beliebig viele Aktien kaufen oder verkaufen.
2. **Transaktionsdetails:** Der Benutzer gibt an, wie viele Einheiten einer Aktie er kaufen oder verkaufen möchte.
3. **Preisberechnung:** Die Anwendung berechnet den Gesamtpreis der Transaktion und fügt die Gebühren hinzu.
4. **Rabattberechnung:** Wenn die Bedingungen erfüllt sind, wird der Rabatt auf die Gebühren angewendet.
5. **Belegausgabe:** Die Anwendung gibt einen Transaktionsbeleg aus, der folgende Informationen enthält:
    - Gewählte Aktie(n) mit Preis und Menge
    - Transaktionsart (Kauf oder Verkauf)
    - Gebühren und eventuelle Rabatte
    - Gesamtsumme der Transaktion

---

## Beispielausgabe

```
Transaktionsbeleg
-----------------
Aktie: Apple (AAPL) - 5 Einheiten - EUR 750,00
Aktie: Tesla (TSLA) - 3 Einheiten - EUR 600,00
Art der Transaktion: Kauf
Transaktionsvolumen: EUR 1.350,00
Gebühren: EUR 27,00
Rabatt: EUR 2,70
Gesamtsumme: EUR 1.374,30
```

---

## Technische Anforderungen

- Die Anwendung muss **objektorientiert** aufgebaut sein.
- Folgende Klassen sind erforderlich:
    - `Stock`: Repräsentiert eine Aktie mit Name und Preis.
    - `Transaction`: Beinhaltet die Details einer Transaktion (Art, Menge, Gebühren, Rabatt).
    - `StockMarket`: Beinhaltet die Logik zur Berechnung der Preise, Gebühren und Rabatte.
- Optional: Der Benutzer kann den aktuellen Marktwert seines Portfolios anzeigen lassen.

---

## Zusatzanforderung

Erstellen Sie die Anwendung so, dass sie leicht erweiterbar ist, z. B. für die Integration von Kryptowährungen oder
andere Anlageklassen.
