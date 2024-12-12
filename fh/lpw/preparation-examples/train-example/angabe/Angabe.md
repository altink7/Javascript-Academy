# Train Ticket Booking Application

This web application allows users to book train tickets, select their travel preferences, and receive a booking
confirmation with a receipt.

---

## Features

### Input Form

The form includes:

1. **Personal Information**:
    - First Name
    - Last Name

2. **Travel Details**:
    - Travel Date
    - Destination (e.g., City A, City B, City C, City D)
    - Class (Economy, Business, First Class)

3. **Add-on Services**:
    - WiFi: +€5
    - Meal: +€10
    - Extra Legroom: +€15

4. **Price Calculation**:
    - Economy: €50
    - Business: €100
    - First Class: €200

---

### Receipt Example 1: Economy Class with Add-ons

**Booking Details:**

- Name: John Doe
- Travel Date: 2024-12-15
- Destination: City A
- Class: Economy
- Add-ons: WiFi, Meal

**Price Breakdown:**

- Base Price (Economy): €50
- WiFi: +€5
- Meal: +€10
- **Total: €65**

**Output Message:**

```
Thank you, John Doe, for booking your train ticket to City A on 2024-12-15. 
You have chosen Economy Class with the following add-ons: WiFi, Meal. 
Your total is €65. Have a pleasant journey!
```

---

### Receipt Example 2: First Class with No Add-ons

**Booking Details:**

- Name: Jane Smith
- Travel Date: 2024-12-20
- Destination: City D
- Class: First Class
- Add-ons: None

**Price Breakdown:**

- Base Price (First Class): €200
- Add-ons: €0
- **Total: €200**

**Output Message:**

```
Thank you, Jane Smith, for booking your train ticket to City D on 2024-12-20. 
You have chosen First Class with no add-ons. 
Your total is €200. Enjoy your luxurious journey!
```

---

### Receipt Example 3: Business Class with All Add-ons

**Booking Details:**

- Name: Alex Brown
- Travel Date: 2024-12-25
- Destination: City C
- Class: Business
- Add-ons: WiFi, Meal, Extra Legroom

**Price Breakdown:**

- Base Price (Business): €100
- WiFi: +€5
- Meal: +€10
- Extra Legroom: +€15
- **Total: €130**

**Output Message:**

```
Thank you, Alex Brown, for booking your train ticket to City C on 2024-12-25. 
You have chosen Business Class with the following add-ons: WiFi, Meal, Extra Legroom. 
Your total is €130. Have a comfortable journey!
```

---

### Future Enhancements

- Add discount codes for promotional pricing.
- Display estimated travel time for selected destinations.
- Include an option for round-trip booking.
