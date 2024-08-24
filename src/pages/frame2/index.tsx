import { createFrames, Button } from "frames.js/next/pages-router/server";

const frames = createFrames({
  basePath: "/api/frame2",
});

const handleRequest = frames(async () => {
  return {
    image: <span>Frame-2</span>,
    // eslint-disable-next-line react/jsx-key
    buttons: [<Button action="post">Frame-2</Button>],
  };
});

export default handleRequest;
