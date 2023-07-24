import { gql } from "@apollo/client";

const GetAllPages = gql`
  query getAllPages {
    pages {
      nodes {
        id
        slug
        uri
      }
    }
  }
`;

const GetHomePage = gql`
  query GetHomepage {
    nodeByUri(uri: "/") {
      ... on Page {
        id
        blocks
      }
    }
    productCategories {
      edges {
        node {
          id
          productCategory {
            name
            image {
              id
              sourceUrl
            }
          }
        }
      }
    }
    testimonies {
      nodes {
        testimonyDetails {
          company
          name
          statement
          title
          image {
            id
            sourceUrl
          }
        }
        id
      }
    }
    brands {
      nodes {
        brandDetails {
          name
          image {
            id
            sourceUrl
          }
        }
      }
    }
  }
`;

const GetProductsPage = gql`
  query getProductsPage {
    nodeByUri(uri: "/products/") {
      ... on Page {
        id
        blocks
      }
    }
    products {
      nodes {
        productDetails {
          description
          label
          title
          image {
            sourceUrl
          }
          type
        }
        id
      }
    }
  }
`;

const GetAboutPage = gql`
  query getAboutPage {
    nodeByUri(uri: "/about/") {
      ... on Page {
        id
        blocks
      }
    }
    faqs {
      edges {
        node {
          id
          faqs {
            question
            answer
          }
        }
      }
    }
  }
`;

const GetContactPage = gql`
  query GetContactPage {
    nodeByUri(uri: "/contacts/") {
      ... on Page {
        id
        blocks
      }
    }
  }
`;

export {
  GetAllPages,
  GetHomePage,
  GetProductsPage,
  GetAboutPage,
  GetContactPage,
};
