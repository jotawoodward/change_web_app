import changeRequest from './changeRequest';

describe('Test apis requests', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  const mockedResponse = [{
    "0.1": 1,
    "0.2": 1,
    "0.5": 0,
    "1": 0,
    "10": 0,
    "2": 1,
    "20": 1,
    "5": 1,
    "50": 20001
}];

  it('Error - no parameters', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockedResponse));
    const data = await changeRequest();
    expect(data).toEqual({"data": null, "success": false});
    expect(fetch.mock.calls.length).toEqual(0);
  });

  it('Success', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockedResponse));
    const data = await changeRequest(10, 20);
    expect(data).toEqual({"data": mockedResponse, "success": true});
    expect(fetch.mock.calls.length).toEqual(1);
  });

  it('fetch error', async () => {
    fetch.mockRejectOnce();
    const data = await changeRequest(10, 20);
    expect(data).toEqual({"data": null, "success": false});
    expect(fetch.mock.calls.length).toEqual(1);
  });
});