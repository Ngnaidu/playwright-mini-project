# Playwright UI + API Automation Mini Project

## 📌 Project Overview

This project demonstrates **end-to-end UI and API automation using Playwright**.
It covers essential automation concepts including UI testing, API testing, assertions, locators, waits, data-driven testing, API chaining, and performance validation.

The framework is structured using **Page Object Model (POM)** and **fixtures** to improve code reusability and maintainability.

---

# 🧠 Objective

The objective of this project is to build a **Playwright automation framework** that validates both UI and backend APIs while following best practices such as:

* Modular project structure
* Reusable components
* Data-driven testing
* Independent test cases
* Real behavior validation

---

# 📁 Project Structure

```
playwright-mini-project
│
├── tests/
│   ├── ui.spec.js        # UI automation tests
│   ├── api.spec.js       # API automation tests
│   └── e2e.spec.js       # End-to-end workflow tests
│
├── pages/
│   └── appPages.js       # Page Object Model
│
├── fixtures/
│   └── testSetup.js      # Reusable test setup
│
├── test-data/
│   └── data.json         # External test data
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# ⚙️ Technologies Used

* Playwright
* JavaScript
* Node.js
* Git
* GitHub

---

# 🌐 Websites Used for Testing

UI Testing:

* https://the-internet.herokuapp.com
* https://www.saucedemo.com
* https://demo.playwright.dev/todomvc

API Testing:

* https://jsonplaceholder.typicode.com
* https://reqres.in
* https://dummyjson.com

---

# 🖥 UI Test Scenarios

### 1️⃣ Page Load Validation

* Open application
* Validate page title
* Verify main heading visibility

### 2️⃣ Locator Validation

Different locator strategies were implemented:

* Text locator
* Role locator
* CSS locator

### 3️⃣ User Actions

Automation of common UI interactions:

* Enter text
* Click button
* Select dropdown value
* Toggle checkbox

### 4️⃣ Assertions

Validation checks such as:

* Element visibility
* Text validation
* URL validation
* Attribute validation

### 5️⃣ Waits & Dynamic Content

Handled asynchronous content loading using Playwright's auto-waiting.

### 6️⃣ Login Flow

* Enter valid credentials
* Submit login form
* Validate successful navigation

### 7️⃣ Negative Login

* Enter invalid credentials
* Validate error message

### 8️⃣ Complex UI Handling

Handled advanced browser interactions:

* JavaScript alerts
* Iframes
* New browser tabs

### 9️⃣ Data Driven UI Test

Used external JSON test data to run tests with multiple inputs.

### 🔟 Network Validation

Verified that UI actions trigger expected network requests.

---

# 🔗 API Test Scenarios

### 1️⃣ GET Request

Fetch data and validate:

* Status code
* Response structure

### 2️⃣ POST Request

Create new resource and validate returned data.

### 3️⃣ PUT / PATCH Request

Update existing resource and verify updated fields.

### 4️⃣ DELETE Request

Delete a resource and validate response.

### 5️⃣ Query Parameters

Send request with filters and validate returned results.

### 6️⃣ Response Validation

Validate:

* status
* headers
* JSON structure
* data types

### 7️⃣ Negative API Test

Call invalid endpoints and verify error responses.

### 8️⃣ API Chaining

Use response data from one API request in another request.

### 9️⃣ Data Driven API Test

Execute API tests using multiple IDs from JSON test data.

### 🔟 Performance Check

Measure API response time and validate acceptable performance.

---

# 🔄 End-to-End Test Flow

### Complete User Flow

1. Open application
2. Perform login
3. Execute main user action
4. Validate final result

### Negative End-to-End Flow

1. Attempt login with invalid credentials
2. Validate system error handling

---

# 🧩 Framework Design

## Page Object Model (POM)

All page locators and reusable methods are maintained in:

```
pages/appPages.js
```

This improves:

* maintainability
* code reuse
* readability

---

## Fixtures

Reusable setup logic such as opening base URL and common configuration is handled using:

```
fixtures/testSetup.js
```

---

## Test Data

External JSON data is stored in:

```
test-data/data.json
```

This enables **data-driven testing**.

Example:

```
valid credentials
invalid credentials
API IDs
form inputs
```

---

# ▶️ How to Run the Project

### Install dependencies

```
npm install
```

### Run all tests

```
npx playwright test
```

### Run specific test file

```
npx playwright test tests/ui.spec.js
```

### View HTML report

```
npx playwright show-report
```

---

# 📊 Concepts Covered

* UI Automation
* API Automation
* Assertions
* Locators
* User Actions
* Wait Handling
* Negative Testing
* Data Driven Testing
* API Chaining
* Performance Testing
* Page Object Model
* Fixtures
* End-to-End Testing

---

# 🚀 Author

**Nandhigana Gowri Naidu**

Playwright Automation Project
