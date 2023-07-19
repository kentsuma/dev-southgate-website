// Types
import { Parallelogram, ParallelogramDetails } from "./types";

// PARALLELOGRAM START

export const arrangeData = (data: Parallelogram): ParallelogramDetails[] => {
  const details: ParallelogramDetails[] = [];

  for (let i = 0; i < data.details; i++) {
    const detail: ParallelogramDetails = {
      item: {
        image: "",
        label: "",
        descriptions: [],
      },
      video: {
        videoUrl: "",
        videoFile: "",
      },
    };
    detail.video = {
      videoUrl: data[`details_${i}_video_video_url`],
      videoFile: data[`details_${i}_video_video_file`],
    };

    detail.item = {
      image: data[`details_${i}_item_image`],
      label: data[`details_${i}_item_label`],
      descriptions: [],
    };

    let j = 0;
    while (data[`details_${i}_item_descriptions_${j}_description`]) {
      const description =
        data[`details_${i}_item_descriptions_${j}_description`];
      detail.item.descriptions.push(description);
      j++;
    }

    details.push(detail);
  }

  return details;
};

// PARALLELOGRAM END
