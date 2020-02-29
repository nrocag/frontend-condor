const axios = require('axios');

const GET_ORGANIZATION = `
  {
    items{
      isFree
      price
      course {
        id
        name
        nowStatusCode
        popularity
        featuredBanner
        provider {
          name
        }
        deliveryMethod {
          description
        }
      }
    }
    totalItems
  }
`;

export default async function getCourses() {
  const response = await axios.get('https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME');
  /*
    axiosGitHubGraphQL
      .get('https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME', 
      { query: GET_ORGANIZATION }
      ).then(result => console.log(result));
  */
  return response.data;
}
