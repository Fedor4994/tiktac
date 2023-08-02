import { Video } from "../../types/video";

type FeedProps = {
  feed: Video[];
};

const Feed = ({ feed }: FeedProps) => {
  return (
    <ul>
      {feed.map((video) => (
        <li>
          {video.title} + {video.play}
        </li>
      ))}
    </ul>
  );
};

export default Feed;
