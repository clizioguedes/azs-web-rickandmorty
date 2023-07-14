import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
  query Episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
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
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
