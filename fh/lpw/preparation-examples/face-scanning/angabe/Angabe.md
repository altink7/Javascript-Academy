# Face Scanning Web Application

This web application is designed for a company's face scanning system. It facilitates onboarding by collecting user data
and providing appropriate feedback based on the user's role and department.

---

## Features

### Input Form

The form includes the following fields:

1. **Surname**: Text input
2. **Lastname**: Text input
3. **Birthdate**: Date picker
4. **Onboarding ID**: Text input
5. **Role**: Dropdown with the following options:
    - Employee
    - Manager
    - CEO
    - Intern
    - Admin
6. **Department**: Dropdown with the following options:
    - HR
    - IT
    - Sales
    - Marketing
    - Finance
    - **(Optional)** If the selected role is CEO, the Department field is not required.

---

### Processing

1. **On Submit**:
    - The entire screen background changes to **green**.
    - All input fields are cleared.

2. **Output Message**:
    - **For Employee and Intern**:
      ```
      Welcome to the Company, {Surname} {Lastname} from {Department}. You need to face your Scan for Identification.
      ```
    - **For Admin and CEO**:
      ```
      Welcome to the Company, {Surname} {Lastname} from {Department}. You are a {Role} and have access to all Areas.
      ```

3. After displaying the message, the application automatically resets to the input form, ready for the next person.

---

Add anything extra where it makes sense, also use Object Oriented Programming principles if it makes sense, it is up to
you :) 