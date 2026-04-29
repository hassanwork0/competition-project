# NASA Artemis II Clone Site - Project Documentation

## Project Overview

A multi-page educational website about NASA's Artemis II mission, built with vanilla HTML, CSS, and JavaScript. The project aims to educate visitors about space exploration while demonstrating modern front-end development practices.

---

## Project Structure

```
Web_Task/
├── assets/
│   ├── crew_photos/
│   │   ├── Christina Koch.webp
│   │   ├── Jeremy Hansen.webp
│   │   ├── Reid Wiseman.webp
│   │   └── Victor Glover.webp
│   ├── fonts/
│   │   ├── logo_font.otf
│   │   └── main_font.ttf
│   ├── logo.webp
│   ├── nasa_logo.svg
│   └── orion.jpg
├── pages/
│   ├── about.html
│   ├── blog.html
│   ├── home.html
│   └── news.html
├── scripts/
│   ├── api/
│   │   ├── blog.js
│   │   └── news.js
│   └── loaders/
│       ├── add_footer.js
│       ├── load_home.js
│       └── load_top_bar.js
├── styles/
│   ├── about_style.css
│   ├── blog_style.css
│   ├── footer_style.css
│   ├── home_style.css
│   ├── news_style.css
│   ├── style.css
│   └── topbar_style.css
├── colors.md
├── index.html
└── Readme.md
```

---

## Navigation Bar (Top Bar)

The top bar contains 5 items:

| # | Item | Link | Class |
|---|------|------|-------|
| 1 | Logo | - | `top_bar_item` |
| 2 | Home | `home.html` | `top_bar_item` |
| 3 | News & Events | `news.html` | `top_bar_item` |
| 4 | Blog | `blog.html` | `top_bar_item` |
| 5 | About Us | `about.html` | `top_bar_item` |
| 6 | Search | - | `search_container` |

### Top Bar Loader Function

```javascript
function loadTopBar(current){
    const topBar = document.getElementById("top_bar");

    const homeClass = current === "Home" ? "current" : "";
    const aboutClass = current === "About" ? "current" : "";
    const newsClass = current === "News" ? "current" : "";
    const blogClass = current === "Blog" ? "current" : "";

    topBar.innerHTML += `           
        <div class="top_bar_item">
            <img src="../assets/logo.webp" alt="logo">
        </div>
        <div class="top_bar_item">
            <h3 class="${homeClass}"><a href="home.html">Home</a></h3>
        </div>
        <div class="top_bar_item">
            <h3 class="${newsClass}"><a href="news.html">News & Events</a></h3>
        </div>
        <div class="top_bar_item">
            <h3 class="${blogClass}"><a href="blog.html">Blog</a></h3>
        </div>
        <div class="top_bar_item">
            <h3 class="${aboutClass}"><a href="about.html">About Us</a></h3>
        </div>
        <div class="search_container">
            <h3>Search</h3>
        </div>
    `;
}
```

---

## Project Pages (4 Pages)

| # | Page | File | Description |
|---|------|------|-------------|
| 1 | Home | `home.html` | Main landing page with mission overview |
| 2 | News & Events | `news.html` | Space news articles and mission updates |
| 3 | Blog | `blog.html` | Blog posts and articles |
| 4 | About | `about.html` | Mission awareness system information |

---

## Page 1: Home

### Components

#### 1. Welcome Section
- Welcome title
- Brief mission description
- Orion spacecraft image below text

#### 2. Latest News Row
- 5 news cards (latest articles)
- "View More News" button → navigates to News page

#### 3. Blogs Column
- 5 blog cards in vertical row format
- Each card contains:
  - Blog title
  - Short description
  - "View Blog" button

#### 4. Special Thanks Row (Crew Section)
- 4 astronaut cards
- Each card contains:
  - Astronaut image
  - Astronaut name
  - Astronaut role/description

#### 5. Footer

---

## Page 2: News & Events

### Tools & Components

#### News Card Structure
- Image at top
- News date
- News title
- News excerpt
- "Read More" button

### Layout Sections

#### 1. Featured News Row
- 1 large main news card
- Column beside it containing 2 smaller news cards

#### 2. News Archive Column
- 20 news cards total
- Layout: 3 cards per row (tablet/desktop)
- Layout: 1 card per row (mobile)
- "Load More" button for additional articles

#### 3. Footer

---

## Page 3: Blog

### Tools & Components

#### Blog Card Structure
- Image on left
- Content on right containing:
  - Category
  - Title
  - Author name & date & read time
  - Description
  - "Read Full Blog" button

### Layout Sections

#### 1. Welcome Blog Section
- Welcome title
- Brief description about the blogs
- Space image below text

#### 2. Main Layout (2 Columns)

**Left Column - Blog Archive:**
- 20 blog cards
- Each row contains image and content
- "Load More Blogs" button

**Right Column - Sidebar:**
- **Most Popular (5 blogs)**
  - Blog rank number
  - Blog title
- **Create Blog Button**

#### 3. Footer

---

## Page 4: About

### Components (Centered Layout)

#### Title
- **Mission Awareness System**

#### Subtitle
- **Thank You for Exploring the Future with Us.**

#### Description Paragraphs
> Artemis II is more than a voyage; it is a testament to human curiosity and the relentless pursuit of the unknown. This platform exists to bridge the gap between technical complexity and the visceral wonder of the cosmos.

> Our mission is to ensure that every milestone of this historic journey is accessible, transparent, and inspiring. We believe that by looking toward the stars, we gain a clearer perspective of our home on Earth.

#### Information Cards (3 cards)

| Card | Value |
|------|-------|
| Latitude | 28.5729° N |
| Status | OPERATIONAL (green color) |
| Destination | LUNAR ORBIT |

---

## Technical Requirements

### Front-End Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure |
| CSS3 | Styling and animations |
| Vanilla JavaScript | Interactivity and dynamic content |
| No Frameworks | Pure implementation |

### Data Sources
- Local JSON data for news (30 articles)
- Local JSON data for blogs (30 articles)

### Design Tool
- Stitch AI for pre-made design components

---

## Color Palette (NASA Artemis II Theme)

| Role | Color Name | Hex Code | Usage |
|------|------------|----------|-------|
| Primary Accent | International Orange | `#FF4D00` | Buttons, hover effects, key headlines |
| Secondary Accent | Orion Blue | `#00BFFF` | Links, secondary buttons |
| Background (Dark) | Deep Space | `#0B0E17` | Main page background |
| Background (Cards) | Lunar Gray | `#1A1F2A` | Cards, sidebars, footer |
| Text (Primary) | Pure White | `#FFFFFF` | Body text, main headings |
| Text (Secondary) | Muted Star | `#A0AABF` | Subtitles, metadata, captions |

---

## Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|----------------|
| > 1024px | Desktop (3 columns for news, 2 columns for blog layout) |
| 768px - 1024px | Tablet (2 columns for news, stacked sidebar) |
| < 768px | Mobile (1 column, stacked layout) |

---

## File Descriptions

### Stylesheets

| File | Purpose |
|------|---------|
| `style.css` | Global styles, fonts, body background |
| `topbar_style.css` | Navigation bar styling |
| `footer_style.css` | Footer styling |
| `home_style.css` | Home page specific styles |
| `news_style.css` | News page specific styles |
| `blog_style.css` | Blog page specific styles |
| `about_style.css` | About page specific styles |

### Scripts

| File | Purpose |
|------|---------|
| `load_top_bar.js` | Dynamically loads navigation bar |
| `add_footer.js` | Dynamically loads footer |
| `load_home.js` | Loads home page content |
| `news.js` | News data and loading functions |
| `blog.js` | Blog data and loading functions |

### Assets

| File/Folder | Purpose |
|-------------|---------|
| `crew_photos/` | Astronaut profile images |
| `fonts/` | Custom fonts (logo_font, main_font) |
| `logo.webp` | NASA/Artemis logo |
| `nasa_logo.svg` | Fallback NASA logo |
| `orion.jpg` | Orion spacecraft image |
---

## Notes

- **No external APIs** - All data is stored locally in JSON format
- **No frameworks** - Pure HTML/CSS/JavaScript
- **All pages are responsive** - Works on desktop, tablet, and mobile
- **Top bar highlights current page** - Uses `current` class for active page styling
- **Footer is reused** - Loaded dynamically via `add_footer.js`