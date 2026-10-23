declare module '*.html?raw' {
  const content: string;
  export default content;
}
declare module '*.html' {
  const content: string;
  export default content;
}
declare module '@designcodeio/threeui' {
  import type { ComponentType } from 'react';
  import type { LandingPageProps } from './shaders/landing-pages/LandingPageFrame';
  import type { PageTypographyProps } from './shaders/landing-pages/pageTypography';
  export const KageLandingPage: ComponentType<LandingPageProps & PageTypographyProps>;
}
declare module '@designcodeio/threeui/style.css' {}
declare module '../tidecrest-hero/tidecrestDocument.js' {
  export const buildTidecrestDocument: (variant: any) => string | undefined;
}
declare module '../meridian-landing-page/meridianDocument.js' {
  export const buildMeridianDocument: (variant: any, presentation?: any) => string | undefined;
}
declare module '../ascii-field/asciiFieldDocuments.js' {
  export const buildAsciiFieldDocument: (variant: any) => string | undefined;
}
declare module '../betawise-globe/betawiseGlobeDocument.js' {
  export const buildBetawiseGlobeDocument: (variant: any) => string | undefined;
}
declare module '../nocturne-hero/NocturneScene' {
  export const NOCTURNE_TITLES: Record<string, string>;
  export const NOCTURNE_VARIANTS: readonly string[];
  export type NocturneVariant = string;
  export const buildNocturneDocument: (variant: any) => string | undefined;
}
declare module './sandboxedPageDocument' {
  export const buildSandboxedPageDocument: (source: string, options: any) => string | undefined;
}
declare module '../sylva-living-world/SylvaLivingWorldScene' {
  export const MAPLE_AUTUMN_STYLE: string;
  export const SAKURA_SUNSET_STYLE: string;
  export const SEQUOIA_MIST_STYLE: string;
  export const applyMapleAutumnVariant: (source: string) => string;
  export const applySakuraSunsetVariant: (source: string) => string;
  export const applySequoiaMistVariant: (source: string) => string;
}
