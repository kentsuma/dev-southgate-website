export type PageDetail = {
  id: number;
  uri: string;
  slug: string;
};

export type Product = {
  label: string;
  image: string;
};

export type Parallelogram = {
  [key: string]: any;
};

export type ParallelogramDetails = {
  video?: {
    videoUrl: string;
    videoFile: string;
  };
  item?: {
    image: string;
    label: string;
    descriptions: string[];
  };
};

export type MenuItem = {
  name: string;
  label: string;
  description: string;
  image: string;
};

export type ProductListProps = {
  getSortedItems: (category: string) => MenuItem[];
  activeCategory: string;
  selectedItem: string | null;
};

export type MenuData = {
  menuData: {
    [category: string]: {
      name: string;
      label: string;
      description: string;
      image: string;
    }[];
  };
};

export type MenuCategoriesProps = {
  activeCategory: string;
  handleClick: any;
  menuData: MenuData;
};

export type PaginationProps = {
  allItems: number;
  currentPage: number;
  goToPreviousPage: () => void;
  activeCategory: string;
  itemsPerPage: number;
  goToNextPage: () => void;
};

export type Location = {
  longitude: String;
  latitude: String;
};
