import type { MetadataRoute } from "next";
const commercialRoutes = ["", "/hospitals", "/specialists", "/specialties", "/pricing", "/services", "/guides"];
const legalRoutes = ["/privacy-policy", "/terms-of-service", "/medical-disclaimer"];
const routes = [...commercialRoutes, ...commercialRoutes.map(route => `/zh${route || "/"}`), ...legalRoutes, ...legalRoutes.map(route => `/zh${route}`)];
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.medviachina.com"; return routes.map(route=>({url:new URL(route||"/",base).toString(),changeFrequency:legalRoutes.some(item=>route.endsWith(item))?"yearly":"weekly",priority:route===""?1:route==="/zh/"?0.9:legalRoutes.some(item=>route.endsWith(item))?0.2:0.7})); }
