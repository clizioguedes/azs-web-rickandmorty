import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
        }
        created
      }
    }
  }
`;
