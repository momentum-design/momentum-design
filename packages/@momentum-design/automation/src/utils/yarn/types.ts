export interface WhyItem {
  value: string;
  children: Record<string, {
    descriptor: string;
    locator: string;
  }>
}

export interface ListItem {
  location: string;
  name: string;
}
