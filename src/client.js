import { sanityClient } from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: process.env.REACT_APP_DATASET,
  apiVersion: process.env.REACT_APP_API_VERSION,
  useCdn: true,
  token: process.env.REACT_APP_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);