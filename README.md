# Paradise Nursery

A welcoming houseplant shop built with React, Vite, and Redux Toolkit. Browse the collection, add plants to a shared cart, adjust quantities, and review the order total.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Assignment files

1. `README.md` — project name, overview, and setup instructions.
2. `src/AboutUs.jsx` — company story and values.
3. `src/App.css` — landing page background image, layout, and responsive styling.
4. `src/App.jsx` — Paradise Nursery landing page, company name, Get Started button, and app routes.
5. `src/CartSlice.jsx` — Redux Toolkit shopping cart state and actions.
6. `src/ProductList.jsx` — plant listing with 18 plants across three categories and add-to-cart behavior.
7. `src/CartItem.jsx` — shopping cart page with quantity controls, totals, delete, checkout, and continue shopping.

## Features

- Every plant has a thumbnail, name, care note, and price.
- Shared cart count in the navigation; add buttons disable after a plant is added.
- Quantity updates, item removal, per-item totals, and cart subtotal.
- Checkout displays a “Coming soon” message.
- Responsive home, plants, company story, and cart pages.
