const getCroppedImage = (url: string) => {
  const ind = url.indexOf("/games");
  const url1 = url.slice(0, ind);
  const url2 = url.slice(ind);
  const newUrl = url1 + "/crop/600/400" + url2;
  return newUrl;
};
export default getCroppedImage;
