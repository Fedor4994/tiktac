import Feed from "../components/Feed/Feed";
import { useFeed } from "../hooks/useFeed";
import { Video } from "../types/video";

const HomePage = () => {
  // const { data: feed } = useFeed();

  const feed: Video[] = [
    {
      title: "bebra",
      play: "https://v16m-default.akamaized.net/7255b2942d989434cc22dc719bf6f949/64c4058f/video/tos/useast2a/tos-useast2a-pve-0037-aiso/okQcNjEICe26PesfQcznNggIeOGbASznrIHlD3/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4000&bt=2000&cs=0&ds=6&ft=iJOG.y7oZzv0PD1p5KZXg9wpdwMrBEeC~&mime_type=video_mp4&qs=0&rc=MzM8ZzRmMzpnNTY2aDs6OkBpMzpxdjs6Zm5xazMzZjczM0AyYjY2YS4tNl8xLTI2LzZhYSM0YGpgcjRnNHFgLS1kMWNzcw%3D%3D&l=202307281214235E3C6C231AAEB48D0605&btag=e00090000",
    },
  ];

  return (
    <div>
      <Feed feed={feed} />
    </div>
  );
};

export default HomePage;
