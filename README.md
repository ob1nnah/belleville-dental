# Bellevielle Dental

## Project Overview
This Single Page Application SPA Webpage includes:

* **Navigation Bar**: Main site navigation with links to Research, About Us, Education, and Products sections
* **Hero Section**: Attention-grabbing hero area with "SMILE BRIGHTER" headline.
* **Responsive Design**: Fully responsive layout that scales appropriately across different device sizes

### Technical Details

* Built with **React 19** and **Vite**
* Uses **Bootstrap** **5** for baseline styling
* Implements **React** **Router** for navigation
* Features completely responsive design using CSS variables and relative sizing
* Typography using **Poppins** font family (multiple weights: 300, 400, 500, 600, 700, 800, 900)
* Custom responsive components built from scratch

### Responsive Design Approach
The site uses a clever responsive design strategy:

* All measurements are relative to a 1920px base width
* CSS variables and [`calc()`] functions create a fluid layout that scales proportionally
* Media queries handle layout changes on smaller devices

### Getting Started
1. Clone this repository
2. Install dependencies: [`npm install`]
3. Run development server: [`npm run dev`]
4. Build for production: [`npm run build`]

### Project Structure
* components - React component (Navbar, Hero)
* fonts - Poppins font files
* public - Static assets like images