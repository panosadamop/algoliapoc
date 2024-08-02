import { hitsPerPage as hitsPerPageWidget } from 'instantsearch.js/es/widgets';

const items = [
  {
    label: '16 προϊόντα ανά σελίδα',
    value: 16,
    default: true,
  },
  {
    label: '32 προϊόντα ανά σελίδα',
    value: 32,
  },
  {
    label: '64 προϊόντα ανά σελίδα',
    value: 64,
  },
];

export const hitsPerPage = hitsPerPageWidget({
  container: '[data-widget="hits-per-page"]',
  items,
});

export function getFallbackHitsPerPageRoutingValue(
  hitsPerPageValue: string
): string | undefined {
  if (
    items.map((item) => item.value).indexOf(Number(hitsPerPageValue)) !== -1
  ) {
    return hitsPerPageValue;
  }

  return undefined;
}
