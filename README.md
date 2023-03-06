## React front-end for Dukandar - an online store

### try it <a href="https://dukandar.vercel.app/" >here</a> backend repo <a href="https://github.com/mudasirpandith/Dukandar-Backend">here</a>

### Things working

- **State management (using redux-toolkit)** Most of the state is global in the redux store. Products, Users,Reviews etc can accessed using selectors and using CRUD methods .

- **Authentication (jwt)** Authentication is done with jsonwebtoken with localstorage javascript. user need not to be loged to view prooducts but for adding products in cart or review a prosduct ,user needs to login.Token is stored in localstorage.

- **Styling (using Chakra Ui)** Styling is done with chakra ui. Responsiveness is always kept in mind, so this also looks good on mobile devices.

## TODO's

- [ ] Notifications and improved engagement.
- [ ] Some customized page redirecting
- [ ] Toasts for some events..

## Deploying

The current setup has a front-end deployed on Vercel.
Install deps: `npm install`.
Development server: `npm run start`.
Build: `npm run build`
