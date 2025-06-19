const getCroppedImage = (url: string) => {
  if (!url) return "";
  const ind = url.indexOf("media/") + 6;
  const url1 = url.slice(0, ind);
  const url2 = url.slice(ind);
  const newUrl = url1 + "crop/600/400/" + url2;
  return newUrl;
};
export default getCroppedImage;
