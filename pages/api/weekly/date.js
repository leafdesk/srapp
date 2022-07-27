import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req, res) {
  const {
    query: { pdate },
  } = req;
  const weekly = await client.weekly.findMany({
    where: {
      publishedAt: pdate,
    },
  });
  console.log(weekly);
  res.json({ ok: true, weekly });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
    isPrivate: false,
  })
);
