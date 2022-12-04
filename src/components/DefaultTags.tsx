export function DefaultTags() {
  return (
    <>
      <meta name="author" content="Elias Gabriel" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" type="image/png" href="/favicon.png" />

      <meta
        property="og:image"
        content={`https://${process.env.VERCEL_URL}/og-image.png`}
      />
    </>
  );
}
