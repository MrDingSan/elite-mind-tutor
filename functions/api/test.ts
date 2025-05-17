export const onRequest: PagesFunction = async (context) => {
  return new Response(JSON.stringify({ message: 'Test endpoint working' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}; 