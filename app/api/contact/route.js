export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, organization, role, challenge, claimVolume, message } = body;

  if (!firstName || !lastName || !email || !organization) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const notionKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!notionKey || !databaseId) {
    return Response.json({ error: "Server configuration error." }, { status: 500 });
  }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionKey}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28"
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: `${firstName} ${lastName}` } }]
        },
        Email: { email },
        Organization: {
          rich_text: [{ text: { content: organization || "" } }]
        },
        Role: {
          rich_text: [{ text: { content: role || "" } }]
        },
        Challenge: {
          rich_text: [{ text: { content: challenge || "" } }]
        },
        "Monthly Claim Volume": {
          rich_text: [{ text: { content: claimVolume || "" } }]
        },
        Message: {
          rich_text: [{ text: { content: message || "" } }]
        }
      }
    })
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("Notion API error:", error);
    return Response.json({ error: "Failed to save submission." }, { status: 502 });
  }

  return Response.json({ success: true });
}
