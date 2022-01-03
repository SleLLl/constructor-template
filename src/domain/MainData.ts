export interface MainData {
  result_id: string;
  response: {
    features: {
      display_name: string;
      enabled: boolean;
      feature_name: string;
    }[];
    results: {
      data: { id: string; url: string; image_url: string };
      is_slotted: boolean;
      matched_terms: string[];
      value: string;
    }[];
  };
}
