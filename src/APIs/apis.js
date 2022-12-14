const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const apiId = '8u1Xu1V3pnxx5e6JvfPS/';

export const postBooks = async (data) => {
  const response = await fetch(`${api}${apiId}books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response)
    .catch((error) => {
      throw (error);
    });
  return response;
};
const getBooks = async () => {
  const response = await fetch(`${api}${apiId}books/`)
    .then((response) => response.json())
    .catch((error) => {
      throw (error);
    });
  return response;
};
export const deleteBooks = async (id) => {
  await fetch(`${api}${apiId}books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response)
    .catch((error) => {
      throw (error);
    });
};

export default getBooks;
