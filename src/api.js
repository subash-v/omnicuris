export async function post(requrl, postData) {
  const url = `${url}`;
  const result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(postData)
  });
  const resultJson = await result.json();
  return resultJson;
}
