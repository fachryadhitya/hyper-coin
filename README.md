# Coin Siren Project Documentation (Next.js)

## Getting Started

To set up and run the project locally, follow the steps below:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Setting Up the Project

Clone the repository (if you haven't already) and install dependencies:

Start the development server:

## Project Overview

This Next.js project utilizes the App Router directory and includes the following features:

### Internationalization (i18n)

The project supports multiple languages. You can toggle between English and Korean by clicking on the logo at the top of the page.

### Libraries Used

- Tailwind CSS: For styling the application.
- React Slick: For implementing carousels and sliders.

### API Endpoints

The project serves files from the `api` folder, with the following routes available:

#### Content Data

Endpoint: `/api/content-data?locale=<lang>`
Returns content data based on the specified language.

#### Footer Data

Endpoint: `/api/footer-data?locale=<lang>`
Returns data for the footer section.

#### Hero Data

Endpoint: `/api/hero-data?locale=<lang>`
Returns data for the hero section.

#### Navigation Data

Endpoint: `/api/nav-data?locale=<lang>`
Returns data for the navigation menu.

### parallel route calling is used when possible, like for the nav and hero content

- #example:

`const [navResponse, heroResponse] = await Promise.all([fetch(navUrl), fetch(heroUrl)]);`



---
