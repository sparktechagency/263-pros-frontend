import { imgUrl } from "../../../helpers/imgUrl";

export function getImageUrl(imageurl?: string) {
  if (!imageurl) return "/no-image.png";

  return imageurl.startsWith("http") ? imageurl : `${imgUrl}${imageurl}`;
}
