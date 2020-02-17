const axios = require('axios');

export default async function getCourses() {
  const response = await axios.get('https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME');
  return response.data;
}
