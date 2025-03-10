# Nuxt + Vue + Vite Module Federation

This project demonstrates module federation using the `vite-module-federation-plugin` with Nuxt, Vue, and Vite. It consists of two microfrontend applications:

1. **Host App** - The main application that consumes a shared component from the remote app.
2. **Remote App** - A microfrontend that exposes a shared component for the host application.

## Issue with Vite + Nuxt Approach

While attempting to externalize Vue during the build process, we encountered a critical build error, preventing successful integration. Due to this issue, the Nuxt + Vite module federation approach does not fully pan out in this setup.

## Technologies Used

- **Nuxt.js**
- **Vue.js**
- **Vite**
- **Vite Module Federation Plugin**

## Setup Instructions

To run the project, follow these steps:

### Install Dependencies

```sh
cd host
npm install

cd ../remote
npm install
```

### Run Applications

Start the remote app first:

```sh
cd remote
npm run dev
```

Then, start the host app:

```sh
cd ../host
npm run dev
```

## Known Issues

- The build process fails when attempting to externalize Vue.
