export const getGooglePhotoDirectUrl = async (url: string): Promise<string> => {
  // If the URL doesn't contain "photos.google.com" or "photos.app.goo.gl", return it as is
  if (!url.includes("photos.google.com") && !url.includes("photos.app.goo.gl")) {
    return url;
  }

  try {
    // Use GET with a small Range request to minimize data
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: {
        Range: "bytes=0-1023", // fetch only the first 1KB
      },
    });

    // finalUrl should be the resolved redirect
    return response.url || url;
  } catch (error) {
    console.log({ error });
    console.error("Error resolving Google Photos URL:", error);
    return url; // fallback
  }
};
