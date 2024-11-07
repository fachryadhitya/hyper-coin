import { getDictionary } from '@/app/dictionaries';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const locale = url.searchParams.get('locale') || 'en-US';

  try {
    const dictionary = await getDictionary(locale);
    const footerData = dictionary.footer_content || [];

    const siteData = {
      footer: footerData,
    };

    return new Response(JSON.stringify(siteData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Locale not Supported!' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 404,
    });
  }
}