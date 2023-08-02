import { RequestParams } from "../types/request";

export const request = async <T>({
  path,
  method = "GET",
  body,
}: RequestParams): Promise<T | undefined> => {
  const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`;
  const options = {
    method,
    headers: {
      "X-RapidAPI-Key": "493579032fmshabf0ab51903bc16p14eebcjsnb6147237eec2",
      "X-RapidAPI-Host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
    body: body ? body : null,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
