import React from 'react';
import { gql } from '@apollo/client';
import { createApolloClient } from '../lib/apolloClient';
import HomeClient from './HomeClient';

const GET_ASSETS_QUERY = gql`
  query GetAssets($page: Int, $pageSize: Int) {
    getAssets(page: $page, pageSize: $pageSize) {
      asset_type
      description
      id
      is_favorite
      name
      kpi {
        assetId
        name
        affiliate_applicable
        businessQuestions {
          question
          answer
        }
        calculation
        metrics {
          name
          value
        }
        visuals_available
      }
      dataViz {
        asset_info_context
        applicable_kpi_favourite {
          assetId
          name
          affiliate_applicable
          businessQuestions {
            question
            answer
          }
          calculation
          metrics {
            name
            value
          }
          visuals_available
        }
      }
      layout {
        amount_of_pages
        kpis_being_used {
          assetId
          name
          affiliate_applicable
          businessQuestions {
            question
            answer
          }
          calculation
          metrics {
            name
            value
          }
          visuals_available
        }
      }
      storyboard {
        affiliate_applicable
        kpis_being_used {
          assetId
          name
          affiliate_applicable
          businessQuestions {
            question
            answer
          }
          calculation
          metrics {
            name
            value
          }
          visuals_available
        }
      }
    }
  }
`;

// Function to fetch data from the GraphQL API
async function fetchAssets() {
  const client = createApolloClient();
  // Fetch data from the GraphQL API
  const { data } = await client.query({
    query: GET_ASSETS_QUERY,
    variables: { page: 1, pageSize: 20 },
  });
  return data.getAssets;
}

// Server Component
const Home = async () => {
  const assets = await fetchAssets(); // Fetch assets data on the server

  return <HomeClient assets={assets} />;
};

export default Home;
  