# CryptoAttacker Tools Website

A professional Jekyll website for cryptocurrency security tools and resources.

## Features

- ✅ **Full English Content**: All content and configuration in English
- ✅ **Dark Theme Support**: Toggle between light and dark themes with persistent preference
- ✅ **Modern Responsive Layout**: Professional header, footer, and navigation
- ✅ **Blog System**: Complete blogging functionality with posts, tags, and categories
- ✅ **Core Pages**: Home, About, Contact, and Blog pages
- ✅ **SEO Optimized**: Meta tags, sitemap, and robots.txt
- ✅ **Code Syntax Highlighting**: Beautiful code blocks with Rouge
- ✅ **Accessibility Standards**: ARIA labels and semantic HTML
- ✅ **Professional Design**: Clean, modern, and user-friendly interface

## Prerequisites

Before you begin, ensure you have the following installed:

- **Ruby** (version 2.5.0 or higher)
- **RubyGems**
- **GCC and Make**

### Installing Ruby

#### macOS

```bash
brew install ruby
```

#### Ubuntu/Debian

```bash
sudo apt-get install ruby-full build-essential
```

#### Windows

Download and install from [RubyInstaller](https://rubyinstaller.org/)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/CryptoAttacker/tools.git
   cd tools
   ```

2. **Install dependencies**

   ```bash
   gem install bundler
   bundle install
   ```

3. **Serve the site locally**

   ```bash
   bundle exec jekyll serve
   ```

4. **View in browser**

   Open your browser and navigate to `http://localhost:4000`

## Project Structure

```
.
├── _config.yml           # Site configuration
├── _includes/            # Reusable components
│   ├── head.html        # HTML head section
│   ├── header.html      # Site header with navigation
│   └── footer.html      # Site footer
├── _layouts/            # Page templates
│   ├── default.html     # Base layout
│   ├── page.html        # Page layout
│   └── post.html        # Blog post layout
├── _posts/              # Blog posts
│   └── YYYY-MM-DD-title.md
├── _sass/               # SASS stylesheets
│   ├── base.scss        # Base styles
│   ├── variables.scss   # CSS variables for theming
│   ├── layout.scss      # Layout styles
│   ├── pages.scss       # Page-specific styles
│   └── syntax-highlighting.scss
├── assets/              # Static assets
│   ├── css/
│   │   └── main.scss    # Main stylesheet
│   ├── js/
│   │   └── theme-toggle.js  # Dark theme toggle
│   └── images/          # Image assets
├── index.html           # Homepage
├── about.md             # About page
├── contact.md           # Contact page
├── blog.html            # Blog listing page
├── 404.html             # 404 error page
├── robots.txt           # Search engine crawler rules
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Configuration

### Site Settings

Edit `_config.yml` to customize your site:

```yaml
title: CryptoAttacker Tools
description: Professional tools and resources for cryptocurrency security
author: CryptoAttacker
email: contact@cryptoattacker.com
url: "https://cryptoattacker.github.io"
baseurl: "/tools"
```

### Navigation

Modify the navigation menu in `_config.yml`:

```yaml
navigation:
  - title: Home
    url: /
  - title: About
    url: /about
  - title: Blog
    url: /blog
  - title: Contact
    url: /contact
```

### Social Links

Update social media links in `_config.yml`:

```yaml
social:
  github: CryptoAttacker
  twitter: cryptoattacker
```

## Creating Content

### Writing Blog Posts

Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15 10:00:00 +0000
categories: [category1, category2]
tags: [tag1, tag2]
author: Your Name
---

Your post content here...
```

### Adding Pages

Create a new markdown file in the root directory:

```markdown
---
layout: page
title: Your Page Title
permalink: /your-page/
description: Page description for SEO
---

Your page content here...
```

## Dark Theme

The site includes a dark theme toggle with persistent preference storage:

- **Toggle Button**: Located in the navigation bar
- **Automatic Detection**: Respects system preferences by default
- **Persistent**: User's choice is saved in localStorage
- **Smooth Transitions**: CSS transitions for theme switching

### Customizing Theme Colors

Edit `_sass/variables.scss` to customize colors:

```scss
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --link-color: #2563eb;
  // ... more variables
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #e5e7eb;
  --link-color: #60a5fa;
  // ... more variables
}
```

## SEO Optimization

The site includes several SEO features:

- **jekyll-seo-tag**: Automatic meta tags
- **Sitemap**: Auto-generated XML sitemap
- **robots.txt**: Search engine crawler configuration
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Open Graph**: Social media sharing optimization

## Code Syntax Highlighting

Code blocks are automatically highlighted using Rouge:

````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

Supported languages include Python, JavaScript, Ruby, HTML, CSS, and many more.

## Accessibility

The site follows accessibility best practices:

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators for keyboard users
- Color contrast ratios meeting WCAG AA standards
- Screen reader friendly content

## Deployment

### GitHub Pages

1. Update `_config.yml`:
   ```yaml
   url: "https://cryptoattacker.github.io"
   baseurl: "/tools"
   ```

2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy site"
   git push origin main
   ```

3. Enable GitHub Pages in repository settings

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `jekyll build`
3. Publish directory: `_site`
4. Deploy!

### Custom Server

Build the site and upload the `_site` directory:

```bash
bundle exec jekyll build
# Upload _site/ to your web server
```

## Customization

### Adding Custom CSS

Create or edit files in `_sass/` and they'll be automatically compiled.

### Adding Custom JavaScript

Add JavaScript files to `assets/js/` and include them in your layouts:

```html
<script src="{{ '/assets/js/your-script.js' | relative_url }}"></script>
```

### Changing the Theme

The site uses Jekyll's default theme structure. You can:

1. Modify existing SASS files in `_sass/`
2. Override layouts by creating files in `_layouts/`
3. Install a different Jekyll theme via Gemfile

## Troubleshooting

### Common Issues

**Dependency errors**:
```bash
bundle update
```

**Port already in use**:
```bash
bundle exec jekyll serve --port 4001
```

**CSS not updating**:
```bash
bundle exec jekyll serve --force_polling
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

- **Documentation**: [Jekyll Documentation](https://jekyllrb.com/docs/)
- **Issues**: [GitHub Issues](https://github.com/CryptoAttacker/tools/issues)
- **Contact**: [contact@cryptoattacker.com](mailto:contact@cryptoattacker.com)

## Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Inspired by modern web design principles
- Dark theme implementation based on CSS custom properties

---

**Made with ❤️ by CryptoAttacker**
