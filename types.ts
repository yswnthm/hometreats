export interface MenuItem {
  id: string;
  name: string;
  scentProfile: string;
  price: string;
  image: string;
  heatLevel: 'warm' | 'rich' | 'sweet'; // Determines heatmap color
}

export interface LabModule {
  id: string;
  title: string;
  code: string; // e.g., "LAYER-01"
  description: string;
  image: string;
  microStudy: string[]; // e.g., ["gluten expansion", "hydration"]
}

export interface GalleryItem {
  id: string;
  image: string;
  note: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  image: string;
  role?: string;
}

export interface ProcessFrame {
  id: string;
  image: string;
  note: string;
  timestamp: string;
}