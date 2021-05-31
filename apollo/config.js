// In order to use fragments in Apollo you need to download a json file to tell it what your schema looks like
import schema from "./introspectionSchema.json";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema.data
});

const cache = new InMemoryCache({ fragmentMatcher });

export default function(context) {
  return {
    cache,
    httpEndpoint:
      "https://graphql.contentful.com/content/v1/spaces/" +
      process.env.CTF_SPACE_ID +
      "?access_token=" +
      process.env.CTF_CDA_ACCESS_TOKEN
  };
}
