import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '',          renderMode: RenderMode.Prerender },
  { path: 'a-propos',  renderMode: RenderMode.Prerender },
  { path: 'coaching',  renderMode: RenderMode.Prerender },
  { path: 'presentiel',renderMode: RenderMode.Prerender },
  { path: 'contact',   renderMode: RenderMode.Prerender },
  { path: '**',        renderMode: RenderMode.Server },
];
