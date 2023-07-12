import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
  query Episodes {
    episodes {
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
