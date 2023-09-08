# Purpose

A very simple demonstration of using playwright UI mode and how the "Pick Locator" functionality does not provide locators for elements within the iframe

## How to run

1. `npm install`
2. `npm run e2e:ui` (this will start the server and run the playwright UI)

Playwright UI should load automatically on `http://localhost:8082` (with the demo http server running on `:8081`)

## Demonstrate the problem

1. Run the test 'has iframe title'
2. In the trace viewer, select the step "expect.toBeVisible frameLocator"
3. Click "Pick locator" and hover over the text "Simple iframe" within iframe

**Expected Behavior:**

The locator for the hovered element within the iframe is recommended (i.e. `getByText('Simple iframe')`) or even more preferrably a combo locator including the frameLocator (i.e. `frameLocator('#test-frame').getByText('Simple iframe')`)

**Current Behavior:**

The locator recommends either...

1. The frameLocator itself (i.e. `locator('#test-frame')`)

2. The last locator that was recommended prior to hovering over the iframe window

