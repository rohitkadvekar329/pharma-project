export type KPI = {
  name: string;
  affiliate_applicable: boolean;
  businessQuestions: Array<{
    question: string;
    answer: string;
  }>;
  calculation: string;
  metrics: Array<{
    name: string;
    value: string;
  }>;
  visuals_available: boolean;
  assetId: string | null;
};

export type DataViz = {
  asset_info_context: string;
  applicable_kpi_favourite: KPI[];
};

export type Layout = {
  amount_of_pages: number;
  kpis_being_used: KPI[];
};

export type Storyboard = {
  affiliate_applicable: string;
  kpis_being_used: KPI[];
};

export type Card = {
  asset_type: 'KPI' | 'DATAVIZ' | 'LAYOUT' | 'STORYBOARD';
  description: string;
  id: string;  // Ensure ID is a string
  is_favorite: boolean;
  name: string;
  kpi?: KPI;
  dataViz?: DataViz;
  layout?: Layout;
  storyboard?: Storyboard;
};

export type HomeClientProps = {
  assets: Card[];
};

export type KPIModalProps = {
  isOpen: boolean;
  onClose: () => void;
  asset: Card | null;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
};

export type DataVizModalProps = {
  isOpen: boolean;
  onClose: () => void;
  asset: Card | null;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
};

export type LayoutsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  asset: Card | null;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
};

export type StoryboardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  asset: Card | null;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
};