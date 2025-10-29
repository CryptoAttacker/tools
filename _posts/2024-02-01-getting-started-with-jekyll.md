---
layout: post
title: "Getting Started with Jekyll: Building Professional Static Sites"
date: 2024-02-01 09:00:00 +0000
categories: [tutorials, web-development]
tags: [jekyll, static-sites, web-development, tutorial]
author: CryptoAttacker
---

Jekyll is a powerful static site generator that's perfect for creating professional websites, blogs, and documentation. In this tutorial, we'll explore how to get started with Jekyll.

## What Is Jekyll?

Jekyll is a static site generator written in Ruby. It takes text written in your favorite markup language and uses layouts to create a static website. Jekyll is:

- **Simple**: No databases, just markdown files
- **Fast**: Static sites load quickly
- **Secure**: No server-side code to exploit
- **Flexible**: Extensive customization options

## Why Choose Jekyll?

### Advantages

1. **GitHub Pages Integration**: Free hosting with custom domains
2. **Markdown Support**: Write content in simple, readable format
3. **Template Engine**: Powerful Liquid templating
4. **Plugin Ecosystem**: Extend functionality easily
5. **Version Control**: Track all changes with Git

### Use Cases

- Personal or professional blogs
- Documentation sites
- Portfolio websites
- Landing pages
- Project websites

## Installation

### Prerequisites

First, ensure you have Ruby installed:

```bash
ruby --version
# Should be 2.5.0 or higher
```

### Installing Jekyll

Install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

### Creating a New Site

Create a new Jekyll site:

```bash
jekyll new my-awesome-site
cd my-awesome-site
```

This creates a basic Jekyll site with the following structure:

```
my-awesome-site/
├── _config.yml
├── _posts/
│   └── 2024-02-01-welcome-to-jekyll.md
├── _site/
├── .gitignore
├── 404.html
├── about.markdown
├── Gemfile
└── index.markdown
```

## Site Structure

Let's explore the key components:

### _config.yml

The configuration file for your site:

```yaml
title: My Awesome Site
description: A description of my site
baseurl: ""
url: "https://example.com"

markdown: kramdown
theme: minima
plugins:
  - jekyll-feed
  - jekyll-seo-tag
```

### Layouts

Layouts are templates that wrap your content. Located in `_layouts/`:

```html
<!-- _layouts/default.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>{% raw %}{{ page.title }}{% endraw %}</title>
  </head>
  <body>
    {% raw %}{{ content }}{% endraw %}
  </body>
</html>
```

### Posts

Blog posts live in `_posts/` with specific naming:

```
YEAR-MONTH-DAY-title.md
```

Example post:

```markdown
---
layout: post
title: "My First Post"
date: 2024-02-01 09:00:00 +0000
categories: blog
---

This is my first blog post!
```

## Front Matter

Front matter is YAML configuration at the top of files:

```yaml
---
layout: post
title: "My Post Title"
date: 2024-02-01
categories: [category1, category2]
tags: [tag1, tag2]
author: Your Name
---
```

## Liquid Templating

Jekyll uses Liquid for templating:

### Variables

```liquid
{% raw %}{{ site.title }}
{{ page.title }}
{{ post.date | date: "%B %-d, %Y" }}{% endraw %}
```

### Conditionals

```liquid
{% raw %}{% if page.title %}
  <h1>{{ page.title }}</h1>
{% endif %}{% endraw %}
```

### Loops

```liquid
{% raw %}{% for post in site.posts %}
  <li>{{ post.title }}</li>
{% endfor %}{% endraw %}
```

## Building and Serving

### Local Development

Serve your site locally:

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser.

### Building for Production

Build the static site:

```bash
bundle exec jekyll build
```

The generated site is in the `_site/` directory.

## Customization

### Custom CSS

Create a custom CSS file:

```scss
// assets/css/main.scss
---
---
@import "minima";

// Your custom styles
.custom-class {
  color: blue;
}
```

### Custom JavaScript

Add JavaScript files to `assets/js/`:

```javascript
// assets/js/custom.js
document.addEventListener('DOMContentLoaded', function() {
  console.log('Jekyll site loaded!');
});
```

Include in your layout:

```html
<script src="{% raw %}{{ '/assets/js/custom.js' | relative_url }}{% endraw %}"></script>
```

## SEO Optimization

### jekyll-seo-tag Plugin

Add to your `_config.yml`:

```yaml
plugins:
  - jekyll-seo-tag
```

Include in your `<head>`:

```liquid
{% raw %}{% seo %}{% endraw %}
```

### Sitemap

Generate a sitemap:

```yaml
plugins:
  - jekyll-sitemap
```

### robots.txt

Create a `robots.txt` in your root:

```
User-agent: *
Sitemap: {{ site.url }}/sitemap.xml
```

## Deployment

### GitHub Pages

1. Create a repository named `username.github.io`
2. Push your Jekyll site
3. Your site is live at `https://username.github.io`

### Netlify

1. Connect your GitHub repository
2. Set build command: `jekyll build`
3. Set publish directory: `_site`
4. Deploy!

## Best Practices

1. **Use Version Control**: Track all changes with Git
2. **Write Quality Content**: Focus on valuable, well-written content
3. **Optimize Images**: Compress images for faster loading
4. **Test Locally**: Always test before deploying
5. **Keep Dependencies Updated**: Regularly update gems
6. **Use Meaningful URLs**: Create descriptive permalinks
7. **Implement Analytics**: Track visitor behavior
8. **Enable HTTPS**: Ensure secure connections

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Jekyll Themes](https://jekyllthemes.io/)
- [Liquid Documentation](https://shopify.github.io/liquid/)
- [GitHub Pages](https://pages.github.com/)

## Conclusion

Jekyll is an excellent choice for creating professional static websites. With its simplicity, flexibility, and powerful features, you can build beautiful sites that are fast, secure, and easy to maintain.

Start building your Jekyll site today and join the growing community of Jekyll users!

---

*Questions about Jekyll? [Contact us]({{ site.baseurl }}/contact) or check out the [official documentation](https://jekyllrb.com/)!*
