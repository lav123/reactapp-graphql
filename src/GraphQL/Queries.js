import { gql } from "@apollo/client";

export const LOAD_ALL_JOBS = gql`
  {
    jobs {
      id
      title
      locationNames
      description
      postedAt
      updatedAt
      applyUrl
      cities {
        name
        country {
          name
        }
      }
      tags {
        name
        createdAt
      }
      company {
        name
        logoUrl
      }
      commitment {
        title
      }
      remotes {
        name
      }
    }
  }
`;
