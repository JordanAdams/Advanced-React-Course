import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import {
  statelessSessions,
  withItemData,
} from "@keystone-next/keystone/session";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import { insertSeedData } from "./seed-data";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
      onConnect: async (keystone) => {
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      User,
      Product,
      ProductImage,
    }),
    ui: {
      // TODO: change this for roles
      isAccessAllowed: ({ session }) => {
        if (!session) {
          return false;
        }

        return !!session.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: "id",
    }),
  })
);
