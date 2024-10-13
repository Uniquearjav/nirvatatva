// app/api/collection/route.js
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('nt-arjav');
    
    // Log to check if the database connection is successful
    console.log("Connected to DB:", db.databaseName);

    const data = await db.collection('api_product').find({}).toArray();
    
    // Log the fetched data
    console.log("Data fetched from DB:", data);

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (e) {
    console.error("Error fetching data from MongoDB:", e);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
    });
  }
}
