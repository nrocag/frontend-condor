const axios = require('axios');

export default async function getCourses() {
  console.log("Llamando2");
  const response = await axios.get('https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME');
  console.log(response.data);
  return response.data;
}
