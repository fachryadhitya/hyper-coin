## Development Setup

### Required Tools

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [PNPM](https://pnpm.io/) for package management

### Local Development

1. Install project dependencies:

```bash
pnpm install
```

2. Launch the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Architecture

Built on Next.js App Router architecture, delivering a modern web experience with:

### Language Support

Seamlessly switch between English and Korean through the header logo interface.

### Core Dependencies

- **Styling**: Tailwind CSS for utility-first styling
- **UI Components**: React Slick for smooth carousel experiences

### API Structure

All endpoints reside in the `api` directory:

#### Available Endpoints

| Endpoint                          | Description                        |
| --------------------------------- | ---------------------------------- |
| `/api/content-data?locale=[lang]` | Main content localized by language |
| `/api/footer-data?locale=[lang]`  | Footer section content             |
| `/api/hero-data?locale=[lang]`    | Hero section content               |
| `/api/nav-data?locale=[lang]`     | Navigation menu structure          |

### Performance Optimization

Implements parallel data fetching for optimal loading times:

```typescript
const [nav, hero] = await Promise.all([fetch(navEndpoint), fetch(heroEndpoint)]);
```

## Scripts

```bash
# Development
pnpm dev

# Production Build
pnpm build

# Start Production Server
pnpm start

# Linting
pnpm lint
```
