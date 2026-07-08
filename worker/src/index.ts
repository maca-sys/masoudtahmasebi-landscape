/**
 * max-ta-api — the one dynamic touch on an otherwise static site.
 *
 * GET /api/resume  → resume data as structured JSON
 * GET /api/visits  → privacy-friendly visit counter
 *
 * The resume payload is imported from the same module the Angular site
 * renders (src/app/data/profile.ts), so the site and the API cannot drift.
 */
import {
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SKILL_GROUPS,
  SOCIAL_LINKS,
  STATS,
} from '../../src/app/data/profile';

interface Env {
  VISITS: KVNamespace;
}

const RESUME = {
  name: 'Max Tahmasebi',
  title: 'Tech Lead & Senior Full-Stack Software Engineer',
  location: 'Munich, Germany',
  links: SOCIAL_LINKS,
  highlights: STATS,
  experience: EXPERIENCE,
  projects: PROJECTS,
  skills: SKILL_GROUPS,
  education: EDUCATION,
  source: 'https://max-ta.com/',
};

function json(body: unknown, status = 200, extraHeaders: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'x-content-type-options': 'nosniff',
      ...extraHeaders,
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method !== 'GET') {
      return json({ error: 'method not allowed' }, 405, { allow: 'GET' });
    }

    switch (url.pathname) {
      case '/api/resume':
        return json(RESUME, 200, {
          'cache-control': 'public, max-age=3600',
          // resume data is public by design; allow tooling anywhere to read it
          'access-control-allow-origin': '*',
        });

      case '/api/visits': {
        // GDPR-clean by design: a single global integer in KV. No IPs, no
        // user agents, no cookies, no timestamps, nothing stored or derived
        // per visitor — there is literally no personal data to request,
        // export, or delete. KV has no atomic increment and is eventually
        // consistent, so concurrent visits may occasionally lose a count;
        // for a portfolio counter that trade-off is fine (and honest).
        const current = parseInt((await env.VISITS.get('total')) ?? '0', 10) || 0;
        const total = current + 1;
        await env.VISITS.put('total', String(total));
        return json({ total }, 200, { 'cache-control': 'no-store' });
      }

      default:
        return json({ error: 'not found' }, 404);
    }
  },
};
