import { createFrames, Button } from "frames.js/next/pages-router/server";

const frames = createFrames({
  basePath: "/api/frames",
});

const handleRequest = frames(async () => {
  return {
    image: <span>Frame-1</span>,
    // eslint-disable-next-line react/jsx-key
    buttons: [<Button action="post">Frame-1</Button>],
  };
});

export default handleRequest;
