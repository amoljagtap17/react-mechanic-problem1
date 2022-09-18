import { objectType, extendType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id", { description: "ID of the user" });
    t.string("name", { description: "Name of the user" });
    t.string("email", { description: "Email of the user" });
    t.string("image", { description: "Image of the user" });
    t.nonNull.date("createdAt", { description: "Created Date" });
    t.date("emailVerified", { description: "Email verified Date" });
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("users", {
      type: "User",
      resolve(_parent, _args, { prisma }) {
        return prisma.user.findMany();
      },
    });
  },
});