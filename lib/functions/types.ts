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
