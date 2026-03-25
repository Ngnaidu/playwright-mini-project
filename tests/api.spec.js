const data = require('../test-data/data.json');

const { test, expect } = require('@playwright/test');
test('API chaining example', async ({ request }) => {

  // Step 1: Get list of users
  const listResponse = await request.get('https://dummyjson.com/users');

  expect(listResponse.status()).toBe(200);

  const listBody = await listResponse.json();

  // Step 2: Extract first user ID
  const userId = listBody.users[0].id;

  // Step 3: Call API using extracted ID
  const userResponse = await request.get(`https://dummyjson.com/users/${userId}`);

  expect(userResponse.status()).toBe(200);

  const userBody = await userResponse.json();

  // Step 4: Validate response
  expect(userBody.id).toBe(userId);

});


test('Data driven API test', async ({ request }) => {

  for (const id of data.apiIds) {

    const response = await request.get(`https://dummyjson.com/users/${id}`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(id);

  }

});
test('GET request - fetch posts', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBeTruthy();

  expect(body.length).toBeGreaterThan(0);

});
test('POST request - create user', async ({ request }) => {

  const response = await request.post('https://dummyjson.com/users/add', {
    data: {
      firstName: 'Gowri',
      lastName: 'Naidu'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.firstName).toBe('Gowri');

});
test('PUT request - update user', async ({ request }) => {

  const response = await request.put('https://dummyjson.com/users/1', {
    data: {
      firstName: 'UpdatedUser'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.firstName).toBe('UpdatedUser');

});
test('DELETE request - remove user', async ({ request }) => {

  const response = await request.delete('https://dummyjson.com/users/1');

  expect(response.status()).toBe(200);

});
test('API query parameter validation', async ({ request }) => {

  const response = await request.get('https://dummyjson.com/products/search?q=phone');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.products.length).toBeGreaterThan(0);

});
test('API response structure validation', async ({ request }) => {

  const response = await request.get('https://dummyjson.com/users/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('firstName');
  expect(typeof body.id).toBe('number');

});
test('Negative API test - invalid endpoint', async ({ request }) => {

  const response = await request.get('https://dummyjson.com/users/999999');

  expect(response.status()).toBe(404);

});
test('API performance validation', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('https://dummyjson.com/users');

  const endTime = Date.now();

  const responseTime = endTime - startTime;

  expect(response.status()).toBe(200);

  expect(responseTime).toBeLessThan(2000);

});